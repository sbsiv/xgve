# XGVE Website — Canonical Master File & Blind-Rebuild Bible

> **Status: approved visual canon.** This document set is the single source of
> truth for the XGVE Studios single-page website. It exists so that a designer or
> coding agent with **no access to the original project, conversation, or Figma**
> can reproduce the site — appearance *and* behaviour — at very high fidelity, and
> so future expansion never regresses the look.
>
> **Do not redesign or reinterpret.** Reproduce. Where you must choose, choose the
> option these documents specify.

---

## How to use this pack

| If you want to… | Read |
|---|---|
| Understand the identity & rules | `00-INDEX.md` (this file) |
| Get exact colors / type / tokens | `01-foundations.md` |
| Rebuild the ASCII engines (the crown jewels) | `02-ascii-system.md` |
| Rebuild the metallic split emblem | `03-metallic-hybrid.md` |
| Rebuild every UI component | `04-components.md` |
| Match motion & interaction exactly | `05-motion-interaction.md` |
| Handle every breakpoint | `06-responsive.md` |
| Pick the right rendering tech | `07-technical.md` |
| Find & export assets | `08-assets.md` |
| Verify a rebuild / avoid pitfalls | `09-checklist-and-failures.md` |
| Hand the whole thing to one agent | `10-master-prompt.md` |
| Do a fast rebuild without reading everything | `MINIMAL.md` |

The live implementation these documents describe lives in `../site/`. When a
document and the code disagree, **the code in `../site/` is canon** — update the
document. Deeper motion technique reference: `../guidelines/ascii-motion-doctrine.md`.

---

## 1. What the website is

A **single black viewport, no scroll.** Dead center: the XGVE emblem, rendered as
**half living-ASCII (left) / half brushed-metal (right)**, split down the middle.
Below it, the tagline **"Good taste, engineered."** in a chromatic-aberrated
display face. Behind everything, a **full-screen geometric ASCII field** that is
always moving — folding, rippling, forming and dissolving. Trademark artworks
(the **Foxglove Multiversal** flora; the **XGVE** wordmark) periodically build
themselves *out of* that field, hold, and disintegrate back into it. Four corner
labels; clicking the bottom-right ones opens **retro draggable terminal windows**.
The cursor drags a **brush of ASCII glyphs** behind it.

It is one page. It never scrolls. Everything is canvas + CSS + a thin React shell.

## 2. Identity in one paragraph

XGVE is a vibecoded games & software studio. The site must feel **engineered, not
decorated** — precise, technical, a little clandestine, with the confidence to sit
almost entirely still on black. It fuses two textures that should *stay* distinct:
**premium metal** (the mark's right half, the only glossy thing on the page) and
**raw terminal ASCII** (everything else — monospaced, generative, slightly
imperfect). The single accent is **Signal Red**, and it must stay scarce. The mood
is "a machine that has good taste": futuristic and experimental, but editorial and
restrained — never busy, never neon, never cute.

## 3. The balance to protect

- **Minimalism vs. density.** The composition is *sparse* — one centered object,
  four corner labels, generous black. The ASCII field is *dense* but *low-contrast*
  (it reads as texture/atmosphere, never as content). Never raise the field's
  contrast to where it competes with the emblem or tagline.
- **Metal vs. ASCII.** Exactly one metallic object (the emblem's right half). It is
  the premium anchor. Everything else is ASCII/mono and deliberately raw. Do not
  add more metal; do not "cheapen" the metal with heavy gloss or rainbow reflection.
- **Clean vs. raw.** Clean/premium: the emblem, the tagline, the corner labels,
  the windows' chrome. Deliberately raw/terminal: the field, the reveals, the
  emblem's ASCII half, the cursor brush. Both are intentional. Do not normalise the
  raw parts (see anti-principles).
- **Negative space** is the primary compositional tool. The center object is small
  relative to the viewport; the black around it is the design.

## 4. Visual principles — ALWAYS

1. **Black field, white structure, scarce red.** `#000000` background, glyphs in
   cool grays/near-white, red only as a signal. Target ≈ 9–14% of ASCII glyphs red,
   never a red field.
2. **Monospace everywhere ASCII/technical.** IBM Plex Mono for the field, emblem
   ASCII, reveals, corner labels, window chrome, metadata. No substitutions.
3. **The field is always in motion** at rest — folding + rippling, ~30fps paints.
   Stillness only happens on Pause or reduced-motion.
4. **Pseudo-depth from tonal density.** Depth/parallax is derived from each glyph's
   ink weight (see `02`). This is the signature technique — apply it consistently
   to the emblem ASCII and the reveals.
5. **Reveals emerge from the field, not on top of it.** Trademark ASCII builds out
   of the pattern; the background *parts* where a shape forms (occupancy mask). One
   continuous surface.
6. **Hard, decisive motion that ends still.** Fast reveals, no bounce, no
   continuous spin of content. The one persistent loop allowed is the field itself
   and the emblem's calm signal-pulse.
7. **Centered, single-viewport, no scroll.** The whole experience fits one screen.

## 5. Anti-principles — NEVER / SPARINGLY

- **NEVER** turn this into generic cyberpunk: no neon cyan/magenta *fields*, no
  Matrix "digital rain," no glitch-for-glitch's-sake, no dense HUD chrome (an
  earlier attempt at a busy terminal-HUD was explicitly rejected — keep corners
  minimal).
- **NEVER** use a non-monospace or a "prettier" mono (no Fira Code ligatures, no
  Courier). IBM Plex Mono only.
- **NEVER** make the metal glossy/chrome-rainbow or add a drop shadow / bevel /
  glow to it. It is brushed steel with one restrained sheen sweep.
- **NEVER** normalise the ASCII: do not align it to a "clean" grid, equalise glyph
  density, or freeze the character churn. The shimmer, the density variation, the
  rogue red glyphs escaping the emblem, and the reveal's noisy leading edge are all
  **intentional** and must not be "cleaned up."
- **NEVER** raise the field opacity/contrast until it fights the center. It is
  atmosphere.
- **NEVER** stretch the desktop layout or center-crop the emblem wrong on mobile
  (see `06`).
- **SPARINGLY:** red (scarce), film grain (off by default), the tagline's chromatic
  aberration + VHS scanline (only on the tagline, subtle).
- **May be simplified on small screens:** the `.foxglove-ghost` reveal layer hides
  < 760px; the field stays. Nothing else is hidden.
- **Must stay consistent at every breakpoint:** black bg, the split emblem, the
  tagline, the four corners, monospace, scarce red.

## 6. The details that ARE the identity (do not drop)

- The emblem **split** exactly at horizontal center (metal clip at `inset(0 0 0 49.6%)`).
- **Pseudo-depth sway**: emblem-ASCII and reveal glyphs slide ± with ink density.
- **Junction flow**: emblem-ASCII letters drift rightward toward the seam and fade.
- **Rogue red glyphs** periodically breaking free of the emblem's left edge.
- The field's **two counter-rotating kaleidoscopic folds** (mirror symmetry).
- Reveals **build bottom-first (flora) / left-to-right (wordmark)** with a noisy
  edge, and the field **breaks** where they form.
- The **tagline chroma** (cyan/magenta split) + faint VHS scanline.
- **Retro windows** you can drag; the red-accented "Foxglove Multiversal" corner.
- The **cursor ASCII brush** (3 glyphs/stroke).

Everything numeric behind these lives in the following documents. Reproduce the
numbers, not an impression of them.
