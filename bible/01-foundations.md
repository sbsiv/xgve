# 01 — Visual Foundations (exact values)

Every value here is copied from the shipped code (`../tokens/*.css`, `../site/*`).
Reproduce the numbers exactly — do not round to an 8px grid or a framework default.

The site is dark-canonical. Tokens live in `../tokens/` and are consumed via CSS
custom properties. The website file also hard-codes some literals inside canvas JS
(canvas cannot read CSS vars cheaply) — those literals are listed here too, because
**they must stay in sync with the tokens**.

---

## 1. Color — brand primitives

| Token | Hex | Use |
|---|---|---|
| `--xg-black` | `#000000` | Void Black — the page. `body`/`.stage` background. |
| `--xg-white` | `#ffffff` | Signal White — structure, wordmark, primary text. |
| `--xg-red` | `#e6021b` | Signal Red — the ONE accent. Scarce. |
| `--xg-red-bright` | `#ff2036` | red hover / advancing |
| `--xg-red-deep` | `#b00015` | red press / held |
| `--xg-red-dim` | `#6e000e` | deepest quiet red fill |

RGB triplets for alpha compositing: black `0 0 0`, white `255 255 255`, red `230 2 27`.

### Neutral ramp (grayscale, no hue cast — dark-first)

`--xg-n-0..13`: `#000000 · #0a0a0b · #0f0f11 · #151517 · #1c1c1f · #26262a ·
#313136 · #43444a · #5c5d64 · #83848c · #a8a9b0 · #cacbd0 · #e9eaec · #ffffff`.

Semantic aliases (consume these, not primitives): `--surface-canvas: n-0`,
`--surface-raised: n-3`, `--surface-overlay: n-4`, `--content-primary: white`,
`--content-secondary: n-10`, `--content-muted: n-9`, `--content-faint: n-8`,
`--border-subtle: n-4`, `--border-default: n-6`, `--accent: --xg-red`,
`--focus-ring: --xg-red`.

## 2. Color — the literals used inside the canvas engines

These are hard-coded in the JS (they are the *rendered* ASCII colors). Keep them
matched to the tokens above.

| Where | White/gray glyph | Red glyph |
|---|---|---|
| Background field (`xgve-asciifield.js`) | `#c6ced8` (atlas) | `#e6202e` (atlas) |
| Emblem ASCII (`xgve-ascii-emblem.js`) | `rgba(233,234,236,.96)` | `rgba(255,42,56,.95)` |
| Reveal layer (`xgve-foxglove-ghost.js`) | `rgba(198,204,214,0.95)` | `rgba(230,32,46,0.95)` |
| Reveal blink cursor (`▉`) | `rgba(198,204,214,0.9)` | — |
| Cursor brush (`xgve-site.jsx`) | `#e9eaec` | `#ff2a38` (16% of glyphs) |
| Window flora accents | `#c6ced8` base, `#6f7480` mid, `#4fa3c0` rare cyan | `#e6202e` |

Note the field uses a slightly cool near-white `#c6ced8` at low alpha so it reads as
**atmosphere**; the emblem ASCII uses a brighter near-white so it reads as
**structure**. This contrast difference is intentional — do not equalise them.

## 3. Material — the metallic gradients (emblem right half)

Brushed-steel body (`.rl-structure` background), masked by the emblem silhouette:
```
linear-gradient(157deg,
  #ffffff 0%, #eef1f6 19%, #b2b8c4 45%, #eaedf2 57%, #9096a1 82%, #d4d8df 100%)
```
Heat-graded red needle (`.rl-needle`), masked by the needle silhouette:
```
linear-gradient(48deg,
  #6d000e 0%, #bf0019 29%, #ee0a22 57%, #ff5842 82%, #ffdcc8 100%)
```
Sheen sweep (`.rl-sheen`, `mix-blend-mode: screen`, animated across the mask):
```
linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.9) 50%, transparent 58%)
background-size: 280% 100%
```
Heat bloom during rev (`.rl-heat`, `screen`):
```
linear-gradient(48deg, transparent 34%, rgba(255,120,92,0.55) 68%, rgba(255,236,222,0.95) 100%)
```
Trail squares (`.rl-px`): `linear-gradient(135deg,#ff6a58 0%,#e6021b 72%)` +
`box-shadow: 0 0 5px rgba(230,2,27,0.55)` — the ONLY glow on the mark.

