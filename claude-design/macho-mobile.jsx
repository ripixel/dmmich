// Macho / Industrial — MOBILE flow (primary viewing mechanism)
// Shared system: Saira Condensed display, IBM Plex Mono data,
// blood red on near-black, sharp clip-path cuts, heavy borders.
// All screens at 390px wide (iPhone Pro logical width).

const MM_CSS = `
.mm { font-family: 'Saira', sans-serif; background: #0a0a0a; color: #f1f1f1; width: 390px; overflow: hidden; position: relative;
  --red: #e0241f; --bg: #0a0a0a; --panel: #141414; --panel2: #1c1c1c; --steel: #8a8a8a; --line: #262626; --muted: #6a6a6a;
  display: flex; flex-direction: column;
}
.mm *, .mm *::before, .mm *::after { box-sizing: border-box; }
.mm .cond, .mm h1, .mm h2, .mm h3, .mm h4 { font-family: 'Saira Condensed', sans-serif; font-weight: 800; text-transform: uppercase; letter-spacing: 0; }
.mm .mono { font-family: 'IBM Plex Mono', monospace; }

/* status bar */
.mm-statusbar { display: flex; justify-content: space-between; align-items: center; padding: 12px 20px 4px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: white; font-weight: 600; letter-spacing: 0.02em; }
.mm-statusbar .icons { display: flex; gap: 6px; align-items: center; }
.mm-statusbar .icons::before, .mm-statusbar .icons::after { content: ''; display: inline-block; }
.mm-sig { width: 16px; height: 10px; background: linear-gradient(to right, white 0 3px, transparent 3px 4px, white 4px 7px, transparent 7px 8px, white 8px 11px, transparent 11px 12px, white 12px 16px); clip-path: polygon(0 60%, 25% 60%, 25% 40%, 50% 40%, 50% 20%, 75% 20%, 75% 0, 100% 0, 100% 100%, 0 100%); }
.mm-batt { width: 22px; height: 11px; border: 1px solid white; border-radius: 3px; padding: 1px; position: relative; }
.mm-batt::after { content: ''; position: absolute; right: -3px; top: 3px; width: 2px; height: 3px; background: white; border-radius: 0 1px 1px 0; }
.mm-batt-fill { width: 80%; height: 100%; background: white; border-radius: 1px; }

/* header */
.mm-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 18px; border-bottom: 1px solid var(--line); background: var(--bg); position: sticky; top: 0; z-index: 10; }
.mm-logo { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 18px; letter-spacing: 0.04em; text-transform: uppercase; display: flex; align-items: center; gap: 8px; }
.mm-logo::before { content: ''; width: 22px; height: 22px; background: var(--red); clip-path: polygon(0 0, 100% 0, 78% 100%, 0 100%); }
.mm-logo .red { color: var(--red); }
.mm-head .icon-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--line); color: white; background: transparent; }
.mm-head .menu { display: flex; flex-direction: column; gap: 3px; align-items: end; }
.mm-head .menu span { width: 16px; height: 2px; background: white; display: block; }
.mm-head .menu span:nth-child(2) { width: 10px; background: var(--red); }

/* primary CTA bar (sticky bottom) */
.mm-cta-bar { position: sticky; bottom: 0; display: grid; grid-template-columns: 1fr auto; gap: 10px; padding: 12px 16px; background: rgba(10,10,10,0.92); backdrop-filter: blur(8px); border-top: 1px solid var(--line); z-index: 10; }
.mm-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 15px; letter-spacing: 0.08em; text-transform: uppercase; padding: 14px 18px; clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%); padding-right: 32px; }
.mm-btn.ghost { background: transparent; border: 1px solid var(--line); color: white; clip-path: none; padding: 14px 18px; }
.mm-btn.dark { background: var(--panel); }
.mm-btn-icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--line); color: white; font-size: 18px; }

.mm-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; }
.mm-eyebrow::before { content: ''; width: 22px; height: 1px; background: var(--red); }

/* mono label utility */
.mm-mlab { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--steel); letter-spacing: 0.18em; text-transform: uppercase; }

/* page label badge under each frame */
.mm-pagelabel { position: absolute; top: -32px; left: 0; right: 0; text-align: center; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #888; letter-spacing: 0.18em; text-transform: uppercase; }

/* shared section helpers */
.mm-section { padding: 32px 18px; }
.mm-section.tight { padding: 24px 18px; }
.mm-section.dark { background: var(--panel); }

.mm-h-eyebrow { margin-bottom: 12px; }
.mm-h { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 40px; line-height: 0.92; letter-spacing: -0.005em; margin: 0 0 12px; text-transform: uppercase; }
.mm-h .red { color: var(--red); }
.mm-h .outline { -webkit-text-stroke: 1.5px white; color: transparent; }
.mm-sub { font-size: 14.5px; line-height: 1.55; color: #c0c0c0; margin: 0; }

/* hero base photo */
.mm-photo { position: relative; aspect-ratio: 16/11; background:
  linear-gradient(180deg, rgba(10,10,10,0.4), rgba(10,10,10,0.75)),
  repeating-linear-gradient(135deg, #2a3a4d 0 14px, #1a2838 14px 28px);
  display: flex; align-items: end; padding: 16px; }
.mm-photo.gym { background:
  linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.85)),
  radial-gradient(circle at 30% 50%, rgba(224,36,31,0.3), transparent 60%),
  repeating-linear-gradient(135deg, #1a1a1a 0 12px, #0e0e0e 12px 24px); }
.mm-photo.outdoor { background:
  linear-gradient(180deg, rgba(10,10,10,0.4), rgba(10,10,10,0.75)),
  repeating-linear-gradient(135deg, #4a5a3d 0 14px, #3a482e 14px 28px); }
.mm-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.75); background: rgba(0,0,0,0.55); padding: 5px 8px; }
.mm-photo .overlay-tag { position: absolute; top: 16px; left: 16px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 12px; letter-spacing: 0.12em; padding: 6px 12px; clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 100%, 0 100%); padding-right: 18px; text-transform: uppercase; }

.mm-stats { display: grid; grid-template-columns: 1fr 1fr 1fr; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.mm-stat { padding: 16px 12px; border-right: 1px solid var(--line); }
.mm-stat:last-child { border-right: 0; }
.mm-stat .v { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 28px; line-height: 1; }
.mm-stat .v .red { color: var(--red); }
.mm-stat .l { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--steel); letter-spacing: 0.14em; text-transform: uppercase; margin-top: 4px; }

/* service cards */
.mm-svc { background: var(--panel); padding: 22px 20px; border-left: 3px solid var(--red); display: flex; flex-direction: column; gap: 14px; }
.mm-svc.flat { border-left: 0; background: var(--bg); border: 1px solid var(--line); border-left: 3px solid var(--red); }
.mm-svc-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.mm-svc-num { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; }
.mm-svc h3 { font-size: 26px; line-height: 0.98; margin: 8px 0 0; }
.mm-svc p { font-size: 13.5px; line-height: 1.55; color: #b8b8b8; margin: 0; }
.mm-svc-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--steel); letter-spacing: 0.06em; text-transform: uppercase; }
.mm-svc-foot strong { color: var(--red); font-weight: 600; }
.mm-svc-foot .arrow { color: var(--red); font-size: 18px; }
.mm-svc-stack { display: flex; flex-direction: column; gap: 12px; }

/* spec rows */
.mm-spec { display: grid; grid-template-columns: 1fr auto; padding: 12px 0; border-bottom: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 12px; }
.mm-spec:last-child { border-bottom: 0; }
.mm-spec .k { color: var(--steel); letter-spacing: 0.08em; text-transform: uppercase; }
.mm-spec .v { color: white; font-weight: 500; }
.mm-spec .v.red { color: var(--red); }

/* testimonial */
.mm-test { background: var(--panel); padding: 22px 20px; border-left: 3px solid var(--red); }
.mm-test .stars { color: var(--red); font-size: 12px; margin-bottom: 10px; letter-spacing: 0.1em; }
.mm-test blockquote { font-size: 14px; line-height: 1.55; color: #d8d8d8; margin: 0 0 12px; }
.mm-test cite { font-style: normal; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; color: var(--steel); letter-spacing: 0.16em; text-transform: uppercase; }
.mm-test cite strong { color: white; font-weight: 600; }

/* strip */
.mm-strip { background: var(--red); color: black; padding: 14px 0; overflow: hidden; }
.mm-strip-inner { display: flex; gap: 0; white-space: nowrap; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 18px; letter-spacing: 0.04em; text-transform: uppercase; }
.mm-strip-inner span { padding: 0 18px; display: inline-flex; align-items: center; gap: 18px; }
.mm-strip-inner .x { font-size: 14px; }

/* footer */
.mm-foot { background: black; padding: 28px 18px 90px; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 18px; }
.mm-foot-logo { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 28px; letter-spacing: 0.02em; }
.mm-foot-logo .red { color: var(--red); }
.mm-foot-links { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; font-size: 12px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.1em; text-transform: uppercase; color: var(--steel); }
.mm-foot-links a { color: white; padding: 6px 0; display: block; }
.mm-foot-copy { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.1em; padding-top: 14px; border-top: 1px solid var(--line); }

/* schedule cell */
.mm-sched { display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); }
.mm-sched-row { display: grid; grid-template-columns: 60px 1fr auto; background: var(--bg); padding: 12px 14px; gap: 12px; align-items: center; font-family: 'IBM Plex Mono', monospace; font-size: 12px; }
.mm-sched-row .day { color: white; font-weight: 600; letter-spacing: 0.1em; }
.mm-sched-row .what { color: #c8c8c8; }
.mm-sched-row .what strong { color: white; font-weight: 600; }
.mm-sched-row .when { color: var(--red); font-weight: 600; letter-spacing: 0.05em; }
.mm-sched-row.highlight { background: var(--panel); }

/* prices (mobile) */
.mm-price { background: var(--panel); padding: 22px 20px; display: flex; flex-direction: column; gap: 14px; border-left: 3px solid var(--red); }
.mm-price.free { background: var(--red); color: black; border-left: 0; }
.mm-price-tag { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; }
.mm-price.free .mm-price-tag { color: black; }
.mm-price h3 { font-size: 22px; line-height: 1; margin: 0; }
.mm-price .amt { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 56px; line-height: 0.9; color: white; display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
.mm-price .amt .red { color: var(--red); }
.mm-price.free .amt { color: black; }
.mm-price .amt .unit { font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 10px; color: var(--steel); letter-spacing: 0.14em; text-transform: uppercase; }
.mm-price.free .amt .unit { color: rgba(0,0,0,0.65); }
.mm-price ul { list-style: none; padding: 12px 0 0; margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: 12.5px; line-height: 1.45; color: #c8c8c8; border-top: 1px solid var(--line); }
.mm-price.free ul { color: rgba(0,0,0,0.82); border-top-color: rgba(0,0,0,0.2); }
.mm-price ul li { display: grid; grid-template-columns: 10px 1fr; gap: 8px; }
.mm-price ul li::before { content: '▸'; color: var(--red); }
.mm-price.free ul li::before { color: black; }
.mm-price-foot { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--steel); letter-spacing: 0.1em; text-transform: uppercase; padding-top: 10px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; }
.mm-price.free .mm-price-foot { color: rgba(0,0,0,0.7); border-top-color: rgba(0,0,0,0.2); }

/* contact channels (mobile) */
.mm-channel { display: grid; grid-template-columns: 44px 1fr auto; gap: 14px; align-items: center; padding: 16px; background: var(--panel); border-left: 3px solid var(--red); }
.mm-channel .icon { width: 40px; height: 40px; background: var(--red); color: white; display: flex; align-items: center; justify-content: center; font-size: 14px; clip-path: polygon(0 0, 100% 0, 82% 100%, 0 100%); font-weight: 700; letter-spacing: 0.04em; }
.mm-channel .clab { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.16em; text-transform: uppercase; }
.mm-channel .cval { font-family: 'Saira Condensed', sans-serif; font-weight: 700; font-size: 16px; margin-top: 2px; letter-spacing: 0.005em; }
.mm-channel .ar { color: var(--red); font-size: 18px; }

/* about (mobile) */
.mm-about-portrait { aspect-ratio: 4/5; position: relative; background:
  linear-gradient(180deg, rgba(10,10,10,0.15), rgba(10,10,10,0.65)),
  radial-gradient(circle at 50% 30%, rgba(224,36,31,0.15), transparent 60%),
  repeating-linear-gradient(135deg, #3a3a3a 0 12px, #2a2a2a 12px 24px);
  display: flex; align-items: end; padding: 16px; }
.mm-about-portrait .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.8); background: rgba(0,0,0,0.55); padding: 5px 8px; }
.mm-about-portrait .tag { position: absolute; top: 16px; right: 16px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 0.12em; padding: 6px 12px; clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 100%, 0 100%); padding-right: 18px; text-transform: uppercase; }
.mm-about-portrait .signature { position: absolute; bottom: 16px; right: 16px; font-family: 'Saira Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 22px; color: white; transform: rotate(-4deg); }
.mm-about-meta-col { background: var(--panel); padding: 18px 16px; }
.mm-about-meta-col h4 { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 12px; font-weight: 500; display: flex; align-items: center; gap: 8px; }
.mm-about-meta-col h4::before { content: ''; width: 18px; height: 1px; background: var(--red); }
.mm-about-meta-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
.mm-about-meta-col ul li { display: grid; grid-template-columns: 10px 1fr auto; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: white; letter-spacing: 0.03em; align-items: baseline; }
.mm-about-meta-col ul li::before { content: '▸'; color: var(--red); }
.mm-about-meta-col ul li .year { color: var(--steel); font-size: 10px; }

/* transformation strip (mobile testimonials) */
.mm-test { padding: 0 !important; overflow: hidden; }
.mm-test-body { padding: 22px 20px; }
.mm-tr { display: flex; gap: 1px; background: var(--line); }
.mm-tr-cell { flex: 1; aspect-ratio: 1; position: relative; display: flex; align-items: end; padding: 10px; }
.mm-tr-cell.before { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #4a4842 0 10px, #3a3832 10px 20px); }
.mm-tr-cell.after { background: linear-gradient(180deg, rgba(10,10,10,0.15), rgba(10,10,10,0.55)), radial-gradient(circle at 50% 50%, rgba(224,36,31,0.2), transparent 70%), repeating-linear-gradient(135deg, #2a3032 0 10px, #1a2022 10px 20px); }
.mm-tr-cell .lbl { position: absolute; top: 10px; left: 10px; font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: 0.18em; padding: 3px 7px; text-transform: uppercase; font-weight: 600; }
.mm-tr-cell.before .lbl { background: rgba(0,0,0,0.75); color: rgba(255,255,255,0.9); }
.mm-tr-cell.after .lbl { background: var(--red); color: white; clip-path: polygon(0 0, 100% 0, calc(100% - 4px) 100%, 0 100%); padding-right: 10px; }
.mm-tr-cell .ph { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.55); padding: 3px 6px; }

/* big quote */
.mm-bigquote { padding: 36px 18px; background: var(--red); color: black; }
.mm-bigquote blockquote { font-family: 'Saira Condensed', sans-serif; font-weight: 700; font-size: 28px; line-height: 1.05; margin: 0 0 14px; text-transform: uppercase; }
.mm-bigquote cite { font-style: normal; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; }

/* mini gallery */
.mm-gal { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.mm-gal-cell { aspect-ratio: 1; background: var(--panel2); display: flex; align-items: end; padding: 8px; position: relative; }
.mm-gal-cell.r1 { background:
  linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
  repeating-linear-gradient(135deg, #2a2a2a 0 10px, #1a1a1a 10px 20px); }
.mm-gal-cell.r2 { background:
  linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
  repeating-linear-gradient(135deg, #3a2828 0 10px, #2a1a1a 10px 20px); }
.mm-gal-cell.r3 { background:
  linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
  repeating-linear-gradient(135deg, #4a4030 0 10px, #3a3020 10px 20px); }
.mm-gal-cell.r4 { background:
  linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
  repeating-linear-gradient(135deg, #2a3a3a 0 10px, #1a2a2a 10px 20px); }
.mm-gal-cell .lab { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.5); padding: 3px 6px; }
`;

