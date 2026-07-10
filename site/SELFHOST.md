# Self-hosting the XGVE site

The site is static — any web server (nginx, Netlify, GitHub Pages, S3) works.
Deploy the WHOLE project folder (the site references `../assets`, `../styles.css`,
`../tokens` relative to `site/`), with `site/index.html` as the page.

## 1. Replace CDN scripts with local copies
`site/index.html` loads React, ReactDOM and Babel-standalone from unpkg. For fully
offline hosting, download once and swap the src attributes:

- https://unpkg.com/react@18.3.1/umd/react.development.js → `site/vendor/react.js`
- https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js → `site/vendor/react-dom.js`
- https://unpkg.com/@babel/standalone@7.29.0/babel.min.js → `site/vendor/babel.min.js`

(For production, use `react.production.min.js` / `react-dom.production.min.js`.)

## 2. Self-host the fonts
All three families are OFL-licensed — self-hosting is permitted. Download woff2s
(e.g. via https://gwfh.mranftl.com — "google-webfonts-helper"):
- IBM Plex Mono (400/500/600) — used by every canvas layer; MUST load before the
  glyph atlases build (they snapshot the font at init).
- Space Grotesk (500/700) — tagline.
- Inter (400) — body copy in the Foxglove landing.
- Noto Sans JP — only if Japanese HUD text is reintroduced; currently unused.

Put files in `assets/fonts/`, declare `@font-face` in `tokens/fonts.css`, and remove
the Google Fonts `<link>`s from `site/index.html` and the `@import`s in the tokens.

## 3. Share metadata
Set `og:image` in `site/index.html` to an ABSOLUTE https URL (relative paths do not
work in link previews). Current placeholder: `assets/web/xgve-icon-512.png`.

## 4. Nothing else phones home
No analytics, no APIs, no external data. `ascii-data.js` (the trademark ASCII art)
ships in `site/`. All motion is client-side canvas.

## 5. Launch checklist
- [ ] Swap PLACEHOLDER social URLs in `site/xgve-windows.jsx` (LINKS) for real handles.
- [ ] Set `WISHLIST_URL` in `site/xgve-windows.jsx` when the Foxglove store page is live
      (the WISHLIST button links to it automatically; until then it's a "notify me" mailto).
- [ ] Point the mailing-list SUBSCRIBE at a real provider (currently a mailto fallback).
- [ ] `og:image` → absolute https URL with a real site screenshot; verify with a
      link-preview debugger.
- [ ] Custom domain + HTTPS; test at 375px, 768px, 1440px, 4K.
