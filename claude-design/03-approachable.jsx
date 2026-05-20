// Design 3 — Approachable / Warm
// Flips to a warm light palette. Newsreader serif + Manrope. Soft cards, conversational copy.

function ApproachableDesign() {
  const css = `
    .d3 { font-family: 'Manrope', sans-serif; background: #f6f1ea; color: #221d18; width: 1280px; height: 2400px; overflow: hidden; position: relative; --red: #b54234; --rust: #8a3026; --ink: #221d18; --bg: #f6f1ea; --paper: #fdfaf5; --line: #e3dccf; --soft: #ead9c4; }
    .d3 *, .d3 *::before, .d3 *::after { box-sizing: border-box; }
    .d3 h1, .d3 h2, .d3 h3, .d3 .serif { font-family: 'Newsreader', serif; font-weight: 500; letter-spacing: -0.015em; }
    .d3 .mono { font-family: 'IBM Plex Mono', monospace; }
    .d3-nav { display: flex; align-items: center; justify-content: space-between; padding: 28px 64px; }
    .d3-logo { font-family: 'Newsreader', serif; font-weight: 600; font-size: 24px; font-style: italic; letter-spacing: -0.02em; }
    .d3-logo span { color: var(--red); }
    .d3-nav ul { display: flex; gap: 36px; list-style: none; padding: 0; margin: 0; font-size: 15px; font-weight: 500; color: #5a4f43; }
    .d3-nav .cta { background: var(--ink); color: var(--bg); padding: 12px 22px; border-radius: 10px; font-weight: 600; font-size: 14px; }
    .d3-hero { padding: 32px 64px 64px; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 64px; align-items: center; }
    .d3-hero-greet { font-family: 'Newsreader', serif; font-style: italic; font-size: 22px; color: var(--red); margin-bottom: 16px; }
    .d3-hero h1 { font-size: 88px; line-height: 1.02; font-weight: 400; margin: 0 0 28px; color: var(--ink); }
    .d3-hero h1 em { color: var(--red); font-style: italic; }
    .d3-hero p { font-size: 20px; line-height: 1.55; color: #5a4f43; margin: 0 0 32px; max-width: 520px; font-weight: 400; }
    .d3-hero-ctas { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
    .d3-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 26px; border-radius: 10px; font-weight: 600; font-size: 15px; }
    .d3-btn-primary { background: var(--red); color: white; }
    .d3-btn-ghost { background: transparent; color: var(--ink); }
    .d3-hero-aside { font-size: 14px; color: #7a6f63; font-style: italic; }
    .d3-portrait { position: relative; }
    .d3-portrait-frame { aspect-ratio: 4/5; border-radius: 16px; background:
      linear-gradient(180deg, rgba(34,29,24,0.1), rgba(34,29,24,0.3)),
      repeating-linear-gradient(135deg, #c5a987 0 18px, #b39676 18px 36px);
      overflow: hidden; position: relative; display: flex; align-items: flex-end; padding: 24px; }
    .d3-portrait .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: rgba(255,255,255,0.85); background: rgba(0,0,0,0.4); padding: 6px 10px; border-radius: 4px; }
    .d3-portrait-card { position: absolute; bottom: -28px; left: -28px; background: var(--paper); padding: 20px 24px; border-radius: 14px; box-shadow: 0 12px 32px rgba(34,29,24,0.12); display: flex; align-items: center; gap: 14px; }
    .d3-portrait-card .dot { width: 12px; height: 12px; border-radius: 50%; background: #4ea65f; }
    .d3-portrait-card .text { font-size: 14px; font-weight: 600; }
    .d3-portrait-card .text small { display: block; color: #7a6f63; font-weight: 400; font-size: 12px; margin-top: 2px; }
    .d3-creds { padding: 48px 64px; display: flex; gap: 56px; align-items: center; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); flex-wrap: wrap; }
    .d3-creds-label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #7a6f63; letter-spacing: 0.16em; text-transform: uppercase; }
    .d3-creds-list { display: flex; gap: 40px; flex-wrap: wrap; font-family: 'Newsreader', serif; font-size: 18px; font-style: italic; color: #4a4035; }
    .d3-creds-list span { display: inline-flex; align-items: center; gap: 12px; }
    .d3-creds-list span::before { content: '·'; color: var(--red); font-size: 28px; line-height: 0; position: relative; top: -2px; }
    .d3-services { padding: 80px 64px; }
    .d3-sec-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--red); letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 12px; }
    .d3-sec-head h2 { font-size: 64px; line-height: 1.02; font-weight: 400; margin: 0 0 16px; max-width: 800px; }
    .d3-sec-head h2 em { font-style: italic; color: var(--red); }
    .d3-sec-head p { font-size: 18px; color: #5a4f43; max-width: 600px; margin: 0 0 48px; line-height: 1.5; }
    .d3-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .d3-card { background: var(--paper); border-radius: 20px; padding: 36px 36px 28px; min-height: 280px; display: flex; flex-direction: column; justify-content: space-between; border: 1px solid var(--line); }
    .d3-card-top { display: flex; align-items: start; gap: 20px; }
    .d3-card-icon { width: 56px; height: 56px; border-radius: 14px; background: var(--soft); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: 'Newsreader', serif; font-style: italic; font-weight: 600; font-size: 26px; color: var(--red); }
    .d3-card h3 { font-size: 30px; line-height: 1.1; font-weight: 500; margin: 0 0 10px; }
    .d3-card h3 em { font-style: italic; color: var(--red); }
    .d3-card p { font-size: 15px; line-height: 1.55; color: #5a4f43; margin: 0; }
    .d3-card-foot { display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--line); }
    .d3-card-foot .meta { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #7a6f63; letter-spacing: 0.06em; }
    .d3-card-foot .meta strong { color: var(--ink); font-weight: 600; }
    .d3-card-foot .arrow { color: var(--red); font-size: 22px; }
    .d3-pull { padding: 0 64px 80px; }
    .d3-pull-inner { background: var(--ink); border-radius: 24px; padding: 64px; color: var(--paper); display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
    .d3-pull-inner h2 { font-family: 'Newsreader', serif; font-size: 48px; line-height: 1.15; font-weight: 400; font-style: italic; margin: 0 0 24px; }
    .d3-pull-inner h2 .red { color: #ff7a6a; font-style: italic; }
    .d3-pull-inner p { font-size: 17px; line-height: 1.6; color: rgba(253,250,245,0.78); margin: 0 0 16px; }
    .d3-signature { font-family: 'Newsreader', serif; font-style: italic; font-size: 22px; margin-top: 24px; color: #ff7a6a; }
    .d3-pull-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
    .d3-pull-stat { padding: 22px; border-radius: 14px; background: rgba(253,250,245,0.06); border: 1px solid rgba(253,250,245,0.1); }
    .d3-pull-stat-num { font-family: 'Newsreader', serif; font-weight: 400; font-size: 56px; line-height: 1; color: white; }
    .d3-pull-stat-num em { font-style: italic; color: #ff7a6a; }
    .d3-pull-stat-lab { font-size: 13px; color: rgba(253,250,245,0.7); margin-top: 6px; }
    .d3-quote { padding: 0 64px 80px; }
    .d3-quote-inner { display: grid; grid-template-columns: auto 1fr; gap: 48px; align-items: start; }
    .d3-quote-mark { font-family: 'Newsreader', serif; font-size: 200px; line-height: 0.8; color: var(--red); font-style: italic; }
    .d3-quote blockquote { font-family: 'Newsreader', serif; font-size: 32px; line-height: 1.35; font-weight: 400; margin: 0 0 24px; max-width: 880px; color: var(--ink); }
    .d3-quote blockquote em { font-style: italic; color: var(--red); }
    .d3-quote cite { font-style: normal; font-size: 14px; color: #5a4f43; }
    .d3-quote cite strong { color: var(--ink); font-weight: 600; }
  `;

  return (
    <div className="d3">
      <style>{css}</style>
      <nav className="d3-nav">
        <div className="d3-logo">Dean <span>Michniew</span></div>
        <ul>
          <li>About me</li>
          <li>Training</li>
          <li>Sunday run</li>
          <li>Bootcamp</li>
          <li>Learn</li>
        </ul>
        <a className="d3-cta cta">Say hello →</a>
      </nav>

      <section className="d3-hero">
        <div>
          <div className="d3-hero-greet">Hello there —</div>
          <h1>I'll meet you exactly <em>where you are.</em></h1>
          <p>Personal training, group runs and bootcamp in Bingham — built around real people, real lives, and a simple promise: no judgement, no crash diets, no pressure to look a certain way.</p>
          <div className="d3-hero-ctas">
            <a className="d3-btn d3-btn-primary">Book a free chat →</a>
            <a className="d3-btn d3-btn-ghost">Or just turn up Sunday</a>
          </div>
          <div className="d3-hero-aside" style={{marginTop:24}}>Not chasing aesthetics. Chasing health.</div>
        </div>
        <div className="d3-portrait">
          <div className="d3-portrait-frame">
            <div className="ph-label">[ portrait · Dean, warm natural light ]</div>
          </div>
          <div className="d3-portrait-card">
            <div className="dot"></div>
            <div className="text">Taking new clients<small>Bingham · NG13 · IronHQ</small></div>
          </div>
        </div>
      </section>

      <section className="d3-creds">
        <div className="d3-creds-label">CREDENTIALS —</div>
        <div className="d3-creds-list">
          <span>Level 3 Personal Trainer</span>
          <span>Functional Fitness Coach</span>
          <span>Founder · Bingham Sunday Run Club</span>
          <span>First Aid Qualified</span>
        </div>
      </section>

      <section className="d3-services">
        <div className="d3-sec-head">
          <div className="d3-sec-eyebrow">— Ways we can work together</div>
          <h2>Four things to <em>try this month.</em></h2>
          <p>Most people start with one — usually the Sunday run, because it's free and friendly — then build from there. There's no right order. Pick whatever feels like the smallest brave step.</p>
        </div>
        <div className="d3-cards">
          <div className="d3-card">
            <div className="d3-card-top">
              <div className="d3-card-icon">1</div>
              <div>
                <h3>One-to-one <em>personal training</em></h3>
                <p>An hour with me at IronHQ in Bingham, programmed around your body and your week. Hevy Pro app included so you've got me in your pocket between sessions.</p>
              </div>
            </div>
            <div className="d3-card-foot">
              <div className="meta">From <strong>£30</strong> · IronHQ Bingham</div>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="d3-card">
            <div className="d3-card-top">
              <div className="d3-card-icon">2</div>
              <div>
                <h3>Bingham <em>Sunday Run Club</em></h3>
                <p>9am at the Market Place, every Sunday, rain or shine. Lap-based so you can do one or six. Breakfast at Gilt after. No sign-up, no fees, no pace anxiety.</p>
              </div>
            </div>
            <div className="d3-card-foot">
              <div className="meta"><strong>Free</strong> · Sun 09:00 · Market Place</div>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="d3-card">
            <div className="d3-card-top">
              <div className="d3-card-icon">3</div>
              <div>
                <h3>Thursday <em>Bootcamp</em></h3>
                <p>Friendly, sweaty, no-ego circuits at Bingham RUFC. Cash or card on the door — turn up when you can, no membership. A really nice way in if 1-to-1 feels big.</p>
              </div>
            </div>
            <div className="d3-card-foot">
              <div className="meta"><strong>£10</strong> drop-in · Thu 17:30 · The Pavilion</div>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="d3-card">
            <div className="d3-card-top">
              <div className="d3-card-icon">4</div>
              <div>
                <h3>Skills <em>&amp; learning sessions</em></h3>
                <p>Small-group workshops at IronHQ — deadlift technique, kettlebell foundations, running form. Leave with a move you actually know how to do.</p>
              </div>
            </div>
            <div className="d3-card-foot">
              <div className="meta">Monthly · IronHQ · 4–6 spaces</div>
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </section>

      <section className="d3-pull">
        <div className="d3-pull-inner">
          <div>
            <h2>Every session is about <span className="red">more than the workout.</span></h2>
            <p>It's about confidence, consistency, and a life that feels a bit better than last week's. I'm proud of every client who shows up and pushes past their limits — and grateful to be part of that journey.</p>
            <p>Whether your goal is fat loss, strength, fitness, or simply feeling more at home in your own body — results don't happen overnight. But with the right support, they happen.</p>
            <div className="d3-signature">— Dean</div>
          </div>
          <div className="d3-pull-stats">
            <div className="d3-pull-stat"><div className="d3-pull-stat-num"><em>40+</em></div><div className="d3-pull-stat-lab">Sunday runners every week</div></div>
            <div className="d3-pull-stat"><div className="d3-pull-stat-num"><em>5★</em></div><div className="d3-pull-stat-lab">All-abilities welcome</div></div>
            <div className="d3-pull-stat"><div className="d3-pull-stat-num">£0</div><div className="d3-pull-stat-lab">For the run club, always</div></div>
            <div className="d3-pull-stat"><div className="d3-pull-stat-num">L3</div><div className="d3-pull-stat-lab">Qualified · First aid</div></div>
          </div>
        </div>
      </section>

      <section className="d3-quote">
        <div className="d3-quote-inner">
          <div className="d3-quote-mark">"</div>
          <div>
            <blockquote>Starting small with one group class a week, then two, then three, then PT — has been an absolutely <em>magical experience.</em> Dean has changed my life immeasurably for the better.</blockquote>
            <cite><strong>A long-term client</strong> · 18 months in</cite>
          </div>
        </div>
      </section>
    </div>
  );
}

window.ApproachableDesign = ApproachableDesign;
