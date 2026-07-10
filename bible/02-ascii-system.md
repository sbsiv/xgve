# 02 — The ASCII Visual System

This is the heart of the site and the part most likely to be rebuilt wrong. Read all
of it. Four engines share one design language:

1. **Background field** — `xgve-asciifield.js` — full-screen generative geometry.
2. **Emblem ASCII half** — `xgve-ascii-emblem.js` — the mark's left half as living code.
3. **Reveal layer** — `xgve-foxglove-ghost.js` — trademark art building/dissolving.
4. **Cursor brush** — inline in `xgve-site.jsx` — DOM glyphs, not canvas.

Plus the trademark **data** (`ascii-data.js`) and the **flora** inside the window.

All four obey the shared doctrine in `../guidelines/ascii-motion-doctrine.md`. Where
this file and the code differ, the code wins.

---

## A. Character ramps (copy verbatim — these are tuned)

```
DENS  (tonal density, light→dark; used as a depth map):
" .`',:;^~-_!|/\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08"

FIELD glyph set (background churn):
"ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#@%&$*+=-<>/\|!?:;.^~coxsevz"

EMBLEM glyph set (shimmer in the emblem's left half):
"ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>/\|!?"

REVEAL shimmer set (SHIM — non-exact subjects like the wordmark):
"ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>?!"

NOISE (leading-edge sparkle during build/dissolve):
"01#@%&$X=+*<>/\|"

CURSOR BRUSH set:
"#@8%&$X017=+*:."
```

**`DENS` is the important one.** Its index = ink weight (space = lightest,
`8`/`0` = heaviest). Any glyph's position in `DENS`, normalised to `0..1`, is that
glyph's **pseudo-depth** `d`. This is how flat ASCII gains volume without a 3D model
(see §D). Never sort or "clean" these ramps.

## B. The glyph-atlas rendering technique (performance floor)

Full-screen `fillText` per cell stutters. The field instead pre-renders the whole
charset ONCE into an offscreen sprite atlas per color, then blits each cell with
`drawImage`. Rebuild the atlas whenever dpr changes.

```js
function makeAtlas(col) {                 // one row of tiles, one glyph per tile
  var a = document.createElement("canvas");
  a.width = tile * N; a.height = tile;    // tile = ceil(CELL * dpr); N = CHARS.length
  var x = a.getContext("2d");
  x.textBaseline = "middle"; x.textAlign = "center";
  x.font = "600 " + Math.floor((CELL - 6) * dpr) + "px 'IBM Plex Mono', monospace";
  x.fillStyle = col;
  for (var i = 0; i < N; i++) x.fillText(CHARS[i], i*tile + tile/2, tile/2);
  return a;                               // draw glyph i: drawImage(a, i*tile,0,tile,tile, dx,dy,sz,sz)
}
atlasW = makeAtlas("#c6ced8"); atlasR = makeAtlas("#e6202e");
```

Rules: **dpr capped at 1.5** on the field & reveal (`Math.min(1.5, devicePixelRatio)`);
the emblem canvas keeps 2 for crispness. `CELL = 30` (the value that makes the field
read as *legible ASCII characters*, not noise — do not shrink it; that was an explicit
correction). Font weight 600, size `CELL-6` scaled by dpr.

## C. Background field engine (`xgve-asciifield.js`)

A screen-filling grid of `CELL`-sized cells. Each frame, every cell samples a scalar
field `s`, maps it to brightness/red/where-to-draw, and blits an atlas glyph. The
field is built from **two counter-rotating kaleidoscopic folds** feeding **seven
overlapping sine modes** whose weights slowly morph.

```js
// time base
tt += dt * 2.3;  var T = tt;                    // speed multiplier 2.3
// two folds (rotations of the normalized coordinate)
var ra = T*0.07, ca=cos(ra), sa=sin(ra);
var rb = -T*0.05 + 1.3, cb=cos(rb), sb=sin(rb); // counter-rotating, phase-offset
// seven morphing weights
w1=.55+.45*sin(T*.17);  w2=.55+.45*sin(T*.13+2); w3=.55+.45*sin(T*.10+4);
w4=.5+.5*sin(T*.08+1);  w5=.5+.5*sin(T*.15+3);   w6=.5+.5*sin(T*.07+5);
w7=.5+.5*sin(T*.12+2.5);

for each cell (i,j):
  nx=(px-cx)/cx*aspect;  ny=(py-cy)/cy;         // normalized, aspect-corrected
  rx=nx*ca-ny*sa; ry=nx*sa+ny*ca;  u=|rx|; v=|ry|;   // FOLD A + mirror
  r=hypot(u,v); ang=atan2(v,u);
  bx=nx*cb-ny*sb; by=nx*sb+ny*cb;  r2=hypot(bx,by);  // FOLD B
  s = w1*sin(r*8   - T*1.3)      // concentric rings
    + w2*sin(ang*6 + r*4.5 - T*.9)  // spiral petals
    + w3*sin(u*20 + v*20 - T*1.6)   // square lattice
    + w4*sin((u-v)*26 + T*1.8)      // diagonal moiré
    + w5*sin(r2*11 - T*1.1)         // second-fold rings
    + w6*sin(max(u,v)*16 - T*1.2)   // chebyshev diamonds
    + w7*sin((u*2+v)*13 + T*.7);    // sheared weave
  val = 0.5 + s*0.19;               // ~0..1 brightness
  if (val < 0.30) continue;         // sparse — cull dim cells
```

The mirror fold (`u=|rx|, v=|ry|`) is what gives the field its **kaleidoscopic
symmetry** — do not drop the `abs()`. The `−T*…` terms make waves *travel*.

### Field pseudo-3D displacement (the field's own depth)
```js
zN    = s * 0.45;                          // signed depth from the same field
scale = max(0.55, 1 + zN*0.35);            // near cells bigger
dx    = px + (px-cx)/cx * zN*16;           // radial parallax outward
dy    = py - zN*CELL*0.9;                  // relief lift on crests
depthB= 0.55 + 0.45*clamp(zN*0.45+0.5,0,1);// depth brightness
alpha = (0.12 + min(0.62,(val-0.30)*0.8)) * depthB * brk;   // brk = occupancy mask
red   = val>0.88 || ((hash&7)===0 && val>0.66);  // ~scarce red on peaks
glyph index = (hash + (T*7|0)) % N;        // per-cell churn over time
drawImage(red?atlasR:atlasW, idx*tile,0,tile,tile, dx-sz/2, dy-sz/2, sz, sz);
```
`brk` is the **occupancy break** — where the reveal layer says "a shape is here,"
the field dims to `0.14` so the pattern parts (see §E). Draw order is row-major; that
is fine because alpha, not painter depth, sells the relief.

## D. Pseudo-depth from tonal density — THE signature technique

ASCII art already encodes light and shadow in its characters. So map each glyph to
`DENS` → density `d ∈ [0,1]` → treat `d` as depth. Then two cheap effects give
volume with **zero change to the artwork's characters**:

```js
d = DENS.indexOf(char) / (DENS.length-1);          // per-cell, computed once
// 1) parallax sway — oscillate around vertical axis (NEVER a full 3D spin)
px += (d - 0.5) * A * sin(t * 0.55);               // A≈30 (reveal) / 22 (emblem)
// 2) rolling light — brightness rolls across depth
alpha *= 0.85 + 0.35 * (d - 0.5) * sin(t * 0.55 + 0.6);
```

Foreground (dense) glyphs slide one way and brighten; background (light) glyphs slide
the other and dim → a breathing, dimensional read. **This is used identically in the
emblem ASCII and in both reveal subjects.** It is the thing users called "incredible";
it is canon (doctrine §1). Trademark-honesty rule: flat marks get *this*, never an
invented volumetric 3D reconstruction.

## E. Reveal layer (`xgve-foxglove-ghost.js`) — build / hold / dissolve + integrate

Two subjects **alternate, never simultaneous**:
- **A — Foxglove flora** (`XG_ASCII.foxglove`, exact art): FAR RIGHT `cx≈0.85`,
  `hFrac 0.72`, `wFrac 0.28`; reveal order **bottom-first** (`o = 1 − y/R`).
- **B — XGVE wordmark** (`XG_ASCII.wordmark`, shimmer): BOTTOM-LEFT (`ox = W*0.04`,
  `oy = H*0.9 − blockH`), `hFrac 0.19`, `wFrac 0.40`; order **left→right** (`o = x/C`).

Per-subject timeline (seconds): fox `{Tb 4.2 build, Th 2.6 hold, Td 3.0 dissolve,
Tg 1.1 gap}`; word `{3.0 / 1.8 / 2.2 / 1.1}`. Reveal fraction:
```js
phaseRF(e) = e<Tb        ? smooth(e/Tb)                    // build up
           : e<Tb+Th     ? 1                                // hold
           : e<Tb+Th+Td  ? 1 - smooth((e-Tb-Th)/Td)         // dissolve
           :               -1;                              // gap (nothing)
smooth(t) = t*t*(3-2*t);
```
Per cell, `reveal = rf − order`. Draw only cells with `reveal>0`; the **leading edge**
(`reveal<0.06`) draws a random `NOISE` glyph (the crackle), interior draws the exact
art char (with ≤1.5% flicker) or, for non-exact subjects, a `SHIM` glyph keyed to
position+time. Alpha ramps with `smooth(reveal/0.22)` (soft ~0.22 order-band front)
× a field-wave term × the pseudo-depth `lite`. Red inside exact art is a
**deterministic** hash `(x*7 + y*13) % 11 === 0` (~9%) — never random-per-frame
(that reads as a glitch).

**Integration (occupancy mask).** Each drawn cell registers a 24px bucket key:
```js
mask.add((((px/24)|0) * 4096) + ((py/24)|0));   // per frame
window.XGVE_RMASK = mask;                        // published for the field to read
```
The field multiplies its alpha ×0.14 where masked → the geometric pattern **recedes
exactly where the shape forms**. One continuous surface, never a sticker. During the
gap, `XGVE_RMASK = null` and a blinking `▉` marks where the next build begins.

## F. Emblem ASCII half (`xgve-ascii-emblem.js`)

Renders ONLY the left half of the emblem grid (`XG_ASCII.emblem`, 82×35). Which cells
are lit + which are red comes from the data; the glyph shown churns from the EMBLEM
set. Extra behaviours layered on:
- **Center-out entrance:** each cell has `o = dist_from_center / maxDist`; on load
  `rf` ramps `0→1` over 2100ms with smoothstep, revealing outward.
- **Junction flow:** `ph = (t*0.35 + x*0.012 + y*0.006) % 1`; glyphs drift `+ph*9`px
  toward the seam and fade (`pa` peaks mid-cycle) — letters stream to the split.
- **Pseudo-depth:** `d` from `DENS`; adds `(d−0.5)*22*sin(t*0.5)` x-offset + rolling
  `lite`. Same language as reveals.
- **Wave wobble:** `wv = sin(x*0.02 + t*1.3) + sin(y*0.024 − t)` adds a small `y`
  bob and alpha ripple — ties the emblem to the field's motion.
- **Rogue red glyphs:** 2 red letters periodically break free of the left edge,
  drifting up-left (`x−rp*80, y−rp*26`) and fading, on offset cycles. Intentional.
- Paint throttled to ~14fps (`now-prev>70`); dpr 2 for crispness.

## G. The trademark data (`ascii-data.js`)
```js
window.XG_ASCII = {
  emblem:   { cols:82, rows:35, chars:[…35 strings…], colors:[…"r"=red…] },
  wordmark: { cols:120, rows:14, chars:[…], colors:[…] },
  foxglove: { cols:74, rows:67, chars:[…], colors:[…] }
};
```
`chars[y]` is a row string (space = empty cell). `colors[y][x] === "r"` marks a red
cell. This file IS the trademark artwork in ASCII form — treat it as a brand asset,
ship it, never regenerate it casually. To make new ASCII art of a brand mark, follow
§H and hand-verify against the source.

## H. Image → ASCII pipeline (for producing new `XG_ASCII` grids)

The grids above were authored/derived from the raster marks. To reproduce for a new
asset, the deterministic pipeline is:
1. **Source prep** — high-res transparent PNG on transparent/black; trim to content.
2. **Grayscale** — luminance `0.21R+0.72G+0.07B`; keep alpha as a mask.
3. **Contrast** — push a firm S-curve so structure separates from ground.
4. **Sampling grid** — pick `cols` (e.g. 74–120); `rows = cols * (h/w) * 0.5`
   (0.5 = monospace cell aspect ≈ width/height 0.6, so rows are ~half of square).
5. **Cell average** — average luminance (and alpha) per cell.
6. **Brightness→char** — map avg via the `DENS` ramp (bright→`" .':"`, dark→`"#@&MWB08"`);
   below an alpha threshold → space.
7. **Color pass** — mark cells that were red in the source as `"r"`.
8. **Hand-fix** — nudge a few cells so silhouette reads; **keep** minor irregularity.
9. Emit `{cols,rows,chars[],colors[]}`.

Density variation and small misalignments are features. Do not auto-regularise.

## I. Cursor brush (DOM, not canvas) — `xgve-site.jsx`

Throttled to 26ms; each stroke spawns **3** absolutely-positioned `<span>` glyphs in
`.ascii-trail` (z 6), each: random brush glyph, jitter ±14px, size `16–26px`, color
`#e9eaec` (16% `#ff2a38`), `text-shadow 0 0 6px rgba(200,215,235,.30)`. Web Animations
API: opacity `0.9→0`, translate up `−30px` + `scale 0.55`, `1400–2000ms` ease-out,
self-remove on finish. Disabled under reduced-motion. It is a *brush*, not confetti —
3 glyphs, slow decay.

## J. Global performance & control contracts
- **Paint caps:** field & reveal repaint at ~30fps (`now−lastPaint<30/33 → skip`),
  though their internal timelines advance on real `dt` (motion stays smooth).
- **`window.XGVE_PAUSED`** (bool): field freezes on its last frame; reveal clears and
  nulls `XGVE_RMASK`; the emblem keeps animating. Wired to the corner **Pause/Resume**.
- **`window.XGVE_RMASK`** (Set|null): the occupancy contract between reveal → field.
- **`document.hidden`:** field skips work on hidden tabs.
- **reduced-motion:** field static frame; reveal shows foxglove static; emblem no
  churn; cursor brush off.
Full rationale + fallbacks: `07-technical.md`.
