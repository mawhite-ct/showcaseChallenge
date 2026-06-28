# Product Requirements Document: Showcase Challenge Landing Page

## Overview

A single-page website deployed on the Showcase platform that presents two macOS applications built for the company AI challenge. Visitors can watch demo videos of each app and download them directly from the page.

## Apps

| App | Description |
|-----|-------------|
| **Ember Engine** | A 3D game engine built with AI assistance |
| **Neo-Blast Ascension** | A marble roll game (10 levels) built in Ember Engine, inspired by Marble Blast Ultra |

## Goals

- Provide a professional landing page for challenge judges/colleagues to learn about both apps
- Host demo videos showing each app in action
- Serve macOS downloads directly from the page
- Match the visual identity of the apps themselves (dark theme, accent `#2EBFB0`, minimal but playful)

## Target Audience

Internal company colleagues and challenge judges visiting the Showcase platform.

## Functional Requirements

### FR-1: Hero Section
- Page title and brief tagline explaining what was built for the AI challenge

### FR-2: Video Section
- Two HTML5 video players with native controls
- One video per app (Ember Engine demo, Neo-Blast Ascension demo)
- Side-by-side on desktop, stacked on mobile
- Each video has a title and short description
- Videos support seeking (range request streaming from server)

### FR-3: Download Section
- Two-column layout (responsive, stacks on mobile)
- Left column: Ember Engine — screenshot/icon, description, macOS download button
- Right column: Neo-Blast Ascension — screenshot/icon, description, macOS download button
- Downloads served with proper Content-Disposition headers (triggers browser save dialog)

### FR-4: Responsive Design
- Desktop: side-by-side layouts for videos and downloads
- Mobile: single-column stacked layout
- Minimum supported width: 320px

## Non-Functional Requirements

### NFR-1: Performance
- Videos stream with range request support (seekable without full download)
- Page loads quickly (static assets served from built bundle)

### NFR-2: Platform
- Deployed on Showcase (node runtime, v22)
- Downloads and videos stored in `persistent/` directory
- Binds to `0.0.0.0:3000`
- SPA catch-all route for client-side routing

### NFR-3: File Sizes
- Download files: 50–200MB each (macOS .dmg or .zip)
- Video files: target <50MB each (H.264 MP4, 720p–1080p)

## Technical Architecture

| Layer | Technology |
|-------|-----------|
| Frontend | Vite + React + TypeScript |
| Styling | Tailwind CSS |
| Server | Express.js |
| Deployment | Showcase platform (node runtime) |
| Storage | Showcase `persistent/` directory |

### Server Routes

| Route | Purpose |
|-------|---------|
| `GET /` | Serve SPA (index.html) |
| `GET /videos/:filename` | Stream video with range request support |
| `GET /downloads/:filename` | Serve download with Content-Disposition header |
| `GET *` | SPA catch-all → index.html |

### File Storage Layout

```
persistent/
├── downloads/
│   ├── ember-engine.zip
│   └── neo-blast-ascension.zip
└── videos/
    ├── ember-engine-demo.mp4
    └── neo-blast-ascension-demo.mp4
```

## Design Specifications

- **Theme**: Dark background
- **Accent color**: `#2EBFB0`
- **Style**: Minimal, professional, slightly playful (game engine context)
- **Typography**: Clean sans-serif
- **Download buttons**: Prominent, accent-colored, macOS-labeled
- **Platform**: macOS only (no platform detection needed)

## Deployment Configuration

```json
{
  "appName": "showcase-challenge",
  "displayName": "Ember Engine & Neo-Blast Ascension",
  "description": "AI Challenge showcase — a 3D game engine and marble roll game",
  "visibility": "listed",
  "runtime": "node",
  "version": "22",
  "buildCommand": "npm run build",
  "startCommand": "node server.js",
  "internalPort": 3000
}
```

## Open Questions

1. **Upload workflow**: How will download/video files be placed into `persistent/` after deploy? (Admin upload endpoint vs CLI access)
2. **Engine logo**: Is there a logo asset for Ember Engine, or should we use a styled text mark?
3. **Video content**: What should the demo videos cover? (Full gameplay, feature walkthrough, etc.)

## Success Criteria

- [ ] Page loads on Showcase at assigned URL
- [ ] Both demo videos play with seeking support
- [ ] Both download buttons trigger macOS .zip/.dmg save dialog
- [ ] Page looks good on desktop and mobile
- [ ] Visual style matches app identity (dark + `#2EBFB0` accent)
