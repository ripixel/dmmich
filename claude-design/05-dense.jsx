// Design 5 — Dense / Magazine
// Newspaper / dashboard feel. Information-rich home page.
// IBM Plex Sans (body) + IBM Plex Sans Condensed (display) + IBM Plex Mono (data).

function DenseDesign() {
  const css = `
    .d5 { font-family: 'IBM Plex Sans', sans-serif; background: #0d0d0d; color: #f0f0f0; width: 1280px; height: 2400px; overflow: hidden; position: relative; --red: #e53935; --bg: #0d0d0d; --panel: #161616; --panel2: #1c1c1c; --line: #2a2a2a; --muted: #8a8a8a; --paper: #1a1a1a; }
    .d5 *, .d5 *::before, .d5 *::after { box-sizing: border-box; }
    .d5 .cond, .d5 .display, .d5 h1, .d5 h2, .d5 h3 { font-family: 'IBM Plex Sans Condensed', sans-serif; }
    .d5 .mono { font-family: 'IBM Plex Mono', monospace; }
    .d5-mast { display: grid; grid-template-columns: auto 1fr auto; gap: 24px; align-items: center; padding: 14px 28px; border-bottom: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.04em; }
    .d5-mast .center { text-align: center; }
    .d5-mast .right { display: flex; gap: 16px; }
    .d5-mast .red { color: var(--red); }
    .d5-head { padding: 18px 28px; border-bottom: 2px solid var(--red); display: grid; grid-template-columns: 1fr auto 1fr; align-items: end; gap: 24px; }
    .d5-head .nav-left, .d5-head .nav-right { display: flex; gap: 24px; font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.06em; }
    .d5-head .nav-right { justify-content: flex-end; }
    .d5-head .logo { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 44px; letter-spacing: -0.02em; line-height: 0.9; text-align: center; }
    .d5-head .logo .red { color: var(--red); }
    .d5-head .logo .sub { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.3em; color: var(--muted); margin-top: 4px; }
    .d5-hero { display: grid; grid-template-columns: 1.6fr 1fr; gap: 1px; background: var(--line); border-bottom: 1px solid var(--line); }
    .d5-hero-main { background: var(--bg); padding: 36px 28px; display: flex; flex-direction: column; justify-content: space-between; min-height: 540px; position: relative; }
    .d5-hero-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.16em; text-transform: uppercase; }
    .d5-hero h1 { font-size: 110px; line-height: 0.88; font-weight: 700; letter-spacing: -0.02em; margin: 18px 0 24px; }
    .d5-hero h1 .red { color: var(--red); }
    .d5-hero h1 .it { font-style: italic; font-weight: 500; }
    .d5-hero-deck { font-family: 'IBM Plex Sans', serif; font-size: 19px; line-height: 1.5; color: #cfcfcf; max-width: 720px; margin: 0; font-weight: 300; }
    .d5-hero-byline { display: flex; gap: 24px; padding-top: 18px; border-top: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.06em; text-transform: uppercase; margin-top: 24px; }
    .d5-hero-byline strong { color: var(--red); font-weight: 600; }
    .d5-hero-aside { background: var(--panel); padding: 28px; display: flex; flex-direction: column; gap: 20px; }
    .d5-card-mini { padding-bottom: 16px; border-bottom: 1px dashed var(--line); }
    .d5-card-mini:last-child { border-bottom: 0; }
    .d5-card-mini-tag { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 6px; }
    .d5-card-mini h4 { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 22px; line-height: 1.1; margin: 0 0 6px; }
    .d5-card-mini p { font-size: 13px; line-height: 1.5; color: #b8b8b8; margin: 0; }
    .d5-card-mini .meta { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); margin-top: 8px; letter-spacing: 0.06em; }
    .d5-strip { display: grid; grid-template-columns: repeat(6, 1fr); border-bottom: 1px solid var(--line); }
    .d5-stat { padding: 18px 16px; border-right: 1px solid var(--line); }
    .d5-stat:last-child { border-right: 0; }
    .d5-stat .num { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 40px; line-height: 1; letter-spacing: -0.02em; }
    .d5-stat .num .red { color: var(--red); }
    .d5-stat .lab { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; margin-top: 4px; }
    .d5-cols { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 1px; background: var(--line); border-bottom: 1px solid var(--line); }
    .d5-col { background: var(--bg); padding: 28px 24px; }
    .d5-col h2 { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 32px; line-height: 1; margin: 0 0 6px; letter-spacing: -0.01em; }
    .d5-col .kicker { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 12px; }
    .d5-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
    .d5-svc { background: var(--panel); padding: 18px; border-left: 2px solid var(--red); }
    .d5-svc-num { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--muted); letter-spacing: 0.16em; }
    .d5-svc h3 { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 22px; margin: 6px 0 8px; line-height: 1.05; }
    .d5-svc p { font-size: 13px; line-height: 1.5; color: #b8b8b8; margin: 0 0 12px; }
    .d5-svc-foot { display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); padding-top: 10px; border-top: 1px solid var(--line); }
    .d5-svc-foot strong { color: var(--red); font-weight: 600; }
    .d5-schedule { width: 100%; border-collapse: collapse; font-family: 'IBM Plex Mono', monospace; margin-top: 16px; }
    .d5-schedule th, .d5-schedule td { padding: 9px 8px; text-align: left; font-size: 11px; border-bottom: 1px solid var(--line); }
    .d5-schedule th { color: var(--muted); letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; border-bottom: 1px solid var(--red); }
    .d5-schedule td.day { color: white; font-weight: 600; }
    .d5-schedule td .pill { display: inline-block; padding: 2px 6px; background: rgba(229,57,53,0.18); color: var(--red); border-radius: 3px; font-size: 10px; font-weight: 600; }
    .d5-schedule tr:hover td { background: var(--panel); }
    .d5-news { padding-top: 6px; }
    .d5-news-item { padding: 14px 0; border-bottom: 1px dotted var(--line); }
    .d5-news-item:last-child { border-bottom: 0; }
    .d5-news-date { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.06em; }
    .d5-news-item h4 { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 600; font-size: 17px; margin: 4px 0 6px; line-height: 1.15; }
    .d5-news-item p { font-size: 12px; color: #b0b0b0; margin: 0; line-height: 1.5; }
    .d5-feature { display: grid; grid-template-columns: 1fr 1.4fr; gap: 1px; background: var(--line); border-bottom: 1px solid var(--line); }
    .d5-feature-photo { background:
      linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.6)),
      repeating-linear-gradient(135deg, #2a2a2a 0 14px, #1f1f1f 14px 28px);
      display: flex; align-items: end; padding: 20px; }
    .d5-feature-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.5); padding: 4px 8px; }
    .d5-feature-body { background: var(--bg); padding: 32px 28px; }
    .d5-feature-tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; }
    .d5-feature-body h2 { font-size: 48px; line-height: 0.95; font-weight: 700; margin: 14px 0 16px; letter-spacing: -0.02em; }
    .d5-feature-body h2 em { font-style: italic; font-weight: 500; color: var(--red); }
    .d5-feature-body p { font-size: 15px; line-height: 1.55; color: #c0c0c0; margin: 0 0 12px; column-count: 2; column-gap: 24px; }
    .d5-feature-body .pull { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 600; font-size: 22px; line-height: 1.2; color: white; border-left: 3px solid var(--red); padding: 10px 14px; margin: 16px 0; }
    .d5-bottom { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1px; background: var(--line); }
    .d5-bot { background: var(--bg); padding: 24px 22px; }
    .d5-bot .lab { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 10px; }
    .d5-bot blockquote { font-size: 14px; line-height: 1.5; margin: 0 0 10px; color: #d0d0d0; }
    .d5-bot cite { font-family: 'IBM Plex Mono', monospace; font-style: normal; font-size: 11px; color: var(--muted); }
    .d5-bot .stars { color: var(--red); font-size: 12px; letter-spacing: 0.1em; margin-bottom: 8px; }
    .d5-bot-cta { background: var(--red); color: white; }
    .d5-bot-cta h3 { font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 26px; line-height: 1.05; margin: 0 0 10px; }
    .d5-bot-cta p { font-size: 13px; line-height: 1.45; margin: 0 0 14px; opacity: 0.92; }
    .d5-bot-cta .btn { background: white; color: var(--red); padding: 10px 14px; font-family: 'IBM Plex Sans Condensed', sans-serif; font-weight: 700; font-size: 14px; letter-spacing: 0.04em; text-transform: uppercase; display: inline-block; }
  `;

  return (
    <div className="d5">
      <style>{css}</style>

      <div className="d5-mast">
        <span>VOL. III · ISSUE 26 · BINGHAM NG13</span>
        <span className="center">— TRAIN · PROGRESS · SUCCEED —</span>
        <div className="right">
          <span>SUN 09:00 RUN</span>
          <span className="red">● NOW BOOKING</span>
          <span>L3 PT</span>
        </div>
      </div>

      <div className="d5-head">
        <div className="nav-left">
          <span>Training</span>
          <span>Bootcamp</span>
          <span>Run Club</span>
        </div>
        <div className="logo">DMMICH<span className="red">/</span>THE COACH<div className="sub">DEAN MICHNIEW · FUNCTIONAL FITNESS · IRONHQ</div></div>
        <div className="nav-right">
          <span>Learning</span>
          <span>About</span>
          <span style={{color:'var(--red)'}}>Contact →</span>
        </div>
      </div>

      <section className="d5-hero">
        <div className="d5-hero-main">
          <div>
            <div className="d5-hero-eyebrow">— Lead · personal training in Bingham</div>
            <h1>A coach, four<br/>ways to train,<br/><span className="it red">one</span> brilliant gym.</h1>
            <p className="d5-hero-deck">Functional fitness, programmed around real lives — 1-to-1 sessions and learning workshops at IronHQ, a Thursday bootcamp at Bingham RUFC, and a free Sunday running club that's grown into the best 90 minutes of the week.</p>
            <div className="d5-hero-byline">
              <span>FILED — <strong>BINGHAM, NG13</strong></span>
              <span>STATUS — <strong>NOW BOOKING</strong></span>
              <span>SINCE — 2022</span>
              <span>CLIENTS — 60+ ACTIVE</span>
            </div>
          </div>
        </div>
        <aside className="d5-hero-aside">
          <div className="d5-card-mini">
            <div className="d5-card-mini-tag">NEXT UP · TODAY</div>
            <h4>1-to-1 PT slots open</h4>
            <p>Three evening slots free this week at IronHQ. From £30 / session, Hevy Pro app included.</p>
            <div className="meta">IRONHQ · TUE/THU/FRI 18:00</div>
          </div>
          <div className="d5-card-mini">
            <div className="d5-card-mini-tag">THIS THURSDAY</div>
            <h4>Bootcamp — all abilities</h4>
            <p>Mixed-ability circuits, 5:30pm at Bingham RUFC. £10 drop-in, cash or card on the door.</p>
            <div className="meta">THE PAVILION · BRENDAN GROVE</div>
          </div>
          <div className="d5-card-mini">
            <div className="d5-card-mini-tag">SUNDAY · FREE</div>
            <h4>Bingham Sunday Running Club</h4>
            <p>9am at the Market Place. Lap-based for all paces. Breakfast at Gilt after.</p>
            <div className="meta">40+ RUNNERS · DOGS WELCOME</div>
          </div>
        </aside>
      </section>

      <div className="d5-strip">
        <div className="d5-stat"><div className="num">60<span className="red">+</span></div><div className="lab">Active 1-to-1 clients</div></div>
        <div className="d5-stat"><div className="num">40<span className="red">+</span></div><div className="lab">Sunday runners / week</div></div>
        <div className="d5-stat"><div className="num">£<span className="red">0</span></div><div className="lab">To join the run club</div></div>
        <div className="d5-stat"><div className="num">£<span className="red">30</span></div><div className="lab">PT — from / session</div></div>
        <div className="d5-stat"><div className="num">£<span className="red">10</span></div><div className="lab">Bootcamp drop-in</div></div>
        <div className="d5-stat"><div className="num">L<span className="red">3</span></div><div className="lab">PT qualification</div></div>
      </div>

      <section className="d5-cols">
        <div className="d5-col">
          <div className="kicker">— Services · §02</div>
          <h2>Four offerings, one coach.</h2>
          <div className="d5-services-grid">
            <div className="d5-svc">
              <div className="d5-svc-num">01 / FLAGSHIP</div>
              <h3>1-to-1 Personal Training</h3>
              <p>Programmed for you, coached at IronHQ. Hevy Pro app, nutrition guidance, flexible scheduling.</p>
              <div className="d5-svc-foot"><span>IRONHQ · BINGHAM</span><strong>FROM £30</strong></div>
            </div>
            <div className="d5-svc">
              <div className="d5-svc-num">02 / FREE</div>
              <h3>Sunday Run Club</h3>
              <p>9am Market Place. Lap-based, all paces, breakfast after at Gilt. No sign-up.</p>
              <div className="d5-svc-foot"><span>SUN 09:00</span><strong>FREE</strong></div>
            </div>
            <div className="d5-svc">
              <div className="d5-svc-num">03 / GROUP</div>
              <h3>Thursday Bootcamp</h3>
              <p>Mixed-ability circuits at Bingham RUFC. 60 minutes. Drop in whenever, no membership.</p>
              <div className="d5-svc-foot"><span>BRUFC · THU 17:30</span><strong>£10</strong></div>
            </div>
            <div className="d5-svc">
              <div className="d5-svc-num">04 / SKILL</div>
              <h3>Learning Sessions</h3>
              <p>Technique-focused workshops at IronHQ — deadlift, kettlebell, running form. Small groups.</p>
              <div className="d5-svc-foot"><span>IRONHQ · MONTHLY</span><strong>BY TOPIC</strong></div>
            </div>
          </div>
        </div>

        <div className="d5-col">
          <div className="kicker">— This week · §03</div>
          <h2>Schedule.</h2>
          <table className="d5-schedule">
            <thead><tr><th>Day</th><th>Time</th><th>Session</th><th>Where</th><th>£</th></tr></thead>
            <tbody>
              <tr><td className="day">MON</td><td>06:30</td><td>1-to-1 PT</td><td>IronHQ</td><td>—</td></tr>
              <tr><td className="day">TUE</td><td>18:00</td><td><span className="pill">2 open</span> PT</td><td>IronHQ</td><td>30+</td></tr>
              <tr><td className="day">WED</td><td>06:30</td><td>1-to-1 PT</td><td>IronHQ</td><td>—</td></tr>
              <tr><td className="day">THU</td><td>17:30</td><td><span className="pill">Open</span> Bootcamp</td><td>BRUFC</td><td>10</td></tr>
              <tr><td className="day">FRI</td><td>18:00</td><td><span className="pill">1 open</span> PT</td><td>IronHQ</td><td>30+</td></tr>
              <tr><td className="day">SAT</td><td>09:00</td><td>Learning · Deadlift</td><td>IronHQ</td><td>25</td></tr>
              <tr><td className="day">SUN</td><td>09:00</td><td><span className="pill">All welcome</span> Run Club</td><td>Market Pl.</td><td>0</td></tr>
            </tbody>
          </table>
        </div>

        <div className="d5-col">
          <div className="kicker">— Latest · §04</div>
          <h2>From the club.</h2>
          <div className="d5-news">
            <div className="d5-news-item">
              <div className="d5-news-date">— NOV 15 · RACE REPORT</div>
              <h4>Hyrox London — 4 of the team finish sub-1:10</h4>
              <p>Dean &amp; Rory take 1:04:57. Full breakdown and pacing notes inside.</p>
            </div>
            <div className="d5-news-item">
              <div className="d5-news-date">— NOV 08 · MILESTONE</div>
              <h4>Dan B. runs his first 10K, six months in</h4>
              <p>"The running club got me started. PT kept me going." Read his story.</p>
            </div>
            <div className="d5-news-item">
              <div className="d5-news-date">— NOV 02 · LEARNING</div>
              <h4>New: monthly deadlift technique session</h4>
              <p>Six spaces, all abilities. First Saturday every month at IronHQ.</p>
            </div>
            <div className="d5-news-item">
              <div className="d5-news-date">— OCT 25 · COMMUNITY</div>
              <h4>Run club hits 40 regulars</h4>
              <p>Two years on from a handful of friends jogging laps round the market square.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="d5-feature">
        <div className="d5-feature-photo">
          <div className="ph-label">[ photo · Dean coaching at IronHQ ]</div>
        </div>
        <div className="d5-feature-body">
          <div className="d5-feature-tag">— Feature · §05 · about Dean</div>
          <h2>"Not chasing aesthetics,<br/><em>chasing health."</em></h2>
          <p>Dean Michniew is a Level 3 Personal Trainer based in Bingham, Nottinghamshire — and the founder of the town's free Sunday Running Club. His practice is built on functional fitness: training that helps you in real life, whether that's carrying the shopping, playing with your kids, or running your first 5K.</p>
          <div className="pull">"Every session is about more than the workout — it's confidence, consistency, and a healthier lifestyle."</div>
          <p>Sessions run out of IronHQ, a brand-new strength &amp; conditioning facility in Bingham. Each plan is bespoke; first sessions, returning athletes and busy parents are all welcome. The promise is simple: start where you are, progress at your pace, and celebrate every milestone along the way.</p>
        </div>
      </section>

      <section className="d5-bottom">
        <div className="d5-bot">
          <div className="lab">— Testimonial · 01</div>
          <div className="stars">★ ★ ★ ★ ★</div>
          <blockquote>"From 10 minutes of exercise to two hours a day. Dean grew the plan around me — he changed my life immeasurably for the better."</blockquote>
          <cite>— LONG-TERM CLIENT · 18 MONTHS IN</cite>
        </div>
        <div className="d5-bot">
          <div className="lab">— Testimonial · 02</div>
          <div className="stars">★ ★ ★ ★ ★</div>
          <blockquote>"12 weeks and the back pain I'd had for years was gone. Deadlifting more than I ever thought possible. Wish I'd started sooner."</blockquote>
          <cite>— TOM W. · PAIN-FREE</cite>
        </div>
        <div className="d5-bot">
          <div className="lab">— Testimonial · 03</div>
          <div className="stars">★ ★ ★ ★ ★</div>
          <blockquote>"Lost 2 stone over 6 months — but more importantly, gained confidence, energy and a genuine love for training."</blockquote>
          <cite>— RACHEL M. · 6 MONTHS</cite>
        </div>
        <div className="d5-bot d5-bot-cta">
          <div className="lab" style={{color:'white',opacity:0.7}}>— Get started · §06</div>
          <h3>Ready to train? Drop me a line.</h3>
          <p>Free intro chat — 15 minutes, no commitment. Tell me where you're at, I'll tell you the smallest brave step.</p>
          <span className="btn">EMAIL DEAN →</span>
        </div>
      </section>
    </div>
  );
}

window.DenseDesign = DenseDesign;
