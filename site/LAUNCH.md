# XGVE — Launch Pack (final audit)

## Will the lag follow you to real hosting? Mostly no.
What you feel in this preview is dominated by DEV overhead that disappears in
production:
- **In-browser Babel** transpiles all `.jsx` on every load, and **React
  development builds** run heavy checks. → Fix at deploy: precompile or simply
  swap to `react.production.min.js` / `react-dom.production.min.js` (SELFHOST.md §1).
- The **preview iframe** itself adds compositing overhead you won't have on a
  plain hosted page.
What was ours (already fixed): reveal + field capped ~30fps paints with true
timelines, dpr capped 1.5 on background layers, grain default off, backdrop-filter
removed from chips, pause = zero draw cost, hidden-tab skip. Emblem stays 2× crisp.
Remaining honest ceiling: three full-screen canvases — on a weak GPU the field is
the knob (raise CELL / lower speed in `xgve-asciifield.js`).

## Final audit verdict
- Core experience: DONE, verified (field, emblem split, reveals, windows, pause).
- Accessibility: ESC, focus rings, reduced-motion — DONE. Contrast: decorative.
- Mobile: workable (<760px pass + window clamps); dedicated phone polish = nice-to-have.
- BLOCKED ON YOU (placeholders, listed in SELFHOST.md §5): real social URLs,
  WISHLIST_URL, mailing-list provider, absolute og:image, domain.

## What's in this pack
- `site/` — the website (entry: `site/index.html`). Deploy the WHOLE folder tree
  (site references `../assets`, `../styles.css`, `../tokens`).
- `site/SELFHOST.md` — hosting steps + launch checklist.
- `guidelines/ascii-motion-doctrine.md` — the banked motion techniques (doctrine).
- `readme.md` + `guidelines/` + `tokens/` + `components/` — the full XGVE design
  system (colors, type, components, brand cards).
- `assets/` — logos, emblem layers (incl. 2048px hi-res), icons, favicons.
- `SKILL.md` — agent-usable design-skill wrapper for the whole system.
