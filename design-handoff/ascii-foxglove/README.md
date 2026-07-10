# XGVE — ASCII Foxglove · design handoff

Working-source capture of the pseudo-3D swaying ASCII foxglove, packaged so it can
be reproduced **identically** — not traced from a screenshot, not guessed, not
rebuilt "approximately." Everything here is lifted from the live implementation in
this design system; nothing is reconstructed from memory.

---

## ⚠️ Read this first — what the foxglove actually is

The foxglove is **flat, pre-authored 2D ASCII art** (a 74×67 monospace glyph grid)
plus a **density-derived pseudo-depth illusion**. Be precise about the mechanism —
the marketing phrase "pseudo-3D swaying foxglove" hides how simple and honest it is:

- **No** 3D model, mesh, vertices, or depth-map file.
- **No** WebGL, no shaders, no perspective matrix, no camera / FOV / near-far planes.
- **No** per-part rig (there is no separately-animated stem / bell / leaf / flower head).
- **No** Perlin/simplex noise, springs, damping, pointer or scroll input, or seeds.
- **No** animation library and **no** build step — vanilla `<canvas>` 2D + plain DOM.

The entire "3D sway" is: each glyph's **tonal density** (how much ink the character
is, via a fixed ramp) is treated as a free depth value, and cells parallax
horizontally under one global sine — `px += (density-0.5)*30*sin(t*0.55)` — with a
matching rolling-light term. Foreground (dense) glyphs slide against background
(sparse) ones → volume, with **zero change to the artwork's characters**. This is
the design system's own banked technique (`guidelines/ascii-motion-doctrine.md` §1),
and its **trademark-honesty rule** (§6) is why no invented 3D geometry exists to
capture: *flat trademark art gets pseudo-depth only.* Reproduce what's here; do not
"upgrade" it to real 3D.

There are **three** renderers of the same grid; the **swaying** one the brief refers
to is the canvas **ghost**:

| Renderer | File | Sways? | Role |
|---|---|---|---|
| **Ghost (canonical)** | `source/xgve-foxglove-ghost.js` | **Yes** (density parallax) | full-bleed background; builds→holds→disintegrates; alternates with the XGVE wordmark |
| Landing | `source/xgve-foxglove.jsx` (`FoxgloveAscii`) | No | DOM two-`<pre>` bottom-first reveal + idle flicker |
| Window | `source/xgve-windows.jsx` (`Flora`) | No | retro-window canvas reveal |

---

## Reproduce it in 3 steps

1. **Ship the data.** `foxglove.fixture.json` (lossless) — or `source/ascii-data.js`
   which sets `window.XG_ASCII.foxglove = {cols, rows, chars[], colors[]}`.
2. **Load IBM Plex Mono** (weight 500 is used on the canvas) and assert it before
   first paint — see `FOXGLOVE_DEPENDENCIES.md`. Wrong font = broken alignment.
3. **Mount the canonical renderer** unchanged:
   ```js
   const cleanup = window.XGVE_initFoxgloveGhost(canvasEl); // returns () => void
   ```
   Give it a full-bleed `<canvas class="foxglove-ghost">` positioned per
   `FOXGLOVE_STYLES.css`. Honour `window.XGVE_PAUSED`. That's it.

Open **`preview.html`** for an isolated harness (live shipped renderer + an inspector
with static pose, layer isolation, density view, occupancy mask, reduced-motion,
frame-stepping, and mobile simulation).

---

## File index

**Source (verbatim production copies — the source of truth):**
- `source/xgve-foxglove-ghost.js` — canonical swaying renderer.
- `source/xgve-foxglove.jsx` — landing DOM renderer.
- `source/xgve-windows.jsx` — retro-window renderer.
- `source/ascii-data.js` — full `window.XG_ASCII` (emblem + wordmark + foxglove).
- `source/xgve-site.css` — the site CSS the ghost is positioned by.

**ASCII data:**
- `foxglove.fixture.json` — **lossless** canonical grid (trailing whitespace safe).
- `ASCII_SOURCE.txt` — raw 74×67 char grid (padded to 74/row; convenience view).
- `ASCII_COLORS.txt` — the `.`/`w` colour grid (no `r`; red is procedural).
- `ASCII_METADATA.json` — measured dimensions, cell counts, encoding rules.
- `CHARACTER_PALETTE.json` — the DENS density ramp (per-char), NOISE/SHIM sets,
  glyphs-in-use, and the exact red/colour model.
- `FOXGLOVE_CHECKSUM.txt` — SHA-256 of the data (detects whitespace/glyph drift).

**Specs (derived, every value pinned to source):**
- `FOXGLOVE_GEOMETRY.json` — grid + honest pseudo-depth maths (no 3D).
- `FOXGLOVE_ANIMATION.json` — machine-readable exact parameters.
- `FOXGLOVE_MOTION_SPEC.md` — sway/reveal/timeline equations + copy-paste block.
- `FOXGLOVE_EFFECTS.md` — glow/blur/colour/material layers + static-pose definition.
- `FOXGLOVE_STYLES.css` — positioning CSS + landing `text-shadow` glow.
- `FOXGLOVE_RESPONSIVE_RULES.md` — sizing maths; mobile removes the ghost.
- `FOXGLOVE_DEPENDENCIES.md` — runtime/data/font/globals manifest.
- `FOXGLOVE_IMPLEMENTATION_MAPPING.md` — file→destination, integration strategy.
- `FOXGLOVE_ACCEPTANCE_CRITERIA.md` — checkable tests + static-capture protocol.

**Reference:**
- `preview.html` — isolated inspection harness / motion reference (dev-only).
- `canonical-static-desktop.png` — ghost, deterministic static pose, desktop.
- `canonical-static-mobile.png` — ≤760 px state (ghost intentionally absent).

---

## Canonical numbers (quick card)

- Grid **74 × 67**, cell aspect **0.6** (`cw = ch*0.6`); window variant uses 0.62.
- Non-space glyph cells **2250**; unique glyphs **54**.
- Timeline **build 4.2s · hold 2.6s · decay 3.0s · gap 1.1s**, smoothstep.
- Reveal order **bottom-first** (`o = 1 - y/rows`).
- Sway **±30 px** horizontal, frequency **0.55**, density-weighted; **no rotation, no scale**.
- Red **deterministic** `(x*7+y*13)%11===0` ≈ 9.09 % (ghost) — never per-frame random.
- Paint cap **~30 fps**; DPR cap **1.5** (ghost).
- Colours: white `rgba(198,204,214,0.95)`, red `rgba(230,32,46,0.95)` on `#000`.
- Font **IBM Plex Mono 500**. Mobile ≤760 px: ghost `display:none`.

`sha256(foxglove.fixture.json)` — see `FOXGLOVE_CHECKSUM.txt`.
