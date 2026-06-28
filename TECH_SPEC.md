# Technical Specification: Showcase Challenge Landing Page

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                  Showcase Platform                    │
│                                                      │
│  ┌──────────────┐    ┌───────────────────────────┐  │
│  │  Express.js  │    │     persistent/            │  │
│  │   server.js  │───▶│  ├── downloads/*.zip      │  │
│  │              │    │  └── videos/*.mp4          │  │
│  │  Serves:     │    └───────────────────────────┘  │
│  │  - dist/     │                                    │
│  │  - /videos/* │                                    │
│  │  - /downloads│                                    │
│  │  - SPA catch │                                    │
│  └──────┬───────┘                                    │
│         │ :3000                                      │
└─────────┼───────────────────────────────────────────┘
          │
     ┌────▼────┐
     │ Browser │  React SPA (Vite build)
     └─────────┘
```

## Technology Choices

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Build tool | Vite | Fast builds, native TS/React support |
| UI framework | React 18 + TypeScript | Component-based, good DX |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration, easy dark theme |
| Server | Express.js | Minimal, proven, easy range-request handling |
| Runtime | Node.js 22 | Showcase-supported, modern JS features |
| Package manager | npm | Default, no extra config |

## Server Implementation (`server.js`)

### Static Asset Serving
```javascript
app.use(express.static('dist'))
```

### Video Streaming Route — `GET /videos/:filename`

Supports HTTP Range requests for seekable playback:

1. Validate filename (alphanumeric, hyphens, dots only — no path traversal)
2. Resolve path: `persistent/videos/<filename>`
3. Check file exists → 404 if not
4. If `Range` header present:
   - Parse byte range
   - Respond 206 Partial Content with `Content-Range` header
   - Stream the requested chunk
5. If no `Range` header:
   - Respond 200 with full file, `Content-Type: video/mp4`

### Download Route — `GET /downloads/:filename`

1. Validate filename (same sanitization as videos)
2. Resolve path: `persistent/downloads/<filename>`
3. Check file exists → 404 if not
4. Set headers:
   - `Content-Disposition: attachment; filename="<filename>"`
   - `Content-Type: application/octet-stream`
5. Stream file to response

### SPA Catch-All
```javascript
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
```

### Security Considerations

- **Path traversal prevention**: Filenames validated against `/^[a-zA-Z0-9._-]+$/`
- **No directory listing**: Only exact filenames served
- **No sensitive env vars exposed**: Frontend has no access to server env

## Frontend Implementation

### Component Tree

```
App
├── Hero
│   ├── Title ("Ember Engine & Neo-Blast Ascension")
│   └── Tagline (AI Challenge context)
├── VideoSection
│   ├── VideoCard (Ember Engine)
│   │   ├── <video> element
│   │   ├── Title
│   │   └── Description
│   └── VideoCard (Neo-Blast Ascension)
│       ├── <video> element
│       ├── Title
│       └── Description
├── DownloadSection
│   ├── DownloadCard (Ember Engine)
│   │   ├── Screenshot/Icon
│   │   ├── Description
│   │   └── Download Button
│   └── DownloadCard (Neo-Blast Ascension)
│       ├── Screenshot/Icon
│       ├── Description
│       └── Download Button
└── Footer
```

### Design Tokens

```css
/* Tailwind theme extension */
--color-accent: #2EBFB0;
--color-accent-hover: #26A89A;
--color-bg-primary: #0F1419;
--color-bg-secondary: #1A2028;
--color-bg-card: #232B35;
--color-text-primary: #F0F4F8;
--color-text-secondary: #94A3B8;
```

### Responsive Breakpoints

| Breakpoint | Layout |
|-----------|--------|
| < 768px (mobile) | Single column, stacked sections |
| ≥ 768px (tablet) | Two-column grid for videos and downloads |
| ≥ 1024px (desktop) | Max-width container, comfortable spacing |

### Video Element Config

```html
<video
  controls
  preload="metadata"
  poster="/screenshots/ember-engine-poster.jpg"
  src="/videos/ember-engine-demo.mp4"
/>
```

- `preload="metadata"` — loads duration/dimensions without downloading full file
- `controls` — native browser controls (play, seek, volume, fullscreen)
- `poster` — static frame shown before playback

### Download Button Behavior

```html
<a href="/downloads/ember-engine.zip" download>
  Download for macOS
