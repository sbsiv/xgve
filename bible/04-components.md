# 04 — Component Library

The site is intentionally sparse, so its "components" are few but exact. Each is
documented as anatomy + values + states + responsive + accessibility. Reproduce these
rather than substituting a UI-kit equivalent. (The broader XGVE design-system
primitives — Button, Input, Card, etc. — live in `../components/` and are documented
in the design-system readme; this file covers only what the **website** uses.)

Legend: all px unless noted. Colors reference `01-foundations.md`.

---

## 1. Stage / Root

- **Anatomy:** `#root` (100vh) → `.stage` (relative, 100vw×100vh, `overflow:hidden`,
  `background:#000`, `--mo:1`) holding, in z-order: `.ascii-field`(0) · `.foxglove-ghost`(1)
  · `.grain`(6) · `.ascii-trail`(6) · `.stage-inner`(2, centered emblem+tagline) ·
  `.hud`(7) · windows(90) · TweaksPanel.
- **Data attrs:** `data-grain="on|off"`, `data-vignette="on|off"`, `phase-idle` class.
- **Rules:** never introduce scroll; never change the black; keep the center object
  as the single focal element.

## 2. Split Emblem  → see `03-metallic-hybrid.md`

`.emblem-split` `width: clamp(420px,96vh,1040px)`, `aspect-ratio:524/425`. Left canvas
ASCII, right clipped metal. The hero of the page.

## 3. Tagline

- **Text:** `Good taste, engineered` + `.dot` red period.
- **Style:** Space Grotesk 700, `clamp(32px,4.6vw,68px)`, `-0.01em`, line-height 1,
  `#fff`, `white-space:nowrap` (wraps + centers < 760px), chroma + VHS (`05 §D`).
- **Position:** directly under the emblem inside `.rl-lockup` (a centered flex column,
  `gap: clamp(26px,3.6vh,44px)`), the lockup absolutely centered at `top:45% left:50%`.

## 4. Corner HUD (the only chrome)

Four fixed labels. Font IBM Plex Mono 11–13px, `letter-spacing 0.14–0.16em`, UPPERCASE.

| Corner | Content | Type | Interaction |
|---|---|---|---|
| TL `26/30` | XGVE wordmark PNG, `height:25px` | image | none (brand) |
| TR `22/30` | **Pause / Resume** | chip button | toggles `XGVE_PAUSED` |
| BL `24/30` | `© 2026 XGVE STUDIOS™` | text | none |
| BR `24/30` | **readme · contact · Foxglove Multiversal** | chip buttons, stacked, `gap 8`, right-aligned | open windows |

- **Chip:** `background: rgba(8,8,10,.45)`, `border:1px solid transparent`,
  `padding:7px 13px`, `color:#fff`, weight 600. Hover → red border + `rgba(216,32,46,.16)`.
  Focus-visible → `outline 1px #e6202e offset 3px`.
- **Ascending-length rule:** BR stack ordered shortest→longest top→bottom (`readme`,
  `contact`, `Foxglove Multiversal`); the longest ("Foxglove Multiversal") is red and
  anchors the bottom. Preserve this order and the red accent.
- **< 760px:** chip `font-size:11px; padding:6px 10px`.
- **A11y:** real `<button>`s; Esc closes windows; hit target ≥ the chip box (pad up if
  making mobile-specific).

## 5. Retro Window (`RetroWindow`)  → mechanics in `05 §F`

- **Shell:** `position:fixed`, `width` per window (clamped to `innerWidth−24`),
  `background:#070709`, `border:1px solid #33363d`, `box-shadow:0 12px 40px rgba(0,0,0,.6)`,
  `z-index:90`, `animation:xgwin-in .16s ease-out`, font IBM Plex Mono.
- **Title bar:** flex, `padding:8px 12px`, `border-bottom:1px solid #33363d`,
  `user-select:none`, draggable. Left: **close `□`** (11×11, `border:1px solid #83848c`,
  hover fills red). Center: title, 11px, `0.18em`, UPPERCASE, `#c6ced8`, ellipsis.
  Right: 11px spacer (keeps title centered).
- **Variants:**
  - **FOXGLOVE_MULTIVERSAL.APP** — 2-col `padding:16 gap:18`: left = animated **Flora**
    canvas (240×330, builds bottom-first over 2.8s, cyan/gray/red glyph mix); right =
    `FLORA_SERIES` eyebrow, "Foxglove / Multiversal" (Space Grotesk 700 24px), chip
    `● IN DEVELOPMENT` (→ `● WISHLIST` link when `WISHLIST_URL` set), 3-line copy
    "Clock in. / Roll back. / Clock in again." (middle line dim red `#9a4a52`).
  - **readme.txt** — 3-line studio statement + `// continuity note` + dim line
    "you have been here before." `#c6ced8` on body, muted on notes.
  - **contact.txt** — `hello@xgve.io` (white link) · `// socials` list (X/Twitter,
    itch.io, GitHub, Discord — **PLACEHOLDER URLs**) · `// mailing list` email input
    (`#0b0b0e` well, `#33363d` border) + `[ SUBSCRIBE ]` button (mailto fallback).
- **A11y:** links are real `<a target="_blank" rel="noopener">`; input is a real
  `<input>`; Esc closes.

## 6. Cursor Brush (`.ascii-trail`)  → `02 §I`

Not a visible UI element — a full-screen `pointer-events:none` layer (z6) that DOM-spawns
3 glyph spans per stroke. Document it as a component so nobody deletes it thinking it's
stray. Off under reduced-motion.

## 7. Tweaks Panel (dev/demo control — not shipped chrome)

Host-provided `TweaksPanel` (from `tweaks-panel.jsx`). Controls: **Idle** (Signal
pulse | Pixel stream), **ASCII field** (on/off), **Vignette** (on/off), **Film grain**
(on/off). Defaults: `idle: Signal pulse, field: true, vignette: true, grain: false`.
This panel is a design/demo affordance; it is not part of the public site chrome.

## 8. Legacy / optional components (present in repo, not in the default view)

These exist in `../site/` and render in older builds; keep them available but know they
are **not** in the current single-page default:

- **Work overlay** (`.work`, `xgve-work.jsx`) — a full-screen (z20) selected-work list:
  eyebrow `SELECTED WORK // n`, rows `grid 62px 1fr auto auto`, project name Space
  Grotesk semibold `clamp(24px,4.2vw,52px)`, hover slides `padding-left:20`, red `→`.
  Superseded by the Foxglove **window**.
- **Foxglove landing** (`xgve-foxglove.jsx`, `XGVE_FoxgloveLanding`) — a full-screen
  1c-style landing (flora + spec). Superseded by the Foxglove **window** but still
  imported.
- **Redline lockup intro** (`xgve-lockup.jsx` `RedlineEmblem` with full rev) — the
  emblem's hot-rev entrance; on the current site it mounts already-idle.

If rebuilding only the approved view, you need: Stage, Split Emblem, Tagline, Corner
HUD, Retro Windows, Cursor Brush. The rest is optional/legacy.

## 9. States coverage (site-wide)

- **Loading:** the entrance timeline IS the loading state (field up → emblem assembles
  → metal resolves → tagline). No spinner.
- **Empty/Error:** not applicable (static content); the mailing-list input has no
  validation UI (mailto fallback). If adding a backend, use a red inline note in mono.
- **Focus:** red 1px outline, offset 3px, on all interactive elements.
- **Disabled:** none present; if needed use `--content-faint` `#5c5d64`, no red.