function MMStatusBar({ time = "9:41" }) {
  return (
    <div className="mm-statusbar">
      <span>{time}</span>
      <span className="icons">
        <span className="mm-sig"></span>
        <span className="mm-batt"><span className="mm-batt-fill"></span></span>
      </span>
    </div>
  );
}

function MMHeader() {
  return (
    <header className="mm-head">
      <div className="mm-logo">DMMICH<span className="red">/</span></div>
      <button className="icon-btn menu" aria-label="menu"><span></span><span></span><span></span></button>
    </header>
  );
}

function MMFooter() {
  return (
    <footer className="mm-foot">
      <div className="mm-foot-logo">DMMICH<span className="red">/</span>THE COACH</div>
      <div className="mm-mlab">L3 PT · Functional Fitness · Bingham NG13</div>
      <div className="mm-foot-links">
        <a>Personal Training</a>
        <a>Sunday Run Club</a>
        <a>Bootcamp</a>
        <a>Learning</a>
        <a>IronHQ</a>
        <a>About Dean</a>
        <a>Contact</a>
        <a>Instagram →</a>
      </div>
      <div className="mm-foot-copy">© 2026 DEAN MICHNIEW · ALL RIGHTS RESERVED</div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────────
// 01 · MOBILE HOME
// ──────────────────────────────────────────────────────────────
function MMHome() {
  return (
    <div className="mm">
      <style>{MM_CSS}</style>
      <MMStatusBar />
      <MMHeader />

      <section style={{position:'relative'}}>
        <div className="mm-photo gym" style={{aspectRatio:'10/13'}}>
          <span className="overlay-tag">Now booking 2026</span>
          <span className="ph-label">[ photo · IronHQ floor, low red light ]</span>
        </div>
        <div style={{padding:'24px 18px 8px'}}>
          <span className="mm-eyebrow">L3 PT · Bingham NG13</span>
          <h1 className="mm-h" style={{fontSize:'52px',marginTop:14}}>TRAIN.<br/><span className="red">PROGRESS.</span><br/><span className="outline">SUCCEED.</span></h1>
          <p className="mm-sub" style={{marginTop:14}}>Functional fitness, programmed around real lives. 1-to-1 PT at IronHQ, Thursday bootcamp, free Sunday running club. Built in Bingham.</p>
        </div>
      </section>

      <div className="mm-stats">
        <div className="mm-stat"><div className="v"><span className="red">L3</span></div><div className="l">Qualified PT</div></div>
        <div className="mm-stat"><div className="v">60<span className="red">+</span></div><div className="l">Active clients</div></div>
        <div className="mm-stat"><div className="v">40<span className="red">+</span></div><div className="l">Sun runners</div></div>
      </div>

      <div className="mm-strip">
        <div className="mm-strip-inner"><span>BUILT IN BINGHAM<span className="x">✕</span>NO QUICK FIXES<span className="x">✕</span>JUST GRAFT<span className="x">✕</span>BUILT IN BINGHAM<span className="x">✕</span>NO QUICK FIXES<span className="x">✕</span></span></div>
      </div>

      <section className="mm-section">
        <div className="mm-h-eyebrow"><span className="mm-eyebrow">[ § 01 ] Services</span></div>
        <h2 className="mm-h">Four ways<br/>to <span className="red">get to work.</span></h2>

        <div className="mm-svc-stack" style={{marginTop:24}}>
          <div className="mm-svc">
            <div>
              <div className="mm-svc-num">01 / FLAGSHIP</div>
              <h3>1-to-1<br/>Personal Training</h3>
            </div>
            <p>Programmed for you. Coached in person at IronHQ — racks, sleds, plates, the lot. Hevy Pro app included so progress isn't a vibe, it's a number.</p>
            <div className="mm-svc-foot"><span>IRONHQ · BINGHAM</span><strong>FROM £30 →</strong></div>
          </div>
          <div className="mm-svc">
            <div>
              <div className="mm-svc-num">02 / GROUP</div>
              <h3>Thursday<br/>Bootcamp</h3>
            </div>
            <p>Mixed-ability circuits at Bingham RUFC. 60 minutes of proper graft. Cash or card on the door, no membership, no commitment.</p>
            <div className="mm-svc-foot"><span>BRUFC · THU 17:30</span><strong>£10 →</strong></div>
          </div>
          <div className="mm-svc">
            <div>
              <div className="mm-svc-num">03 / SKILL</div>
              <h3>Learning<br/>Sessions</h3>
            </div>
            <p>Technique-focused workshops at IronHQ. Deadlift, bench, kettlebell, running form. Walk out knowing the move cold.</p>
            <div className="mm-svc-foot"><span>IRONHQ · MONTHLY</span><strong>BY TOPIC →</strong></div>
          </div>
          <div className="mm-svc">
            <div>
              <div className="mm-svc-num">04 / FREE</div>
              <h3>Sunday<br/>Run Club</h3>
            </div>
            <p>Bingham Market Place, 9am, every week. Lap-based for all paces. Breakfast at Gilt after — the real reason most of us turn up.</p>
            <div className="mm-svc-foot"><span>MARKET PL. · SUN 09:00</span><strong>FREE →</strong></div>
          </div>
        </div>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ § 02 ] About the coach</span>
        <h2 className="mm-h" style={{marginTop:12}}>BUILT IN<br/><span className="red">BINGHAM.</span></h2>
        <div className="mm-about-portrait" style={{marginTop:18}}>
          <span className="tag">Hi, I'm Dean</span>
          <span className="signature">— Dean</span>
          <span className="ph-label">[ photo · Dean portrait ]</span>
        </div>
        <p className="mm-sub" style={{marginTop:18}}>I'm <strong style={{color:'white'}}>Dean Michniew</strong> — Bingham-born, Bingham-based, and the bloke at the front of the Sunday Run Club every week. Level 3 qualified PT and functional-fitness coach.</p>
        <p className="mm-sub" style={{marginTop:12}}>I came to coaching after years of training myself out of a desk-bound life. Now I do this full time — and I still compete, because if I'm asking you to push your limits I'd better be pushing mine.</p>
        <div style={{marginTop:20,display:'flex',flexDirection:'column',gap:1,background:'var(--line)',border:'1px solid var(--line)'}}>
          <div className="mm-about-meta-col">
            <h4>Qualifications</h4>
            <ul>
              <li><span>Level 3 Personal Trainer</span><span className="year">Active IQ</span></li>
              <li><span>Functional Fitness Coach</span><span className="year">L2</span></li>
              <li><span>Hyrox Trainer Certified</span><span className="year">2024</span></li>
              <li><span>Emergency First Aid at Work</span><span className="year">2024</span></li>
              <li><span>Public Liability Insured</span><span className="year">£10m</span></li>
            </ul>
          </div>
          <div className="mm-about-meta-col">
            <h4>Competing</h4>
            <ul>
              <li><span>Hyrox London · Mens Pro</span><span className="year">PB 1:04</span></li>
              <li><span>Hyrox Birmingham</span><span className="year">2025</span></li>
              <li><span>Hyrox Nottingham</span><span className="year">2024</span></li>
              <li><span>Tough Mudder Yorkshire</span><span className="year">2023</span></li>
              <li><span>Robin Hood Half Marathon</span><span className="year">PB 1:38</span></li>
            </ul>
          </div>
        </div>
        <a className="mm-btn" style={{marginTop:18}}>Train with me →</a>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ § 03 ] Home base</span>
        <h2 className="mm-h" style={{marginTop:12}}>IRON<span className="red">HQ.</span><br/>BINGHAM.</h2>
        <div className="mm-photo gym" style={{margin:'18px 0',aspectRatio:'16/10'}}>
          <span className="ph-label">[ photo · IronHQ rig &amp; weights floor ]</span>
        </div>
        <p className="mm-sub">A purpose-built strength &amp; conditioning facility. Top-spec racks, sleds, kettlebells, conditioning kit. The whole place is set up for the way I program — no queues, no nonsense.</p>
        <div style={{marginTop:18}}>
          <div className="mm-spec"><span className="k">Address</span><span className="v">Unit 1, Ranch House</span></div>
          <div className="mm-spec"><span className="k">Postcode</span><span className="v">NG13 8GF</span></div>
          <div className="mm-spec"><span className="k">Access</span><span className="v">Members &amp; PT clients</span></div>
        </div>
        <a className="mm-btn" style={{marginTop:18}}>See the gym →</a>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ § 04 ] Community</span>
        <h2 className="mm-h" style={{marginTop:12}}>SUNDAY<br/>RUNNING <span className="red">CLUB.</span></h2>
        <div className="mm-photo outdoor" style={{margin:'18px 0',aspectRatio:'16/11'}}>
          <span className="overlay-tag">Free · All abilities</span>
          <span className="ph-label">[ photo · group shot at Bingham Market Place ]</span>
        </div>
        <p className="mm-sub">A free, friendly running &amp; walking group I founded for all abilities. 9am every Sunday, lap-based so nobody gets left behind, breakfast at Gilt after.</p>
        <div className="mm-stats" style={{marginTop:18}}>
          <div className="mm-stat"><div className="v">SUN<br/><span className="red">09:00</span></div><div className="l">Every week</div></div>
          <div className="mm-stat"><div className="v">£<span className="red">0</span></div><div className="l">Always free</div></div>
          <div className="mm-stat"><div className="v">ALL</div><div className="l">Paces &amp; ages</div></div>
        </div>
        <a className="mm-btn ghost" style={{marginTop:18}}>See you Sunday →</a>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ § 05 ] Group training</span>
        <h2 className="mm-h" style={{marginTop:12}}>BINGHAM<br/>BOOT<span className="red">CAMP.</span></h2>
        <div className="mm-photo" style={{margin:'18px 0',aspectRatio:'16/11',background:'linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.75)), radial-gradient(circle at 70% 70%, rgba(224,36,31,0.28), transparent 60%), repeating-linear-gradient(135deg, #2a3032 0 14px, #1a2022 14px 28px)'}}>
          <span className="overlay-tag">Thursdays · 5:30pm</span>
          <span className="ph-label">[ photo · bootcamp sled push at BRUFC ]</span>
        </div>
        <p className="mm-sub">An hour of proper graft at Bingham RUFC every Thursday. Mixed-ability circuits — sleds, KBs, suspension trainers, sprints. Designed so a first-timer and a seasoned lifter both leave wiped out and smiling.</p>
        <p className="mm-sub" style={{marginTop:10}}>No membership, no commitment — cash or card on the door.</p>
        <div className="mm-stats" style={{marginTop:18}}>
          <div className="mm-stat"><div className="v">THU<br/><span className="red">17:30</span></div><div className="l">Every week</div></div>
          <div className="mm-stat"><div className="v">£<span className="red">10</span></div><div className="l">Drop-in</div></div>
          <div className="mm-stat"><div className="v">ALL</div><div className="l">Abilities</div></div>
        </div>
        <a className="mm-btn" style={{marginTop:18}}>See you Thursday →</a>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ § 06 ] Prices</span>
        <h2 className="mm-h" style={{marginTop:12}}>NO HIDDEN<br/><span className="red">EXTRAS.</span></h2>
        <p className="mm-sub" style={{marginTop:8}}>Pay-as-you-go for groups, blocks for PT. First chat is always free.</p>
        <div className="mm-svc-stack" style={{marginTop:18}}>
          <div className="mm-price">
            <div className="mm-price-tag">— FLAGSHIP</div>
            <h3>1-to-1 Personal Training</h3>
            <div className="amt">£30 <span className="unit">FROM<br/>/ SESSION</span></div>
            <ul>
              <li>Bespoke programming, weekly</li>
              <li>Hevy Pro app included</li>
              <li>Nutritional guidance</li>
              <li>Block discounts at 10 / 20</li>
            </ul>
            <div className="mm-price-foot"><span>IRONHQ · BINGHAM</span><span style={{color:'var(--red)'}}>→</span></div>
          </div>
          <div className="mm-price">
            <div className="mm-price-tag">— GROUP</div>
            <h3>Thursday Bootcamp</h3>
            <div className="amt">£10 <span className="unit">DROP-IN<br/>/ SESSION</span></div>
            <ul>
              <li>60 min mixed-ability circuit</li>
              <li>Cash or card on the door</li>
              <li>Bring a mate · 2 for £15</li>
              <li>4-week block: £35</li>
            </ul>
            <div className="mm-price-foot"><span>BRUFC · THU 17:30</span><span style={{color:'var(--red)'}}>→</span></div>
          </div>
          <div className="mm-price">
            <div className="mm-price-tag">— SKILL</div>
            <h3>Learning Sessions</h3>
            <div className="amt">£25 <span className="unit">PER<br/>WORKSHOP</span></div>
            <ul>
              <li>2-hour technique workshops</li>
              <li>Small groups · 4–6 people</li>
              <li>Deadlift · KB · running form</li>
              <li>Take-home plan included</li>
            </ul>
            <div className="mm-price-foot"><span>IRONHQ · MONTHLY</span><span style={{color:'var(--red)'}}>→</span></div>
          </div>
          <div className="mm-price free">
            <div className="mm-price-tag">— ALWAYS FREE</div>
            <h3>Sunday Running Club</h3>
            <div className="amt">£0 <span className="unit">FOREVER<br/>/ EVERYONE</span></div>
            <ul>
              <li>Lap-based · all paces fit</li>
              <li>Walkers · prams · dogs welcome</li>
              <li>Breakfast at Gilt after</li>
              <li>No sign-up · just turn up</li>
            </ul>
            <div className="mm-price-foot"><span>SUN 09:00 · MARKET PL.</span><span style={{color:'black'}}>→</span></div>
          </div>
        </div>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ § 07 ] Results</span>
        <h2 className="mm-h" style={{marginTop:12}}>RESULTS<br/><span className="red">SPEAK LOUDER.</span></h2>
        <div className="mm-svc-stack" style={{marginTop:18}}>
          <div className="mm-test">
            <div className="mm-tr">
              <div className="mm-tr-cell before"><span className="lbl">— Before</span><span className="ph">[ photo · day 1 ]</span></div>
              <div className="mm-tr-cell after"><span className="lbl">After · 18 mo</span><span className="ph">[ photo · today ]</span></div>
            </div>
            <div className="mm-test-body">
              <div className="stars">★ ★ ★ ★ ★</div>
              <blockquote>"From struggling to do 10 minutes without getting out of breath, to two hours of fitness every day. Dean grew the plan around me as I changed."</blockquote>
              <cite><strong>LONG-TERM CLIENT</strong> · 18 MONTHS IN</cite>
            </div>
          </div>
          <div className="mm-test">
            <div className="mm-tr">
              <div className="mm-tr-cell before"><span className="lbl">— Before</span><span className="ph">[ photo · Tom pre ]</span></div>
              <div className="mm-tr-cell after"><span className="lbl">After · 12 wk</span><span className="ph">[ photo · Tom now ]</span></div>
            </div>
            <div className="mm-test-body">
              <div className="stars">★ ★ ★ ★ ★</div>
              <blockquote>"12 weeks of targeted functional training and the back pain I'd had for years was gone. Deadlifting more than I ever thought possible."</blockquote>
              <cite><strong>TOM W.</strong> · PAIN-FREE</cite>
            </div>
          </div>
        </div>
      </section>

      <section className="mm-bigquote">
        <blockquote>"Not chasing aesthetics. Chasing health."</blockquote>
        <cite>— DEAN MICHNIEW · L3 PT</cite>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ § 08 ] Get in touch</span>
        <h2 className="mm-h" style={{marginTop:12}}>LET'S<br/><span className="red">WORK.</span></h2>
        <p className="mm-sub" style={{marginTop:10}}>Ready to start — or just have a question? Drop me a line. Quickest reply is on Instagram, but pick whatever's easiest.</p>
        <div className="mm-svc-stack" style={{marginTop:20}}>
          {[
            ['IG','INSTAGRAM','@dmmich.the_coach','Fastest · DM me anything'],
            ['✉','EMAIL','dean@dmmichthecoach.co.uk','Within 24 hours'],
            ['☎','PHONE','+44 78 8191 8142','For bootcamp questions'],
            ['▸','IN PERSON','Sun 9am · Market Place','Just turn up'],
          ].map(([icon,k,v,d],i)=>(
            <div key={i} className="mm-channel">
              <div className="icon">{icon}</div>
              <div>
                <div className="clab">{k}</div>
                <div className="cval">{v}</div>
                <div className="mm-sub" style={{fontSize:11,marginTop:3,color:'var(--steel)'}}>{d}</div>
              </div>
              <span className="ar">→</span>
            </div>
          ))}
        </div>
      </section>

      <MMFooter />

      <div className="mm-cta-bar">
        <a className="mm-btn">Book a session →</a>
        <a className="mm-btn-icon">@</a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 02 · MOBILE — SUNDAY RUNNING CLUB
