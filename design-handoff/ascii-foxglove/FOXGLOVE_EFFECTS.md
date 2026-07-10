# FOXGLOVE — Effects, colour, glow, blur, material layers

Every visual layer, per renderer, with exact values pulled from source. **There is
no CSS `filter`, `blur`, `drop-shadow`, `backdrop-filter`, bloom, chromatic-offset,
or blend-mode on the foxglove.** The "glow" is intrinsic: canvas alpha modulation
for the ghost, `text-shadow` for the landing. Do not add post-processing that the
production does not have.

---

## 1. Canonical ghost (canvas) — `source/xgve-foxglove-ghost.js`

Single `<canvas class="foxglove-ghost">`, one 2D context, per-cell `fillText`.
No offscreen buffers, no compositing layers.

| Property | Value |
|---|---|
| Fill (white glyph) | `rgba(198,204,214,0.95)` |
| Fill (red glyph) | `rgba(230,32,46,0.95)` |
| Font | `500 {ch*0.95}px 'IBM Plex Mono', monospace` |
| Text align / baseline | `center` / `middle` |
| DPR cap | `Math.min(1.5, devicePixelRatio)` |
| Glow | **none** (no `shadowBlur`) — luminosity comes from alpha + rolling light |
| Blur | **none** |

**Alpha (the entire "glow/bloom" of this renderer):**
```
lite  = 0.85 + 0.35*(density - 0.5)*sin(t*0.55 + 0.6)          // rolling light
wv    = sin(px*0.011 + t*1.2) + sin(py*0.013 - t*0.9)          // shared field wave
alpha = min(1, smooth(reveal/0.22) * (0.52 + 0.24*(wv*0.25 + 0.5)) * lite)
```
Denser glyphs (higher `density`) read brighter and parallax further — that IS the
depth cue. `density` per glyph is from the DENS ramp in `CHARACTER_PALETTE.json`.

**Red (deterministic, never per-frame random):**
`isRed = (x*7 + y*13) % 11 === 0` → ~9.09 % of glyph cells. A random-per-frame red
reads as a colour glitch — keep it deterministic (see `ascii-motion-doctrine.md` §3).

**Same-surface integration:** each frame publishes `window.XGVE_RMASK` (a `Set` of
24-px cell keys). The background ASCII field multiplies its own alpha ×0.14 where
masked, so the field visibly *parts* to reveal the foxglove — it is one continuous
surface, never a sticker layered on top.

---

## 2. Landing (DOM) — `source/xgve-foxglove.jsx` → `FoxgloveAscii`

Two absolutely-stacked `<pre>` layers inside one relative `<div>`. Reproduced in
`FOXGLOVE_STYLES.css`. At production `font = 8`:

| Layer | Colour | text-shadow (glow) |
|---|---|---|
| white | `#e9eaec` | `0 0 4px rgba(150,160,175,.22)`   (= `0 0 {fs*0.5}px`) |
| red | `#ff2233` | `0 0 7.2px rgba(255,34,51,.5)`   (= `0 0 {fs*0.9}px`) |

The red layer is created but receives **no glyphs** (foxglove `colors` has no `r`),
so the landing foxglove is entirely white. Section backdrop is a radial vignette
`radial-gradient(150% 130% at 76% 50%, #0e0e11 0%, #000 60%)`.

---

## 3. Retro window (canvas) — `source/xgve-windows.jsx` → `Flora`

240×330 canvas. Four-tier colour by hash `hsh = (x*7 + y*13) % 23`:

| Condition | Colour |
|---|---|
| `colors[y][x]==='r'` or `hsh===0` | `#e6202e` (red, ~4.35 %) |
| `hsh < 3` | `#4fa3c0` (cyan) |
| `hsh < 8` | `#6f7480` (gray) |
| else | `#c6ced8` (white) |

No glow, no blur; flat fills, `500 {ch*0.95}px` mono. Cell aspect **0.62** here
(vs 0.60 elsewhere).

---

## Static-capture state (see §10 of the handoff brief)

The canonical still pose is **deliberately chosen** — do NOT just freeze at `t=0`,
because the field wave `wv = sin(px*0.011 + t*1.2) + sin(py*0.013 - t*0.9)` is
**position-dependent** and stays non-zero at `t=0`, and `lite` at `t=0` is
`0.85 + 0.35*(density-0.5)*sin(0.6)` (not flat). The chosen pose forces:

- `rf = 1` (full build, no decay)
- **sway = 0** → no horizontal parallax
- **field wave `wv = 0`** → draw at `py`; the wave alpha term collapses to
  `0.52 + 0.24*(0*0.25+0.5) = 0.64`
- **rolling light flat `lite = 0.85`**
- red by the deterministic hash `(x*7+y*13)%11===0`
- NOISE picks stubbed deterministic

Faithful detail (not a bug, don't "clean it up"): at `rf = 1` the reveal front is
`reveal = y/rows`, so **row `y = 0` stays blank** and rows `y ≈ 1..4`
(`reveal < 0.06`) render as NOISE glyphs — this is the true hold-state crown.
`preview.html?static=1` applies exactly this pose and only then sets
`document.title = 'foxglove:ready'` / `window.__foxgloveReady = true`.