Full construction & motion of the emblem: `03-metallic-hybrid.md`.

## 4. Gradients used elsewhere

- **Vignette** (`.stage[data-vignette="on"]::after`, z 5):
  `radial-gradient(120% 120% at 50% 46%, transparent 52%, rgb(0 0 0 /0.55) 100%)`.
- **Field edge fade** (CSS mask on `.ascii-field`):
  `radial-gradient(120% 120% at 50% 50%, #000 86%, transparent 100%)` — glyphs
  dissolve at the viewport edge instead of hard-cropping.
- **Seam** (`.es-seam`, z 3): vertical
  `linear-gradient(to bottom, transparent, rgba(255,42,56,0.85) 18% 82%, transparent)`
  + `box-shadow: 0 0 8px rgba(255,42,56,0.55)`. *(Present in CSS but the seam div is
  currently NOT rendered — the split is a clean hard edge. Keep the rule for optional use.)*
- **Ring motif** (`.ring-motif`, z 1, opacity 0.16): a `conic-gradient` broken ring
  masked to a 1.5px stroke — a faint decorative echo of the brand's visor ring.

## 5. Texture, grain, blur, blend

- **Film grain** (`.grain`, z 6, `mix-blend-mode: screen`, `opacity 0.05`): an inline
  SVG `feTurbulence` `baseFrequency=0.9 numOctaves=2`, animated `grain-shift 1.1s
  steps(3)`. **Default OFF** (Tweak). Turning it on costs a full-screen blend
  composite per frame — acceptable but not free.
- **Dust** (`.dust`, z 1, opacity 0.6): 8 tiny `radial-gradient` specks drifting
  `dust-drift 46s linear` (−14px,−30px). Very subtle depth cue.
- **No blur anywhere except**: the emblem's `metal-in` entrance (`blur(9px)→0`), and
  the window shadow. There is no backdrop-filter (an earlier blur on the corner chips
  was removed for performance — do not reintroduce it).
- **Blend modes in use:** `screen` (sheen, heat, grain), `multiply` (tagline VHS
  scanline). Nothing else.

## 6. Shadows & glow (there are almost none — by design)

| Element | Shadow / glow |
|---|---|
| Emblem metal | **none** (no drop shadow, no bevel) |
| Trail squares `.rl-px` | `0 0 5px rgba(230,2,27,0.55)` (only mark glow) |
| Retro window | `box-shadow: 0 12px 40px rgba(0,0,0,.6)` |
| Cursor brush glyph | `text-shadow: 0 0 6px rgba(200,215,235,0.30)` |
| Tagline | chroma split + soft halo (see `05`), NOT a drop shadow |
| Focus ring | `outline: 1px solid #e6202e; outline-offset: 3px` |

The design forbids soft drop shadows / glow / bevels on structure. Elevation is
communicated by the near-black surface ramp and thin borders, not shadow.

## 7. Transparency conventions

- Corner chips: `background: rgba(8,8,10,0.45)`, `border: 1px solid transparent`,
  hover `border-color:#e6202e; background: rgba(216,32,46,0.16)`.
- Window body `#070709`, border `#33363d`, input well `#0b0b0e`.
- ASCII layers paint their own per-glyph alpha (see color literals + `02`).

## 8. Typography — families & why