// ──────────────────────────────────────────────────────────────
function MMRunClub() {
  return (
    <div className="mm">
      <style>{MM_CSS}</style>
      <MMStatusBar />
      <MMHeader />

      <section>
        <div className="mm-photo outdoor" style={{aspectRatio:'10/11'}}>
          <span className="overlay-tag">Free · Every Sunday</span>
          <span className="ph-label">[ photo · big run-club group, Market Place ]</span>
        </div>
        <div style={{padding:'24px 18px 8px'}}>
          <span className="mm-eyebrow">[ Bingham Sunday Run Club ]</span>
          <h1 className="mm-h" style={{fontSize:'46px',marginTop:14}}>RUN<br/>WITH <span className="red">US.</span><br/>EAT WITH US.</h1>
          <p className="mm-sub" style={{marginTop:14}}>A free, friendly group I founded to get more of Bingham moving, talking and laughing on a Sunday morning. Seasoned runners, complete beginners, walkers, dogs &amp; prams — all of you.</p>
        </div>
      </section>

      <div className="mm-stats">
        <div className="mm-stat"><div className="v">SUN<br/><span className="red">09:00</span></div><div className="l">Every week</div></div>
        <div className="mm-stat"><div className="v">£<span className="red">0</span></div><div className="l">Always free</div></div>
        <div className="mm-stat"><div className="v">40<span className="red">+</span></div><div className="l">Regulars</div></div>
      </div>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 01 ] What to expect</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'36px'}}>NO PRESSURE.<br/><span className="red">NO JUDGEMENT.</span></h2>
        <p className="mm-sub" style={{marginTop:14}}>We meet at Bingham Market Place at 9am. A gentle warm-up jog to the route, then loops — small, medium or long — pick your distance. There's always a mix of paces; nobody gets left behind.</p>
        <p className="mm-sub" style={{marginTop:12}}>After the run, we walk back to Gilt café for coffee &amp; a full English. Honestly, that's the real reason most of us turn up.</p>

        <div style={{marginTop:22}}>
          <div className="mm-spec"><span className="k">Meet</span><span className="v">Bingham Market Place</span></div>
          <div className="mm-spec"><span className="k">Time</span><span className="v red">Sun · 09:00</span></div>
          <div className="mm-spec"><span className="k">Distance</span><span className="v">Pick your lap</span></div>
          <div className="mm-spec"><span className="k">Cost</span><span className="v">£0 — always</span></div>
          <div className="mm-spec"><span className="k">Sign-up</span><span className="v">Just turn up</span></div>
        </div>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 02 ] Who's welcome</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'36px'}}>EVERYONE.<br/><span className="red">FULL STOP.</span></h2>
        <div style={{marginTop:18}}>
          {[
            ['Complete beginners','You will not be the slowest.'],
            ['Walkers','Loops are walkable. Promise.'],
            ['Returning runners','Easing back in is the goal.'],
            ['Kids · Dogs · Prams','All welcome, all the time.'],
            ['Seasoned runners','Mix paces, push if you want.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'auto 1fr',gap:14,padding:'14px 0',borderBottom:i<4?'1px solid var(--line)':'0'}}>
              <span style={{fontFamily:'IBM Plex Mono, monospace',fontSize:11,color:'var(--red)',letterSpacing:'0.16em',width:24}}>0{i+1}</span>
              <div>
                <div className="cond" style={{fontSize:20,fontWeight:800,letterSpacing:'0.01em'}}>{k}</div>
                <div className="mm-sub" style={{fontSize:13,marginTop:4}}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 03 ] Gallery</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>FROM THE <span className="red">CLUB.</span></h2>
        <div className="mm-gal" style={{marginTop:18}}>
          <div className="mm-gal-cell r2"><span className="lab">[ Sun Jul 14 · finish ]</span></div>
          <div className="mm-gal-cell r3"><span className="lab">[ Sun Jul 21 · arch ]</span></div>
          <div className="mm-gal-cell r4"><span className="lab">[ Sun Aug 04 · loop ]</span></div>
          <div className="mm-gal-cell r1"><span className="lab">[ Sun Aug 11 · café ]</span></div>
        </div>
      </section>

      <section className="mm-bigquote">
        <blockquote>"The run club got me started. PT kept me going."</blockquote>
        <cite>— DAN B. · FIRST 10K, 6 MONTHS IN</cite>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 04 ] Find us</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'32px'}}>BINGHAM<br/><span className="red">MARKET PLACE.</span></h2>
        <div className="mm-photo" style={{marginTop:14,aspectRatio:'16/10',background:'linear-gradient(180deg, rgba(10,10,10,0.4), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #4a5a4a 0 12px, #3a463a 12px 24px)'}}>
          <span className="ph-label">[ map · Bingham Market Place, NG13 ]</span>
        </div>
        <a className="mm-btn" style={{marginTop:18}}>Open in maps →</a>
      </section>

      <MMFooter />

      <div className="mm-cta-bar">
        <a className="mm-btn">See you Sunday →</a>
        <a className="mm-btn-icon">📷</a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 03 · MOBILE — 1-to-1 PERSONAL TRAINING / SERVICES
