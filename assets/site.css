/* ============================================================
   MONUMENT PROPERTY DEVELOPMENTS — shared stylesheet
   Aesthetic: dark & luxurious · graphite + burnt orange
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

:root{
  --bg:#15171a;
  --bg-2:#1a1d21;
  --bg-3:#212429;
  --bg-card:#1c1f23;
  --line:rgba(255,255,255,.09);
  --line-2:rgba(255,255,255,.16);
  --text:#ECEAE5;
  --muted:#9DA1A6;
  --muted-2:#71767c;
  --accent:#EC9C18;
  --accent-hi:#FFB845;
  --accent-deep:#BE7A0F;
  --accent-soft:rgba(236,156,24,.13);
  --serif:'Cormorant Garamond',Georgia,serif;
  --sans:'Hanken Grotesk',system-ui,-apple-system,sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,monospace;
  --container:1240px;
  --pad:clamp(20px,5vw,64px);
  --ease:cubic-bezier(.22,.61,.36,1);
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--bg);
  color:var(--text);
  font-family:var(--sans);
  font-size:17px;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
  overflow-x:clip;
}
a{color:inherit;text-decoration:none}
img{max-width:100%;display:block}
::selection{background:var(--accent);color:#15171a}

.container{max-width:var(--container);margin:0 auto;padding-left:var(--pad);padding-right:var(--pad)}
.section{padding:clamp(72px,11vw,150px) 0}
.section--tight{padding:clamp(48px,7vw,90px) 0}

/* ---- type ---- */
h1,h2,h3,h4{margin:0;font-weight:500;line-height:1.04;letter-spacing:-.01em}
.display{font-family:var(--serif);font-weight:500}
h1{font-family:var(--serif);font-weight:500;font-size:clamp(3rem,7vw,6rem)}
h2{font-family:var(--serif);font-weight:500;font-size:clamp(2.2rem,4.4vw,3.6rem)}
h3{font-family:var(--serif);font-weight:500;font-size:clamp(1.5rem,2.4vw,2.1rem)}
p{margin:0 0 1.1em;text-wrap:pretty}
.lead{font-size:clamp(1.15rem,1.7vw,1.45rem);line-height:1.55;color:#D6D4CE}
em,.it{font-style:italic}
.serif-it{font-family:var(--serif);font-style:italic;font-weight:500}

.kicker{
  font-family:var(--mono);
  font-size:.72rem;
  letter-spacing:.32em;
  text-transform:uppercase;
  color:var(--accent);
  display:inline-flex;align-items:center;gap:.7em;
  margin:0 0 1.4em;
}
.kicker::before{content:"";width:26px;height:1px;background:var(--accent);opacity:.7;display:inline-block}
.kicker--muted{color:var(--muted-2)}
.kicker--muted::before{background:var(--muted-2)}

.eyebrow{font-family:var(--mono);font-size:.7rem;letter-spacing:.28em;text-transform:uppercase;color:var(--muted-2)}

/* ---- buttons ---- */
.btn{
  --bh:#fff;
  display:inline-flex;align-items:center;gap:.7em;
  font-family:var(--sans);font-weight:600;font-size:.84rem;
  letter-spacing:.04em;
  padding:1.05em 1.7em;
  border:1px solid transparent;border-radius:2px;
  cursor:pointer;transition:.35s var(--ease);
  position:relative;white-space:nowrap;
}
.btn .arr{transition:transform .35s var(--ease)}
.btn:hover .arr{transform:translateX(4px)}
.btn--primary{background:var(--accent);color:#171410;font-weight:700}
.btn--primary:hover{background:var(--accent-hi)}
.btn--ghost{background:transparent;color:var(--text);border-color:var(--line-2)}
.btn--ghost:hover{border-color:var(--accent);color:#fff}
.btn--light{background:var(--text);color:#15171a}
.btn--light:hover{background:#fff}
.btn--block{width:100%;justify-content:center}

.textlink{font-family:var(--mono);font-size:.78rem;letter-spacing:.06em;color:var(--text);display:inline-flex;align-items:center;gap:.6em;border-bottom:1px solid var(--line-2);padding-bottom:.35em;transition:.3s var(--ease)}
.textlink .arr{transition:transform .3s var(--ease)}
.textlink:hover{color:var(--accent);border-color:var(--accent)}
.textlink:hover .arr{transform:translateX(4px)}

/* ---- nav ---- */
.nav{position:fixed;top:0;left:0;right:0;z-index:100;transition:.4s var(--ease)}
.nav__inner{
  max-width:var(--container);margin:0 auto;
  padding:22px var(--pad);
  display:flex;align-items:center;justify-content:space-between;
  transition:padding .4s var(--ease);
}
.nav.scrolled{background:rgba(18,20,23,.82);backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
.nav.scrolled .nav__inner{padding-top:14px;padding-bottom:14px}

.brand{display:flex;flex-direction:column;line-height:1;gap:.34em}
.brand__mark{display:flex;align-items:center;gap:.55em}
.brand__icon{height:32px;width:auto;display:block;flex:0 0 auto}
.brand__name{font-family:var(--serif);font-size:1.5rem;font-weight:600;letter-spacing:.14em;text-transform:uppercase}
.brand__sub{font-family:var(--mono);font-size:.56rem;letter-spacing:.42em;text-transform:uppercase;color:var(--muted);padding-left:2.5em}

.nav__links{display:flex;align-items:center;gap:clamp(20px,2.6vw,40px)}
.nav__link{font-size:.82rem;font-weight:500;letter-spacing:.02em;color:var(--muted);position:relative;padding:.4em 0;transition:color .3s}
.nav__link::after{content:"";position:absolute;left:0;bottom:-2px;width:0;height:1px;background:var(--accent);transition:width .35s var(--ease)}
.nav__link:hover,.nav__link.active{color:var(--text)}
.nav__link.active::after,.nav__link:hover::after{width:100%}
.nav__cta{margin-left:8px}
.nav__link--play{color:var(--accent);display:inline-flex;align-items:center;gap:.5em}
.nav__link--play .pdot{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 0 rgba(236,156,24,.5);animation:pulse 2.4s infinite}

.nav__burger{display:none;flex-direction:column;gap:5px;background:none;border:0;cursor:pointer;padding:8px;z-index:120}
.nav__burger span{width:26px;height:1.5px;background:var(--text);transition:.35s var(--ease)}
.nav.open .nav__burger span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.nav.open .nav__burger span:nth-child(2){opacity:0}
.nav.open .nav__burger span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}

.mobile-menu{position:fixed;inset:0;background:var(--bg);z-index:110;display:flex;flex-direction:column;justify-content:center;padding:0 var(--pad);
  opacity:0;visibility:hidden;transition:.45s var(--ease)}
.nav.open + .mobile-menu,.mobile-menu.show{opacity:1;visibility:visible}
.mobile-menu a{font-family:var(--serif);font-size:clamp(2rem,9vw,3.2rem);font-weight:500;color:var(--text);padding:.18em 0;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center}
.mobile-menu a .n{font-family:var(--mono);font-size:.8rem;color:var(--muted-2)}
.mobile-menu .mm-cta{margin-top:2rem;border:0}

/* ---- hero ---- */
.hero{position:relative;min-height:100svh;display:flex;align-items:flex-end;overflow:hidden}
.hero__bg{position:absolute;inset:0;z-index:0}
.hero__grad{position:absolute;inset:0;z-index:1;background:
  linear-gradient(to top,var(--bg) 2%,rgba(21,23,26,.5) 38%,rgba(21,23,26,.72) 100%),
  radial-gradient(120% 80% at 80% 0%,rgba(226,118,46,.10),transparent 55%)}
.hero__inner{position:relative;z-index:2;width:100%;padding-bottom:clamp(40px,7vh,104px);padding-top:120px}
.hero h1{max-width:20ch;font-size:clamp(2.7rem,6.3vw,5.3rem);margin-bottom:.34em}
.hero__sub{max-width:46ch;color:#CFCDC7;margin-bottom:2.4em}
.hero__cta{display:flex;gap:14px;flex-wrap:wrap}
.hero__meta{position:absolute;right:var(--pad);bottom:clamp(48px,8vh,110px);z-index:2;text-align:right;display:flex;flex-direction:column;gap:.5em}
.scroll-cue{position:absolute;left:var(--pad);bottom:26px;z-index:2;font-family:var(--mono);font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;color:var(--muted-2);display:flex;align-items:center;gap:.8em}
.scroll-cue .line{width:1px;height:34px;background:linear-gradient(var(--accent),transparent);display:block}

/* ---- hero game ribbon ---- */
.hero-ribbon{position:absolute;top:84px;left:0;right:0;z-index:3;display:block;
  background:linear-gradient(90deg,rgba(236,156,24,.16),rgba(236,156,24,.07) 60%,rgba(236,156,24,.16));
  border-top:1px solid rgba(236,156,24,.30);border-bottom:1px solid rgba(236,156,24,.30);
  -webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:background .3s var(--ease)}
.hero-ribbon:hover{background:linear-gradient(90deg,rgba(236,156,24,.26),rgba(236,156,24,.12) 60%,rgba(236,156,24,.26))}
.hero-ribbon__inner{max-width:var(--container);margin:0 auto;display:flex;align-items:center;justify-content:center;gap:1.3em;padding:13px var(--pad)}
.hr-tag{display:inline-flex;align-items:center;gap:.55em;font-family:var(--mono);font-size:.62rem;letter-spacing:.22em;text-transform:uppercase;color:var(--accent);white-space:nowrap}
.hr-tag .pdot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 0 rgba(236,156,24,.5);animation:pulse 2.2s infinite}
.hr-text{font-family:var(--sans);font-size:.94rem;color:var(--text);letter-spacing:.01em}
.hr-text strong{color:var(--accent-hi);font-weight:700}
.hr-cta{font-family:var(--mono);font-size:.72rem;letter-spacing:.08em;color:var(--text);display:inline-flex;align-items:center;gap:.5em;white-space:nowrap;border-bottom:1px solid var(--line-2);padding-bottom:2px}
.hr-cta .arr{transition:transform .3s var(--ease)}
.hero-ribbon:hover .hr-cta .arr{transform:translateX(4px)}
@media(max-width:760px){.hr-text{display:none}.hero-ribbon__inner{gap:1em}.hero-ribbon{top:74px}}

/* ---- image placeholders ---- */
.ph{position:relative;overflow:hidden;background:var(--bg-3);
  background-image:repeating-linear-gradient(135deg,rgba(255,255,255,.025) 0 2px,transparent 2px 11px);
  border:1px solid var(--line);display:flex;align-items:flex-end}
.ph::after{content:attr(data-label);position:absolute;top:14px;left:14px;font-family:var(--mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2);background:rgba(0,0,0,.35);padding:.4em .7em;border:1px solid var(--line)}
.ph__cap{position:relative;z-index:1;padding:18px 20px;font-family:var(--mono);font-size:.7rem;letter-spacing:.1em;color:var(--muted);text-transform:uppercase}
.ph__icon{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.05)}
.ph__icon svg{width:64px;height:64px}

/* ---- grid helpers ---- */
.grid{display:grid;gap:clamp(16px,2vw,28px)}
.g-2{grid-template-columns:repeat(2,1fr)}
.g-3{grid-template-columns:repeat(3,1fr)}
.g-4{grid-template-columns:repeat(4,1fr)}
.split{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,6vw,90px);align-items:center}

/* ---- offer / feature cards ---- */
.card{background:var(--bg-card);border:1px solid var(--line);padding:clamp(28px,3vw,42px);transition:.4s var(--ease);position:relative}
.card:hover{border-color:var(--line-2);transform:translateY(-4px)}
.card__no{font-family:var(--mono);font-size:.75rem;color:var(--accent);letter-spacing:.2em;margin-bottom:1.8em;display:block}
.card h3{margin-bottom:.5em}
.card p{color:var(--muted);font-size:.97rem;margin:0}
.card--feature{padding:clamp(26px,2.5vw,36px)}
.card--feature h3{font-size:1.25rem;font-family:var(--sans);font-weight:600;letter-spacing:-.01em}

.offer{border-top:1px solid var(--line);padding:clamp(34px,4vw,52px) 0;display:grid;grid-template-columns:auto 1fr auto;gap:clamp(20px,4vw,60px);align-items:start;transition:.4s var(--ease)}
.offer:last-child{border-bottom:1px solid var(--line)}
.offer__no{font-family:var(--mono);font-size:.8rem;color:var(--accent);letter-spacing:.1em;padding-top:.5em}
.offer h3{font-size:clamp(1.6rem,2.6vw,2.4rem)}
.offer__body{max-width:42ch;color:var(--muted);margin:0}
.offer:hover{padding-left:14px}

/* ---- stats ---- */
.stats{display:grid;grid-template-columns:repeat(4,1fr)}
.stat{padding:clamp(28px,3vw,44px) clamp(20px,2vw,34px);border-left:1px solid var(--line)}
.stat:first-child{border-left:0}
.stat__num{font-family:var(--serif);font-size:clamp(3rem,6vw,5rem);font-weight:500;line-height:1;color:var(--text)}
.stat__num .suffix{color:var(--accent)}
.stat__label{font-family:var(--mono);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-top:1em}

/* ---- band / cta ---- */
.band{position:relative;overflow:hidden;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.cta-block{text-align:center;max-width:62ch;margin:0 auto}
.cta-block h2{margin-bottom:.4em}
.cta-block p{color:var(--muted);margin-bottom:2.2em}

.rule{height:1px;background:var(--line);border:0;margin:0}

/* ---- footer ---- */
.footer{background:#101214;border-top:1px solid var(--line);padding:clamp(60px,8vw,96px) 0 40px}
.footer__top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:clamp(28px,4vw,56px)}
.footer__col h4{font-family:var(--mono);font-size:.68rem;letter-spacing:.24em;text-transform:uppercase;color:var(--muted-2);font-weight:400;margin-bottom:1.4em}
.footer__col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.85em}
.footer__col a{color:var(--muted);font-size:.92rem;transition:color .3s}
.footer__col a:hover{color:var(--accent)}
.footer__brandsub{color:var(--muted);font-size:.92rem;max-width:34ch;margin-top:1.2em}
.footer__logo-link{display:inline-block}
.footer__logo{width:min(248px,72%);height:auto;display:block}
.footer__col .soon{color:var(--muted-2);display:inline-flex;gap:.7em;align-items:baseline;font-size:.92rem;cursor:default}
.footer__col .soon em{font-family:var(--mono);font-style:normal;font-size:.58rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);border:1px solid var(--line-2);padding:.2em .55em;border-radius:2px}
.footer__bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;margin-top:clamp(48px,6vw,80px);padding-top:28px;border-top:1px solid var(--line);font-family:var(--mono);font-size:.7rem;letter-spacing:.06em;color:var(--muted-2)}
.footer__bottom a{color:var(--muted-2)}
.footer__bottom a:hover{color:var(--accent)}

/* ---- reveal ---- */
.js .reveal{opacity:0;transform:translateY(26px);transition:opacity 1s var(--ease),transform 1s var(--ease)}
.js .reveal.in{opacity:1;transform:none}
.js .reveal[data-d="1"]{transition-delay:.08s}
.js .reveal[data-d="2"]{transition-delay:.16s}
.js .reveal[data-d="3"]{transition-delay:.24s}
.js .reveal[data-d="4"]{transition-delay:.32s}
@media (prefers-reduced-motion:reduce){
  .js .reveal{opacity:1;transform:none;transition:none}
  html{scroll-behavior:auto}
}

/* ---- page header (inner pages) ---- */
.pagehead{padding:clamp(150px,18vh,220px) 0 clamp(48px,7vw,90px);position:relative;border-bottom:1px solid var(--line)}
.pagehead h1{font-size:clamp(2.8rem,6.5vw,5.2rem);max-width:16ch}
.pagehead__sub{color:var(--muted);max-width:52ch;margin-top:1.4em;font-size:1.1rem}
.pagehead__index{position:absolute;top:clamp(130px,16vh,190px);right:var(--pad);font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;color:var(--muted-2)}

/* ---- forms ---- */
.form{display:grid;gap:22px}
.field{display:flex;flex-direction:column;gap:.6em}
.field label{font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.field label .req{color:var(--accent)}
.input,.select,.textarea{
  width:100%;background:var(--bg-2);border:1px solid var(--line-2);
  color:var(--text);font-family:var(--sans);font-size:1rem;
  padding:1em 1.1em;border-radius:2px;transition:.3s var(--ease);
}
.input:focus,.select:focus,.textarea:focus{outline:none;border-color:var(--accent);background:var(--bg-3)}
.input::placeholder,.textarea::placeholder{color:var(--muted-2)}
.textarea{resize:vertical;min-height:130px}
.select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239DA1A6' stroke-width='1.4' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1.1em center}
.field.invalid .input,.field.invalid .select,.field.invalid .textarea{border-color:#d9534f}
.field .err{font-family:var(--mono);font-size:.66rem;letter-spacing:.05em;color:#e0867f;height:0;overflow:hidden;transition:.3s}
.field.invalid .err{height:auto;margin-top:-.2em}
.form__success{text-align:center;padding:clamp(40px,6vw,70px) 24px;border:1px solid var(--accent);background:var(--accent-soft)}
.form__success .tick{width:54px;height:54px;border-radius:50%;border:1.5px solid var(--accent);display:flex;align-items:center;justify-content:center;margin:0 auto 1.4em;color:var(--accent)}

.chips{display:flex;gap:10px;flex-wrap:wrap}
.chip{font-family:var(--mono);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;padding:.7em 1.1em;border:1px solid var(--line-2);border-radius:2px;cursor:pointer;color:var(--muted);transition:.3s var(--ease);user-select:none}
.chip:hover{border-color:var(--accent);color:var(--text)}
.chip.sel{background:var(--accent);border-color:var(--accent);color:#fff}

/* ---- info rows ---- */
.inforow{display:flex;justify-content:space-between;gap:24px;padding:1.3em 0;border-top:1px solid var(--line);align-items:baseline}
.inforow:last-child{border-bottom:1px solid var(--line)}
.inforow dt{font-family:var(--mono);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2)}
.inforow dd{margin:0;text-align:right}

/* ---- project cards ---- */
.proj{position:relative;overflow:hidden;border:1px solid var(--line);background:var(--bg-card);transition:.45s var(--ease)}
.proj:hover{border-color:var(--line-2);transform:translateY(-5px)}
.proj__img{aspect-ratio:4/3;position:relative}
.proj__body{padding:24px clamp(20px,2vw,28px) 28px;display:flex;flex-direction:column;gap:.5em}
.proj__tag{font-family:var(--mono);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)}
.proj h3{font-size:1.5rem}
.proj__meta{font-family:var(--mono);font-size:.72rem;letter-spacing:.08em;color:var(--muted-2);display:flex;gap:1.4em;margin-top:.3em}
.proj__status{position:absolute;top:14px;right:14px;font-family:var(--mono);font-size:.6rem;letter-spacing:.14em;text-transform:uppercase;padding:.45em .8em;background:rgba(0,0,0,.5);border:1px solid var(--line-2);color:var(--text)}
.proj__status.done{color:var(--accent);border-color:var(--accent)}

.filterbar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:clamp(32px,4vw,52px)}

/* ---- misc ---- */
/* ---- home game teaser ---- */
.game-teaser{position:relative;overflow:hidden;border-top:1px solid var(--line);background:
  radial-gradient(120% 120% at 85% 0%,rgba(236,156,24,.10),transparent 55%),var(--bg-2)}
.game-teaser__inner{display:grid;grid-template-columns:1.25fr .75fr;gap:clamp(32px,6vw,80px);align-items:center}
.game-teaser .badge-fun{display:inline-flex;align-items:center;gap:.6em;font-family:var(--mono);font-size:.64rem;letter-spacing:.24em;text-transform:uppercase;color:var(--accent);border:1px solid var(--line-2);border-radius:100px;padding:.5em 1em;margin-bottom:1.5em}
.game-teaser .badge-fun .pdot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 0 rgba(236,156,24,.5);animation:pulse 2.2s infinite}
.game-teaser h2{margin-bottom:.45em}
.game-teaser p{color:var(--muted);max-width:44ch;margin-bottom:2em}
.teaser-tower{display:flex;flex-direction:column;align-items:center;gap:5px;padding:20px;cursor:pointer;perspective:600px}
.teaser-tower__cap{font-family:var(--mono);font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2);margin-top:14px;transition:color .3s}
.tt-floor{height:22px;border:1px solid rgba(255,255,255,.10);border-radius:2px;
  background:
    repeating-linear-gradient(90deg, rgba(236,156,24,.75) 0 4px, transparent 4px 12px) center/auto 9px no-repeat,
    linear-gradient(hsl(205,13%,22%),hsl(205,15%,15%));
  transition:transform .5s var(--ease);will-change:transform}
