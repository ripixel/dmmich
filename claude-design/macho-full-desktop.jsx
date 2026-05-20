// Macho / Industrial — Desktop, fully developed.
// Builds on the original direction with: weekly schedule, run club feature,
// learning sessions, gallery, FAQ, big contact strip, full footer.

function MachoFullDesign() {
  const css = `
    .df { font-family: 'Saira', sans-serif; background: #0a0a0a; color: #f1f1f1; width: 1440px; overflow: hidden; position: relative;
      --red: #e0241f; --redd: #b51c18; --bg: #0a0a0a; --panel: #141414; --panel2: #1c1c1c; --steel: #8a8a8a; --line: #2a2a2a; --muted: #6a6a6a;
    }
    .df *, .df *::before, .df *::after { box-sizing: border-box; }
    .df .cond, .df h1, .df h2, .df h3, .df h4 { font-family: 'Saira Condensed', sans-serif; font-weight: 800; text-transform: uppercase; letter-spacing: 0; }
    .df .mono { font-family: 'IBM Plex Mono', monospace; }
    .df-mast { display: grid; grid-template-columns: 1fr auto 1fr; padding: 12px 56px; border-bottom: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.08em; }
    .df-mast .c { text-align: center; }
    .df-mast .r { text-align: right; }
    .df-mast .red { color: var(--red); }
    .df-nav { display: grid; grid-template-columns: 1fr auto 1fr; gap: 40px; align-items: center; padding: 22px 56px; border-bottom: 1px solid var(--line); }
    .df-logo { display: flex; align-items: center; gap: 14px; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 24px; letter-spacing: 0.04em; text-transform: uppercase; }
    .df-logo::before { content: ''; width: 38px; height: 38px; background: var(--red); clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%); }
    .df-logo span { color: var(--red); }
    .df-nav ul { display: flex; gap: 32px; list-style: none; padding: 0; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; justify-content: center; }
    .df-nav .right { display: flex; gap: 14px; justify-self: end; align-items: center; }
    .df-nav .phone { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--steel); }
    .df-nav .cta { background: var(--red); color: white; padding: 11px 26px; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%); padding-right: 36px; }

    /* HERO */
    .df-hero { position: relative; height: 880px; overflow: hidden; }
    .df-hero-bg { position: absolute; inset: 0; background:
      linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.55) 55%, var(--bg) 100%),
      repeating-linear-gradient(45deg, #1a1a1a 0 12px, #0e0e0e 12px 24px); }
    .df-hero-bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 25% 45%, rgba(224,36,31,0.35) 0%, transparent 50%); }
    .df-hero-inner { position: relative; padding: 80px 56px 60px; height: 100%; display: flex; flex-direction: column; justify-content: space-between; }
    .df-eyebrow { display: inline-flex; align-items: center; gap: 12px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; }
    .df-eyebrow::before { content: ''; width: 32px; height: 1px; background: var(--red); }
    .df-hero h1 { font-size: 220px; line-height: 0.82; margin: 32px 0 0; font-weight: 900; letter-spacing: -0.012em; }
    .df-hero h1 .red { color: var(--red); }
    .df-hero h1 .outline { -webkit-text-stroke: 2.5px #f1f1f1; color: transparent; }
    .df-hero-foot { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr; gap: 36px; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.15); align-items: end; }
    .df-hero-foot p { font-size: 17px; line-height: 1.5; color: #c8c8c8; margin: 0; max-width: 380px; }
    .df-stat-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.18em; color: var(--steel); text-transform: uppercase; }
    .df-stat-val { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 48px; line-height: 1; margin-top: 4px; }
    .df-stat-val .red { color: var(--red); }

    /* STRIP */
    .df-strip { background: var(--red); color: #0a0a0a; padding: 18px 0; display: flex; align-items: center; overflow: hidden; }
    .df-strip-inner { display: flex; gap: 0; white-space: nowrap; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 28px; letter-spacing: 0.04em; text-transform: uppercase; }
    .df-strip-inner span { padding: 0 28px; display: inline-flex; align-items: center; gap: 28px; }
    .df-strip-inner .x { font-size: 18px; }

    /* SERVICES */
    .df-services { padding: 80px 56px; }
    .df-sec-head { display: grid; grid-template-columns: auto 1fr; gap: 80px; align-items: end; margin-bottom: 48px; padding-bottom: 24px; border-bottom: 1px solid var(--line); }
    .df-sec-head h2 { font-size: 96px; line-height: 0.9; margin: 0; font-weight: 900; }
    .df-sec-head h2 .red { color: var(--red); }
    .df-sec-head .num { font-family: 'IBM Plex Mono', monospace; font-size: 13px; color: var(--steel); letter-spacing: 0.2em; text-transform: uppercase; align-self: start; padding-top: 16px; }
    .df-sec-head .right { justify-self: end; max-width: 360px; font-size: 15px; line-height: 1.55; color: #c0c0c0; align-self: center; }
    .df-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); }
    .df-card { background: var(--bg); padding: 40px 36px; min-height: 360px; position: relative; display: flex; flex-direction: column; justify-content: space-between; }
    .df-card.dark { background: var(--panel); }
    .df-card-tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; }
    .df-card h3 { font-size: 52px; line-height: 0.95; margin: 14px 0 18px; }
    .df-card p { font-size: 15px; line-height: 1.55; color: #b8b8b8; margin: 0; max-width: 480px; }
    .df-card-foot { display: flex; justify-content: space-between; align-items: end; margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--steel); text-transform: uppercase; letter-spacing: 0.12em; }
    .df-card-foot .arrow { color: var(--red); font-size: 24px; }
    .df-pricing { background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 22px; padding: 4px 12px; clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%); display: inline-block; padding-right: 20px; margin-top: 14px; }

    /* PT FLAGSHIP card — hero row in services grid */
    .df-card.hero { grid-column: 1 / -1; background: var(--panel); padding: 0; display: grid; grid-template-columns: 1.1fr 1fr; min-height: 520px; align-items: stretch; position: relative; }
    .df-card.hero::before { content: 'THE MAIN THING'; position: absolute; top: 28px; left: 48px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; z-index: 2; }
    .df-card-hero-left { padding: 60px 48px 40px; display: flex; flex-direction: column; gap: 18px; justify-content: space-between; }
    .df-card-hero-left .df-card-tag { color: white; }
    .df-card-hero-left h3 { font-size: 96px; line-height: 0.88; margin: 14px 0 14px; }
    .df-card-hero-left p { font-size: 16.5px; line-height: 1.55; color: #c8c8c8; margin: 0; max-width: none; }
    .df-card-features { list-style: none; padding: 20px 0 0; margin: 6px 0 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 32px; border-top: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: white; letter-spacing: 0.04em; }
    .df-card-features li { display: grid; grid-template-columns: 14px 1fr; gap: 8px; }
    .df-card-features li::before { content: '▸'; color: var(--red); }
    .df-card-hero-left .hero-foot { display: flex; gap: 20px; align-items: center; padding-top: 24px; border-top: 1px solid var(--line); justify-content: space-between; flex-wrap: wrap; }
    .df-pricing.big { font-size: 26px; padding: 6px 14px; padding-right: 24px; margin-top: 0; }
    .df-card-hero-photo { background:
      linear-gradient(180deg, rgba(10,10,10,0.2), rgba(10,10,10,0.7)),
      radial-gradient(circle at 30% 60%, rgba(224,36,31,0.28), transparent 65%),
      repeating-linear-gradient(135deg, #1a1a1a 0 14px, #0e0e0e 14px 28px);
      position: relative; display: flex; align-items: end; padding: 28px; }
    .df-card-hero-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.85); background: rgba(0,0,0,0.55); padding: 6px 10px; }
    .df-card-hero-photo .overlay-tag { position: absolute; top: 28px; right: 28px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 13px; letter-spacing: 0.12em; padding: 6px 14px; clip-path: polygon(0 0, 100% 0, calc(100% - 7px) 100%, 0 100%); padding-right: 22px; text-transform: uppercase; }

    /* PT FLAGSHIP price card */
    .df-prices-grid { grid-template-columns: 2fr 1fr 1fr; }
    .df-price.feat { background: linear-gradient(135deg, var(--panel) 0%, #2a1414 100%); position: relative; }
    .df-price.feat::after { content: 'FLAGSHIP'; position: absolute; top: 22px; right: 22px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: white; background: var(--red); padding: 4px 10px; letter-spacing: 0.16em; clip-path: polygon(0 0, 100% 0, calc(100% - 5px) 100%, 0 100%); padding-right: 16px; }
    .df-price.feat h3 { font-size: 34px; }
    .df-price.feat .amount { font-size: 88px; }

    /* SCHEDULE */
    .df-sched { padding: 0 56px 80px; }
    .df-sched-table { display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); }
    .df-sched-row { display: grid; grid-template-columns: 100px 100px 1.4fr 1fr 1fr 100px 100px; background: var(--bg); padding: 18px 24px; gap: 24px; align-items: center; font-family: 'IBM Plex Mono', monospace; font-size: 13px; }
    .df-sched-row.head { background: var(--panel); color: var(--steel); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; }
    .df-sched-row .day { font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 18px; color: white; letter-spacing: 0.06em; }
    .df-sched-row .time { color: var(--red); font-weight: 600; }
    .df-sched-row .what { color: white; font-weight: 500; }
    .df-sched-row .what small { display: block; color: var(--steel); font-weight: 400; margin-top: 2px; font-size: 11px; }
    .df-sched-row .loc { color: #c8c8c8; }
    .df-sched-row .price { color: white; font-weight: 600; }
    .df-sched-row .price.red { color: var(--red); }
    .df-sched-row .status { display: inline-block; padding: 4px 8px; background: rgba(224,36,31,0.18); color: var(--red); font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-align: center; text-transform: uppercase; }
    .df-sched-row .status.full { background: rgba(255,255,255,0.06); color: var(--steel); }
    .df-sched-row.highlight { background: var(--panel); }

    /* IRONHQ */
    .df-ironhq { padding: 0 56px 80px; }
    .df-ironhq-inner { background: var(--panel); display: grid; grid-template-columns: 1fr 1fr; min-height: 540px; position: relative; }
    .df-ironhq-photo { background:
      linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
      radial-gradient(circle at 30% 60%, rgba(224,36,31,0.18), transparent 65%),
      repeating-linear-gradient(135deg, #1a1a1a 0 14px, #0e0e0e 14px 28px); position: relative; display: flex; align-items: end; padding: 28px; }
    .df-ironhq-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.55); padding: 6px 10px; }
    .df-ironhq-photo::before { content: 'HQ'; position: absolute; top: 36px; left: 36px; font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 120px; color: var(--red); line-height: 1; }
    .df-ironhq-body { padding: 56px 48px; display: flex; flex-direction: column; justify-content: center; }
    .df-ironhq-body h2 { font-size: 80px; line-height: 0.9; margin: 24px 0 20px; }
    .df-ironhq-body p { font-size: 17px; line-height: 1.55; color: #c8c8c8; margin: 0 0 28px; }
    .df-ironhq-list { list-style: none; padding: 0; margin: 0 0 32px; }
    .df-ironhq-list li { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; }
    .df-ironhq-list li::before { content: '▸'; color: var(--red); font-size: 18px; }
    .df-btn { display: inline-flex; align-items: center; gap: 14px; padding: 16px 28px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 18px; letter-spacing: 0.08em; text-transform: uppercase; clip-path: polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%); padding-right: 42px; align-self: flex-start; }
    .df-btn.ghost { background: transparent; border: 1.5px solid var(--line); color: white; clip-path: none; padding: 16px 28px; }

    /* RUN CLUB FEATURE */
    .df-runclub { background: var(--bg); padding: 80px 56px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 1fr 1.2fr; gap: 56px; align-items: center; }
    .df-runclub-photo { aspect-ratio: 4/5; background:
      linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.7)),
      repeating-linear-gradient(135deg, #4a5a3d 0 16px, #3a482e 16px 32px); position: relative; display: flex; align-items: end; padding: 24px; }
    .df-runclub-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.8); background: rgba(0,0,0,0.55); padding: 6px 10px; }
    .df-runclub-photo .overlay-tag { position: absolute; top: 28px; left: 28px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 14px; letter-spacing: 0.12em; padding: 7px 14px; clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%); padding-right: 22px; text-transform: uppercase; }
    .df-runclub-body h2 { font-size: 100px; line-height: 0.88; margin: 18px 0 24px; }
    .df-runclub-body h2 .red { color: var(--red); }
    .df-runclub-body p { font-size: 17px; line-height: 1.55; color: #c8c8c8; margin: 0 0 16px; max-width: 580px; }
    .df-runclub-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); margin: 28px 0; }
    .df-runclub-stat { background: var(--bg); padding: 22px 20px; }
    .df-runclub-stat .v { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 44px; line-height: 1; }
    .df-runclub-stat .v .red { color: var(--red); }
    .df-runclub-stat .l { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--steel); letter-spacing: 0.16em; text-transform: uppercase; margin-top: 6px; }
    .df-runclub-ctas { display: flex; gap: 14px; }

    /* GALLERY */
    .df-gal { padding: 80px 56px; }
    .df-gal-head { display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
    .df-gal-head h2 { font-size: 72px; line-height: 0.92; margin: 8px 0 0; }
    .df-gal-head h2 .red { color: var(--red); }
    .df-gal-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; grid-template-rows: 240px 240px; gap: 4px; }
    .df-gal-cell { background: var(--panel2); position: relative; display: flex; align-items: end; padding: 16px; overflow: hidden; }
    .df-gal-cell.tall { grid-row: span 2; }
    .df-gal-cell .lab { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.7); background: rgba(0,0,0,0.55); padding: 4px 8px; }
    .df-gal-cell .meta { position: absolute; top: 16px; left: 16px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.55); letter-spacing: 0.12em; text-transform: uppercase; }
    .df-gal-cell.g1 { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #2a3a4d 0 14px, #1a2838 14px 28px); }
    .df-gal-cell.g2 { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #4a5a3d 0 12px, #3a482e 12px 24px); }
    .df-gal-cell.g3 { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #4a3030 0 12px, #341c1c 12px 24px); }
    .df-gal-cell.g4 { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #3a3a3a 0 12px, #2a2a2a 12px 24px); }
    .df-gal-cell.g5 { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #2a3a3a 0 12px, #1a2a2a 12px 24px); }

    /* TESTIMONIALS */
    .df-testimonials { padding: 80px 56px; background: var(--panel); }
    .df-testimonials h2 { font-size: 96px; line-height: 0.9; margin: 0 0 12px; }
    .df-testimonials h2 .red { color: var(--red); }
    .df-testimonials .sub { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--steel); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 40px; }
    .df-test-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 16px; align-items: stretch; }
    .df-test { background: var(--bg); padding: 32px 30px; border-left: 3px solid var(--red); display: flex; flex-direction: column; justify-content: space-between; }
    .df-test.feat { padding: 40px 36px; }
    .df-test.feat blockquote { font-size: 22px; }
    .df-test .stars { color: var(--red); font-size: 13px; letter-spacing: 0.1em; margin-bottom: 16px; }
    .df-test blockquote { margin: 0 0 18px; font-size: 15px; line-height: 1.55; color: #e0e0e0; }
    .df-test-author { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--steel); letter-spacing: 0.16em; text-transform: uppercase; padding-top: 16px; border-top: 1px solid var(--line); }
    .df-test-author strong { color: white; font-weight: 600; }

    /* FAQ */
    .df-faq { padding: 80px 56px; display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
    .df-faq-side h2 { font-size: 80px; line-height: 0.92; margin: 12px 0 24px; }
    .df-faq-side h2 .red { color: var(--red); }
    .df-faq-side p { font-size: 15px; line-height: 1.55; color: #c0c0c0; margin: 0 0 20px; }
    .df-faq-list { display: flex; flex-direction: column; }
    .df-faq-item { padding: 24px 0; border-bottom: 1px solid var(--line); }
    .df-faq-item .q { display: flex; justify-content: space-between; align-items: center; }
    .df-faq-item h3 { font-size: 24px; margin: 0; }
    .df-faq-item .plus { color: var(--red); font-size: 28px; font-weight: 700; }
    .df-faq-item .a { font-size: 15px; line-height: 1.55; color: #c8c8c8; margin: 14px 0 0; max-width: 720px; }

    /* CONTACT STRIP */
    .df-contact { padding: 80px 56px; background: var(--red); color: black; }
    .df-contact-inner { display: grid; grid-template-columns: 1.4fr 1fr; gap: 64px; align-items: center; }
    .df-contact h2 { font-size: 140px; line-height: 0.86; margin: 0; color: black; }
    .df-contact h2 .out { -webkit-text-stroke: 2.5px black; color: transparent; }
    .df-contact .sub { font-size: 18px; line-height: 1.5; color: rgba(0,0,0,0.78); margin: 18px 0 0; max-width: 480px; }
    .df-contact-card { background: black; color: white; padding: 36px 32px; }
    .df-contact-card .lab { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px; }
    .df-contact-card h3 { font-size: 40px; margin: 0 0 18px; line-height: 1; }
    .df-contact-row { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid var(--line); font-family: 'IBM Plex Mono', monospace; font-size: 13px; }
    .df-contact-row .k { color: var(--steel); letter-spacing: 0.08em; text-transform: uppercase; }
    .df-contact-row .v { color: white; font-weight: 500; }
    .df-contact-card .btn { margin-top: 24px; }

    /* FOOTER */
    .df-footer { background: black; color: white; padding: 64px 56px 32px; border-top: 1px solid var(--line); }
    .df-footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 56px; padding-bottom: 48px; border-bottom: 1px solid var(--line); }
    .df-footer .logo { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 36px; letter-spacing: 0.02em; }
    .df-footer .logo .red { color: var(--red); }
    .df-footer p { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--steel); letter-spacing: 0.06em; line-height: 1.6; margin: 14px 0 0; max-width: 320px; }
    .df-footer-col h4 { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 16px; font-weight: 500; }
    .df-footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; }
    .df-footer-col li { color: #d8d8d8; }
    .df-footer-bot { display: flex; justify-content: space-between; padding-top: 28px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--muted); letter-spacing: 0.1em; text-transform: uppercase; }
    .df-footer-bot .right { display: flex; gap: 24px; }

    /* BOOTCAMP — mirrors run club, body left, photo right, dark panel background */
    .df-bootcamp { background: var(--panel); padding: 80px 56px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 1.2fr 1fr; gap: 56px; align-items: center; }
    .df-bootcamp-body h2 { font-size: 100px; line-height: 0.88; margin: 18px 0 24px; }
    .df-bootcamp-body h2 .red { color: var(--red); }
    .df-bootcamp-body h2 .outline { -webkit-text-stroke: 2px white; color: transparent; }
    .df-bootcamp-body p { font-size: 17px; line-height: 1.55; color: #c8c8c8; margin: 0 0 16px; max-width: 580px; }
    .df-bootcamp-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); margin: 28px 0; }
    .df-bootcamp-stat { background: var(--panel); padding: 22px 20px; }
    .df-bootcamp-stat .v { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 44px; line-height: 1; }
    .df-bootcamp-stat .v .red { color: var(--red); }
    .df-bootcamp-stat .l { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--steel); letter-spacing: 0.16em; text-transform: uppercase; margin-top: 6px; }
    .df-bootcamp-photo { aspect-ratio: 4/5; background:
      linear-gradient(180deg, rgba(10,10,10,0.3), rgba(10,10,10,0.75)),
      radial-gradient(circle at 70% 70%, rgba(224,36,31,0.28), transparent 60%),
      repeating-linear-gradient(135deg, #2a3032 0 14px, #1a2022 14px 28px);
      position: relative; display: flex; align-items: end; padding: 24px; }
    .df-bootcamp-photo .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.8); background: rgba(0,0,0,0.55); padding: 6px 10px; }
    .df-bootcamp-photo .overlay-tag { position: absolute; top: 28px; right: 28px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 14px; letter-spacing: 0.12em; padding: 7px 14px; clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%); padding-right: 22px; text-transform: uppercase; }
    .df-bootcamp-ctas { display: flex; gap: 14px; }

    /* PRICES */
    .df-prices { padding: 80px 56px; }
    .df-prices-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); }
    .df-price { background: var(--bg); padding: 34px 28px 28px; display: flex; flex-direction: column; gap: 18px; min-height: 460px; }
    .df-price.dark { background: var(--panel); }
    .df-price.free { background: var(--red); color: white; }
    .df-price-tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.2em; text-transform: uppercase; }
    .df-price.free .df-price-tag { color: black; }
    .df-price h3 { font-size: 28px; line-height: 0.98; margin: 0; }
    .df-price .amount { font-family: 'Saira Condensed', sans-serif; font-weight: 900; font-size: 72px; line-height: 0.9; letter-spacing: -0.01em; color: white; display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap; }
    .df-price .amount .red { color: var(--red); }
    .df-price.free .amount { color: black; }
    .df-price .amount .unit { font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 11px; color: var(--steel); letter-spacing: 0.16em; text-transform: uppercase; }
    .df-price.free .amount .unit { color: rgba(0,0,0,0.65); }
    .df-price .amount .strike { color: var(--steel); text-decoration: line-through; font-size: 28px; font-weight: 700; }
    .df-price ul { list-style: none; padding: 16px 0 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 13.5px; line-height: 1.45; color: #c8c8c8; border-top: 1px solid var(--line); }
    .df-price.free ul { color: rgba(0,0,0,0.82); border-top-color: rgba(0,0,0,0.2); }
    .df-price ul li { display: grid; grid-template-columns: 12px 1fr; gap: 8px; }
    .df-price ul li::before { content: '▸'; color: var(--red); }
    .df-price.free ul li::before { color: black; }
    .df-price-foot { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--steel); letter-spacing: 0.1em; text-transform: uppercase; padding-top: 14px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
    .df-price.free .df-price-foot { color: rgba(0,0,0,0.7); border-top-color: rgba(0,0,0,0.2); }
    .df-price-foot .arrow { color: var(--red); font-size: 18px; }
    .df-price.free .df-price-foot .arrow { color: black; }

    /* ABOUT DEAN */
    .df-about { padding: 80px 56px; background: var(--bg); display: grid; grid-template-columns: 0.95fr 1fr; gap: 56px; align-items: start; border-bottom: 1px solid var(--line); }
    .df-about-portrait { aspect-ratio: 4/5; position: relative; background:
      linear-gradient(180deg, rgba(10,10,10,0.15), rgba(10,10,10,0.65)),
      radial-gradient(circle at 50% 30%, rgba(224,36,31,0.15), transparent 60%),
      repeating-linear-gradient(135deg, #3a3a3a 0 14px, #2a2a2a 14px 28px);
      display: flex; align-items: end; padding: 24px; }
    .df-about-portrait .ph-label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.85); background: rgba(0,0,0,0.55); padding: 6px 10px; }
    .df-about-portrait .tag { position: absolute; top: 28px; right: 28px; background: var(--red); color: white; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 14px; letter-spacing: 0.12em; padding: 7px 14px; clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 0 100%); padding-right: 22px; text-transform: uppercase; }
    .df-about-portrait .signature { position: absolute; bottom: 24px; right: 24px; font-family: 'Saira Condensed', sans-serif; font-style: italic; font-weight: 700; font-size: 28px; color: white; transform: rotate(-4deg); }
    .df-about-body h2 { font-size: 96px; line-height: 0.88; margin: 18px 0 24px; }
    .df-about-body h2 .red { color: var(--red); }
    .df-about-body h2 .outline { -webkit-text-stroke: 2px white; color: transparent; }
    .df-about-body p { font-size: 16px; line-height: 1.6; color: #c8c8c8; margin: 0 0 14px; max-width: 580px; }
    .df-about-body p strong { color: white; font-weight: 600; }
    .df-about-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line); border: 1px solid var(--line); margin: 28px 0; }
    .df-about-meta-col { background: var(--panel); padding: 24px 22px; }
    .df-about-meta-col h4 { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--red); letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 18px; font-weight: 500; display: flex; align-items: center; gap: 10px; }
    .df-about-meta-col h4::before { content: ''; width: 22px; height: 1px; background: var(--red); }
    .df-about-meta-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
    .df-about-meta-col ul li { display: grid; grid-template-columns: 12px 1fr auto; gap: 10px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: white; letter-spacing: 0.04em; align-items: baseline; }
    .df-about-meta-col ul li::before { content: '▸'; color: var(--red); }
    .df-about-meta-col ul li .year { color: var(--steel); font-size: 11px; }

    /* TRANSFORMATIONS — before/after strip on testimonial cards */
    .df-test { padding: 0 !important; overflow: hidden; }
    .df-test-body { padding: 32px 30px; flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
    .df-test.feat .df-test-body { padding: 36px 36px; }
    .df-tr { display: flex; gap: 1px; background: var(--line); }
    .df-tr-cell { flex: 1; aspect-ratio: 4/5; position: relative; display: flex; align-items: end; padding: 14px; }
    .df-tr-cell.before { background: linear-gradient(180deg, rgba(10,10,10,0.25), rgba(10,10,10,0.7)), repeating-linear-gradient(135deg, #4a4842 0 12px, #3a3832 12px 24px); }
    .df-tr-cell.after { background: linear-gradient(180deg, rgba(10,10,10,0.15), rgba(10,10,10,0.55)), radial-gradient(circle at 50% 50%, rgba(224,36,31,0.2), transparent 70%), repeating-linear-gradient(135deg, #2a3032 0 12px, #1a2022 12px 24px); }
    .df-tr-cell .lbl { position: absolute; top: 12px; left: 12px; font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.2em; padding: 4px 8px; text-transform: uppercase; font-weight: 600; }
    .df-tr-cell.before .lbl { background: rgba(0,0,0,0.75); color: rgba(255,255,255,0.9); }
    .df-tr-cell.after .lbl { background: var(--red); color: white; clip-path: polygon(0 0, 100% 0, calc(100% - 5px) 100%, 0 100%); padding-right: 12px; }
    .df-tr-cell .ph { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.75); background: rgba(0,0,0,0.55); padding: 4px 8px; }
    .df-tr-cell .delta { position: absolute; top: 14px; right: 14px; font-family: 'Saira Condensed', sans-serif; font-weight: 800; font-size: 14px; color: var(--red); text-transform: uppercase; letter-spacing: 0.06em; background: black; padding: 4px 10px; }
  `;

  return (
    <div className="df">
      <style>{css}</style>

      <div className="df-mast">
        <span>EST. 2022 · BINGHAM, NOTTINGHAMSHIRE</span>
        <span className="c">— TRAIN · PROGRESS · SUCCEED —</span>
        <span className="r"><span className="red">●</span> NOW BOOKING 2026</span>
      </div>

      <nav className="df-nav">
        <div className="df-logo">DMMICH<span>/</span>THE COACH</div>
        <ul>
          <li>Personal Training</li>
          <li>Run Club</li>
          <li>Bootcamp</li>
          <li>Learning</li>
          <li>IronHQ</li>
          <li>About</li>
        </ul>
        <div className="right">
          <span className="phone">+44 (0)78 8191 8142</span>
          <a className="cta">Book →</a>
        </div>
      </nav>

      <section className="df-hero">
        <div className="df-hero-bg"></div>
        <div className="df-hero-inner">
          <div>
            <span className="df-eyebrow">L3 Functional Fitness Coach · Bingham NG13</span>
            <h1>TRAIN.<br /><span className="red">PROGRESS.</span><br /><span className="outline">SUCCEED.</span></h1>
          </div>
          <div className="df-hero-foot">
            <p>No gimmicks. No quick fixes. Real strength, real fitness, built rep by rep at IronHQ in Bingham — the only address you need.</p>
            <div><div className="df-stat-label">Home gym</div><div className="df-stat-val">IRON<span className="red">HQ</span></div></div>
            <div><div className="df-stat-label">Bootcamp</div><div className="df-stat-val">THU <span className="red">5:30</span></div></div>
            <div><div className="df-stat-label">Run club</div><div className="df-stat-val">SUN <span className="red">9:00</span></div></div>
            <div><div className="df-stat-label">Clients</div><div className="df-stat-val">60<span className="red">+</span></div></div>
          </div>
        </div>
      </section>

      <div className="df-strip">
        <div className="df-strip-inner">
          <span>BUILT IN BINGHAM<span className="x">✕</span>PERSONAL TRAINING<span className="x">✕</span>BOOTCAMP<span className="x">✕</span>RUN CLUB<span className="x">✕</span>BUILT IN BINGHAM<span className="x">✕</span>PERSONAL TRAINING<span className="x">✕</span></span>
        </div>
      </div>

      <section className="df-services">
        <div className="df-sec-head">
          <div className="num">§ 01<br />SERVICES</div>
          <h2>THREE WAYS<br />TO <span className="red">GET TO WORK.</span></h2>
          <div className="right">PT is the main thing I do — the place you'll progress fastest. Bootcamp and the run club are how a lot of people start.</div>
        </div>
        <div className="df-cards">
          <div className="df-card hero">
            <div className="df-card-hero-left">
              <div>
                <div className="df-card-tag" style={{ marginTop: 18 }}>01 / FLAGSHIP — 1-to-1</div>
                <h3>PERSONAL<br />TRAINING.</h3>
                <p>An hour with me at IronHQ. Programmed around your body, your goals and your week — and coached in person, no app-only nonsense. Whether you've never trained before or you're chasing a PB, the plan is built around exactly where you are.</p>
              </div>
              <ul className="df-card-features">
                <li>Bespoke weekly programming</li>
                <li>Hevy Pro app · log every rep</li>
                <li>Nutritional guidance</li>
                <li>Monthly reviews · real numbers</li>
                <li>Small-group rate · bring a mate</li>
                <li>Block discounts at 10 / 20</li>
              </ul>
              <div className="hero-foot">
                <div className="df-pricing big">FROM £30 / SESSION</div>
                <a className="df-btn">Book a free intro chat →</a>
              </div>
            </div>
            <div className="df-card-hero-photo">
              <span className="overlay-tag">The main thing</span>
              <span className="ph-label">[ photo · Dean coaching client at the rack, IronHQ ]</span>
            </div>
          </div>
          <div className="df-card">
            <div>
              <div className="df-card-tag">02 / GROUP</div>
              <h3>Thursday<br />Bootcamp</h3>
              <p>Mixed-ability circuits at Bingham RUFC. 60 minutes of proper graft, every Thursday at 5:30. Cash or card, drop-in, no membership.</p>
              <div className="df-pricing">£10 / DROP-IN</div>
            </div>
            <div className="df-card-foot"><span>BINGHAM RUFC · THU 17:30</span><span className="arrow">→</span></div>
          </div>
          <div className="df-card dark">
            <div>
              <div className="df-card-tag">03 / FREE</div>
              <h3>Sunday<br />Run Club</h3>
              <p>Bingham Market Place, 9am, every week — rain, snow or shine. Lap-based so all paces fit. Breakfast at Gilt after.</p>
              <div className="df-pricing">FREE · ALWAYS</div>
            </div>
            <div className="df-card-foot"><span>MARKET PLACE · SUN 09:00</span><span className="arrow">→</span></div>
          </div>
        </div>
      </section>

      <section className="df-about">
        <div className="df-about-portrait">
          <span className="tag">Hi, I'm Dean</span>
          <span className="ph-label">[ photo · Dean portrait, gym setting ]</span>
          <span className="signature">— Dean</span>
        </div>
        <div className="df-about-body">
          <span className="df-eyebrow">§ 02 · About the coach</span>
          <h2>BUILT IN<br /><span className="red">BINGHAM.</span><br />BY <span className="outline">CHOICE.</span></h2>
          <p>I'm <strong>Dean Michniew</strong> — Bingham-born, Bingham-based, and the bloke at the front of the Sunday Run Club every week, rain or shine. <strong>Level 3 qualified Personal Trainer</strong> and functional-fitness coach.</p>
          <p>I came to coaching after years on the other side of the conversation — desk job, slow drift, then the realisation that being strong and capable changed everything else in my life. Now I do this full time, and I get to watch other people find their own version of that change.</p>
          <p>I still compete. Hyrox, races, lifting events. If I'm asking you to push your limits, I'd better be pushing mine.</p>
          <div className="df-about-meta">
            <div className="df-about-meta-col">
              <h4>Qualifications</h4>
              <ul>
                <li><span>Level 3 Personal Trainer</span><span className="year">Active IQ</span></li>
                <li><span>Functional Fitness Coach</span><span className="year">L2</span></li>
                <li><span>Hyrox Trainer Certified</span><span className="year">2024</span></li>
                <li><span>Emergency First Aid at Work</span><span className="year">2024</span></li>
                <li><span>Public Liability Insured</span><span className="year">£10m</span></li>
              </ul>
            </div>
            <div className="df-about-meta-col">
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
          <a className="df-btn">Train with me →</a>
        </div>
      </section>

      <section className="df-ironhq">
        <div className="df-ironhq-inner">
          <div className="df-ironhq-photo">
            <div className="ph-label">[ photo · IronHQ training floor, wide angle ]</div>
          </div>
          <div className="df-ironhq-body">
            <span className="df-eyebrow">§ 03 · HOME BASE</span>
            <h2>IRONHQ.<br />BINGHAM.</h2>
            <p>Purpose-built for serious strength training. Top-of-the-line racks, sleds, dumbbells, conditioning kit. The whole place is set up for the way I program. No queues, no nonsense.</p>
            <ul className="df-ironhq-list">
              <li>Unit 1, Ranch House · NG13 8GF</li>
              <li>Full strength &amp; conditioning floor</li>
              <li>Hyrox / functional rig — sled, ski, runner, bike</li>
              <li>Members &amp; PT clients only · on-site parking</li>
            </ul>
            <a className="df-btn">See the gym →</a>
          </div>
        </div>
      </section>

      <section className="df-runclub">
        <div className="df-runclub-photo">
          <span className="overlay-tag">Free · All abilities</span>
          <span className="ph-label">[ photo · Sunday run-club group, Market Place arches ]</span>
        </div>
        <div className="df-runclub-body">
          <span className="df-eyebrow">§ 04 · COMMUNITY</span>
          <h2>SUNDAY<br />RUNNING <span className="red">CLUB.</span></h2>
          <p>A free, friendly running &amp; walking group I founded to get more of Bingham moving on a Sunday morning. Lap-based route, mixed paces, complete beginners welcome — followed by coffee &amp; breakfast at Gilt.</p>
          <p>This is the most important thing I do. It's where most clients start, where friendships form, and where you'll see what showing up looks like.</p>
          <div className="df-runclub-stats">
            <div className="df-runclub-stat"><div className="v">SUN <span className="red">09:00</span></div><div className="l">Every week · rain or shine</div></div>
            <div className="df-runclub-stat"><div className="v">£<span className="red">0</span></div><div className="l">Always free, always</div></div>
            <div className="df-runclub-stat"><div className="v">40<span className="red">+</span></div><div className="l">Regulars · all paces</div></div>
          </div>
          <div className="df-runclub-ctas">
            <a className="df-btn">See you Sunday →</a>
            <a className="df-btn ghost">Follow @sundayrunclub_bingham</a>
          </div>
        </div>
      </section>

      <section className="df-bootcamp">
        <div className="df-bootcamp-body">
          <span className="df-eyebrow">§ 05 · GROUP TRAINING</span>
          <h2>BINGHAM<br />BOOT<span className="red">CAMP.</span></h2>
          <p>An hour of proper graft at Bingham RUFC every Thursday at 5:30pm. Mixed-ability circuits — sleds, kettlebells, suspension trainers, sprints. Designed so a first-timer and a seasoned lifter can both leave wiped out and smiling.</p>
          <p>No membership, no commitment — cash or card on the door. The friendliest bunch you'll sweat with this week.</p>
          <div className="df-bootcamp-stats">
            <div className="df-bootcamp-stat"><div className="v">THU <span className="red">17:30</span></div><div className="l">Every week · 60 min</div></div>
            <div className="df-bootcamp-stat"><div className="v">£<span className="red">10</span></div><div className="l">Drop-in · cash or card</div></div>
            <div className="df-bootcamp-stat"><div className="v">ALL</div><div className="l">Abilities, all welcome</div></div>
          </div>
          <div className="df-bootcamp-ctas">
            <a className="df-btn">See you Thursday →</a>
            <a className="df-btn ghost">Bring a mate · 2 for £15</a>
          </div>
        </div>
        <div className="df-bootcamp-photo">
          <span className="overlay-tag">Thursdays · 5:30pm</span>
          <span className="ph-label">[ photo · bootcamp sled push at BRUFC, dusk ]</span>
        </div>
      </section>

      <section className="df-prices">
        <div className="df-sec-head">
          <div className="num">§ 06<br />PRICES</div>
          <h2>NO HIDDEN<br /><span className="red">EXTRAS.</span></h2>
          <div className="right">Pay-as-you-go for groups, blocks for PT. First chat is always free.</div>
        </div>
        <div className="df-prices-grid">
          <div className="df-price feat">
            <div className="df-price-tag">— THE MAIN THING</div>
            <h3>1-to-1<br />Personal Training</h3>
            <div className="amount">£30 <span className="unit">FROM<br />/ SESSION</span></div>
            <ul>
              <li>Bespoke weekly programming, written for you</li>
              <li>Hevy Pro app included — log every rep</li>
              <li>Nutritional guidance + monthly reviews</li>
              <li>Block discounts at 10 / 20 sessions</li>
              <li>Bring a mate · small-group rate</li>
              <li>Free 15-minute intro chat to begin</li>
            </ul>
            <div className="df-price-foot"><span>IRONHQ · BINGHAM</span><span className="arrow">→</span></div>
          </div>
          <div className="df-price">
            <div className="df-price-tag">— GROUP</div>
            <h3>Thursday<br />Bootcamp</h3>
            <div className="amount">£10 <span className="unit">DROP-IN<br />/ SESSION</span></div>
            <ul>
              <li>60 minute mixed-ability circuit</li>
              <li>Cash or card on the door</li>
              <li>No membership, no commitment</li>
              <li>Bring a mate · 2 for £15</li>
              <li>4-week block: £35</li>
            </ul>
            <div className="df-price-foot"><span>BRUFC · THU 17:30</span><span className="arrow">→</span></div>
          </div>
          <div className="df-price free">
            <div className="df-price-tag">— ALWAYS FREE</div>
            <h3>Sunday<br />Running Club</h3>
            <div className="amount">£0 <span className="unit">FOREVER<br />/ EVERYONE</span></div>
            <ul>
              <li>Lap-based · all paces fit</li>
              <li>Walkers · prams · dogs welcome</li>
              <li>Breakfast at Gilt after</li>
              <li>No sign-up · just turn up</li>
              <li>Friendliest hour of your week</li>
            </ul>
            <div className="df-price-foot"><span>SUN 09:00 · MARKET PL.</span><span className="arrow">→</span></div>
          </div>
        </div>
      </section>

      <section className="df-gal">
        <div className="df-gal-head">
          <div>
            <span className="df-eyebrow">§ 07 · The grind</span>
            <h2>FROM <span className="red">THE FLOOR.</span></h2>
          </div>
          <a className="df-btn ghost">Instagram →</a>
        </div>
        <div className="df-gal-grid">
          <div className="df-gal-cell tall g1">
            <div className="meta">— Sat 09 Nov · Hyrox London</div>
            <div className="lab">[ photo · Dean &amp; Rory finish line, hands up ]</div>
          </div>
          <div className="df-gal-cell g2">
            <div className="meta">— Sun · run club</div>
            <div className="lab">[ photo · group at the arches ]</div>
          </div>
          <div className="df-gal-cell g3">
            <div className="meta">— Tue · 1-to-1 PT</div>
            <div className="lab">[ photo · client deadlift, IronHQ ]</div>
          </div>
          <div className="df-gal-cell g4">
            <div className="meta">— Thu · bootcamp</div>
            <div className="lab">[ photo · sled push at BRUFC ]</div>
          </div>
          <div className="df-gal-cell g5">
            <div className="meta">— Sat · 1-to-1 PT</div>
            <div className="lab">[ photo · client mid-session, IronHQ ]</div>
          </div>
        </div>
      </section>

      <section className="df-testimonials">
        <h2>RESULTS<br /><span className="red">SPEAK LOUDER.</span></h2>
        <div className="sub">§ 08 · 18 months of clients · 5★ across the board · transformations below</div>
        <div className="df-test-grid">
          <div className="df-test feat">
            <div className="df-tr">
              <div className="df-tr-cell before"><span className="lbl">— Before</span><span className="ph">[ photo · client portrait, day 1 ]</span></div>
              <div className="df-tr-cell after"><span className="lbl">After · 18 mo</span><span className="ph">[ photo · client today ]</span></div>
            </div>
            <div className="df-test-body">
              <div className="stars">★ ★ ★ ★ ★</div>
              <blockquote>"From struggling to do 10 minutes of exercise without getting out of breath, to two hours of fitness every day. Starting small with one class a week, then two, then PT, then run club — has been an absolutely magical experience. Dean has been there supporting and pushing me all the way. He has changed my life immeasurably for the better. If anyone is on the fence about whether a PT is for them, Dean is for you."</blockquote>
              <div className="df-test-author"><strong>Long-term client</strong> · 18 months in</div>
            </div>
          </div>
          <div className="df-test">
            <div className="df-tr">
              <div className="df-tr-cell before"><span className="lbl">— Before</span><span className="ph">[ photo · Tom, pre-training ]</span></div>
              <div className="df-tr-cell after"><span className="lbl">After · 12 wk</span><span className="ph">[ photo · Tom deadlifting ]</span></div>
            </div>
            <div className="df-test-body">
              <div className="stars">★ ★ ★ ★ ★</div>
              <blockquote>"12 weeks of targeted functional training and the back pain I'd had for years was gone. Deadlifting more than I ever thought possible. Wish I'd started sooner."</blockquote>
              <div className="df-test-author"><strong>Tom W.</strong> · pain-free</div>
            </div>
          </div>
          <div className="df-test">
            <div className="df-tr">
              <div className="df-tr-cell before"><span className="lbl">— Before</span><span className="ph">[ photo · Dan, first run ]</span></div>
              <div className="df-tr-cell after"><span className="lbl">After · 6 mo</span><span className="ph">[ photo · Dan finish-line ]</span></div>
            </div>
            <div className="df-test-body">
              <div className="stars">★ ★ ★ ★ ★</div>
              <blockquote>"The running club got me started. Personal training kept me going. Six months in I ran my first 10K — best decision I've made."</blockquote>
              <div className="df-test-author"><strong>Dan B.</strong> · first 10K, 6 months in</div>
            </div>
          </div>
        </div>
      </section>

      <section className="df-contact">
        <div className="df-contact-inner">
          <div>
            <h2>READY?<br /><span className="out">LET'S WORK.</span></h2>
            <p className="sub">No commitment, no pressure — just a chat about where you're at and the smallest brave step. Reply within 24 hours, usually faster on Instagram.</p>
          </div>
          <div className="df-contact-card">
            <div className="lab">— Get in touch</div>
            <h3>DEAN<br />MICHNIEW</h3>
            <div className="df-contact-row"><span className="k">Instagram</span><span className="v">@dmmich.the_coach</span></div>
            <div className="df-contact-row"><span className="k">Email</span><span className="v">dmmich90@outlook.com</span></div>
            <div className="df-contact-row"><span className="k">Phone</span><span className="v">+44 78 8191 8142</span></div>
            <div className="df-contact-row"><span className="k">In person</span><span className="v">Sun 9am · Market Place</span></div>
            <a className="df-btn btn">Email Dean →</a>
          </div>
        </div>
      </section>

      <footer className="df-footer">
        <div className="df-footer-grid">
          <div>
            <div className="logo">DMMICH<span className="red">/</span>THE COACH</div>
            <p>Dean Michniew — Level 3 Personal Trainer &amp; Functional Fitness Coach. Founder of Bingham Sunday Running Club. Train. Progress. Succeed.</p>
          </div>
          <div className="df-footer-col">
            <h4>— Train</h4>
            <ul>
              <li>1-to-1 Personal Training</li>
              <li>Thursday Bootcamp</li>
              <li>Sunday Run Club</li>
            </ul>
          </div>
          <div className="df-footer-col">
            <h4>— Where</h4>
            <ul>
              <li>IronHQ — Bingham</li>
              <li>Bingham RUFC, The Pavilion</li>
              <li>Bingham Market Place</li>
              <li>NG13, Nottinghamshire</li>
            </ul>
          </div>
          <div className="df-footer-col">
            <h4>— Connect</h4>
            <ul>
              <li>@dmmich.the_coach</li>
              <li>@sundayrunclub_bingham</li>
              <li>dmmich90@outlook.com</li>
              <li>+44 (0)78 8191 8142</li>
            </ul>
          </div>
        </div>
        <div className="df-footer-bot">
          <span>© 2026 DEAN MICHNIEW · ALL RIGHTS RESERVED</span>
          <div className="right"><span>L3 PT — ACTIVE IQ</span><span>FIRST AID QUALIFIED</span><span>BUILT IN BINGHAM</span></div>
        </div>
      </footer>
    </div>
  );
}

window.MachoFullDesign = MachoFullDesign;