// ──────────────────────────────────────────────────────────────
function MMServices() {
  return (
    <div className="mm">
      <style>{MM_CSS}</style>
      <MMStatusBar />
      <MMHeader />

      <section>
        <div className="mm-photo gym" style={{aspectRatio:'10/11'}}>
          <span className="overlay-tag">Flagship · IronHQ</span>
          <span className="ph-label">[ photo · Dean coaching client at rack ]</span>
        </div>
        <div style={{padding:'24px 18px 8px'}}>
          <span className="mm-eyebrow">[ 1-to-1 Personal Training ]</span>
          <h1 className="mm-h" style={{fontSize:'48px',marginTop:14}}>BESPOKE.<br/>COACHED.<br/><span className="red">UNNEGOTIABLE.</span></h1>
          <p className="mm-sub" style={{marginTop:14}}>An hour with me at IronHQ — assessed, programmed and coached around your body and your week. No cookie-cutter plans, no app-only nonsense. Real coaching, in person.</p>
        </div>
      </section>

      <div className="mm-stats">
        <div className="mm-stat"><div className="v">£<span className="red">30</span></div><div className="l">From / session</div></div>
        <div className="mm-stat"><div className="v">60<span className="red">min</span></div><div className="l">Per session</div></div>
        <div className="mm-stat"><div className="v">1:<span className="red">1</span></div><div className="l">Or small group</div></div>
      </div>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 01 ] What's included</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>EVERYTHING<br/><span className="red">YOU NEED.</span></h2>
        <div className="mm-svc-stack" style={{marginTop:18}}>
          {[
            ['Bespoke programming','Built around your goals, body &amp; week.'],
            ['Hevy Pro app','Log every rep, track every PR — included.'],
            ['Nutritional guidance','Sustainable, not punishing.'],
            ['In-person coaching','At IronHQ — top-spec everything.'],
            ['Flexible scheduling','Early mornings, evenings, Saturdays.'],
            ['Progress reviews','Monthly. Numbers, not vibes.'],
          ].map(([k,v],i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:14,padding:'14px 0',borderBottom:i<5?'1px solid var(--line)':'0',alignItems:'center'}}>
              <span style={{color:'var(--red)',fontSize:20,fontWeight:700}}>▸</span>
              <div>
                <div className="cond" style={{fontSize:18,fontWeight:700,letterSpacing:'0.01em'}}>{k}</div>
                <div className="mm-sub" style={{fontSize:12.5,marginTop:3}} dangerouslySetInnerHTML={{__html:v}}></div>
              </div>
              <span style={{color:'var(--steel)',fontSize:11,fontFamily:'IBM Plex Mono, monospace'}}>0{i+1}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 02 ] How it works</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>THREE<br/><span className="red">STEPS.</span></h2>
        <div className="mm-svc-stack" style={{marginTop:18}}>
          <div className="mm-svc flat">
            <div className="mm-svc-top"><div className="mm-svc-num">STEP 01</div><span style={{color:'var(--steel)',fontFamily:'IBM Plex Mono, monospace',fontSize:11}}>~15 MIN</span></div>
            <h3 style={{fontSize:22}}>Free intro call</h3>
            <p>15 minutes, no commitment. Tell me where you're at and what you want.</p>
          </div>
          <div className="mm-svc flat">
            <div className="mm-svc-top"><div className="mm-svc-num">STEP 02</div><span style={{color:'var(--steel)',fontFamily:'IBM Plex Mono, monospace',fontSize:11}}>~60 MIN</span></div>
            <h3 style={{fontSize:22}}>Assessment session</h3>
            <p>Movement screen, baseline numbers, the first proper workout. I write your plan from this.</p>
          </div>
          <div className="mm-svc flat">
            <div className="mm-svc-top"><div className="mm-svc-num">STEP 03</div><span style={{color:'var(--steel)',fontFamily:'IBM Plex Mono, monospace',fontSize:11}}>WEEKLY</span></div>
            <h3 style={{fontSize:22}}>Train. Progress.</h3>
            <p>1–3 sessions a week, programmed, logged, reviewed. We adjust as you change.</p>
          </div>
        </div>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 03 ] Also available</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>SMALL GROUP <span className="red">&amp;</span><br/>LEARNING.</h2>
        <div className="mm-svc-stack" style={{marginTop:18}}>
          <div className="mm-svc">
            <div>
              <div className="mm-svc-num">SMALL GROUP · 2–3 PEOPLE</div>
              <h3>Train with a mate</h3>
            </div>
            <p>Same programming intensity, shared cost. Bring a friend, training partner or partner-partner — reduced per-person rate.</p>
            <div className="mm-svc-foot"><span>IRONHQ · BY ARRANGEMENT</span><strong>£20pp →</strong></div>
          </div>
          <div className="mm-svc">
            <div>
              <div className="mm-svc-num">LEARNING SESSION</div>
              <h3>Master one move</h3>
            </div>
            <p>Monthly small-group technique workshops — deadlift, kettlebell foundations, running form. Leave with a move you actually own.</p>
            <div className="mm-svc-foot"><span>IRONHQ · MONTHLY</span><strong>£25 →</strong></div>
          </div>
        </div>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 04 ] FAQ</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>STRAIGHT<br/><span className="red">ANSWERS.</span></h2>
        <div style={{marginTop:18}}>
          {[
            ['Do I need to be fit to start?','Absolutely not. I work with every level — from "haven\'t exercised in a decade" to "running my next half".'],
            ['How often should I train?','2–3× a week is the sweet spot for most. I\'ll work with what your week actually looks like.'],
            ['Can I bring a friend?','Yes. Small-group sessions (2–3) are available at a reduced per-person rate.'],
            ['Do you offer online coaching?','No. In-person only — coaching is the bit you\'re paying for.'],
          ].map(([q,a],i)=>(
            <details key={i} style={{padding:'14px 0',borderBottom:i<3?'1px solid var(--line)':'0'}}>
              <summary style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',listStyle:'none'}}>
                <span className="cond" style={{fontSize:17,fontWeight:700,letterSpacing:'0.005em'}}>{q}</span>
                <span style={{color:'var(--red)',fontSize:20,fontWeight:700}}>+</span>
              </summary>
              <p className="mm-sub" style={{fontSize:13,marginTop:10}}>{a}</p>
            </details>
          ))}
        </div>
      </section>

      <MMFooter />

      <div className="mm-cta-bar">
        <a className="mm-btn">Book free intro call →</a>
        <a className="mm-btn-icon">@</a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 04 · MOBILE — IRONHQ