.tt-floor:nth-child(1){width:54%}
.tt-floor:nth-child(2){width:66%}
.tt-floor:nth-child(3){width:60%}
.tt-floor:nth-child(4){width:74%}
.tt-floor:nth-child(5){width:68%}
.tt-floor:nth-child(6){width:82%}
.tt-floor:nth-child(odd){transform:translateX(-9px)}
.tt-floor:nth-child(even){transform:translateX(8px)}
.tt-base{width:100%!important;background:
    repeating-linear-gradient(90deg, rgba(236,156,24,.85) 0 4px, transparent 4px 12px) center/auto 9px no-repeat,
    linear-gradient(hsl(205,14%,24%),hsl(205,16%,16%))}
.teaser-tower:hover .tt-floor{transform:translateX(0)}
.teaser-tower:hover .teaser-tower__cap{color:var(--accent)}

.maxw-prose{max-width:60ch}
/* ---- legal / prose pages ---- */
.legal{max-width:760px;margin:0 auto}
.legal__updated{font-family:var(--mono);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-2);margin-bottom:clamp(36px,5vw,60px);padding-bottom:1.4em;border-bottom:1px solid var(--line)}
.legal h2{font-size:clamp(1.4rem,2.4vw,1.9rem);margin:clamp(34px,4vw,52px) 0 .7em}
.legal h2:first-of-type{margin-top:0}
.legal h3{font-family:var(--sans);font-weight:600;font-size:1.1rem;letter-spacing:-.01em;margin:1.8em 0 .5em}
.legal p,.legal li{color:var(--muted);line-height:1.7}
.legal a{color:var(--accent);border-bottom:1px solid var(--line-2);transition:border-color .3s}
.legal a:hover{border-color:var(--accent)}
.legal ul{margin:0 0 1.2em;padding-left:1.2em;display:flex;flex-direction:column;gap:.5em}
.legal li::marker{color:var(--accent)}
.legal strong{color:var(--text);font-weight:600}
.legal .lead{color:#D6D4CE}
.muted{color:var(--muted)}
.center{text-align:center}
.mt-s{margin-top:1.2em}.mt-m{margin-top:2em}.mt-l{margin-top:3.4em}
.accent{color:var(--accent)}
.divider-num{font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;color:var(--muted-2)}

/* ---- WhatsApp floating button ---- */
.wa-fab{position:fixed;right:clamp(16px,3vw,28px);bottom:clamp(16px,3vw,28px);z-index:95;display:flex;align-items:center;gap:.7em;background:#1d2823;border:1px solid rgba(255,255,255,.14);color:var(--text);padding:.8em 1.15em .8em .95em;border-radius:100px;box-shadow:0 12px 34px rgba(0,0,0,.45);transition:.35s var(--ease);font-family:var(--sans);font-weight:600;font-size:.82rem;cursor:pointer}
.wa-fab:hover{background:#243228;transform:translateY(-2px);border-color:rgba(255,255,255,.22)}
.wa-fab svg{width:23px;height:23px;flex:0 0 auto;color:#4ac35a}
.wa-fab__label{white-space:nowrap}
@media(max-width:560px){.wa-fab__label{display:none}.wa-fab{padding:.9em;gap:0}}

/* ---- site qualifier ---- */
.qual{background:var(--bg-2);border:1px solid var(--line);border-radius:3px;padding:clamp(26px,3.4vw,48px);max-width:740px;margin:0 auto;min-height:420px;display:flex;flex-direction:column}
.qual__head{display:flex;align-items:center;gap:18px;margin-bottom:clamp(24px,3vw,38px)}
.qual__step{font-family:var(--mono);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);white-space:nowrap}
.qual__step b{color:var(--accent);font-weight:500}
.qual__bar{flex:1;height:2px;background:var(--line);position:relative;overflow:hidden;border-radius:2px}
.qual__bar span{position:absolute;inset:0 auto 0 0;background:var(--accent);width:20%;transition:width .5s var(--ease)}
.qual__stage{flex:1;display:flex;flex-direction:column;justify-content:center}
.qual__q{font-family:var(--serif);font-size:clamp(1.55rem,3vw,2.3rem);font-weight:500;line-height:1.08;margin-bottom:.34em}
.qual__help{color:var(--muted);font-size:.95rem;margin-bottom:1.5em}
.qual__opts{display:flex;flex-direction:column;gap:10px}
.qopt{text-align:left;background:var(--bg-3);border:1px solid var(--line-2);color:var(--text);font-family:var(--sans);font-size:1rem;padding:1.02em 1.2em;border-radius:2px;cursor:pointer;transition:.22s var(--ease);display:flex;justify-content:space-between;align-items:center;gap:1em}
.qopt:hover,.qopt.sel{border-color:var(--accent);background:rgba(236,156,24,.09)}
.qopt .qarr{opacity:0;color:var(--accent);transition:.22s var(--ease)}
.qopt:hover .qarr,.qopt.sel .qarr{opacity:1;transform:translateX(3px)}
.qual__textrow{display:flex;gap:12px;flex-wrap:wrap}
.qual__textrow .input{flex:1;min-width:200px}
.qual__nav{display:flex;justify-content:space-between;align-items:center;margin-top:1.7em}
.qual__back{background:none;border:0;color:var(--muted);font-family:var(--mono);font-size:.7rem;letter-spacing:.12em;cursor:pointer;text-transform:uppercase;padding:.4em 0;transition:color .25s}
.qual__back:hover{color:var(--text)}
.qual__back[disabled]{opacity:.25;cursor:default;pointer-events:none}
/* result */
.qual__result{text-align:center;animation:qfade .6s var(--ease) both}
@keyframes qfade{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
.qual__badge{display:inline-flex;align-items:center;gap:.6em;font-family:var(--mono);font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);border:1px solid var(--accent);border-radius:100px;padding:.5em 1em;margin-bottom:1.3em}
.qual__badge .dot{width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 0 rgba(236,156,24,.5);animation:pulse 2s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(236,156,24,.5)}70%{box-shadow:0 0 0 8px rgba(236,156,24,0)}100%{box-shadow:0 0 0 0 rgba(236,156,24,0)}}
.qual__result h3{font-family:var(--serif);font-size:clamp(1.8rem,3.6vw,2.7rem);font-weight:500;line-height:1.08;margin-bottom:.45em;max-width:18ch;margin-inline:auto}
.qual__result p{color:var(--muted);max-width:50ch;margin:0 auto 1.6em}
.qual__sum{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin:0 0 1.9em}
.qsum{font-family:var(--mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);background:var(--bg-3);border:1px solid var(--line);padding:.55em .85em;border-radius:2px}
.qual__rcta{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
/* inline send (qualifier) */
.qual__send{margin:1.7em 0 .4em;text-align:left}
.qual__sendlabel{font-family:var(--mono);font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin:0 0 1em;text-align:center}
.qual__fields{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.qual__send .input{width:100%}
.qerr{font-family:var(--mono);font-size:.66rem;letter-spacing:.04em;color:#e0867f;min-height:1.1em;margin:.2em 0 .8em;text-align:center}
@media(max-width:540px){.qual__fields{grid-template-columns:1fr}}

/* ---- where we build (map) ---- */
.map-wrap{display:grid;grid-template-columns:.82fr 1.18fr;gap:clamp(28px,4vw,64px);align-items:center}
.map-panel{position:relative;aspect-ratio:1/1;background:radial-gradient(120% 120% at 70% 20%,#1f242a,#15181c);border:1px solid var(--line);border-radius:3px;overflow:hidden}
.map-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);background-size:11% 11%}
.map-thames{position:absolute;inset:0;width:100%;height:100%;z-index:1}
.pin{position:absolute;transform:translate(-50%,-50%);width:15px;height:15px;border-radius:50%;border:2px solid var(--accent);background:var(--bg);cursor:pointer;transition:.25s var(--ease);z-index:3;padding:0}
.pin.done{background:var(--accent)}
.pin:hover,.pin.active{box-shadow:0 0 0 7px rgba(236,156,24,.16);transform:translate(-50%,-50%) scale(1.25)}
.pin__label{position:absolute;left:50%;top:calc(100% + 7px);transform:translateX(-50%);font-family:var(--mono);font-size:.58rem;letter-spacing:.04em;color:var(--muted);white-space:nowrap;pointer-events:none;opacity:0;transition:.2s}
.pin:hover .pin__label,.pin.active .pin__label{opacity:1;color:var(--text)}
.map-tag{position:absolute;z-index:2;font-family:var(--mono);font-size:.56rem;letter-spacing:.2em;text-transform:uppercase;color:var(--muted-2)}
.map-detail{margin-top:1.8em;border-top:1px solid var(--line);padding-top:1.4em;min-height:96px}
.map-detail__tag{font-family:var(--mono);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)}
.map-detail h3{font-size:1.6rem;margin:.3em 0 .35em}
.map-detail__meta{font-family:var(--mono);font-size:.72rem;letter-spacing:.08em;color:var(--muted-2);display:flex;gap:1.4em;flex-wrap:wrap}
.map-detail__hint{color:var(--muted);font-size:.95rem}
.map-legend{display:flex;gap:1.4em;flex-wrap:wrap;margin-top:1.4em;font-family:var(--mono);font-size:.64rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.map-legend i{width:11px;height:11px;border-radius:50%;border:2px solid var(--accent);display:inline-block;margin-right:.5em;vertical-align:middle}
.map-legend i.done{background:var(--accent)}
.acquiring{display:flex;flex-wrap:wrap;gap:8px;margin-top:1.3em}
.acquiring .pill{font-family:var(--mono);font-size:.64rem;letter-spacing:.06em;text-transform:uppercase;color:var(--accent);border:1px solid var(--line-2);border-radius:100px;padding:.5em .9em}

/* ---- referral ---- */
.refer{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,80px);align-items:center}
.refer__steps{display:flex;flex-direction:column;gap:2px}
.refstep{display:grid;grid-template-columns:auto 1fr;gap:1.2em;padding:1.4em 0;border-top:1px solid var(--line);align-items:start}
.refstep:last-child{border-bottom:1px solid var(--line)}
.refstep__n{font-family:var(--mono);font-size:.72rem;color:var(--accent);letter-spacing:.1em;padding-top:.2em}
.refstep h4{font-family:var(--sans);font-size:1.15rem;font-weight:600;margin:0 0 .25em}
.refstep p{color:var(--muted);font-size:.95rem;margin:0}
.refer__fee{font-family:var(--serif);font-size:clamp(3.4rem,7vw,5.6rem);font-weight:500;line-height:1;color:var(--accent)}

/* ---- responsive ---- */
@media (max-width:1000px){
  .footer__top{grid-template-columns:1fr 1fr}
  .footer__col--brand{grid-column:1/-1}
}
@media (max-width:860px){
  .nav__links{display:none}
  .nav__burger{display:flex}
  .g-3,.g-4{grid-template-columns:1fr 1fr}
  .split{grid-template-columns:1fr;gap:36px}
  .stats{grid-template-columns:1fr 1fr}
  .stat{border-left:0;border-top:1px solid var(--line)}
  .stat:nth-child(odd){border-left:0}
  .stat:nth-child(even){border-left:1px solid var(--line)}
  .offer{grid-template-columns:auto 1fr;gap:20px}
  .offer__body{grid-column:2}
  .hero__meta{display:none}
  .map-wrap{grid-template-columns:1fr;gap:32px}
  .refer{grid-template-columns:1fr;gap:32px}
  .game-teaser__inner{grid-template-columns:1fr;gap:36px}
  .teaser-tower{max-width:280px;margin:0 auto}
}
@media (max-width:560px){
  body{font-size:16px}
  .g-2,.g-3,.g-4{grid-template-columns:1fr}
  .stats{grid-template-columns:1fr 1fr}
  .footer__top{grid-template-columns:1fr}
  .proj-grid{grid-template-columns:1fr!important}
}
