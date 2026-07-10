---
name: xgve-design
description: Use this skill to generate well-branded interfaces and assets for XGVE Studios (eXperimental Games & Vibe Engineering), a vibecoded games studio that also ships working client SaaS apps in days — for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## XGVE Studios in one paragraph
XGVE Studios (**eXperimental Games & Vibe Engineering**) is a vibecoded games studio that also vibecodes working SaaS apps for clients in days — games-first, but not boxed in, with a view toward deep tech. "Vibe engineering" is double-edged: good *vibes* + *vibecoding*. The identity is a broken machine-visor emblem hiding an X/G/V/E monogram, on a **pure black field** with **white geometric structure** and a **scarce Signal-Red** accent. Voice: experimental, direct, technically literate, confident, concise. No emoji. Never explain the hidden letters.

## Non-negotiables
- **Palette:** Void Black `#000000`, Signal White `#FFFFFF`, Signal Red `#E6021B`. Red stays scarce — one red thing per view. Neutrals are pure grayscale.
- **Type:** Space Grotesk (display) · Inter (body) · IBM Plex Mono (technical labels, data, eyebrows — UPPERCASE, wide tracking). All on Google Fonts.
- **Form:** sharp corners by default; the brand "rounds" via a 45° chamfer, not radius. Thin 1px technical rules. Depth by surface lightness, **never** glow/bevel/soft drop-shadow.
- **Motion:** fast, hard reveals that end perfectly still. No bounce, spin, or glitch.
- **Logo:** emblem leads, wordmark is subordinate and tucked tight. Never recolour, stretch, add effects, or re-type the wordmark in a font (it is artwork). Emblem-only for app icons/avatars/favicons.
- **Avoid:** gradients-as-decoration, blue/purple cyberpunk recolours, emoji, left-border-accent cards, rounded+shadowed cards.

## What's here
- `styles.css` — link this one file; it `@import`s every token + font.
- `tokens/` — colors, typography, spacing, motion, effects, base.
- `assets/` — real logo/emblem/wordmark/favicon (raster). `logo/`, `icon/`, `wordmark/`, `web/`.
- `guidelines/` — foundation specimen cards (colours, type, spacing, brand, motifs).
- `components/` — 16 React primitives (actions, forms, data-display, navigation, feedback). Read each `*.prompt.md` for usage. Import via `window.XGVEDesignSystem_c9ef21`.
- `ui_kits/xgve-console/` — interactive product-surface recreation composed from the components.
- `templates/xgve-console/` — a copy-ready hero starting screen (Design Component).

## Using components in a static HTML artifact
Link `styles.css`, load `_ds_bundle.js`, then mount from the namespace:
```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, ProgressRing, Badge } = window.XGVEDesignSystem_c9ef21;
  // …render with React
</script>
```
For production, copy the token CSS + assets and follow the rules above. Icons: no bespoke set was supplied — use Lucide (thin geometric, MIT) from CDN, single-colour `currentColor`.

## Caveat
Logo assets are high-resolution **raster** (no vector masters yet), and the wordmark is custom artwork — never regenerate or re-type it. The supplied **lockup/tagline artwork bakes in an outdated tagline** ("eXperimental generative venture engine"), now superseded by "eXperimental Games & Vibe Engineering" — prefer the emblem or wordmark-only until new artwork lands. If you need vector or self-hosted fonts, ask the user.
