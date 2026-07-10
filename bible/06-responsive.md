# 06 — Responsive Behaviour

The site is **mobile-first and viewport-locked**: one screen, no scroll, at every
size. It scales by fluid `clamp()` values and viewport units rather than by many fixed
breakpoints, so most of the "responsiveness" is continuous. There are exactly **two**
hard breakpoints in the CSS (`900px`, `760px`) plus JS clamps on window widths.

Minimum supported viewport: **320px** wide. Maximum useful content width: the emblem
caps at `1040px` (via `96vh`), so on ultrawide the composition stays centered with
large black margins — that is correct, not a bug. Do not add a max-width wrapper that
letterboxes it differently.

---

## A. Breakpoints (exact)

| Breakpoint | What changes |
|---|---|
| **≤ 900px** | `.mask-col { display:none }` (legacy left mask column, unused in default view). `.rl-lockup` re-anchors `left:50%`. |
| **≤ 760px** (the real mobile pass) | `.foxglove-ghost { display:none }` (reveal layer off) · `.emblem-split { width:86vw }` · `.rl-tagline { white-space:normal; text-align:center }` (tagline may wrap) · corner chips `font-size:11px; padding:6px 10px`. |
| JS width clamps | Every retro window `width = min(design, innerWidth − 24)`; spawn `x0/y0` clamp on-screen. Foxglove/readme/contact reflow to fit. |

Everything else (emblem size, lockup gap, tagline size, HUD insets) is **fluid** and
needs no breakpoint.

## B. Fluid formulas actually used (copy these)

```
.emblem-split width      : clamp(420px, 96vh, 1040px)        // tracks viewport HEIGHT
.rl-lockup gap           : clamp(26px, 3.6vh, 44px)
.rl-tagline font-size    : clamp(32px, 4.6vw, 68px)
.tagline (legacy)        : clamp(15px, 1.7vw, 24px)
.work padding (legacy)   : clamp(30px,6vh,68px) clamp(30px,7vw,110px)
.work-name (legacy)      : clamp(24px, 4.2vw, 52px)
ASCII field CELL         : 30px fixed  (glyphs stay legible; grid count = ceil(W/30)×ceil(H/30))
```

The emblem tracking **viewport height** (`96vh`) is deliberate: it keeps the mark from
colliding with the corner labels on short/wide screens and keeps it grand on tall
screens. Do not switch it to `vw`.

## C. Canonical viewport behaviours

| Class | Width | Emblem | Tagline | Reveal | Corners | Field |
|---|---|---|---|---|---|---|
| Small mobile | 320–374 | `86vw` (~275–322px) | wraps, centered, ~32px | **hidden** | 11px chips, may stack tightly | full, CELL 30 |
| Standard mobile | 375–429 | `86vw` | wraps/near, ~32–34px | hidden | 11px chips | full |
| Large mobile | 430–599 | `86vw` | ~34–40px | hidden | 11px chips | full |
| Tablet portrait | 600–767 | `86vw` up to ~660px | nowrap returns near top | hidden (<760) | 11px chips | full |
| Tablet landscape | 768–1024 | `96vh` (height-bound) | fluid | **visible** | 13px chips | full |
| Small desktop | 1025–1439 | `96vh` | fluid | visible | 13px chips | full |
| Standard desktop | 1440–1919 | `96vh`, approaching 1040 cap | up to ~68px | visible | 13px chips | full |
| Large desktop | 1920–2559 | 1040 cap | 68px cap | visible | 13px chips | full |
| Ultrawide | ≥ 2560 | 1040 cap, big black margins | 68px cap | visible | 13px chips | full, edge-faded |

Notes: the **reveal layer** (Foxglove/XGVE building out of the field) is the one thing
that turns off on phones (< 760px) — it needs horizontal room and would crowd a portrait
screen. The **field itself never turns off**; on phones it is the whole atmosphere.

## D. Touch devices & hover alternatives

- **Cursor brush:** pointer-move driven; on touch it simply doesn't spawn (no hover).
  Acceptable — it is a desktop delight, not load-bearing. Do not try to bind it to
  touchmove (it would fight scrolling gestures, and there is no scroll anyway).
- **Corner chips / window controls:** tap = click; the hover red is a bonus. Ensure the
  tap target is ≥ the chip box; if tightening for a specific device, pad to ≥ 44px.
- **Window drag:** works on touch via Pointer Events + `touch-action:none` on the title
  bar. Body of window scrolls/selects normally.
- **`hover: none` / coarse pointer:** no layout change required; the design already
  degrades (brush absent, hovers inert).

## E. Unusual aspect ratios

- **Very tall/narrow (portrait phone):** emblem `86vw` keeps it from overflowing width;
  tagline wraps to ≤2 lines and centers; corners stay pinned. Field fills.
- **Very short/wide (landscape phone, ultrawide):** emblem `96vh` keeps it from
  crowding corners; large side margins are intended. Field's radial edge-fade
  keeps the wide edges from looking hard-cropped.
- The composition is always **centered**; there is no asymmetric layout to break.

## F. What must stay identical at every breakpoint

Black background · the split emblem (ratio 524/425, left ASCII / right metal) · the
tagline text + red period · the four corners (content + order + red "Foxglove
Multiversal") · IBM Plex Mono for all ASCII/labels · scarce red · no scroll · the field
in motion. Only the reveal layer (<760) and exact sizes change.

## G. Rebuild guidance

Start mobile: black stage, field, centered `86vw` emblem, wrapped tagline, four chips.
Then let `clamp()`/`vh` grow the emblem and turn the reveal layer on at 760px. Do **not**
build desktop-first and shrink — the emblem's `96vh` sizing and the reveal toggle are the
mobile-first hinges.