// ──────────────────────────────────────────────────────────────
function MMIronHQ() {
  return (
    <div className="mm">
      <style>{MM_CSS}</style>
      <MMStatusBar />
      <MMHeader />

      <section>
        <div className="mm-photo gym" style={{aspectRatio:'10/11'}}>
          <span className="overlay-tag">Home base</span>
          <span className="ph-label">[ photo · IronHQ rig, wide angle ]</span>
        </div>
        <div style={{padding:'24px 18px 8px'}}>
          <span className="mm-eyebrow">[ Where I train ]</span>
          <h1 className="mm-h" style={{fontSize:'72px',marginTop:14,lineHeight:0.85}}>IRON<br/><span className="red">HQ.</span></h1>
          <p className="mm-sub" style={{marginTop:14}}>A big, brand-new lifting &amp; conditioning facility in Bingham. Purpose-built for serious training — top-of-the-line equipment and plenty of space to move. The only address you need.</p>
        </div>
      </section>

      <div className="mm-stats">
        <div className="mm-stat"><div className="v">NG13<br/><span className="red">8GF</span></div><div className="l">Bingham</div></div>
        <div className="mm-stat"><div className="v">2,400<span className="red">ft²</span></div><div className="l">Training floor</div></div>
        <div className="mm-stat"><div className="v">2024</div><div className="l">New build</div></div>
      </div>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 01 ] Kit list</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>EVERYTHING<br/>YOU'D <span className="red">EVER NEED.</span></h2>
        <div className="mm-gal" style={{marginTop:18}}>
          <div className="mm-gal-cell r1"><span className="lab">[ racks ]</span></div>
          <div className="mm-gal-cell r2"><span className="lab">[ plates ]</span></div>
          <div className="mm-gal-cell r3"><span className="lab">[ sleds ]</span></div>
          <div className="mm-gal-cell r4"><span className="lab">[ rig ]</span></div>
        </div>
        <div style={{marginTop:20}}>
          {[
            ['Power racks','×4 · Eleiko bars'],
            ['Calibrated plates','To 25kg'],
            ['Dumbbells','2 → 50kg'],
            ['Kettlebells','Full set, 8 → 48kg'],
            ['Hyrox / functional rig','Sled, ski-erg, assault bike'],
            ['Conditioning','Rower, runner, bike, plyo boxes'],
          ].map(([k,v],i)=>(
            <div key={i} className="mm-spec">
              <span className="k">{k}</span>
              <span className="v">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 02 ] Why train here</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>NO QUEUES.<br/><span className="red">NO NONSENSE.</span></h2>
        <p className="mm-sub" style={{marginTop:14}}>IronHQ runs on a small-membership model — so the racks are always free, the kit isn't beaten up, and the floor isn't full of people filming for Instagram. The whole place is set up for the way I program.</p>
        <p className="mm-sub" style={{marginTop:12}}>Access is for members and my 1-to-1 clients. If you train with me, you train here. Simple.</p>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 03 ] Address</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'34px'}}>FIND <span className="red">US.</span></h2>
        <div className="mm-photo" style={{marginTop:14,aspectRatio:'16/10',background:'linear-gradient(180deg, rgba(10,10,10,0.4), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #3a3a3a 0 12px, #2a2a2a 12px 24px)'}}>
          <span className="ph-label">[ map · IronHQ, Unit 1 Ranch House, NG13 8GF ]</span>
        </div>
        <div style={{marginTop:18}}>
          <div className="mm-spec"><span className="k">Building</span><span className="v">Unit 1, Ranch House</span></div>
          <div className="mm-spec"><span className="k">Town</span><span className="v">Bingham</span></div>
          <div className="mm-spec"><span className="k">Postcode</span><span className="v">NG13 8GF</span></div>
          <div className="mm-spec"><span className="k">Parking</span><span className="v">On-site, free</span></div>
        </div>
      </section>

      <MMFooter />

      <div className="mm-cta-bar">
        <a className="mm-btn">Book to visit →</a>
        <a className="mm-btn-icon">📍</a>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────
