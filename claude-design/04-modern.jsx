// Design 4 — Clean & Modern
// Near-white canvas, generous whitespace, a single red accent. Hanken Grotesk + IBM Plex Mono.
// Editorial / Swiss grid feel.

function ModernDesign() {
  const css = `
    .d4 { font-family: 'Hanken Grotesk', sans-serif; background: #fafafa; color: #0d0d0d; width: 1280px; height: 2400px; overflow: hidden; position: relative; --red: #e63946; --ink: #0d0d0d; --bg: #fafafa; --line: #e6e6e6; --muted: #6e6e6e; }
    .d4 *, .d4 *::before, .d4 *::after { box-sizing: border-box; }
    .d4 .mono { font-family: 'IBM Plex Mono', monospace; }
    .d4-nav { display: grid; grid-template-columns: 1fr auto 1fr; gap: 40px; align-items: center; padding: 28px 80px; border-bottom: 1px solid var(--line); }
    .d4-logo { font-weight: 700; font-size: 17px; letter-spacing: -0.01em; }
    .d4-logo .accent { color: var(--red); }
    .d4-nav ul { display: flex; gap: 36px; list-style: none; padding: 0; margin: 0; font-size: 14px; font-weight: 500; justify-content: center; }
    .d4-nav .right { display: flex; gap: 16px; justify-self: end; align-items: center; }
    .d4-nav .right .ph { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--muted); }
    .d4-nav .cta { background: var(--ink); color: var(--bg); padding: 11px 20px; border-radius: 6px; font-weight: 600; font-size: 13px; }
    .d4-hero { padding: 96px 80px 64px; display: grid; grid-template-columns: 1fr; gap: 40px; }
    .d4-hero-meta { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--muted); letter-spacing: 0.04em; display: flex; gap: 32px; align-items: center; }
    .d4-hero-meta .dot { width: 6px; height: 6px; background: var(--red); border-radius: 50%; }
    .d4-hero h1 { font-size: 124px; line-height: 0.92; font-weight: 600; letter-spacing: -0.04em; margin: 0; max-width: 1100px; }
    .d4-hero h1 .red { color: var(--red); }
    .d4-hero h1 .indent { display: inline-block; padding-left: 88px; }
    .d4-hero-foot { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 56px; padding-top: 40px; border-top: 1px solid var(--line); align-items: start; }
    .d4-hero-foot p { font-size: 17px; line-height: 1.55; color: #333; margin: 0; }
    .d4-hero-foot .label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px; }
    .d4-hero-foot a { color: var(--ink); border-bottom: 1.5px solid var(--red); font-weight: 500; }
    .d4-photo { padding: 0 80px 96px; }
    .d4-photo-frame { width: 100%; aspect-ratio: 21/8; background:
      linear-gradient(180deg, rgba(13,13,13,0.05), rgba(13,13,13,0.15)),
      repeating-linear-gradient(135deg, #d8d8d8 0 16px, #c4c4c4 16px 32px);
      border-radius: 6px; position: relative; overflow: hidden; display: flex; align-items: end; padding: 24px 32px; justify-content: space-between; }
    .d4-photo-frame .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #444; background: rgba(255,255,255,0.85); padding: 6px 10px; border-radius: 4px; }
    .d4-photo-frame .caption { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #444; letter-spacing: 0.06em; text-align: right; }
    .d4-services { padding: 0 80px 96px; }
    .d4-sec-head { display: grid; grid-template-columns: auto 1fr; gap: 80px; align-items: end; padding-bottom: 28px; border-bottom: 1px solid var(--ink); margin-bottom: 0; }
    .d4-sec-num { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--muted); letter-spacing: 0.16em; padding-bottom: 6px; }
    .d4-sec-head h2 { font-size: 56px; line-height: 1; font-weight: 600; margin: 0; letter-spacing: -0.025em; max-width: 720px; }
    .d4-services-list { list-style: none; padding: 0; margin: 0; }
    .d4-service { display: grid; grid-template-columns: 80px 280px 1fr auto auto; gap: 40px; align-items: center; padding: 36px 0; border-bottom: 1px solid var(--line); }
    .d4-service .num { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--muted); letter-spacing: 0.06em; }
    .d4-service h3 { font-size: 28px; font-weight: 600; margin: 0; letter-spacing: -0.02em; line-height: 1.1; }
    .d4-service p { font-size: 15px; line-height: 1.5; color: #4a4a4a; margin: 0; max-width: 480px; }
    .d4-service .price { font-family: 'IBM Plex Mono', monospace; font-size: 14px; color: var(--ink); font-weight: 500; }
    .d4-service .price em { font-style: normal; color: var(--muted); }
    .d4-service .arrow { width: 44px; height: 44px; border: 1px solid var(--line); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--ink); transition: all 0.2s; font-size: 18px; }
    .d4-service:hover .arrow { background: var(--red); color: white; border-color: var(--red); }
    .d4-band { padding: 96px 80px; background: var(--ink); color: var(--bg); display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
    .d4-band-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--red); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 20px; }
    .d4-band h2 { font-size: 64px; line-height: 1.02; font-weight: 600; letter-spacing: -0.03em; margin: 0 0 28px; }
    .d4-band h2 .red { color: var(--red); }
    .d4-band p { font-size: 17px; line-height: 1.6; color: rgba(250,250,250,0.7); margin: 0 0 20px; max-width: 480px; }
    .d4-band .signature { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--red); letter-spacing: 0.06em; margin-top: 32px; }
    .d4-band-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(250,250,250,0.12); border: 1px solid rgba(250,250,250,0.12); }
    .d4-band-meta-cell { background: var(--ink); padding: 28px 24px; }
    .d4-band-meta-cell .lab { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(250,250,250,0.5); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 8px; }
    .d4-band-meta-cell .val { font-size: 22px; font-weight: 600; line-height: 1.1; letter-spacing: -0.01em; }
    .d4-band-meta-cell .val small { color: var(--muted); font-weight: 400; font-size: 14px; display: block; margin-top: 4px; }
    .d4-quote { padding: 96px 80px; display: grid; grid-template-columns: auto 1fr; gap: 64px; align-items: start; border-bottom: 1px solid var(--line); }
    .d4-quote .lab { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.16em; text-transform: uppercase; padding-top: 12px; }
    .d4-quote blockquote { font-size: 36px; line-height: 1.25; font-weight: 500; letter-spacing: -0.02em; margin: 0 0 32px; max-width: 880px; color: var(--ink); }
    .d4-quote blockquote em { color: var(--red); font-style: normal; }
    .d4-quote cite { font-style: normal; font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--muted); }
    .d4-quote cite strong { color: var(--ink); font-weight: 500; }
  `;

  return (
    <div className="d4">
      <style>{css}</style>
      <nav className="d4-nav">
        <div className="d4-logo">Dean Michniew<span className="accent">.</span></div>
        <ul>
          <li>Training</li>
          <li>Run Club</li>
          <li>Bootcamp</li>
          <li>IronHQ</li>
          <li>About</li>
        </ul>
        <div className="right">
          <span className="ph">+44 (0)78 8191 8142</span>
          <a className="cta">Book</a>
        </div>
      </nav>

      <section className="d4-hero">
        <div className="d4-hero-meta">
          <span><span className="dot" style={{display:'inline-block',marginRight:8}}></span>NOW BOOKING — 2026</span>
          <span>BINGHAM · NG13</span>
          <span>L3 PT / FUNCTIONAL FITNESS</span>
        </div>
        <h1>Personal training,<br/><span className="indent">in <span className="red">Bingham.</span></span></h1>
        <div className="d4-hero-foot">
          <div>
            <div className="label">— Practice</div>
            <p>1-to-1 sessions, group bootcamp, a free Sunday run club, and skills workshops — all run out of IronHQ, the best-kit gym in town.</p>
          </div>
          <div>
            <div className="label">— Approach</div>
            <p>Functional fitness. Programmed around you. Not chasing aesthetics — chasing health, longevity, and a body you trust.</p>
          </div>
          <div>
            <div className="label">— Next step</div>
            <p><a>Book a free intro call</a>, or simply turn up at Bingham Market Place this Sunday at 9am.</p>
          </div>
        </div>
      </section>

      <section className="d4-photo">
        <div className="d4-photo-frame">
          <div className="ph-label">[ photo · IronHQ training floor — wide angle, daylight ]</div>
          <div className="caption">Fig. 01 — IronHQ, Bingham NG13 8GF</div>
        </div>
      </section>

      <section className="d4-services">
        <div className="d4-sec-head">
          <div className="d4-sec-num">[ 01 ] SERVICES</div>
          <h2>Four offerings.<br/>One coach.</h2>
        </div>
        <ul className="d4-services-list">
          <li className="d4-service">
            <span className="num">— 01</span>
            <h3>Personal Training</h3>
            <p>1-to-1 or small group at IronHQ. Bespoke programming, Hevy Pro app, nutritional guidance. All abilities, all goals.</p>
            <span className="price"><em>from</em> £30 / session</span>
            <span className="arrow">→</span>
          </li>
          <li className="d4-service">
            <span className="num">— 02</span>
            <h3>Sunday Run Club</h3>
            <p>Free, lap-based group run for all paces. Meet at Bingham Market Place, 9am every Sunday. Breakfast at Gilt after.</p>
            <span className="price">Free · Sun 09:00</span>
            <span className="arrow">→</span>
          </li>
          <li className="d4-service">
            <span className="num">— 03</span>
            <h3>Bootcamp</h3>
            <p>Mixed-ability circuits at Bingham RUFC. Pay-as-you-go, no membership, all welcome. A good way in.</p>
            <span className="price">£10 · Thu 17:30</span>
            <span className="arrow">→</span>
          </li>
          <li className="d4-service">
            <span className="num">— 04</span>
            <h3>Skills Sessions</h3>
            <p>Small-group technique workshops at IronHQ — deadlift, kettlebell, running form. Limited spaces, monthly.</p>
            <span className="price">Monthly · IronHQ</span>
            <span className="arrow">→</span>
          </li>
        </ul>
      </section>

      <section className="d4-band">
        <div>
          <div className="d4-band-eyebrow">— About the practice</div>
          <h2>Built around <span className="red">real life,</span> not the gym floor.</h2>
          <p>I work with people from where they actually are — first sessions, return-to-fitness, postnatal, busy parents, desk workers, lifelong athletes.</p>
          <p>Every plan is yours. We progress together, we adjust as life changes, and we measure success by how you feel — in and out of the gym.</p>
          <div className="signature">— Dean Michniew · L3 PT</div>
        </div>
        <div className="d4-band-meta">
          <div className="d4-band-meta-cell"><div className="lab">Location</div><div className="val">IronHQ<small>Unit 1, Ranch House · NG13 8GF</small></div></div>
          <div className="d4-band-meta-cell"><div className="lab">Hours</div><div className="val">By appt.<small>Mon–Sat · early &amp; evening</small></div></div>
          <div className="d4-band-meta-cell"><div className="lab">Qualifications</div><div className="val">Level 3 PT<small>Functional Fitness · First Aid</small></div></div>
          <div className="d4-band-meta-cell"><div className="lab">Programming</div><div className="val">Hevy Pro<small>Included with every plan</small></div></div>
        </div>
      </section>

      <section className="d4-quote">
        <div className="lab">— 01 / FROM A CLIENT</div>
        <div>
          <blockquote>"Starting small with one class a week — then two, then PT, then the run club — has been a <em>magical experience.</em> Dean grows the plan around you as you change."</blockquote>
          <cite><strong>A long-term client</strong> · 18 months in</cite>
        </div>
      </section>
    </div>
  );
}

window.ModernDesign = ModernDesign;
