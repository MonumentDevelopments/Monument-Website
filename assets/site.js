/* MONUMENT — shared interactions */
(function(){
  document.documentElement.classList.add('js');

  function ready(fn){ if(document.readyState!=='loading') fn(); else document.addEventListener('DOMContentLoaded',fn); }

  ready(function(){
    /* nav scroll state */
    var nav=document.querySelector('.nav');
    function onScroll(){ if(!nav) return; nav.classList.toggle('scrolled', window.scrollY>40); }
    onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

    /* mobile menu */
    var burger=document.querySelector('.nav__burger');
    var menu=document.querySelector('.mobile-menu');
    if(burger&&nav){
      burger.addEventListener('click',function(){
        var open=nav.classList.toggle('open');
        if(menu) menu.classList.toggle('show',open);
        document.body.style.overflow=open?'hidden':'';
      });
      if(menu) menu.querySelectorAll('a').forEach(function(a){
        a.addEventListener('click',function(){ nav.classList.remove('open'); menu.classList.remove('show'); document.body.style.overflow=''; });
      });
    }

    /* scroll reveal */
    var revs=[].slice.call(document.querySelectorAll('.reveal'));
    if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches){
      var io=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
      },{threshold:.12,rootMargin:'0px 0px -8% 0px'});
      revs.forEach(function(el){ io.observe(el); });
    } else { revs.forEach(function(el){ el.classList.add('in'); }); }

    /* animated counters */
    var counters=[].slice.call(document.querySelectorAll('[data-count]'));
    function animate(el){
      var target=parseFloat(el.getAttribute('data-count'));
      var dur=1600, t0=null;
      function step(ts){
        if(!t0) t0=ts;
        var p=Math.min((ts-t0)/dur,1);
        var eased=1-Math.pow(1-p,3);
        el.textContent=Math.round(target*eased).toLocaleString();
        if(p<1) requestAnimationFrame(step);
        else el.textContent=target.toLocaleString();
      }
      requestAnimationFrame(step);
    }
    if('IntersectionObserver' in window){
      var io2=new IntersectionObserver(function(es){
        es.forEach(function(e){ if(e.isIntersecting){ animate(e.target); io2.unobserve(e.target); }});
      },{threshold:.6});
      counters.forEach(function(el){ io2.observe(el); });
    } else { counters.forEach(animate); }

    /* current year */
    document.querySelectorAll('[data-year]').forEach(function(el){ el.textContent=new Date().getFullYear(); });
  });
})();
