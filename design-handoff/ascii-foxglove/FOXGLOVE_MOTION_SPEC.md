# FOXGLOVE — Motion specification (exact)

Canonical renderer: `source/xgve-foxglove-ghost.js` → `window.XGVE_initFoxgloveGhost(canvas)`.
All values below are copied from source, not approximated. Time `t` is in **seconds**.

> The ghost alternates two subjects on one canvas, **never simultaneously**:
> `idx 0` = **foxglove** (far right, bottom-first) · `idx 1` = XGVE wordmark
> (bottom-left, left→right). This spec covers the foxglove subject (`idx 0`).

## Frame loop
- `dt = min(0.05, (now - prev)/1000)`; accumulate `tt += reduced ? 0 : dt`.
- Paint cap ~30 fps: `if (now - lastPaint < 33) return;` (timeline stays true even
  when a paint is skipped).
- `smooth(t) = t*t*(3 - 2*t)`, clamped to `[0,1]` (smoothstep).

## Reveal timeline (foxglove subphase)
`e = tt - subStart`. Durations (seconds):
```
build Tb = 4.2   hold Th = 2.6   decay Td = 3.0   gap Tg = 1.1
```
Reveal fraction `rf`:
```
e < Tb                     → rf = smooth(e / 4.2)             // build
e < Tb+Th                  → rf = 1                           // hold
e < Tb+Th+Td               → rf = 1 - smooth((e-Tb-Th)/3.0)   // decay
else                       → rf = -1                          // gap (blank + blink cursor)
e ≥ Tb+Th+Td+Tg            → idx = (idx+1)%2 ; subStart = tt   // hand off to wordmark
```
Per-cell reveal order (bottom builds first): `o = 1 - y/rows`.
Per cell: `reveal = rf - o` (skip if `≤ 0`).
- `reveal < 0.06` → draw a random **NOISE** glyph (leading edge).
- else → 1.5 % chance NOISE, otherwise the cell's **true character** (exact art).

## Sway (the pseudo-3D motion) — copy-paste spec
```ts
// density = DENS.indexOf(char)/(DENS.length-1)  ∈ [0,1]  (see CHARACTER_PALETTE.json)
const foxgloveSway = {
  timeUnitSeconds: true,
  swayFrequency: 0.55,                 // rad/s inside the sines
  parallaxAmplitudePx: 30,             // horizontal, density-weighted
  parallaxX:   (density, t) => (density - 0.5) * 30 * Math.sin(t * 0.55),
  rollingLight:(density, t) => 0.85 + 0.35 * (density - 0.5) * Math.sin(t * 0.55 + 0.6),
  fieldWave:   (px, py, t)  => Math.sin(px*0.011 + t*1.2) + Math.sin(py*0.013 - t*0.9),
  verticalLiftPx: (wv) => wv * 2.4,    // added to py at draw time
  transformOrigin: "none — offsets are applied per glyph in the draw call, not via CSS transform",
  rotationDeg: 0,                      // NO rotation. Oscillation only (never full-rotate).
  scaleRange: [1, 1],                  // NO scale on the foxglove itself.
};
```
Applied per glyph:
```
px = originX + x*cw + cw/2 + parallaxX(density, t)
py = originY + y*ch + ch/2
draw glyph at (px, py + fieldWave(px,py,t)*2.4)
alpha = min(1, smooth(reveal/0.22) * (0.52 + 0.24*(fieldWave*0.25+0.5)) * rollingLight)
```

## Independent parts?
**No per-part rig.** Stem, bells, leaves, flower head are NOT animated separately —
they are cells of one grid. Their apparent independent motion is an emergent result
of `density` varying cell-to-cell (denser cells parallax + brighten more). Do not
build a stem/bell/leaf skeleton; there isn't one.

## Procedural vs keyframe
Fully **procedural** (sine-driven), no keyframes, no Perlin/simplex noise, no springs,
no damping, no pointer/scroll influence, no random gusts, no seed. The only randomness
is the ≤1.5 % per-frame glyph flicker and the leading-edge NOISE glyph pick — neither
affects geometry. Deterministic given `t`.

## Reduced motion
`matchMedia('(prefers-reduced-motion: reduce)')` → timeline frozen, `idx` pinned to
`0`, `rf` pinned to `1` (full foxglove, no build/hold/decay cycling).
**Honest caveat:** sway / rollingLight / fieldWave read `performance.now()` directly,
so they continue to move under reduced-motion in the shipped code. See
`FOXGLOVE_ACCEPTANCE_CRITERIA.md` for the exact-freeze option if strict reduced-motion
is required.

## Pause / visibility
`window.XGVE_PAUSED === true` → canvas cleared, `XGVE_RMASK = null`, timeline held.
Resize re-measures on `window 'resize'`.
