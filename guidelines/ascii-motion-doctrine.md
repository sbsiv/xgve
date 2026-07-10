# ASCII Motion Doctrine — banked techniques

Canonical, reusable patterns proven on the XGVE site (`site/`). Use these whenever
building ASCII/glyph surfaces for the brand. Black field, white/gray glyphs
(`#c6ced8` at low alpha), scarce red (`#e6202e`), IBM Plex Mono only.

## 1. Pseudo-depth from tonal density (the banked crown jewel)
ASCII art's characters ARE its shading. Map each char to a density value via a
tonal ramp (` .':;~-!|/()<>+=*?...$%#@&MWB08`, position = ink). That density is a
free per-cell depth map. Drive with it:
- **Parallax sway** — oscillate (never full-rotate) around the vertical axis:
  `px += (density - 0.5) * A * sin(t * 0.55)`, A ≈ 30px. Foreground slides against
  background → volumetric feel with ZERO change to the artwork's characters.
- **Rolling light** — `alpha *= 0.85 + 0.35 * (density - 0.5) * sin(t * 0.55 + 0.6)`.
Implemented: `site/xgve-foxglove-ghost.js` (DENS ramp, `exact` branch).

## 2. Morph-from-field reveal
Shapes build out of the ambient field, hold, disintegrate, on a slow alternating
timer. Per-cell reveal order (bottom-first for organic, left→right for wordmarks);
soft smoothstep alpha front (~0.22 of order-range); random NOISE glyphs only at the
leading edge (reveal < 0.06). Exact-art subjects keep their true chars (rare ≤1.5%
flicker); abstract subjects may shimmer through a varied set.

## 3. Same-layer integration (occupancy mask)
A reveal layer publishes `window.XGVE_RMASK` — a Set of 24px-cell keys
`((px/24|0)*4096)+(py/24|0)` — every frame; the background field multiplies alpha
×0.14 where masked. The pattern visibly *parts* to form the shape: one continuous
surface, never a sticker on top. Shapes also adopt the field palette + share its
wave motion (`sin(px*0.011 + t*1.2) + sin(py*0.013 − t*0.9)` lift & brightness).
Scarce red inside shapes: deterministic hash (`(x*7+y*13)%11===0` ≈ 9%), never
random per frame (color flicker reads as a glitch).

## 4. Parametric 3D field (displaced grid, not projected planes)
Full-bleed 3D that can't leave holes: keep the screen-filling glyph grid; derive
depth `zN` from a sum of travelling sine modes with slowly-morphing weights and two
counter-rotating kaleidoscopic folds; apply relief lift (`py − zN·CELL·0.9`), scale
(`1 + zN·0.35`), radial parallax, and depth-brightness. Avoid free-floating tilted
planes — they project off-screen/leave empty corners (learned the hard way).

## 5. Glyph-atlas rendering
Pre-render the full charset once per color to an offscreen atlas; blit with
`drawImage` + `globalAlpha`. Never per-cell `fillText` for full-screen fields — it
stutters. Rebuild atlas on dpr change. Cap dpr at 2. ~30px cells read as ASCII;
smaller reads as noise.

## 6. Trademark honesty rule
Never fabricate unseen geometry of brand marks (no invented 3D backs, no parametric
"lookalike" replacements). Flat trademark art gets pseudo-depth (§1) only. True
volumetric rotation requires a real 3D source from the brand owner.

## Verification rule
Canvas layers are invisible to DOM-based screenshots and paint a frame AFTER load —
verify with a real pixel capture after ≥1.5s delay, never an immediate DOM sample.
