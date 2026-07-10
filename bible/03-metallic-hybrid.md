# 03 — Metallic & Hybrid Artwork (the split emblem)

The emblem's **right half** is the only glossy, premium object on the page. It is
built entirely from CSS gradients masked by data-URI silhouettes of the real mark —
**nothing is redrawn, no image of chrome is used.** The **left half** is the ASCII
engine from `02-ascii-system.md §F`. Together they form one silhouette split at
horizontal center.

Files: `xgve-lockup.jsx` (the `RedlineEmblem` React component + layer markup),
`xgve-redline.css` (all the material + motion), `emblem-masks.css` (the two
data-URI mask silhouettes).

---

## A. The split — exact construction

```
.emblem-split { position: relative; width: clamp(420px, 96vh, 1040px); aspect-ratio: 524/425; }
.es-metal  { position:absolute; inset:0; clip-path: inset(0 0 0 49.6%); }   // RIGHT half only
.es-ascii  { position:absolute; inset:0; z-index:2; }                       // LEFT half (canvas)
.emblem-split .rl-emblem { width:100% !important; }                         // metal fills the box
```

- The metallic `RedlineEmblem` is rendered full-size, then **clipped to show only
  x ≥ 49.6%** (`clip-path: inset(0 0 0 49.6%)`). So the right half is metal.
- The ASCII canvas draws only the **left half** of the grid (it stops at `px ≥ W*0.5`).
- Result: a clean hard seam at center; left = living code, right = brushed steel,
  sharing one 524×425 silhouette. **The `.es-seam` red divider exists in CSS but is
  NOT mounted** — the current, approved look is a clean split (an interleaved/feathered
  junction was tried and explicitly rejected; the junction *flow motion* was kept, the
  junction *geometry* stays a hard edge). Keep `clip` at 49.6%.
- Aspect ratio `524 / 425` is the real icon's ratio — never change it.

## B. Metallic layer stack (exploded, back → front)

All layers are `position:absolute; inset:0` inside `.rl-emblem`, each masked by a
silhouette so the gradient only paints the mark:

| # | Layer | What it is | Mask | Blend |
|---|---|---|---|---|
| 1 | `.rl-structure` | brushed-steel body | `--m-struct` | normal |
| 2 | `.rl-rev` / `.rl-needle` | heat-graded red needle (rotates) | `--m-needle` | normal |
| 3 | `.rl-heat` | ember bloom during rev | (over needle) | screen |
| 4 | `.rl-sheen` | single moving specular sweep | `--m-struct` | screen |
| 5 | `.rl-px` ×4 | red trail squares (the pixel DNA) | none (positioned divs) | normal |

Masks (`emblem-masks.css`) are **data-URI PNG silhouettes** generated from the
**2048px master icon** (`uploads/XGVE_Asset_Pack/icon/XGVE_icon_transparent_2048.png`):
`--m-struct` = every non-red pixel (the white structure) as a white alpha matte;
`--m-needle` = the red needle+visor pixels minus the four trail squares. Because they
come from the 2048px master, the metal stays crisp even at `width: 1040px` (an earlier
432px mask pixelated when upscaled — regenerate from the 2048 master, never upscale a
small mask). Regeneration recipe is in `08-assets.md`.

### Material qualities to preserve
- **Brushed steel, not chrome.** Cool grays, one bright band, one dark band; the
  `157deg` gradient (`#ffffff→#eef1f6→#b2b8c4→#eaedf2→#9096a1→#d4d8df`) reads as an
  anodised dial, not a mirror. No environment reflection, no rainbow.
