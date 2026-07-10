# MINIMAL — Compressed Reconstruction Package

Everything an implementation agent needs for a fast rebuild without reading the full
bible. Deep detail is in `00`–`10`; this is the cheat sheet.

---

## 1. One-paragraph visual summary
Single black viewport, no scroll. Centered XGVE emblem = **half living-ASCII (left) /
half brushed-metal (right)**, hard split at center. Tagline "Good taste, engineered."
(red period, subtle cyan/magenta chroma + VHS) below it. Full-screen generative
**geometric ASCII field** always morphing behind everything (legible ~30px glyphs,
low-contrast, kaleidoscopic symmetry, scarce red). Trademark ASCII (Foxglove flora
right / XGVE wordmark bottom-left) **builds out of and dissolves back into** the field,
alternating; the field parts where they form. Four minimal corner labels; bottom-right
opens **retro draggable windows**. Cursor drags a 3-glyph ASCII brush. Feel: engineered,
premium-meets-terminal, restrained — never neon/cyberpunk/busy.

## 2. Design tokens (the ones that matter)
```
bg            #000000
ascii white   #c6ced8 (field)   emblem #eaeaec  reveal #c6ced8
signal red    #e6021b / #e6202e   (~9–14% of glyphs; hover #ff2036; deep #b00015)
metal steel   linear-gradient(157deg,#ffffff,#eef1f6,#b2b8c4,#eaedf2,#9096a1,#d4d8df)
needle heat   linear-gradient(48deg,#6d000e,#bf0019,#ee0a22,#ff5842,#ffdcc8)
window        bg #070709  border #33363d  title #c6ced8  close-border #83848c
fonts         IBM Plex Mono (all ASCII/labels) · Space Grotesk 700 (tagline) · Inter (body)
tagline       clamp(32px,4.6vw,68px) 700 -0.01em; chroma cyan rgba(0,225,255,.62)/magenta rgba(255,45,140,.62)
emblem size   clamp(420px,96vh,1040px), aspect 524/425, metal clip inset(0 0 0 49.6%)
z-order       field0 · reveal1 · emblem2 · seam3 · vignette5 · grain6/trail6 · hud7 · windows90
```

