# XGVE Website — Recreate-Blind + Hosting Pack

Entry point: **`site/index.html`**. Deploy this WHOLE `deploy/` folder as-is to any
static host (nginx / Netlify / Pages / S3) — paths are relative and self-contained.
Hosting steps + launch checklist: `site/SELFHOST.md`. Perf notes + final audit:
`site/LAUNCH.md`. Motion techniques (canonical): `DOCTRINE.md`.

## Folder map
- `site/index.html` — page shell, meta/OG, script load order (React → Babel →
  ascii-data → canvas engines → JSX components → boot).
- `site/ascii-data.js` — `window.XG_ASCII` trademark ASCII grids: `emblem` (82×35),
  `wordmark` (120×14), `foxglove` (74×67). Chars + `colors` rows ("r" = red cell).
- `site/xgve-asciifield.js` — full-bleed background. Glyph-atlas drawImage; CELL 30;
  two counter-rotating kaleidoscopic folds; 7 sine modes with morphing weights;
  displaced-grid pseudo-3D (zN → lift/scale/parallax/brightness); scarce red ~14%;
  30fps paint cap; dpr≤1.5; respects `window.XGVE_PAUSED` (freeze), `XGVE_RMASK`
  (alpha×0.14 where reveal shapes occupy 24px cells); edge fade via CSS mask.
- `site/xgve-ascii-emblem.js` — emblem LEFT half: XG_ASCII.emblem, glyphs shimmer
  from a varied set at ~14fps; center-out 2.1s entrance; junction flow (cells phase
  0→1 drifting +9px toward the split, fade out/in); pseudo-depth parallax + rolling
  light from source-char tonal density (DENS ramp); 2 rogue red glyphs escaping left.
- `site/xgve-lockup.jsx` + `site/xgve-redline.css` + `site/emblem-masks.css` —
  emblem RIGHT half: metallic chrome via CSS gradients through hi-res (2048px)
  data-URI masks; clip-path `inset(0 0 0 49.6%)`; signal-pulse idle; blur-in
  entrance at 1.6s; tagline (Space Grotesk, cyan/magenta chroma + slow breathe)
  lands at 2.3s.
- `site/xgve-foxglove-ghost.js` — alternating reveals, never simultaneous:
  foxglove EXACT art far-right (bottom-up build 4.2s / hold / disintegrate) ·
  XGVE wordmark bottom-left (left→right build 3s). Field palette; soft smoothstep
  front (0.22) + noise edge; deterministic ~9% red; pseudo-depth sway ±30px + light;
  publishes XGVE_RMASK; blinking block cursor marks next build during gaps; 30fps.
- `site/xgve-windows.jsx` — retro draggable windows (title-bar drag, □ closes,
  red on hover, 160ms scale-in, ESC closes all): FOXGLOVE_MULTIVERSAL.APP (animated
  flora + FLORA_SERIES + chip → becomes WISHLIST link when `WISHLIST_URL` set),
  readme.txt, contact.txt (email, socials PLACEHOLDERS, mailing-list mailto).
- `site/xgve-site.jsx` — app shell: corners (XGVE wordmark 25px TL; Pause/Resume TR
  — freezes field, clears reveals, emblem keeps animating; © BL; readme/contact/
  Foxglove-Multiversal BR, ascending length, fox in red), cursor ASCII brush
  (3 glyphs/stroke, 16–26px, 1.4–2s decay), Tweaks panel.
- `site/xgve-site.css` — stage layers/z-order (field 0 → ghost 1 → emblem 2 →
  trail 6 → hud), entrance keyframes, chips, mobile <760px pass, reduced-motion.
- `styles.css` + `tokens/` — XGVE design tokens (Void Black #000, Signal Red
  #E6021B, IBM Plex Mono / Space Grotesk / Inter via Google Fonts).
- `assets/` — favicon, 512 icon (og:image placeholder), red-notch wordmark.

## Blind-rebuild order
1. Tokens + black stage. 2. Field engine (atlas → modes → 3D displacement).
3. Emblem split (masks metallic right, grid-ASCII left, junction flow last).
4. Reveal layer (build/hold/decay + RMASK integration). 5. Windows + corners +
brush + pause. 6. Entrance timeline (field 0s → ascii 0–2.1s → metal 1.6s →
tagline 2.3s). Verify canvases with real pixel captures after ≥1.5s (DOCTRINE §Verification).
