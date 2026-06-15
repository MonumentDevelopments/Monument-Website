/* ============================================================
   BUILD THE MONUMENT, a tower-stacking game
   ============================================================ */
(function(){
  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }

  ready(function(){
    var canvas=document.getElementById('game');
    if(!canvas) return;
    var ctx=canvas.getContext('2d');

    /* ---- logical size & DPR ---- */
    var W=460, H=620, DPR=Math.min(window.devicePixelRatio||1, 2);
    canvas.width=W*DPR; canvas.height=H*DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);

    /* ---- constants ---- */
    var BH=34;                 // block (floor) height
    var BASE_W=200;            // starting width
    var GROUND_Y=H-72;         // screen y of base bottom (camera 0)
    var ANCHOR=140;            // keep the live floor near this y once scrolling
    var MAX_SPEED=6.6, BASE_SPEED=2.0, SPEED_INC=0.11;
    var PERFECT_TOL=5;

    /* ---- colours ---- */
    var ACCENT='#EC9C18', ACCENT_HI='#FFB845';

    /* ---- state ---- */
    var state='start';         // start | playing | over
    var blocks=[];             // placed floors: {x,width,windows,hue}
    var moving=null;           // live floor
    var height=0;              // number of placed floors (incl. base)
    var floors=0;              // score = height-1
    var speed=BASE_SPEED, dir=1;
    var scroll=0, scrollTarget=0;
    var combo=0;
    var debris=[];             // falling offcuts
    var floaters=[];           // floating "+PERFECT" texts
    var flash=0;               // perfect-flash timer on last block
    var shake=0;
    var best=+(localStorage.getItem('monument_tower_best')||0);
    var newRecord=false;
    var muted=localStorage.getItem('monument_tower_muted')==='1';

    /* ---- dom ---- */
    var elFloors=document.getElementById('floors');
    var elBest=document.getElementById('best');
    var ovStart=document.getElementById('ovStart');
    var ovOver=document.getElementById('ovOver');
    var finalFloors=document.getElementById('finalFloors');
    var newBestEl=document.getElementById('newBest');
    var overTitle=document.getElementById('overTitle');
    var soundBtn=document.getElementById('soundBtn');
    var soundIcon=document.getElementById('soundIcon');
    var lbStart=document.getElementById('lbStart');
    var lbOver=document.getElementById('lbOver');
    elBest.textContent=best;

    /* ---- leaderboard (global via Netlify function, local fallback) ---- */
    var LB_API='/api/leaderboard';
    function loadScores(){ try{ return JSON.parse(localStorage.getItem('monument_tower_scores')||'[]'); }catch(e){ return []; } }
    function saveScore(v){
      var arr=loadScores(); arr.push(v);
      arr.sort(function(a,b){return b-a;});
      arr=arr.slice(0,5);
      localStorage.setItem('monument_tower_scores', JSON.stringify(arr));
      return arr;
    }
    function renderBoard(el, scores, meIndex, title){
      if(!el) return;
      var rows='';
      for(var i=0;i<5;i++){
        var has=i<scores.length, me=(meIndex===i);
        rows+='<div class="lb__row'+(has?'':' empty')+(me?' me':'')+'">'
          +'<span class="lb__rank">'+(i+1)+'</span>'
          +'<span class="lb__score">'+(has?scores[i]:'-')+(has?'<span class="lb__unit">floors</span>':'')+(me?'<span class="lb__me">\u25c0 you</span>':'')+'</span>'
          +'</div>';
      }
      el.innerHTML='<div class="lb__title">'+(title||'Top scores')+'</div>'+rows;
    }
    function fetchGlobal(){
      return fetch(LB_API,{cache:'no-store'}).then(function(r){return r.json();}).then(function(d){
        if(d&&Array.isArray(d.scores)) return d.scores; throw 0;
      });
    }
    function submitGlobal(score){
      return fetch(LB_API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({score:score})})
        .then(function(r){return r.json();}).then(function(d){ if(d&&Array.isArray(d.scores)) return d.scores; throw 0; });
    }

    /* ---- audio ---- */
    var actx=null;
    function blip(freq,dur,type,vol){
      if(muted) return;
      try{
        actx=actx||new (window.AudioContext||window.webkitAudioContext)();
        var o=actx.createOscillator(), g=actx.createGain();
        o.type=type||'sine'; o.frequency.value=freq;
        g.gain.value=vol||0.05; o.connect(g); g.connect(actx.destination);
        o.start();
        g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime+(dur||0.08));
        o.stop(actx.currentTime+(dur||0.08));
      }catch(e){}
    }
    function updateSoundIcon(){
      soundIcon.innerHTML = muted
        ? '<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/>'
        : '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>';
    }
    updateSoundIcon();
    soundBtn.addEventListener('click', function(e){
      e.stopPropagation(); muted=!muted;
      localStorage.setItem('monument_tower_muted', muted?'1':'0');
      updateSoundIcon();
    });

    /* ---- helpers ---- */
    function makeWindows(w){
      var cols=Math.max(2, Math.floor(w/24));
      var arr=[];
      for(var c=0;c<cols;c++) arr.push(Math.random()<0.42);
      return arr;
    }
    function newFloor(x,w,level){
      return {x:x, width:w, windows:makeWindows(w), hue:14+(level%6)};
    }

    function reset(){
      blocks=[]; debris=[]; floaters=[];
      var bx=(W-BASE_W)/2;
      blocks.push(newFloor(bx, BASE_W, 0));
      height=1; floors=0; combo=0; flash=0; shake=0;
      speed=BASE_SPEED; scroll=0; scrollTarget=0; newRecord=false;
      spawnMoving(BASE_W);
      elFloors.textContent='0';
    }

    function spawnMoving(w){
      var side=(height%2===0)?1:0;       // alternate entry side
      moving={ x: side? (W-w) : 0, width:w };
      dir = side? -1 : 1;
      speed=Math.min(MAX_SPEED, BASE_SPEED+(height-1)*SPEED_INC);
    }

    function start(){
      reset();
      state='playing';
      ovStart.hidden=true; ovOver.hidden=true;
      blip(523,0.09);
    }

    function gameOver(){
      state='over';
      shake=10;
      blip(160,0.25,'sine',0.06);
      finalFloors.textContent=floors;
      // instant local board, then update with the global one
      var local=loadScores(), meLocal=-1;
      if(floors>0){ local=saveScore(floors); meLocal=local.indexOf(floors); }
      renderBoard(lbOver, local, meLocal, 'Top scores');
      var showGlobal=function(s){ var me=(floors>0)?s.indexOf(floors):-1; renderBoard(lbOver, s, me, 'Global top scores'); };
      if(floors>0) submitGlobal(floors).then(showGlobal).catch(function(){});
      else fetchGlobal().then(showGlobal).catch(function(){});
      if(newRecord){ newBestEl.style.display='block'; overTitle.textContent='New record!'; }
      else { newBestEl.style.display='none'; overTitle.textContent= floors>=20?'Skyscraper!': floors>=10?'Topped out':'Foundations laid'; }
      setTimeout(function(){ ovOver.hidden=false; }, 480);
    }

    function spawnDebris(x,w){
      if(w<=0) return;
      var yTop=GROUND_Y-(height+1)*BH+scroll;
      debris.push({x:x, y:yTop, w:w, vy:-1, vx:(x<W/2?-1:1)*(0.4+Math.random()*0.6), rot:0, va:(Math.random()-0.5)*0.2, life:1});
    }

    function drop(){
      if(state!=='playing') return;
      var top=blocks[height-1], cur=moving;
      var left=Math.max(cur.x, top.x);
      var right=Math.min(cur.x+cur.width, top.x+top.width);
      var overlap=right-left;

      if(overlap<=0){           // total miss
        spawnDebris(cur.x, cur.width);
        floors=Math.max(floors,0);
        gameOver();
        return;
      }

      var perfect=Math.abs(cur.x-top.x)<=PERFECT_TOL;
      var nx, nw;
      if(perfect){
        nx=top.x; nw=top.width; combo++;
        flash=1;
        addFloater((nx+nw/2), GROUND_Y-(height+1)*BH+scroll, combo>1?('PERFECT ×'+combo):'PERFECT');
        blip(680+Math.min(combo,6)*40,0.09,'triangle',0.06);
        shake=Math.min(4, shake+2);
      } else {
        nx=left; nw=overlap; combo=0;
        // offcut on whichever side overhangs
        if(cur.x < top.x) spawnDebris(cur.x, top.x-cur.x);
        else spawnDebris(top.x+top.width, (cur.x+cur.width)-(top.x+top.width));
        blip(300,0.07,'sine',0.05);
      }

      blocks.push(newFloor(nx, nw, height));
      height++; floors=height-1;
      elFloors.textContent=floors;
      if(floors>best){ best=floors; newRecord=true; localStorage.setItem('monument_tower_best', best); elBest.textContent=best; }

      spawnMoving(nw);
    }

    function addFloater(x,y,text){ floaters.push({x:x,y:y,text:text,life:1}); }

    /* ---- input ---- */
    canvas.addEventListener('pointerdown', function(){
      if(state==='start') start();
      else if(state==='playing') drop();
    });
    window.addEventListener('keydown', function(e){
      if(e.code==='Space' || e.key===' '){
        e.preventDefault();
        if(state==='start') start();
        else if(state==='playing') drop();
        else if(state==='over') start();
      }
    });
    document.getElementById('startBtn').addEventListener('click', function(e){ e.stopPropagation(); start(); });
    document.getElementById('againBtn').addEventListener('click', function(e){ e.stopPropagation(); start(); });

    /* ---- update ---- */
    var last=0;
    function update(dtf){
      if(state==='playing' && moving){
        moving.x += dir*speed*dtf;
        if(moving.x<=0){ moving.x=0; dir=1; }
        else if(moving.x+moving.width>=W){ moving.x=W-moving.width; dir=-1; }
        // scroll so the live floor stays near ANCHOR once tall enough
        scrollTarget=Math.max(0, (height+1)*BH + ANCHOR - GROUND_Y);
      }
      scroll += (scrollTarget-scroll)*Math.min(1,0.12*dtf);
      if(flash>0) flash=Math.max(0, flash-0.04*dtf);
      if(shake>0) shake=Math.max(0, shake-0.6*dtf);

      for(var i=debris.length-1;i>=0;i--){
        var d=debris[i];
        d.vy+=0.55*dtf; d.y+=d.vy*dtf; d.x+=d.vx*dtf; d.rot+=d.va*dtf; d.life-=0.012*dtf;
        if(d.y>H+80||d.life<=0) debris.splice(i,1);
      }
      for(var j=floaters.length-1;j>=0;j--){
        var f=floaters[j]; f.y-=0.6*dtf; f.life-=0.018*dtf;
        if(f.life<=0) floaters.splice(j,1);
      }
    }

    /* ---- drawing ---- */
    function roundedBuilding(b, yTop, live, isTop){
      var x=b.x, w=b.width;
      // body gradient
      var g=ctx.createLinearGradient(0,yTop,0,yTop+BH);
      var L=b.hue||16;
      g.addColorStop(0, 'hsl(205,13%,'+(L+5)+'%)');
      g.addColorStop(1, 'hsl(205,15%,'+(L)+'%)');
      ctx.fillStyle=g;
      ctx.fillRect(x, yTop, w, BH);
      // subtle left light / right shade for depth
      ctx.fillStyle='rgba(255,255,255,.05)';
      ctx.fillRect(x, yTop, w, 2);
      ctx.fillStyle='rgba(0,0,0,.18)';
      ctx.fillRect(x, yTop+BH-2, w, 2);
      // windows
      var wins=b.windows||[];
      var cols=wins.length;
      if(cols>0){
        var pad=6, gapTotal=w-pad*2, cw=Math.min(9, (gapTotal/cols)*0.55);
        var step=gapTotal/cols;
        var wy=yTop+BH/2-6, wh=12;
        for(var c=0;c<cols;c++){
          var wx=x+pad+step*c+(step-cw)/2;
          ctx.fillStyle = wins[c] ? 'rgba(236,156,24,.85)' : 'rgba(10,13,17,.65)';
          ctx.fillRect(wx, wy, cw, wh);
          if(wins[c]){ ctx.fillStyle='rgba(255,184,69,.25)'; ctx.fillRect(wx-1, wy-1, cw+2, wh+2); }
        }
      }
      // outline
      ctx.strokeStyle = live ? 'rgba(236,156,24,.55)' : 'rgba(255,255,255,.10)';
      ctx.lineWidth=1;
      ctx.strokeRect(x+0.5, yTop+0.5, w-1, BH-1);
      // perfect flash on the just-placed block
      if(isTop && flash>0){
        ctx.strokeStyle='rgba(255,184,69,'+(flash)+')';
        ctx.lineWidth=2;
        ctx.strokeRect(x+1, yTop+1, w-2, BH-2);
      }
    }

    function render(){
      ctx.save();
      var sx=0, sy=0;
      if(shake>0){ sx=(Math.random()-0.5)*shake; sy=(Math.random()-0.5)*shake; }
      ctx.clearRect(0,0,W,H);
      ctx.translate(sx,sy);

      // sky
      var sky=ctx.createLinearGradient(0,0,0,H);
      sky.addColorStop(0,'#191d22');
      sky.addColorStop(0.55,'#15181c');
      sky.addColorStop(1,'#101316');
      ctx.fillStyle=sky; ctx.fillRect(-10,-10,W+20,H+20);
      // soft amber glow up top
      var gl=ctx.createRadialGradient(W/2,-40,10,W/2,-40,260);
      gl.addColorStop(0,'rgba(236,156,24,.10)');
      gl.addColorStop(1,'rgba(236,156,24,0)');
      ctx.fillStyle=gl; ctx.fillRect(0,0,W,260);

      // best marker line
      if(best>0 && state!=='start'){
        var by=GROUND_Y-(best+1)*BH+scroll;
        if(by>20 && by<H-20){
          ctx.save();
          ctx.setLineDash([5,5]); ctx.strokeStyle='rgba(236,156,24,.5)'; ctx.lineWidth=1;
          ctx.beginPath(); ctx.moveTo(0,by); ctx.lineTo(W,by); ctx.stroke();
          ctx.setLineDash([]);
          ctx.fillStyle='rgba(236,156,24,.85)'; ctx.font='600 9px ui-monospace,monospace';
          ctx.textAlign='right'; ctx.fillText('BEST · '+best, W-8, by-5);
          ctx.restore();
        }
      }

      // ground shadow under base
      var baseYTop=GROUND_Y-BH+scroll;
      ctx.fillStyle='rgba(0,0,0,.35)';
      ctx.fillRect(0, baseYTop+BH, W, 60);

      // placed blocks
      for(var i=0;i<height;i++){
        var yTop=GROUND_Y-(i+1)*BH+scroll;
        if(yTop>H+40 || yTop<-40) continue;
        roundedBuilding(blocks[i], yTop, false, i===height-1);
      }

      // live moving block
      if(state==='playing' && moving){
        var myTop=GROUND_Y-(height+1)*BH+scroll;
        roundedBuilding(moving, myTop, true, false);
        // crane line
        ctx.strokeStyle='rgba(236,156,24,.25)'; ctx.lineWidth=1;
        ctx.beginPath(); ctx.moveTo(moving.x+moving.width/2, 0); ctx.lineTo(moving.x+moving.width/2, myTop); ctx.stroke();
      }

      // debris
      for(var d=0; d<debris.length; d++){
        var p=debris[d];
        ctx.save();
        ctx.globalAlpha=Math.max(0,p.life);
        ctx.translate(p.x+p.w/2, p.y+BH/2); ctx.rotate(p.rot);
        ctx.fillStyle='hsl(205,14%,18%)';
        ctx.fillRect(-p.w/2,-BH/2,p.w,BH);
        ctx.strokeStyle='rgba(236,156,24,.3)'; ctx.lineWidth=1;
        ctx.strokeRect(-p.w/2,-BH/2,p.w,BH);
        ctx.restore();
      }

      // floaters
      for(var f=0; f<floaters.length; f++){
        var fl=floaters[f];
        ctx.save();
        ctx.globalAlpha=Math.max(0,fl.life);
        ctx.fillStyle=ACCENT_HI;
        ctx.font='700 13px ui-monospace,monospace';
        ctx.textAlign='center';
        ctx.fillText(fl.text, fl.x, fl.y);
        ctx.restore();
      }

      ctx.restore();
    }

    /* ---- loop ---- */
    function frame(t){
      var dt = last? (t-last) : 16.7; last=t;
      var dtf=Math.min(2.4, dt/16.67);
      update(dtf); render();
      requestAnimationFrame(frame);
    }

    // idle demo state: show a base + a slowly moving block behind the start overlay
    reset(); state='start';
    renderBoard(lbStart, loadScores(), -1, 'Top scores');
    fetchGlobal().then(function(s){ renderBoard(lbStart, s, -1, 'Global top scores'); }).catch(function(){});
    // debug hook for verification / smart auto-play
    window.__mon={ get state(){return state;}, get moving(){return moving;}, get top(){return blocks[height-1];}, get floors(){return floors;}, drop:drop, start:start };
    // animate the live block on the start screen for life
    (function startIdle(){
      // keep moving during 'start' too for visual interest
      var oldUpdate=update;
    })();
    requestAnimationFrame(frame);

    // on start screen, gently move the block so it looks alive
    setInterval(function(){
      if(state==='start' && moving){
        moving.x += dir*1.4;
        if(moving.x<=0){moving.x=0;dir=1;}
        else if(moving.x+moving.width>=W){moving.x=W-moving.width;dir=-1;}
      }
    }, 16);
  });
})();
