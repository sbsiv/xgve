# FOXGLOVE — Implementation mapping

How the foxglove maps from this design system into a destination app repo.

## Canonical component
- **Name:** Foxglove ASCII ghost (the pseudo-3D swaying subject).
- **Current source (design system):** `site/xgve-foxglove-ghost.js`
  → exported as `window.XGVE_initFoxgloveGhost(canvas)` (returns a cleanup fn).
- **Data:** `site/ascii-data.js` → `window.XG_ASCII.foxglove`.
- **Mounted by:** `site/xgve-site.jsx` — `<canvas className="foxglove-ghost">`,
  gated on the `field` tweak, inside `.stage`; init in a `useEffect` boot loop that
  waits for `window.XGVE_initFoxgloveGhost`.
- **Positioned by:** `site/xgve-site.css` (`.foxglove-ghost`, mobile pass).

## Files in this handoff → destination
| Handoff file | What it is | Destination guidance |
|---|---|---|
| `source/xgve-foxglove-ghost.js` | canonical renderer (verbatim) | copy **unchanged**; call `initFoxgloveGhost(canvas)` on mount, invoke returned cleanup on unmount |
| `source/ascii-data.js` | full `XG_ASCII` (emblem+wordmark+foxglove) | copy; or import only `foxglove.fixture.json` and set `window.XG_ASCII = { foxglove: … }` |
| `foxglove.fixture.json` | lossless foxglove grid | preferred data import (framework-agnostic) |
| `source/xgve-foxglove.jsx` | landing DOM renderer (verbatim) | copy if you want the non-swaying reveal hero |
| `source/xgve-windows.jsx` | retro-window `Flora` renderer (verbatim) | copy only if you want the windowed variant |
| `FOXGLOVE_STYLES.css` | positioning + landing glow | merge the `.foxglove-ghost` + mobile rules into app CSS |
| `preview.html` | isolated inspection harness | dev-only; do not ship to players |

## Integration strategy — pick one, explicitly
The canonical ghost is **plain JS with two responsibilities baked in**: it (a) draws
the foxglove AND (b) alternates with the XGVE wordmark, and (c) publishes
`window.XGVE_RMASK` for the background field to part around it.

- **Copy unchanged (recommended if you keep the XGVE field):** drop the file in,
  mount on a full-bleed `<canvas>`. You get foxglove⇄wordmark alternation and the
  RMASK hand-off for free.
- **Extract foxglove-only:** in `draw()`, force `idx = 0` (remove the wordmark
  branch and the `idx = (idx+1)%2` flip); optionally delete `wordCells`/`prepGrid`
  for `wordmark`. Keep or drop the `XGVE_RMASK` publish depending on whether a
  background field consumes it (harmless to leave).
- **Adapt imports only:** the file has none — it reads globals. Provide
  `window.XG_ASCII.foxglove` before calling; nothing else to wire.
- **Replace an existing implementation / preserve a wrapper:** the effect owns only
  the `<canvas>`; keep your own positioning wrapper and pass the canvas in.
- **Retain game-state triggers:** honour `window.XGVE_PAUSED` (freeze) and mount/
  unmount via the returned cleanup for route changes.

## Parent / props / state
- Ghost: **no props** — `initFoxgloveGhost(canvas)`. Reads globals `XG_ASCII`,
  `XGVE_PAUSED`. Writes `XGVE_RMASK`.
- Landing: `FoxgloveAscii({ font, dur })` (production `font=8, dur=4200`), wrapped by
  `FoxgloveLanding({ onClose })`.
- Window: `Flora({ w, hpx })` (production `240×330`), wrapped by `FoxgloveWindow({ onClose })`.

## Supporting / related files (context, not required to copy)
`site/xgve-asciifield.js` (background field that parts around RMASK),
`guidelines/ascii-motion-doctrine.md` (the banked techniques),
`deploy/RECREATE.md` (whole-site blind-rebuild order).

## Test / preview files
- `preview.html` — isolated harness (this folder).
- Suggested app test: `foxglove.spec` per `FOXGLOVE_ACCEPTANCE_CRITERIA.md`.
