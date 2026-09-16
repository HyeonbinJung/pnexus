# Paratus Nexus — landing page

Static site, no build step. Open `index.html` directly or serve the folder:

    python -m http.server 8080

Files
- `index.html` — shell (fonts, cursor layers, `#app` mount)
- `styles.css` — design tokens + component styles
- `app.js`    — EN/KO content (English default) (`I18N`), rendering, interactions
- `assets/`   — Nexi frames (`nexi-1..6.png`), Instagram avatars

Interactions
- Language toggle (KO ↔ EN), persists scroll position
- Dance speed slider → Nexi frame rate, marquee speed, speech bubble
- Nexi pupils follow the cursor; stickers parallax; hero parallax on scroll
- Stats count up when scrolled into view
- Reel cards "play" on hover (`REEL_DURATION_MS` in app.js)
- 5-question Psyche Check mini quiz with result
- FAQ accordion, contact form (client-side only — wire `#contactForm` submit to your backend)
