# Showcase Challenge — Ember Engine & Neo-Blast Ascension

A single-page landing site for the company AI challenge, showcasing two macOS apps:

- **Ember Engine** — A 3D game engine built with AI
- **Neo-Blast Ascension** — A 10-level marble roll game built in Ember Engine

## Tech Stack

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Server**: Express.js
- **Deployment**: Showcase platform (Node.js 22)
- **Storage**: Showcase `persistent/` directory for videos and downloads

## Getting Started

```bash
npm install
npm run dev        # Start Vite dev server (frontend only)
```

## Build & Run (Production)

```bash
npm run build      # Build frontend to dist/
node server.js     # Start Express server on port 3000
```

## Project Structure

```
├── showcase.config.json   # Showcase deployment config
├── server.js              # Express server (serves SPA + media)
├── vite.config.ts
├── package.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   └── components/
│       ├── Hero.tsx
│       ├── VideoSection.tsx
│       └── DownloadSection.tsx
├── public/                # Static assets (favicon, screenshots)
└── persistent/            # Runtime storage (not committed)
    ├── downloads/         # .dmg/.zip files
    └── videos/            # .mp4 demo videos
```

## Deployment

Deployed via Showcase CLI or Web UI. After deploy, place media files into the `persistent/` directory:

```
persistent/downloads/ember-engine.zip
persistent/downloads/neo-blast-ascension.zip
persistent/videos/ember-engine-demo.mp4
persistent/videos/neo-blast-ascension-demo.mp4
```

## Server Routes

| Route | Description |
|-------|-------------|
| `GET /videos/:filename` | Streams video with range request support |
| `GET /downloads/:filename` | Serves file download |
| `GET *` | SPA catch-all (serves index.html) |

## Environment

- Node.js 22
- Binds to `0.0.0.0:3000`
- No database required