- **Lighting** comes from top-left (the `157deg` angle + the sheen's `115deg` sweep).
- **Edges are sharp** (mask edge = artwork edge). No bevel, no outer glow, no drop
  shadow. The only glow is the tiny `0 0 5px` red on the trail squares.
- **The needle is heat-graded** (`48deg`, deep maroon `#6d000e` at the hub →
  incandescent `#ffdcc8` at the tip) so at rest it looks hot-tipped; during the rev a
  `screen` bloom (`.rl-heat`) pushes it to near-white then cools away.
- **Trail squares** sit at real fractional positions of the 524×425 icon: p1
  `83.8%,29.9%` · p2 `88.2%,24.5%` · p3 `91.8%,20.0%` · p4 `95.2%,15.8%`, widths
  `3.1/2.9/2.6/2.5%`. They are the emblem's "pixel trail" DNA.

## C. The emblem's motion (the "redline" — rev → cool → settle → pulse)

This is the site's signature emblem animation. It runs on the metallic half via
class/attr state on `.rl-emblem` (`is-revving` → `is-settled` + `data-idle`).
Durations scale by `--rl-mo` (Motion, default 1). Full keyframe table in
`05-motion-interaction.md §D`; the shape:

1. **Rev (hot):** needle sweeps in from `−130deg → 0` over `2.6s`
   (`cubic-bezier(.28,.6,.32,1)`); at the limiter it **flutters** (`rl-flutter 0.18s`
   between ~`5deg` and `−0.8deg`); the whole mark **shudders** (`rl-body-vibe 0.1s`
   sub-pixel translate+rotate); `.rl-heat` is on; trail squares stream in.
2. **Cool + settle:** `.rl-heat` fades (`1s`), needle eases to `0deg` (`0.7s`),
   shudder/flutter stop.
3. **Idle — SIGNAL PULSE (default):** scarce-red heartbeat — `.rl-needle` brightness
   `0.72↔1.32` and `.rl-px` opacity `0.35↔1`, both `2.6s ease-in-out` infinite.
   Alt idle **PIXEL STREAM** (`data-idle="stream"`): trail squares advance outward on
   staggered `2s` loops. Idle is a Tweak; **Signal pulse is canon**.
4. **Sheen** sweeps across the steel every `5.5s` regardless of phase.

On the single-page site the emblem mounts already `phase:"idle"` (the full rev plays
on the standalone/redline builds; on the current site the calm settled+pulse state is
what shows, with the ASCII half doing its own center-out entrance). Reduced-motion
pins needle at `0`, trail visible, heat off, no pulse/sheen.

## D. Exploded assembly diagram (text)

```
            ┌─────────────────── .emblem-split (aspect 524/425) ───────────────────┐
            │                                     │                                  │
  LEFT 0–50%│   .es-ascii  (canvas, z2)           │   .es-metal (clip inset L 49.6%) │RIGHT
            │   ├ emblem grid left half           │   └ .rl-emblem                   │
            │   ├ churn glyphs (EMBLEM set)        │      ├ 1 .rl-structure  (157° steel)
            │   ├ pseudo-depth sway + rolling light│      ├ 2 .rl-needle    (48° heat, rotates)
            │   ├ junction flow → seam             │      ├ 3 .rl-heat      (screen bloom)
            │   └ 2 rogue red glyphs escaping left │      ├ 4 .rl-sheen     (screen sweep 5.5s)
            │                                     │      └ 5 .rl-px ×4      (red trail, 0 0 5px)
            └─────────────────────────────────────┴──────────────────────────────────┘
                              seam at x = 50% (clean hard edge; no divider mounted)
```

## E. Responsive & integration notes

- The split box scales with `clamp(420px, 96vh, 1040px)` — it tracks **viewport
  height** (so it stays centered and never crowds the corners), min 420 / max 1040.
- < 760px: `width: 86vw` (see `06-responsive.md`); the split ratio is preserved.
- The ASCII half shares the field's wave term and the global pseudo-depth language,
  so left-half motion feels part of the background while the right half stays a crisp,
  still, premium anchor. That tension (raw-left / premium-right) is the point.
- The metal must remain the **only** metallic element. Do not metallise the wordmark,
  corners, or windows.
