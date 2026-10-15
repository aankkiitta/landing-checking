# Scroll Animated Landing Page

A React + Vite landing page with a GSAP ScrollTrigger doorway zoom animation.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite.

## Build for deployment

```bash
npm run build
npm run preview
```

## Customize
- Edit the brand, text, and sections in `src/components/ScrollLanding.jsx`.
- Edit the look and responsive styles in `src/components/ScrollLanding.css`.
- Replace the `background-image` URL in `.portal-image` with your own optimized interior image.
- The scroll animation timeline and its stages are in the `useLayoutEffect` inside `ScrollLanding.jsx`.

The image currently uses a remote Unsplash URL, so an internet connection is required to load it.
