# XGVE Website — Canonical Master File & Blind-Rebuild Bible

This folder is the permanent source of truth for the XGVE Studios website. Give it (or
just `MINIMAL.md` + `screens/`) to any designer or agent and they can rebuild the site
with no other context.

**Start at [`00-INDEX.md`](00-INDEX.md).** Fast rebuild? [`MINIMAL.md`](MINIMAL.md).
Hand to an agent? [`10-master-prompt.md`](10-master-prompt.md).

| # | File | Covers |
|---|---|---|
| 00 | `00-INDEX.md` | Identity, principles & anti-principles, what the site is |
| 01 | `01-foundations.md` | Exact color/material tokens, typography, layout, z-index |
| 02 | `02-ascii-system.md` | Character ramps, atlas rendering, field math, **pseudo-depth**, reveals |
| 03 | `03-metallic-hybrid.md` | The split emblem — metal layers + exploded view |
| 04 | `04-components.md` | Every website component, anatomy & states |
| 05 | `05-motion-interaction.md` | Entrance timeline, motion tables, interactions, reduced-motion |
| 06 | `06-responsive.md` | Breakpoints, clamp formulas, mobile pass |
| 07 | `07-technical.md` | Rendering strategy, performance, load order |
| 08 | `08-assets.md` | Asset manifest, naming, export, mask regeneration |
| 09 | `09-checklist-and-failures.md` | Regression checklist + 18 common failures |
| 10 | `10-master-prompt.md` | Self-contained blind-rebuild prompt |
| ★ | `MINIMAL.md` | Compressed one-read reconstruction package |
| — | `BIBLE-cover.html` | Design System tab cover card |
| — | `screens/` | Canonical reference screenshots |

Deep motion-technique reference lives alongside at
`../guidelines/ascii-motion-doctrine.md`. The live implementation is `../site/`
(`index.html`). **When a document and the code disagree, the code is canon — fix the
document.**
