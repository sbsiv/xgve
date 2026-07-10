# FOXGLOVE — Responsive behaviour (exact)

The foxglove is **scaled as a whole** — it never reflows, never re-generates at a
different character density, and is never stretched independently in X and Y. The
grid is always 74×67; only the cell size changes.

## Ghost (canvas) sizing — the only "responsive" maths
Measured from the canvas's parent (`.stage`, full viewport). On every `resize`:
```
dpr = min(1.5, devicePixelRatio)
W   = host.clientWidth      H = host.clientHeight
canvas.style = W x H (css px);  canvas.width/height = W*dpr x H*dpr;  ctx.setTransform(dpr,0,0,dpr,0,0)
```
Cell size for the foxglove subject (`hFrac=0.72`, `wFrac=0.28`, `cx=0.85`):
```
ch = (H * 0.72) / 67
cw = ch * 0.6
if (cw*74 > W*0.28) { cw = (W*0.28)/74 ; ch = cw/0.6 }   // clamp width to 28% of viewport
blockW = cw*74 ; blockH = ch*67
originX = 0.85*W - blockW/2          // anchored far-right
originY = (H - blockH)/2             // vertically centred
```
So: **height-driven by default (72 % of viewport height), width-clamped to 28 % of
viewport width**, right-anchored, vertically centred. Aspect is preserved (single
`ch`, `cw = ch*0.6`).

## Breakpoint — mobile removes the ghost
```css
@media (max-width: 760px) { .foxglove-ghost { display: none; } }
```
The swaying ghost is **not shown on mobile at all**. There is no scaled-down mobile
foxglove ghost. Consequently:
- `canonical-static-mobile.png` documents the mobile viewport (≤760 px) where the
  ghost is intentionally absent — the foxglove that a mobile user meets is the
  **landing** DOM renderer (below), reached through the Work overlay.
- Do not "fix" mobile by scaling the ghost in; absence is the design.

## DPR / high-DPI
Capped at **1.5** (`Math.min(1.5, devicePixelRatio)`) for the ghost, **2** for the
landing/window canvases. ~30 px effective cells read as ASCII; smaller reads as noise
— the width clamp keeps cells above that floor on wide/short viewports.

## Detail level / layer count / animation intensity
Constant across breakpoints (no LOD switch, no alternate source frames, no reduced
layer count, no perf fallback tier) — the single lever is `display:none` under 760 px.

## Landing (DOM) & window renderers
- Landing `FoxgloveAscii`: fixed `font=8` → intrinsic box `355.2 × 616.4 px`; it sits
  in a flex row and simply overflows/centres — it does not rescale with viewport.
- Window `Flora`: fixed `240 × 330` canvas inside a draggable window clamped to
  `min(480, innerWidth-24)`.
