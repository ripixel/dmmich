// Design 1 — Inclusive & Fun
// Warm cream + brick red + amber accent. Space Grotesk + DM Sans.
// Emphasises community, belonging, "everyone's welcome".

function InclusiveDesign() {
  const css = `
    .d1 { font-family: 'DM Sans', sans-serif; background: #f4ece0; color: #1f1a14; width: 1280px; height: 2400px; overflow: hidden; position: relative; --red: #c0392b; --amber: #e8a92b; --ink: #1f1a14; --cream: #f4ece0; --paper: #fbf7ef; }
    .d1 *, .d1 *::before, .d1 *::after { box-sizing: border-box; }
    .d1 h1, .d1 h2, .d1 h3, .d1 .display { font-family: 'Space Grotesk', sans-serif; letter-spacing: -0.02em; }
    .d1 .mono { font-family: 'IBM Plex Mono', monospace; }
    .d1-nav { display: flex; align-items: center; justify-content: space-between; padding: 26px 56px; border-bottom: 1px solid rgba(31,26,20,0.1); }
    .d1-logo { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 22px; letter-spacing: -0.03em; display: flex; align-items: center; gap: 10px; }
    .d1-logo .dot { width: 32px; height: 32px; background: var(--red); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 14px; font-weight: 700; }
    .d1-nav ul { display: flex; gap: 32px; list-style: none; padding: 0; margin: 0; font-size: 15px; font-weight: 500; }
    .d1-nav .cta { background: var(--ink); color: var(--cream); padding: 12px 22px; border-radius: 999px; font-weight: 600; font-size: 14px; }
    .d1-hero { padding: 64px 56px 32px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }
    .d1-eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; border-radius: 999px; background: rgba(232,169,43,0.2); color: #8a5a00; font-size: 13px; font-weight: 600; letter-spacing: 0.02em; }
    .d1-eyebrow::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--amber); }
    .d1-hero h1 { font-size: 92px; line-height: 0.95; margin: 24px 0 28px; font-weight: 600; }
    .d1-hero h1 em { font-style: italic; color: var(--red); font-family: 'Newsreader', serif; font-weight: 500; }
    .d1-hero p { font-size: 20px; line-height: 1.5; color: #4a4035; max-width: 480px; margin: 0 0 32px; }
    .d1-hero-ctas { display: flex; gap: 14px; align-items: center; }
    .d1-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 28px; border-radius: 999px; font-weight: 600; font-size: 16px; text-decoration: none; }
    .d1-btn-primary { background: var(--red); color: white; }
    .d1-btn-ghost { background: transparent; color: var(--ink); border: 1.5px solid var(--ink); }
    .d1-hero-photo { aspect-ratio: 4/5; border-radius: 24px; background:
      repeating-linear-gradient(135deg, #c0392b 0 14px, #a8311f 14px 28px);
      position: relative; overflow: hidden; display: flex; align-items: flex-end; padding: 24px; color: white; }
    .d1-hero-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; background: rgba(0,0,0,0.4); padding: 6px 10px; border-radius: 6px; }
    .d1-hero-photo .sticker { position: absolute; top: 24px; right: 24px; background: var(--amber); color: #1f1a14; padding: 14px 16px; border-radius: 18px; font-weight: 700; font-size: 14px; line-height: 1.2; transform: rotate(6deg); }
    .d1-strip { display: flex; gap: 0; background: var(--ink); color: var(--cream); padding: 22px 0; align-items: center; overflow: hidden; }
    .d1-strip span { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 28px; padding: 0 28px; display: inline-flex; align-items: center; gap: 28px; white-space: nowrap; letter-spacing: -0.01em; }
    .d1-strip .star { color: var(--amber); font-size: 20px; }
    .d1-services { padding: 88px 56px; }
    .d1-sec-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 48px; }
    .d1-sec-head h2 { font-size: 56px; line-height: 1; font-weight: 600; margin: 12px 0 0; max-width: 720px; }
    .d1-sec-head .label { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--red); letter-spacing: 0.1em; text-transform: uppercase; }
    .d1-sec-head p { color: #4a4035; font-size: 17px; max-width: 320px; margin: 0; }
    .d1-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .d1-card { background: var(--paper); border-radius: 28px; padding: 36px; position: relative; min-height: 320px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid rgba(31,26,20,0.08); }
    .d1-card.feat { background: var(--ink); color: var(--cream); }
    .d1-card.feat .d1-card-num { color: var(--amber); }
    .d1-card.feat .d1-card-meta { color: rgba(255,255,255,0.6); }
    .d1-card-num { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--red); letter-spacing: 0.1em; }
    .d1-card h3 { font-size: 36px; font-weight: 600; line-height: 1; margin: 16px 0 12px; }
    .d1-card p { font-size: 15px; line-height: 1.5; color: #4a4035; margin: 0; }
    .d1-card.feat p { color: rgba(255,255,255,0.75); }
    .d1-card-meta { display: flex; gap: 18px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #6b5d4d; margin-top: 24px; padding-top: 20px; border-top: 1px dashed rgba(31,26,20,0.2); }
    .d1-card.feat .d1-card-meta { border-top-color: rgba(255,255,255,0.2); }
    .d1-card .badge-row { display: flex; gap: 8px; margin-top: 18px; flex-wrap: wrap; }
    .d1-badge { font-size: 12px; padding: 6px 12px; border-radius: 999px; background: rgba(192,57,43,0.1); color: var(--red); font-weight: 600; }
    .d1-card.feat .d1-badge { background: rgba(232,169,43,0.18); color: var(--amber); }
    .d1-community { padding: 0 56px 64px; }
    .d1-community-inner { background: var(--red); border-radius: 32px; padding: 56px; color: white; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; position: relative; overflow: hidden; }
    .d1-community-inner::before { content: ''; position: absolute; right: -80px; top: -80px; width: 320px; height: 320px; border-radius: 50%; background: rgba(232,169,43,0.25); }
    .d1-community-inner h2 { font-size: 56px; line-height: 1; font-weight: 600; margin: 0 0 16px; position: relative; }
    .d1-community-inner h2 em { font-style: italic; color: #ffe1a8; font-family: 'Newsreader', serif; font-weight: 500; }
    .d1-community-inner p { font-size: 17px; line-height: 1.55; opacity: 0.92; margin: 0 0 24px; position: relative; }
    .d1-community-stats { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; position: relative; }
    .d1-stat { background: rgba(255,255,255,0.12); border-radius: 18px; padding: 20px; backdrop-filter: blur(6px); }
    .d1-stat-num { font-family: 'Space Grotesk', sans-serif; font-size: 44px; font-weight: 700; line-height: 1; }
    .d1-stat-lab { font-size: 13px; opacity: 0.85; margin-top: 6px; }
    .d1-quote-row { padding: 0 56px 80px; }
    .d1-quote { background: var(--paper); border-radius: 28px; padding: 48px 56px; display: grid; grid-template-columns: auto 1fr; gap: 40px; align-items: start; border: 1px solid rgba(31,26,20,0.08); }
    .d1-quote-avatar { width: 120px; height: 120px; border-radius: 50%; background: repeating-linear-gradient(135deg, #d4af7a 0 8px, #c19a65 8px 16px); display: flex; align-items: center; justify-content: center; font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: white; text-align: center; padding: 8px; }
    .d1-quote blockquote { font-family: 'Newsreader', serif; font-size: 26px; line-height: 1.35; font-weight: 400; margin: 0 0 20px; color: var(--ink); font-style: italic; }
    .d1-quote cite { font-style: normal; font-weight: 600; font-size: 15px; color: var(--red); }
    .d1-quote cite span { color: #6b5d4d; font-weight: 400; }
  `;

  return (
    <div className="d1">
      <style>{css}</style>
      <nav className="d1-nav">
        <div className="d1-logo"><span className="dot">D</span>dean michniew</div>
        <ul>
          <li>Personal Training</li>
          <li>Running Club</li>
          <li>Bootcamp</li>
          <li>Learn</li>
          <li>About</li>
        </ul>
        <a className="cta">Book a chat →</a>
      </nav>

      <section className="d1-hero">
        <div>
          <span className="d1-eyebrow">Bingham, Nottinghamshire · IronHQ</span>
          <h1>Find your <em>people.</em><br/>Find your strength.</h1>
          <p>Personal training, group runs, bootcamps and skills sessions — built around real life and real people. Wherever you're starting from, you'll fit in here.</p>
          <div className="d1-hero-ctas">
            <a className="d1-btn d1-btn-primary">Start training →</a>
            <a className="d1-btn d1-btn-ghost">Sunday run is free</a>
          </div>
        </div>
        <div className="d1-hero-photo">
          <div className="sticker">All abilities<br/>welcome</div>
          <div className="ph-label">[ photo · run-club group at Bingham Market Place ]</div>
        </div>
      </section>

      <div className="d1-strip">
        <span>TRAIN<span className="star">✦</span>PROGRESS<span className="star">✦</span>SUCCEED<span className="star">✦</span>TRAIN<span className="star">✦</span>PROGRESS<span className="star">✦</span>SUCCEED<span className="star">✦</span>TRAIN<span className="star">✦</span>PROGRESS<span className="star">✦</span></span>
      </div>

      <section className="d1-services">
        <div className="d1-sec-head">
          <div>
            <div className="label">— What's on —</div>
            <h2>Four ways to train with me this week.</h2>
          </div>
          <p>Mix and match. Most clients start with one thing and grow from there.</p>
        </div>
        <div className="d1-cards">
          <div className="d1-card feat">
            <div>
              <div className="d1-card-num">01 / FLAGSHIP</div>
              <h3>1-to-1 Personal Training</h3>
              <p>State-of-the-art kit at IronHQ. Programme built around you — your body, your goals, your schedule. Hevy Pro app included.</p>
              <div className="badge-row">
                <span className="d1-badge">Beginners welcome</span>
                <span className="d1-badge">From £30</span>
              </div>
            </div>
            <div className="d1-card-meta"><span>IronHQ Bingham</span><span>1-to-1 or small group</span></div>
          </div>
          <div className="d1-card">
            <div>
              <div className="d1-card-num">02 / FREE</div>
              <h3>Sunday Running Club</h3>
              <p>9am at Bingham Market Place, every week, rain or shine. Lap-based route, all paces, all ages — followed by breakfast at Gilt.</p>
              <div className="badge-row">
                <span className="d1-badge">Free always</span>
                <span className="d1-badge">Dogs &amp; prams ok</span>
              </div>
            </div>
            <div className="d1-card-meta"><span>Sun · 9:00</span><span>Bingham Market Place</span></div>
          </div>
          <div className="d1-card">
            <div>
              <div className="d1-card-num">03 / GROUP</div>
              <h3>Thursday Bootcamp</h3>
              <p>A proper sweat in good company. Mixed-ability circuits at Bingham RUFC, 5:30pm. Pay-as-you-go, cash or card on the door.</p>
              <div className="badge-row">
                <span className="d1-badge">£10 drop-in</span>
                <span className="d1-badge">All abilities</span>
              </div>
            </div>
            <div className="d1-card-meta"><span>Thu · 17:30</span><span>Bingham RUFC</span></div>
          </div>
          <div className="d1-card">
            <div>
              <div className="d1-card-num">04 / NEW</div>
              <h3>Skills &amp; Learning Sessions</h3>
              <p>Small-group workshops at IronHQ. Deadlift technique, running form, kettlebells — pick a skill, leave with confidence.</p>
              <div className="badge-row">
                <span className="d1-badge">Monthly</span>
                <span className="d1-badge">IronHQ</span>
              </div>
            </div>
            <div className="d1-card-meta"><span>By topic</span><span>Limited spaces</span></div>
          </div>
        </div>
      </section>

      <section className="d1-community">
        <div className="d1-community-inner">
          <div>
            <h2>It's <em>more</em> than just<br/>workouts.</h2>
            <p>Every session is about building confidence, consistency and a healthier life — alongside people who'll cheer you on. New friendships, new experiences, a body you trust.</p>
            <a className="d1-btn" style={{background:'#1f1a14', color:'#fff'}}>About Dean →</a>
          </div>
          <div className="d1-community-stats">
            <div className="d1-stat"><div className="d1-stat-num">40+</div><div className="d1-stat-lab">runners every Sunday</div></div>
            <div className="d1-stat"><div className="d1-stat-num">£0</div><div className="d1-stat-lab">to join the run club</div></div>
            <div className="d1-stat"><div className="d1-stat-num">L3</div><div className="d1-stat-lab">qualified PT &amp; coach</div></div>
            <div className="d1-stat"><div className="d1-stat-num">2026</div><div className="d1-stat-lab">brand-new IronHQ home</div></div>
          </div>
        </div>
      </section>

      <section className="d1-quote-row">
        <div className="d1-quote">
          <div className="d1-quote-avatar">[ client photo ]</div>
          <div>
            <blockquote>"From 10 minutes of exercise to two hours a day. Dean grows the plan around you — he's changed my life immeasurably. If you're on the fence, he is for you."</blockquote>
            <cite>Real client <span>· 18 months in</span></cite>
          </div>
        </div>
      </section>
    </div>
  );
}

window.InclusiveDesign = InclusiveDesign;