// 05 · MOBILE — CONTACT
// ──────────────────────────────────────────────────────────────
function MMContact() {
  return (
    <div className="mm">
      <style>{MM_CSS}</style>
      <MMStatusBar />
      <MMHeader />

      <section className="mm-section">
        <span className="mm-eyebrow">[ Get in touch ]</span>
        <h1 className="mm-h" style={{marginTop:12,fontSize:'56px'}}>LET'S<br/><span className="red">WORK.</span></h1>
        <p className="mm-sub" style={{marginTop:14}}>Ready to start — or just have a question? Drop me a line. Quickest reply is on Instagram, but pick whatever's easiest for you.</p>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 01 ] Channels</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'30px'}}>FOUR<br/>WAYS <span className="red">IN.</span></h2>
        <div className="mm-svc-stack" style={{marginTop:18}}>
          {[
            ['INSTAGRAM','@dmmich.the_coach','Fastest. DM me anything.','📷'],
            ['EMAIL','dean@dmmichthecoach.co.uk','Within 24 hours.','✉'],
            ['PHONE','+44 (0)78 8191 8142','Bootcamp questions, on-the-day.','☎'],
            ['IN PERSON','Sunday Run Club · 9am','Just turn up at the Market Place.','▸'],
          ].map(([k,v,d,i],ix)=>(
            <div key={ix} className="mm-svc flat" style={{display:'grid',gridTemplateColumns:'auto 1fr auto',gap:14,alignItems:'center',padding:'18px 16px'}}>
              <div style={{width:44,height:44,background:'var(--red)',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,clipPath:'polygon(0 0, 100% 0, 85% 100%, 0 100%)'}}>{i}</div>
              <div>
                <div className="mm-svc-num">{k}</div>
                <div className="cond" style={{fontSize:18,fontWeight:700,marginTop:4,letterSpacing:'0.005em'}}>{v}</div>
                <div className="mm-sub" style={{fontSize:12,marginTop:3}}>{d}</div>
              </div>
              <span style={{color:'var(--red)',fontSize:20}}>→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mm-section">
        <span className="mm-eyebrow">[ 02 ] Where I train</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'30px'}}>HOME<br/><span className="red">BASE.</span></h2>
        <div className="mm-photo gym" style={{marginTop:14,aspectRatio:'16/10'}}>
          <span className="overlay-tag">IronHQ</span>
          <span className="ph-label">[ photo · IronHQ exterior ]</span>
        </div>
        <div style={{marginTop:16}}>
          <div className="mm-spec"><span className="k">IronHQ</span><span className="v">Unit 1, Ranch House</span></div>
          <div className="mm-spec"><span className="k">Bingham</span><span className="v">NG13 8GF</span></div>
        </div>
      </section>

      <section className="mm-bigquote">
        <blockquote>"No commitment. No pressure. Just a chat."</blockquote>
        <cite>— FIRST STEP IS THE BIGGEST ONE</cite>
      </section>

      <section className="mm-section dark">
        <span className="mm-eyebrow">[ 03 ] Quick form</span>
        <h2 className="mm-h" style={{marginTop:12,fontSize:'28px'}}>OR<br/><span className="red">DROP A NOTE.</span></h2>
        <div style={{marginTop:18,display:'flex',flexDirection:'column',gap:12}}>
          <div style={{padding:'14px 16px',border:'1px solid var(--line)',color:'var(--steel)',fontFamily:'IBM Plex Mono, monospace',fontSize:13,letterSpacing:'0.04em'}}>Your name</div>
          <div style={{padding:'14px 16px',border:'1px solid var(--line)',color:'var(--steel)',fontFamily:'IBM Plex Mono, monospace',fontSize:13,letterSpacing:'0.04em'}}>Your email or phone</div>
          <div style={{padding:'14px 16px',border:'1px solid var(--line)',color:'var(--steel)',fontFamily:'IBM Plex Mono, monospace',fontSize:13,letterSpacing:'0.04em',height:100,display:'flex',alignItems:'flex-start'}}>Tell me where you're at &amp; what you want…</div>
          <a className="mm-btn" style={{justifyContent:'center'}}>Send it →</a>
        </div>
      </section>

      <MMFooter />

      <div className="mm-cta-bar">
        <a className="mm-btn">DM on Instagram →</a>
        <a className="mm-btn-icon">✉</a>
      </div>
    </div>
  );
}

Object.assign(window, { MMHome, MMRunClub, MMServices, MMIronHQ, MMContact });
