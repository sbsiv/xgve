# XGVE Studios — Design System

**XGVE Studios** — a vibecoded games studio. We build our own games, and vibecode
working SaaS apps for clients in days, not quarters. Games are the headline, but the
studio isn't boxed in — we ship a wide range of apps, with a view toward deep tech.
XGVE is **not** an engine or platform for startups; it's a studio that makes things.

> **XGVE = eXperimental Games & Vibe Engineering** (the canon expansion). "Vibe
> engineering" is deliberately double-edged: creating genuinely good *vibes*, and
> *vibecoding* projects fast.
>
> ⚠️ **Outdated tagline in the artwork.** The supplied raster **lockup and
> tagline-wordmark** assets still bake in an older line — *"eXperimental generative
> venture engine"* — which is **superseded** by the canon above. **Do not use those
> raster tagline assets.** The canonical lockup now lives as **live text** in
> `guidelines/logo-lockup-canon.html` (emblem + wordmark + "eXperimental Games & Vibe
> Engineering"). For marks alone, the **emblem** or **wordmark-only** asset is always safe.

One-sentence identity (from the brand book): *XGVE is an engineered deep-tech
monogram disguised as a fast, game-native machine face — a broken **G** enclosure,
structural **X**, red **V** needle and embedded **E** moving beyond the system that
contains it.*

---

## Sources

Everything here is derived from materials the user supplied. Stored for reference —
do not assume the reader has access.

- **`uploads/XGVE_Visual_Identity_System.md`** — the full 18-section brand book
  (identity idea, emblem anatomy, wordmark system, colour, geometry, spacing, size
  system, backgrounds, graphic language, motion, tone of voice, correct/incorrect
  usage, asset architecture, QC checklist). This is the primary source of truth.
- **`uploads/XGVE_Asset_Pack/`** — production raster export pack:
  - `primary/` — horizontal lockup: transparent (dark bg), transparent_dark (light
    bg), black-bg composite, white-bg composite, and 4096-px-wide exports.
  - `icon/` — standalone emblem: primary, dark, monochrome white, monochrome black.
  - `wordmark/` — XGVE wordmark with and without tagline, on transparent.
  - `web/` — icon PNGs 16→512 px (transparent + black), lossless WebP, `favicon.ico`.
  - `source/XGVE_source_attached.png` — the original attached raster artwork.
  - `README.txt` — pack manifest.
- **`uploads/ChatGPT Image … .png`** ×2 — early raster renders (superseded by the
  asset pack; not used).

### ⚠️ Asset caveat — raster, not vector
The supplied artwork is **high-resolution raster (PNG/WebP)**, not editable vector.
The brand book calls for `.svg`/`.eps`/PDF masters (§16) that **do not yet exist**.
Until true vector masters are delivered:
- Use the largest raster (`primary/…_4096w.png`, `icon/…_2048.png`) for print/large.
- Do not attempt to recolour or reconstruct the mark by hand — request vectors.

### Derived emblem layers (for animation) — `assets/logo/`
To animate the emblem's parts independently, the supplied icon PNG was **split by
colour + connected region** (no redrawing — these are the real pixels):
- `emblem-structure-white.png` — the white dial ring + X/G/V/E monogram (wing, X, "M" visor).
- `emblem-needle-red.png` — the full red needle + counterweight + trail.
- `emblem-needle-assembly.png` — needle + counterweight only (trail removed), so it
  can rotate around the hub. **Pivot (transform-origin): 48% 45%.**
- `emblem-needle-only.png` — largest connected needle blob (upper needle).
- Trail squares' exact positions (fractions of the 524×425 icon): p1 (0.838, 0.299),
  p2 (0.882, 0.245), p3 (0.918, 0.200), p4 (0.952, 0.158) — recreated crisp in CSS.

The mark is a **tachometer**: the red needle points to *redline* (upper-right) and the
trail is its velocity streak — so the signature motion is a **needle rev-up**.
See `guidelines/icon-motion-studies.html` for 8 looping motion studies of the real mark.
- The XGVE **wordmark is custom artwork**, never a font. Never re-type it in Space
  Grotesk or anything else (brand book §4.1, §15).

---

## Asset inventory (in this project)

Copied into **`assets/`**, brand-standard lowercase-hyphenated names:

**`assets/logo/`** — horizontal lockup (emblem + wordmark + tagline)
- `xgve-lockup-horizontal-transparent.png` — white/red, **for dark backgrounds**
- `xgve-lockup-horizontal-transparent-dark.png` — dark ink, **for light backgrounds**
- `xgve-lockup-horizontal-black.png` — baked on pure black
- `xgve-lockup-horizontal-white.png` — baked on white

**`assets/icon/`** — the emblem alone (app icon / avatar / favicon / watermark)
- `xgve-icon-transparent.png` — white/red for dark bg
- `xgve-icon-transparent-dark.png` — dark for light bg
- `xgve-icon-mono-white.png` / `xgve-icon-mono-black.png` — single-colour
- `xgve-icon-black.png` — on-black composite

**`assets/wordmark/`** — lettering only
- `xgve-wordmark-transparent.png` (+ `-dark`) — XGVE letters, no tagline
- `xgve-wordmark-tagline-transparent.png` (+ `-dark`) — letters + tagline

**`assets/web/`** — favicon + square icon sizes `16/32/64/128/256/512` (transparent),
plus `xgve-favicon.ico`.

### Logo usage rules (condensed from §7–§15)
- **Emblem leads.** The wordmark is a subordinate identifier — keep it smaller and
  tucked tight to the emblem's lower-right; never enlarge it to match the emblem.
- **Full lockup** when introducing the company, leading a site/deck, signing
  formal comms. Minimum digital width **180 px**; below that, use the emblem alone.
- **Emblem only** for app icons, favicons, avatars, watermarks, loaders, and any
  square/compact space. Never place the horizontal wordmark inside a square icon.
- **Clear space** = 4× the broken-ring thickness around the full lockup (2× compact,
  3× emblem-only). Nothing enters that zone. Token: `--logo-clear-standard`.
- **Backgrounds:** strongest on a pure/near-pure black field with generous negative
  space. Never place the primary mark over noisy photography — use a black holding
  field or a controlled dark scrim (`--scrim-strong`).
- **Never:** add glow/shadow/gradient/bevel/outline, make the primary V red, close
  the broken G, recolour letters independently, stretch/skew/rotate the lockup, or
  add any additional symbol. The mark already carries face + X + G + V + E.

---

## Colour — Void Black · Signal White · Signal Red

| Role | Name | Hex | Token |
|---|---|---|---|
| Background | Void Black | `#000000` | `--xg-black` |
| Structure / text | Signal White | `#FFFFFF` | `--xg-white` |
| Accent / signal | Signal Red | `#E6021B` | `--xg-red` |

Visual priority: **black field → white structure → red signal → white wordmark →
small red accent.** Red must remain scarce; its power comes from concentration.
Neutrals are a pure-grayscale ramp (`--xg-n-0 … --xg-n-13`). Canonical expression is
**dark**; a light-background adaptation is available via `[data-theme="light"]`.
`--xg-fn-*` functional status colours exist for dense data UIs **only** — never let
them compete with red on hero/marketing surfaces. Full detail: `tokens/colors.css`.

## Type
- **Display / headings** — Space Grotesk (`--font-display`)
- **Interface / body** — Inter (`--font-body`)
- **Technical labels / code / data** — IBM Plex Mono (`--font-mono`)

All three are open-source Google Fonts loaded via `tokens/fonts.css` (`@import`), so
they are the exact specified faces — **no substitution required**. The mono face
doubles as the eyebrow/label voice (uppercase, tracked wide). Detail:
`tokens/typography.css`.

> Compiler note: the design-system indexer reports "Fonts: (none)" because the faces
> arrive through a Google Fonts `@import` rather than local `@font-face` binaries.
> They load correctly at runtime in every card and component. If you need fully
> self-hosted/offline fonts, download the four families' woff2 files, drop them in
> `assets/fonts/`, and add `@font-face` rules — say the word and I'll wire it up.

---

## CONTENT FUNDAMENTALS

The visual identity implies a verbal tone. Copy should sound like an engineering team
that ships fast and means it — not a marketing department.

**Voice:** experimental, direct, technically literate, confident, slightly
provocative, concise, forward-looking.

**Casing & rhythm**
- Headlines are short and declarative. Prefer sentence case or a tight ALL-CAPS
  eyebrow (mono, tracked wide) over Title Case Marketing Speak.
- Technical eyebrows / labels / metadata are UPPERCASE MONO with wide tracking
  (`--tracking-widest`): `SYSTEM ONLINE`, `V.4.2 // BUILD 1180`, `LATENCY 12MS`.
- Body copy is clean Inter, sentence case, minimal exclamation.

**Person & stance**
- Address the reader as **you**; speak as **we** when representing XGVE. Keep it
  active and present-tense. "We vibecode games. And ship your app in days."
- State capability plainly; let specificity do the persuading (numbers, versions,
  build states) rather than adjectives.

**Do**
- Use precise, engineered nouns: engine, build, vector, signal, system, launch,
  velocity, throughput, node, module.
- Let the red accent carry emphasis instead of bold/italic pile-ups.
- Keep it terse. If a word can be removed with no loss, remove it.

**Avoid**
- Forced hacker slang, esports shouting, ALL-CAPS hype sentences.
- Generic "future of everything" claims; empty corporate innovation language.
- Excessive military language.
- **Emoji.** Not part of the brand. Status is shown with a red dot or a mono label,
  never 🚀/🔥. (See Iconography.)
- **Explaining the hidden letters.** The monogram's layered X/G/V/E meaning is a
  discovery reward, not required reading — never spell it out in everyday copy.

**Examples (on-brand)**
- Eyebrow: `EXPERIMENTAL GAMES & VIBE ENGINEERING`
- Hero: "Build the improbable. Ship it anyway."
- Sub: "XGVE Studios vibecodes games — and ships working client apps in days, not
  quarters."
- Button: `See our games` · `Start a project` · `Work with us`
- Status line: `● SHIPPING — 3 GAMES · 12 CLIENT APPS`

---

## VISUAL FOUNDATIONS

The system borrows from the logo without copying it. The mark concentrates the
ideas; the surrounding design stays disciplined.

**Field & composition.** Large black fields with generous negative space are the
default canvas. White geometric panels and thin technical rules structure the space.
Sections transition with sharp, angular cuts — not soft fades between coloured bands.

**Colour behaviour.** Black/white/red only in hero and brand contexts. Red is a
*signal*, applied to one thing at a time (a CTA, a live dot, an active tab, a
confirmation). If two reds compete on a screen, one is wrong. No rainbow, no
blue/purple cyberpunk recolour, no gradients-as-decoration.

**Corners & edges.** Sharp is the default (`--radius-0`). The brand "rounds" by
**chamfer** — a 45° corner cut (`--chamfer-*`, via `clip-path`), echoing the visor's
angular language. Reserve real radius (`--radius-1/2`) for small inputs; reserve
`--radius-pill` for status dots, pills and avatars only.

**Borders & elevation.** Thin technical rules — 1px hairlines (`--border-thin`) in a
neutral gray. Elevation is expressed by **surface lightness** (`--surface-default →
raised → overlay`) plus a hairline outline, *not* by fuzzy shadows. Real shadows are
tight, pure-black, and reserved for true floating layers (menus, dialogs):
`--shadow-overlay`. **No glow, no bevel, no soft outer shadow on brand elements.**

**Cards.** A card is a slightly-lighter surface (`--surface-raised`) on the black
field, bounded by a 1px hairline, sharp-cornered (or chamfered on one corner as an
accent). Not rounded-and-shadowed. Density over decoration.

**Backgrounds / imagery.** When imagery is used, keep it high-contrast and quiet;
protect the mark with a black holding field or a controlled dark scrim
(`--scrim-strong`, no colour shift). Imagery vibe: cool, near-monochrome, technical —
never warm/lifestyle. Blur is used sparingly (sticky-header scrims, modal backdrops),
never as a glassy decorative default.

**Motion.** Reinforces acceleration and precision: fast, hard reveals that **end on a
perfectly still, sharp state.** Signature moves — a clip-path wipe along the visor
diagonal (`xg-reveal-diagonal`), a single progress sweep through a broken ring
(`xg-sweep`), red pixels advancing outward then settling (`xg-pixel-advance`), a
restrained status pulse (`xg-status-pulse`). Easing is decisive
(`--ease-out`) or accelerating (`--ease-accel`). **No** bounce, squash/stretch,
continuous spin, flame, glitch, or long particle explosions.

**Interaction states.**
- *Hover:* red advances (brighter → `--accent-hover`) or a neutral surface lifts
  one step (`--surface-hover`). Subtle, fast (`--dur-fast`).
- *Press:* red deepens (`--accent-active`); optional 1px inset feel. No large scale
  changes — precision, not squish.
- *Focus:* Signal-Red double ring (`--ring-focus`) — offset gap + red stroke. Always
  visible, never a soft glow.
- *Disabled:* drop to `--content-faint` / `--surface-default`, no red.

**Signature motifs** (use **one or two at a time**, never all at once):
broken circular progress rings · sharp diagonal cuts · sparse red status indicators ·
square red pixel trails · thin technical rules · large black fields · white geometric
panels · controlled red confirmation states · cropped/partial ring geometry.

---

## ICONOGRAPHY

**No proprietary icon set was supplied.** The asset pack contains the logo/emblem
system only — no UI glyph library, icon font, or SVG sprite. This is flagged as a gap.

**Recommendation / substitution (please confirm):** use **[Lucide](https://lucide.dev)**
— thin, geometric, consistent 1.75–2px stroke on a 24px grid, which matches XGVE's
engineered, hairline-rule language better than filled/rounded sets. Lucide is
MIT-licensed and CDN-available, so components and kits here reference it from CDN
rather than shipping a hand-drawn set. **If XGVE has (or wants) a bespoke icon set,
send it and I'll replace Lucide throughout.**

**Rules of use**
- Line icons only, single-colour: inherit `currentColor` (Signal White on dark).
  Never multicolour, never filled-and-outlined mixes.
- Red is applied to an icon **only** to signal state (active, live, confirm) — not
  decoratively. One red icon per view, typically.
- Sizes follow `--icon-xs…xl` (14/16/20/24/32). Align stroke weight to the 1px
  hairline-rule feel; don't mix heavy and hairline icons.
- **No emoji, ever**, as UI icons or in copy. No decorative Unicode dingbats. A
  status is a red dot (`--accent`) + a mono label, not an emoji.
- The **emblem** is not an icon in the icon-set sense — it is the brand mark. Use it
  for app icon / favicon / avatar / watermark / loader only (see Logo usage), never
  inline in body text as a bullet.

---

## Foundations, tokens & the compiler

- **Global entry:** `styles.css` — an `@import` manifest only. Link this one file.
- **Tokens:** `tokens/*.css` — `colors`, `typography`, `spacing`, `motion`,
  `effects`, `base`, `fonts`. Both primitives (`--xg-red`, `--xg-n-4`) and semantic
  aliases (`--accent`, `--surface-raised`, `--content-secondary`). **204 tokens.**
- **Namespace** (for card/kit HTML): `window.XGVEDesignSystem_c9ef21`.

---

## Index / manifest

_Root files_
- `styles.css` — global CSS entry (import manifest)
- `readme.md` — this guide
- `SKILL.md` — portable Agent-Skill wrapper (`xgve-design`)
- `tokens/` — foundation CSS (colors, typography, spacing, motion, effects, base, fonts)
- `assets/` — logo, icon, wordmark, web/favicon (see Asset inventory)

_Specimen cards_ (Design System tab) — `guidelines/` — Colours, Type, Spacing, Brand, Motifs.

_Components_ — `components/` — 16 primitives across 5 groups. Each ships
`<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `@dsCard` per group.
Import via `const { Name } = window.XGVEDesignSystem_c9ef21`.

- **actions/** — `Button`, `IconButton`
- **forms/** — `Input`, `Select`, `Checkbox`, `Radio` (+ `RadioGroup`), `Switch`
- **data-display/** — `Card`, `Badge`, `Tag`
- **navigation/** — `Tabs`
- **feedback/** — `Dialog`, `Toast`, `Tooltip`, `ProgressRing`

> **Intentional additions.** `ProgressRing` — the broken-ring / gauge motif from the
> emblem, as a determinate progress indicator; the one component with no generic
> equivalent, added because it is the brand's signature feedback shape.
> `RadioGroup` — a thin layout wrapper around `Radio`. No component-inventory source
> was supplied, so this is the standard primitive set sized to XGVE's black-field brand.

_UI kit_ — `ui_kits/xgve-console/` — **XGVE Console**, an interactive click-through
of a fictional **studio ops** surface (access → project dashboard), composed entirely
from the components above. Labelled a brand demonstration — no real XGVE product code
was supplied. Copy is framed in studio language (games in dev / client apps shipped).

_Site_ — `site/index.html` — **XGVE Studios cinematic site**. A single-viewport,
no-scroll landing built on the tokens + real logo assets. **The logo intro IS the
redline**: on every load the emblem (split into metallic dial + heat-graded needle +
trail, from `assets/logo/` via `site/emblem-masks.css`) revs hot, flutters at the
limiter with a shudder, then cools, settles, and holds a calm **signal-pulse** idle —
after which the **XGVE** wordmark and the tagline **"Good taste, engineered."** reveal.
Quiet mono HUD; in-place **Selected work** reveal. Tweaks (toolbar → Tweaks): **Idle**
(Signal pulse / Pixel stream — signal pulse is the locked-in default), **Motion speed**,
**Replay intro**, **Vignette**, **Film grain**. Motion source of truth for the emblem is
`guidelines/icon-motion-studies.html` (nine studies of the real mark). PLACEHOLDERS to
replace: the Selected-work projects (Aether / Drift CRM / Palette / Vesper) and the
`hello@xgve.studio` contact address are samples.

_Template_ — `templates/xgve-console/` — a copy-ready starting screen (Design
Component) for consuming projects, wired to this system via `ds-base.js`. Includes
**XgveHero** (studio hero: emblem + wordmark, Signal-Red CTAs, broken-ring stat strip).
#   x g v e  
 #   x g v e  
 