</a>
```

The `download` attribute + server's `Content-Disposition: attachment` header ensures the browser triggers a save dialog rather than navigating.

## File Manifest

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `vite.config.ts` | Vite build configuration |
| `tsconfig.json` | TypeScript config |
| `tailwind.config.ts` | Tailwind theme (colors, fonts) |
| `postcss.config.js` | PostCSS plugins (Tailwind) |
| `server.js` | Express production server |
| `showcase.config.json` | Showcase deployment config |
| `.showcaseignore` | Exclude dev files from deploy |
| `.gitignore` | Standard Node + build ignores |
| `index.html` | Vite HTML entry point |
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Root component |
| `src/index.css` | Tailwind directives + custom styles |
| `src/components/Hero.tsx` | Hero section |
| `src/components/VideoSection.tsx` | Video players section |
| `src/components/VideoCard.tsx` | Single video player card |
| `src/components/DownloadSection.tsx` | Downloads section |
| `src/components/DownloadCard.tsx` | Single download card |
| `src/components/Footer.tsx` | Footer |

## Showcase Deployment Config

```json
{
  "appName": "showcase-challenge",
  "displayName": "Ember Engine & Neo-Blast Ascension",
  "description": "AI Challenge — a 3D game engine and marble roll game built with AI",
  "visibility": "listed",
  "runtime": "node",
  "version": "22",
  "buildCommand": "npm run build",
  "startCommand": "node server.js",
  "internalPort": 3000
}
```

## `.showcaseignore`

```
src/
*.ts
*.tsx
tsconfig.json
vite.config.ts
tailwind.config.ts
postcss.config.js
.env
PRD.md
TECH_SPEC.md
README.md
```

---

## Build Phases

### Phase 1: Project Scaffolding
> Get a working dev environment with an empty page that builds and runs.

**Tasks:**
1. `npm init` + install dependencies (react, react-dom, vite, tailwind, express, typescript, etc.)
2. Create `vite.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.ts`
3. Create `index.html` (Vite entry)
4. Create `src/main.tsx` + `src/App.tsx` (minimal "Hello World")
5. Create `src/index.css` with Tailwind directives
6. Verify: `npm run dev` opens a page in the browser

**Deliverable:** Empty dark-themed page renders at localhost:5173.

---

### Phase 2: Express Server
> Production server that can serve the built SPA and handle media routes.

**Tasks:**
1. Create `server.js` with Express
2. Implement static file serving from `dist/`
3. Implement `GET /videos/:filename` with range request support
4. Implement `GET /downloads/:filename` with Content-Disposition
5. Implement SPA catch-all
6. Add filename validation (path traversal prevention)
7. Verify: `npm run build && node server.js` serves the page at localhost:3000

**Deliverable:** Full production server operational locally.

---

### Phase 3: Hero Section
> The top of the page — title, tagline, sets the visual tone.

**Tasks:**
1. Create `src/components/Hero.tsx`
2. Dark background, large title, accent-colored highlight
3. Brief tagline text explaining the AI challenge context
4. Responsive padding/sizing

**Deliverable:** Visually polished hero section.

---

### Phase 4: Video Section
> Two video players with descriptions.

**Tasks:**
1. Create `src/components/VideoCard.tsx` (reusable)
2. Create `src/components/VideoSection.tsx` (renders two VideoCards in a grid)
3. HTML5 `<video>` with controls, preload=metadata
4. Title + description below/above each video
5. Responsive: side-by-side on desktop, stacked on mobile
6. Verify with a placeholder test video in `persistent/videos/`

**Deliverable:** Video section renders with working players (placeholder content).

---

### Phase 5: Download Section
> Two-column download cards with buttons.

**Tasks:**
1. Create `src/components/DownloadCard.tsx` (reusable)
2. Create `src/components/DownloadSection.tsx` (renders two DownloadCards in a grid)
3. Each card: screenshot/icon area, app name, description, download button
4. Download button styled with accent color, "Download for macOS" label
5. Responsive: two columns on desktop, stacked on mobile
6. Verify download link works with a placeholder file in `persistent/downloads/`

**Deliverable:** Download section with functional download buttons.

---

### Phase 6: Polish & Deploy
> Final visual pass, deployment config, ship it.

**Tasks:**
1. Create `src/components/Footer.tsx` (minimal)
2. Add smooth scroll behavior, spacing between sections
3. Add favicon and any final static assets to `public/`
4. Create `showcase.config.json`
5. Create `.showcaseignore`
6. Final responsive QA pass (mobile, tablet, desktop)
7. Deploy to Showcase
8. Upload real video and download files to `persistent/`

**Deliverable:** Live on Showcase, fully functional.

---

## Phase Summary

| Phase | What | Key Output |
|-------|------|-----------|
| 1 | Scaffolding | Dev environment running |
| 2 | Server | Express serves SPA + media |
| 3 | Hero | Top section styled |
| 4 | Videos | Two video players working |
| 5 | Downloads | Two download cards working |
| 6 | Polish & Deploy | Live on Showcase |
