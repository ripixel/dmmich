// Design 2 — Macho / Industrial
// Stark black, blood red, steel. Heavy condensed display. Sharp angles, asymmetric grid.

function MachoDesign() {
  const css = `
    .d2 { font-family: 'Saira', sans-serif; background: #0a0a0a; color: #f1f1f1; width: 1280px; height: 2400px; overflow: hidden; position: relative; --red: #e0241f; --bg: #0a0a0a; --panel: #141414; --panel2: #1c1c1c; --steel: #8a8a8a; --line: #2a2a2a; }
    .d2 *, .d2 *::before, .d2 *::after { box-sizing: border-box; }
    .d2 .display, .d2 h1, .d2 h2, .d2 h3 { font-family: 'Saira Condensed', sans-serif; font-weight: 800; letter-spacing: 0; text-transform: uppercase; }
    .d2 .mono { font-family: 'IBM Plex Mono', monospace; }
    .d2-nav { display: flex; align-items: center; justify-content: space-between; padding: 22px 48px; border-bottom: 1px solid var(--line); }
    .d2-logo { display: flex; align-items: center; gap: 14px; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 22px; letter-spacing: 0.04em; text-transform: uppercase; }
    .d2-logo::before { content: ''; width: 36px; height: 36px; background: var(--red); clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%); }
    .d2-logo span { color: var(--red); }
    .d2-nav ul { display: flex; gap: 34px; list-style: none; padding: 0; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; }
    .d2-nav .cta { background: var(--red); color: white; padding: 10px 22px; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%); padding-right: 32px; }
    .d2-hero { position: relative; height: 880px; overflow: hidden; }
    .d2-hero-bg { position: absolute; inset: 0; background:
      linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.5) 50%, var(--bg) 100%),
      repeating-linear-gradient(45deg, #1a1a1a 0 12px, #0e0e0e 12px 24px);
    }
    .d2-hero-bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 30% 40%, rgba(224,36,31,0.3) 0%, transparent 50%); }
    .d2-hero-inner { position: relative; padding: 80px 48px 60px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
    .d2-eyebrow { display: inline-flex; align-items: center; gap: 12px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; }
    .d2-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--red); }
    .d2-hero h1 { font-size: 200px; line-height: 0.82; margin: 32px 0 0; font-weight: 900; letter-spacing: -0.01em; }
    .d2-hero h1 .red { color: var(--red); }
    .d2-hero h1 .outline { -webkit-text-stroke: 2px #f1f1f1; color: transparent; }
    .d2-hero-foot { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.15); }
    .d2-hero-foot p { font-size: 17px; line-height: 1.5; color: #c8c8c8; margin: 0; max-width: 360px; }
    .d2-stat-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.18em; color: var(--steel); text-transform: uppercase; }
    .d2-stat-val { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 56px; line-height: 1; margin-top: 4px; }
    .d2-stat-val .red { color: var(--red); }
    .d2-strip { background: var(--red); color: #0a0a0a; padding: 18px 0; display: flex; align-items: center; overflow: hidden; }
    .d2-strip-inner { display: flex; gap: 0; white-space: nowrap; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 28px; letter-spacing: 0.04em; text-transform: uppercase; }
    .d2-strip-inner span { padding: 0 28px; display: inline-flex; align-items: center; gap: 28px; }
    .d2-strip-inner .x { font-size: 18px; }
    .d2-services { padding: 80px 48px; }
    .d2-sec-head { display: grid; grid-template-columns: auto 1fr; gap: 80px; align-items: end; margin-bottom: 48px; padding-bottom: 24px; border-bottom: 1px solid var(--line); }
    .d2-sec-head h2 { font-size: 96px; line-height: 0.9; margin: 0; font-weight: 900; }
    .d2-sec-head .num { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--steel); letter-spacing: 0.2em; text-transform: uppercase; align-self: start; padding-top: 16px; }
    .d2-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); }
    .d2-card { background: var(--bg); padding: 40px 36px; min-height: 360px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
    .d2-card.dark { background: var(--panel); }
    .d2-card-tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; }
    .d2-card h3 { font-size: 48px; line-height: 0.95; margin: 14px 0 18px; }
    .d2-card p { font-size: 15px; line-height: 1.55; color: #b8b8b8; margin: 0; max-width: 480px; }
    .d2-card-foot { display: flex; justify-content: space-between; align-items: end; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--steel); text-transform: uppercase; letter-spacing: 0.12em; }
    .d2-card-foot .arrow { color: var(--red); font-size: 24px; }
    .d2-pricing { background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 22px; padding: 4px 12px; clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%); display: inline-block; padding-right: 20px; margin-top: 14px; }
    .d2-ironhq { padding: 0 48px 80px; }
    .d2-ironhq-inner { background: var(--panel); display: grid; grid-template-columns: 1fr 1fr; min-height: 480px; position: relative; }
    .d2-ironhq-photo { background:
      linear-gradient(180deg, rgba(10,10,10,0.4), rgba(10,10,10,0.7)),
      repeating-linear-gradient(135deg, #2a3a4d 0 14px, #1a2838 14px 28px); position: relative; display: flex; align-items: end; padding: 28px; }
    .d2-ironhq-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.5); padding: 6px 10px; }
    .d2-ironhq-photo::before { content: 'HQ'; position: absolute; top: 32px; left: 32px; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 96px; color: var(--red); line-height: 1; }
    .d2-ironhq-body { padding: 56px 48px; display: flex; flex-direction: column; justify-content: center; }
    .d2-ironhq-body .d2-eyebrow { color: var(--red); }
    .d2-ironhq-body h2 { font-size: 72px; line-height: 0.9; margin: 24px 0 20px; }
    .d2-ironhq-body p { font-size: 17px; line-height: 1.55; color: #c8c8c8; margin: 0 0 28px; }
    .d2-ironhq-list { list-style: none; padding: 0; margin: 0 0 32px; }
    .d2-ironhq-list li { display: flex; align-items: center; gap: 14px; padding: 10px 0; border-bottom: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; }
    .d2-ironhq-list li::before { content: '▸'; color: var(--red); font-size: 18px; }
    .d2-btn { display: inline-flex; align-items: center; gap: 14px; padding: 16px 28px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 18px; letter-spacing: 0.08em; text-transform: uppercase; clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%); padding-right: 40px; align-self: flex-start; }
    .d2-testimonials { padding: 0 48px 80px; }
    .d2-testimonials h2 { font-size: 72px; line-height: 0.9; margin: 0 0 40px; }
    .d2-testimonials h2 .red { color: var(--red); }
    .d2-test-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
    .d2-test { background: var(--panel); padding: 28px; border-left: 3px solid var(--red); }
    .d2-test blockquote { margin: 0 0 18px; font-size: 15px; line-height: 1.55; color: #d8d8d8; }
    .d2-test-author { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--steel); letter-spacing: 0.16em; text-transform: uppercase; }
    .d2-test-author strong { color: white; font-weight: 600; }
  `;

  return (
    <div className="d2">
      <style>{css}</style>
      <nav className="d2-nav">
        <div className="d2-logo">DMMICH<span>/</span>THE COACH</div>
        <ul>
          <li>Training</li>
          <li>Run Club</li>
          <li>Bootcamp</li>
          <li>IronHQ</li>
          <li>About</li>
        </ul>
        <a className="d2-cta cta">Get in touch</a>
      </nav>

      <section className="d2-hero">
        <div className="d2-hero-bg"></div>
        <div className="d2-hero-inner">
          <div>
            <span className="d2-eyebrow">L3 Functional Fitness Coach · Bingham NG13</span>
            <h1>TRAIN.<br/><span className="red">PROGRESS.</span><br/><span className="outline">SUCCEED.</span></h1>
          </div>
          <div className="d2-hero-foot">
            <p>No gimmicks. No quick fixes. Real strength, real fitness, built rep by rep at IronHQ in Bingham — the only address you need.</p>
            <div>
              <div className="d2-stat-label">Home gym</div>
              <div className="d2-stat-val">IRON<span className="red">HQ</span></div>
            </div>
            <div>
              <div className="d2-stat-label">Bootcamp</div>
              <div className="d2-stat-val">THU 5:30</div>
            </div>
            <div>
              <div className="d2-stat-label">Run club</div>
              <div className="d2-stat-val">SUN 9:00</div>
            </div>
          </div>
        </div>
      </section>

      <div className="d2-strip">
        <div className="d2-strip-inner">
          <span>BUILT IN BINGHAM<span className="x">✕</span>PERSONAL TRAINING<span className="x">✕</span>RUN CLUB<span className="x">✕</span>BOOTCAMP<span className="x">✕</span>LEARNING SESSIONS<span className="x">✕</span>BUILT IN BINGHAM<span className="x">✕</span>PERSONAL TRAINING<span className="x">✕</span></span>
        </div>
      </div>

      <section className="d2-services">
        <div className="d2-sec-head">
          <div className="num">[ 01 / 04 ]<br/>SERVICES</div>
          <h2>FOUR WAYS<br/>TO <span style={{color:'#e0241f'}}>GET TO WORK.</span></h2>
        </div>
        <div className="d2-cards">
          <div className="d2-card dark">
            <div>
              <div className="d2-card-tag">01 / FLAGSHIP</div>
              <h3>1-to-1<br/>Personal Training</h3>
              <p>Programmed for you. Coached in person at IronHQ — top-spec rack, plates, sleds, the lot. Hevy Pro app included so progress is non-negotiable.</p>
              <div className="d2-pricing">FROM £30 / SESSION</div>
            </div>
            <div className="d2-card-foot"><span>IRONHQ · BINGHAM</span><span className="arrow">→</span></div>
          </div>
          <div className="d2-card">
            <div>
              <div className="d2-card-tag">02 / GROUP</div>
              <h3>Thursday<br/>Bootcamp</h3>
              <p>Mixed-ability circuits at Bingham RUFC. 60 minutes of proper graft, every Thursday at 5:30. Cash or card, drop-in, no membership.</p>
              <div className="d2-pricing">£10 / DROP-IN</div>
            </div>
            <div className="d2-card-foot"><span>BINGHAM RUFC · THU 17:30</span><span className="arrow">→</span></div>
          </div>
          <div className="d2-card">
            <div>
              <div className="d2-card-tag">03 / SKILL</div>
              <h3>Learning<br/>Sessions</h3>
              <p>Technique-focused workshops at IronHQ. Deadlift, bench, kettlebell, running form. Small groups. Walk out knowing the move cold.</p>
              <div className="d2-pricing">MONTHLY · IRONHQ</div>
            </div>
            <div className="d2-card-foot"><span>BY TOPIC · LIMITED SPACES</span><span className="arrow">→</span></div>
          </div>
          <div className="d2-card dark">
            <div>
              <div className="d2-card-tag">04 / FREE</div>
              <h3>Sunday<br/>Run Club</h3>
              <p>Bingham Market Place, 9am, every week — rain, snow or shine. Lap-based so all paces fit. Breakfast at Gilt after.</p>
              <div className="d2-pricing">FREE · ALWAYS</div>
            </div>
            <div className="d2-card-foot"><span>MARKET PLACE · SUN 09:00</span><span className="arrow">→</span></div>
          </div>
        </div>
      </section>

      <section className="d2-ironhq">
        <div className="d2-ironhq-inner">
          <div className="d2-ironhq-photo">
            <div className="ph-label">[ photo · IronHQ training floor, low blue light ]</div>
          </div>
          <div className="d2-ironhq-body">
            <span className="d2-eyebrow">HOME BASE</span>
            <h2>IRONHQ.<br/>BINGHAM.</h2>
            <p>Purpose-built for serious strength training. Top-of-the-line racks, sleds, dumbbells, conditioning kit. The whole place is set up for the way I program. No queues, no nonsense.</p>
            <ul className="d2-ironhq-list">
              <li>Unit 1, Ranch House · NG13 8GF</li>
              <li>Full strength &amp; conditioning floor</li>
              <li>Hyrox / functional rig</li>
              <li>Members &amp; PT clients only</li>
            </ul>
            <a className="d2-btn">See the gym →</a>
          </div>
        </div>
      </section>

      <section className="d2-testimonials">
        <h2>RESULTS<br/><span className="red">SPEAK LOUDER.</span></h2>
        <div className="d2-test-grid">
          <div className="d2-test">
            <blockquote>"From struggling to do 10 minutes without getting out of breath, to two hours of fitness every day. Dean grew the plan around me as I changed."</blockquote>
            <div className="d2-test-author"><strong>Long-term client</strong> · 18 months in</div>
          </div>
          <div className="d2-test">
            <blockquote>"12 weeks of targeted functional training and the back pain I'd had for years was gone. Deadlifting more than I ever thought possible."</blockquote>
            <div className="d2-test-author"><strong>Tom W.</strong> · pain-free</div>
          </div>
          <div className="d2-test">
            <blockquote>"Never been fitter. Dean doesn't just throw sessions at you, he builds you. Every week is harder and I'm hungry for the next one."</blockquote>
            <div className="d2-test-author"><strong>Mark R.</strong> · 9 months in</div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.MachoDesign = MachoDesign;
