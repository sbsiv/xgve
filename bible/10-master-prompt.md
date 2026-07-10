# 10 — Blind-Rebuild Master Prompt

Copy everything below the line and give it to a fresh design/coding agent that has **no
access to this project, conversation, or Figma**. It is self-contained and points at
the specification files and canonical screenshots to reproduce.

---

## MASTER PROMPT — Rebuild the XGVE Studios website

You are rebuilding the **XGVE Studios** single-page website to match an approved
design exactly. Do not redesign, reinterpret, or "improve" it. Reproduce it. When a
choice arises, choose what the specification says.

### What it is
A **single black viewport, no scroll**, at every screen size. Dead center: the XGVE
emblem rendered as **half living-ASCII (left) / half brushed-metal (right)**, split at
horizontal center. Below it, the tagline **"Good taste, engineered."** (with a red
period) in a display face with subtle cyan/magenta chromatic aberration + faint VHS
scanline. Behind everything, a **full-screen generative geometric ASCII field** that is
always gently moving. Periodically, trademark ASCII artworks build themselves *out of*
that field — the **Foxglove Multiversal** flora (far right, builds bottom-up) and the
**XGVE** wordmark (bottom-left, builds left→right) — hold, then dissolve back;
they alternate, never overlap, and the field visibly **parts** where they form. Four
minimal corner labels (top-left wordmark, top-right Pause/Resume, bottom-left ©,
bottom-right: readme · contact · Foxglove Multiversal in red). Clicking the bottom-right
labels opens **retro draggable terminal windows**. The cursor drags a small **brush of
ASCII glyphs**.

### Identity (get the feel right)
"A machine with good taste." Engineered, precise, a little clandestine; confident
enough to sit almost still on black. It fuses **exactly one premium metallic object**
(the emblem's right half — the only glossy thing) with **raw generative ASCII**
(everything else, monospaced, deliberately imperfect). One accent: **Signal Red**,
scarce. Futuristic + experimental but **editorial and restrained** — never busy, never
neon, never cute, never generic-cyberpunk.

### Non-negotiables
- Colors: background `#000000`; ASCII white `#c6ced8` (field) / near-white
  `rgba(233,234,236,.96)` (emblem); Signal Red `#e6021b`/`#e6202e`, ~9–14% of glyphs,
  never a red field. Metal = cool-gray brushed-steel gradient
  `linear-gradient(157deg,#ffffff,#eef1f6,#b2b8c4,#eaedf2,#9096a1,#d4d8df)`, NO shadow/
  bevel/glow/chrome-reflection.
- Type: **IBM Plex Mono** for ALL ASCII + labels; **Space Grotesk 700** tagline
  (`clamp(32px,4.6vw,68px)`, −0.01em); **Inter** for body. No other fonts, no ligatures.
- The ASCII field reads as **legible characters** (cell ≈ 30px), is **low-contrast
  atmosphere**, has **kaleidoscopic mirror symmetry**, and **morphs continuously**.
- **Pseudo-depth from tonal density** (THE signature technique): map each glyph to a
  light→dark ramp; that index is its depth; sway `px += (d−.5)*A*sin(t*.55)` and roll
  its brightness. Apply to the emblem-ASCII and both reveals. Never fake volumetric 3D
  of the trademark; never redraw the mark.
- Reveals **emerge from** the field (occupancy mask dims the field where a shape forms),
  share its palette + wave motion; foxglove keeps its EXACT trademark characters.
- Emblem: clean **hard split at center** (metal clipped to right 49.6%); brushed steel,
  heat-graded red needle, calm red **signal-pulse** at rest, one sheen sweep ~5.5s, four
  red trail squares. The ASCII half shimmers, its letters drift toward the seam, and 2
  rogue red glyphs periodically escape leftward.
- Motion: **fast, decisive, ends still.** Only the field, the signal pulse, the sheen,
  and the tagline chroma loop. No bounce, no content spin, no glitch, no scroll effects,
  no emblem-follows-cursor.
- Corners are **four minimal labels** — NOT a busy HUD. No radars/coordinates/progress/JP.

### Layout & responsive
Single stage, `overflow:hidden`, `height:100vh`. Emblem `width: clamp(420px,96vh,1040px)`
(tracks viewport **height**), `aspect-ratio:524/425`, centered. Two breakpoints: at
**≤900px** re-anchor the lockup; at **≤760px** hide the reveal layer, set emblem
`width:86vw`, allow the tagline to wrap+center, shrink corner chips. Field never turns
off. Min viewport 320px; emblem caps at 1040px on ultrawide (big black margins are
correct). Mobile-first.

### Interaction
Cursor brush (3 glyphs/stroke, drift up + fade ~1.4–2s; desktop only). Corner chips:
red hover border, red focus outline. Windows: drag by title bar (Pointer Events +
`touch-action:none`), `□` and **Esc** close, scale-in on open. **Pause** freezes the
field + reveals but the emblem keeps animating (label → Resume). Full
`prefers-reduced-motion` fallback: static field, static foxglove, no loops, brush off.

### Technology
Plain **HTML/CSS** for structure, corners, tagline (CSS `text-shadow` chroma +
`repeating-linear-gradient` VHS), windows, and the metallic emblem (**CSS gradients +
`mask-image` silhouettes**, `mix-blend-mode:screen` sheen). **Canvas 2D** for the three
ASCII engines (field, emblem-ASCII, reveal), using a **pre-rendered glyph atlas +
`drawImage`** (never per-cell `fillText`), **dpr capped at 1.5** (field/reveal) / 2
(emblem), **~30fps paint cap** with the timeline advancing on real `dt`, off-screen +
Pause skipping. **DOM + Web Animations API** for the cursor brush. A thin **React 18**
shell for state. No WebGL, no shaders, no video, no motion library, no `backdrop-filter`,
grain OFF by default.

### Deliverables & acceptance
Reproduce the files and behaviours specified in the accompanying documents:
`00-INDEX` (identity + principles), `01-foundations` (exact tokens/type/z-index),
`02-ascii-system` (ramps, atlas, field math, pseudo-depth, reveals — **read fully**),
`03-metallic-hybrid` (split emblem), `04-components`, `05-motion-interaction` (timing
tables), `06-responsive`, `07-technical`, `08-assets`, and verify against
`09-checklist-and-failures`. The trademark ASCII grids are provided as `ascii-data.js`
(`window.XG_ASCII` = emblem 82×35, wordmark 120×14, foxglove 74×67); the emblem masks
come from the 2048px master icon.

### Verify your own output
1. Open at 375, 768, 1440, 2560px. Match the canonical screenshots in `screens/`.
2. Because the ASCII is Canvas: take real pixel screenshots **≥1.5s after load**, and
   count non-transparent canvas pixels to confirm the field/emblem/reveal actually
   paint (an immediate DOM sample reads empty — that is a timing artifact, not a bug).
3. Walk the `09` checklist. Any "No" is a regression — fix before shipping.
4. Confirm none of the 18 common failures in `09 §B` are present (especially: wrong
   mono, field-as-Matrix-rain, missing pseudo-depth, reveals-on-top, glossy metal,
   feathered junction, broad chroma/HUD, normalised ASCII, stretched/over-hidden
   mobile, generic fade-ins).

Match appearance **and** behaviour. If you cannot achieve an effect the specified way,
stop and flag it rather than substituting a generic pattern.