| Role | Family (stack) | Rationale |
|---|---|---|
| Display / heading / **tagline** | **Space Grotesk** → Inter → system | geometric, engineered |
| Body / UI copy | **Inter** → system | clarity, low personality |
| **Technical / ASCII / mono** | **IBM Plex Mono** → ui-monospace → Menlo | the terminal voice; **all canvas glyphs** |

Loaded from Google Fonts (stand-ins pending licensed files — see `08`). **Never
re-type the XGVE wordmark in a font — it is artwork (PNG).**

### Type scale (px tokens)
`2xs 11 · xs 12 · sm 13 · base 15 · md 16 · lg 18 · xl 22 · 2xl 28 · 3xl 36 ·
4xl 48 · 5xl 64 · 6xl 88 · 7xl 120`.
Weights `400/500/600/700`. Line height `none 1 · tight 1.05 · snug 1.2 · normal 1.5
· relaxed 1.65`. Tracking `tighter −0.03 · tight −0.015 · normal 0 · wide 0.04 ·
wider 0.08 · widest 0.16` (widest = mono eyebrow caps).

### The specific text styles on the page

| Style | Font | Size | Weight | Tracking | Transform | Color |
|---|---|---|---|---|---|---|
| **Tagline** "Good taste, engineered." | Space Grotesk | `clamp(32px,4.6vw,68px)` | 700 | −0.01em | none | `#fff` + chroma; `.dot` = red |
| Corner label (readme/contact/Pause) | IBM Plex Mono | 13px | 600 | 0.14em | UPPERCASE | `#fff` chip |
| Corner "Foxglove Multiversal" | IBM Plex Mono | 13px | 600 | 0.14em | UPPERCASE | `#ff2a38` |
| Copyright (bl) | IBM Plex Mono | 11px | (500) | 0.16em | UPPERCASE | `--content-muted` |
| Window title bar | IBM Plex Mono | 11px | — | 0.18em | UPPERCASE | `#c6ced8` |
| Window body text | IBM Plex Mono | 12.5px | — | — | none | `#c6ced8` |
| Window project name | Space Grotesk | 24px | 700 | — | none | `#fff` |
| Eyebrow (FLORA_SERIES) | IBM Plex Mono | 10px | — | 0.22em | UPPERCASE | `#565b64` |
| Chip (IN DEVELOPMENT/WISHLIST) | IBM Plex Mono | 10px | — | 0.16em | UPPERCASE | `#fff` on `#c11722` |

The **Work overlay** (legacy, reachable in older builds) uses Space Grotesk
semibold `clamp(24px,4.2vw,52px)` project names — see `04-components.md`.

## 9. Layout & the z-index stack (memorise this)

Single full-viewport stage, no scroll: `body{overflow:hidden}`, `.stage{position:
relative; height:100vh; width:100vw; overflow:hidden; background:#000}`. The center
object is absolutely centered (`.stage-inner{position:absolute; inset:0; display:grid;
place-items:center}`).

**Z-index order (bottom → top):**

| z | Layer | Element |
|---|---|---|
| 0 | Background ASCII field (canvas) | `.ascii-field` |
| 1 | Foxglove/XGVE reveal (canvas), dust, ring motif, cursor-light | `.foxglove-ghost` etc. |
| 2 | Center object + emblem-ASCII canvas + mask column | `.stage-inner`, `.es-ascii` |
| 3 | Seam / lockup / tagline | `.es-seam`, `.rl-lockup` |
| 5 | Vignette | `.stage::after` |
| 6 | Grain, cursor brush trail | `.grain`, `.ascii-trail` |
| 7 | Corner HUD | `.hud` |
| 20 | Work overlay (legacy full-screen) | `.work` |
| 90 | Retro windows | `RetroWindow` |

Corners are fixed insets: TL `top:26 left:30`, TR `top:22 right:30`, BL `bottom:24
left:30`, BR `bottom:24 right:30` (px). BR is a right-aligned flex column, `gap:8px`.

Everything about how these scale across screens: `06-responsive.md`. Everything about
how they animate in: `05-motion-interaction.md`.