## 3. Component index
Stage/Root · Split Emblem (ASCII left + CSS-mask metal right) · Tagline · Corner HUD
(TL wordmark img · TR Pause/Resume · BL © · BR readme/contact/**Foxglove Multiversal**-red)
· Retro Window (Foxglove.APP / readme.txt / contact.txt; drag, □+Esc close) · Cursor
Brush · Tweaks panel (demo). Legacy/optional: Work overlay, Foxglove landing, redline
rev intro.

## 4. Responsive rules
Mobile-first, viewport-locked, no scroll. Fluid via `clamp()`/`vh`. Breakpoints:
**≤900px** re-anchor lockup; **≤760px** hide reveal layer, emblem `86vw`, tagline wraps,
chips 11px. Field never off. Emblem tracks viewport **height** (`96vh`, cap 1040, `86vw`
<760). Min 320px. Touch: brush absent, taps work, windows drag via Pointer Events.

## 5. ASCII mechanics (the core)
- **Atlas render:** pre-draw charset to offscreen canvas per color; blit with
  `drawImage`. dpr≤1.5 (field) / 2 (emblem). CELL 30.
- **Field:** grid of cells; scalar `s` = **2 counter-rotating kaleidoscopic folds**
  (`u=|rx|,v=|ry|`) feeding **7 sine modes** (rings, spiral, lattice, moiré, 2nd-fold
  rings, chebyshev, weave) with slowly-morphing weights; `val=0.5+s*0.19`; cull <0.30;
  displace by `zN=s*0.45` (scale `1+zN*.35`, lift `-zN*CELL*.9`, radial parallax);
  churn glyph = `(hash + T*7)%N`; red on peaks; alpha ×0.14 where `XGVE_RMASK` set.
- **Pseudo-depth (signature):** `d = DENS.indexOf(char)/(len-1)`; sway
  `px += (d-.5)*A*sin(t*.55)` (A 30 reveal / 22 emblem) + rolling light
  `α*= .85+.35*(d-.5)*sin(t*.55+.6)`. Ramp:
  `" .`',:;^~-_!|/\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08"`.
- **Reveal:** `reveal = rf - order` (fox order = 1−y/R bottom-first; word = x/C);
  `rf` = smoothstep build → 1 hold → 1−smoothstep dissolve → gap; leading edge
  (`reveal<0.06`) draws NOISE glyph; interior = exact char (fox) / SHIM (word); red =
  deterministic `(x*7+y*13)%11===0`; publish `XGVE_RMASK` (24px buckets) so the field
  parts. Timing fox `4.2/2.6/3.0/1.1`, word `3.0/1.8/2.2/1.1`.
- **Emblem ASCII:** left half of `XG_ASCII.emblem`; center-out entrance (2.1s
  smoothstep); junction flow `ph=(t*.35+x*.012+y*.006)%1` drift `+ph*9` to seam + fade;
  pseudo-depth; 2 rogue red glyphs escape left.
- Data: `window.XG_ASCII = {emblem 82×35, wordmark 120×14, foxglove 74×67}` (`chars[]`,
  `colors[]` where `"r"`=red).

## 6. Motion table
```
ENTRANCE  field 0s→1.3s(op.9) · emblem center-out 0→2.1s · metal blur9→0 @1.6s/1.3s · tagline @2.3s/0.9s
EMBLEM    rev -130°→0 2.6s + flutter .18s + body-vibe .1s → cool 1s → SIGNAL PULSE (brightness .72↔1.32, px op .35↔1) 2.6s
SHEEN     5.5s screen sweep    TAGLINE chroma 3.8s + VHS .7s
FIELD     continuous, 30fps paint (timeline on real dt)   REVEAL alternating ~10.9s/8.1s
CURSOR    3 glyphs/stroke, drift -30px + fade 1.4–2s (WAAPI), desktop only
PAUSE     window.XGVE_PAUSED → field+reveal freeze, emblem keeps going
REDUCED   static field + static foxglove, no loops, no brush
RULES     fast, ends still. Only field/pulse/sheen/chroma loop. No bounce/spin/glitch/scroll-fx.
```

## 7. Tech
HTML/CSS (structure, corners, tagline, windows) · CSS gradients + `mask-image` +
`screen` blend (metal) · **Canvas 2D + atlas** (3 ASCII engines) · DOM + WAAPI (brush) ·
thin React 18 shell. No WebGL/shaders/video/motion-lib/backdrop-filter. Grain OFF default.
Load order: React→Babel → ascii-data.js → asciifield/ascii-emblem/foxglove-ghost →
tweaks/lockup/foxglove/work/windows/site (babel) → boot polls then renders `<XGVE_App/>`.

## 8. Asset manifest (runtime)
`assets/wordmark/xgve-wordmark-redx.png` (TL, 25px) · `assets/web/xgve-favicon.ico` ·
`assets/web/xgve-icon-512.png` (og placeholder) · `site/ascii-data.js` (trademark grids)
· `site/emblem-masks.css` (`--m-struct`/`--m-needle` data-URIs from the 2048 master).
No photos, no icon font, no SVG sprite. Placeholders to replace: og:image (→1200×630),
social URLs, `WISHLIST_URL`, mailing list. Fonts = OFL stand-ins (self-host for prod).

## 9. Canonical screenshots
`screens/` — desktop 1440 + mobile 390, clean + annotated. Match silhouette, emblem
size/split, field texture, corner layout, tagline. Verify with real pixel captures
**≥1.5s after load** (Canvas paints after mount).

## 10. Blind-rebuild prompt
Full self-contained prompt: `10-master-prompt.md`. Deep technique reference:
`../guidelines/ascii-motion-doctrine.md`. When in doubt, the code in `../site/` is canon.
```
Top failure risks: wrong mono · field-as-rain · no pseudo-depth · reveals-on-top ·
glossy metal · feathered junction · broad chroma/HUD · normalised ASCII · stretched or
over-hidden mobile · generic fade-ins.  (Details: 09 §B.)
```
