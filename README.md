# DMMich The Coach

Personal website for **DMMich The Coach** (Dean M Michniew) — a Level 3 Personal Trainer and Functional Fitness Coach based in Bingham, Nottinghamshire.

## Tech Stack

- **Static Site Generator**: [Skier](https://github.com/ripixel/skier) v3
- **CMS**: [Decap CMS](https://decapcms.org/) (via `/admin`)
- **Hosting**: Firebase Hosting
- **Node**: v22

## Getting Started

```bash
nvm use
npm install
```

## Development

```bash
npm run dev          # Build + watch (if configured)
npm run build        # Production build → ./public/
npm run serve        # Serve the built site locally
```

## Content Management

All text is editable via Decap CMS at `/admin` once deployed, or by editing JSON files directly:

| File | Purpose |
|------|---------|
| `content/settings/site.json` | Shared values (name, email, social links, locations) — set once, used everywhere |
| `content/pages/home.json` | Homepage sections |
| `content/pages/about.json` | About page |
| `content/pages/services.json` | Services page |
| `content/pages/running-club.json` | Running Club page |
| `content/pages/locations.json` | Locations page |
| `content/pages/transformations.json` | Transformations page |
| `content/pages/contact.json` | Contact page |

The CMS config lives at `assets/root/config.yml`.

## Project Structure

```
├── admin/              Decap CMS admin panel
├── assets/
│   ├── images/         Static images
│   ├── root/           Files copied to public root (robots.txt, config.yml)
│   └── styles/         CSS source (main.css)
├── content/
│   ├── pages/          Per-page content JSON
│   └── settings/       Shared site settings JSON
├── pages/              HTML page templates (Handlebars)
├── partials/           Shared template partials (head, header, footer)
├── public/             Built output (gitignored)
├── skier.tasks.mjs     Build pipeline configuration
└── firebase.json       Firebase Hosting config
```

## CI/CD

Pushes to `main` automatically build and deploy via CircleCI.

**Setup** — add `FIREBASE_TOKEN` as a CircleCI environment variable:

```bash
npx firebase-tools login:ci
# Copy the token into CircleCI → Project Settings → Environment Variables
```

Decap CMS commits content changes directly to the `main` branch, which triggers a build + deploy automatically.

## Deployment

```bash
npm run deploy        # Manual deploy to Firebase Hosting
```

