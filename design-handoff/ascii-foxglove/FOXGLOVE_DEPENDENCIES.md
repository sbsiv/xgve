# FOXGLOVE — Dependencies manifest

The foxglove needs **no npm packages, no animation library, no WebGL, no shader
toolchain, no build step.** It is vanilla `<canvas>` 2D (ghost, window) and plain
DOM `<pre>` (landing). Claude Code must not go looking for a motion library — there
isn't one.

## Runtime requirements
| Requirement | Detail | Fallback |
|---|---|---|
| Canvas 2D | `canvas.getContext('2d')`, `fillText`, `setTransform` | none needed — universally supported |
| `requestAnimationFrame` | frame loop | none |
| `matchMedia` | `prefers-reduced-motion` detection | if absent, treat as "no reduce" |
| `performance.now()` | sway/wave/light clock | `Date.now()` equivalent |
| `Float32Array` | landing per-cell thresholds | any typed array |
| Web font **IBM Plex Mono** | glyph metrics; weight 500 used on canvas | `ui-monospace`/`Menlo` — **but alignment shifts**; assert the font before capture |

## Data dependency (required, ship together)
- `window.XG_ASCII.foxglove` — the 74×67 grid `{cols, rows, chars[], colors[]}`.
  Provided verbatim as `source/ascii-data.js` and losslessly as
  `foxglove.fixture.json`. **The renderer polls up to 60×80 ms for this global
  before starting** (`if (!(window.XG_ASCII && window.XG_ASCII.foxglove)) …`).
- The ghost also reads `window.XG_ASCII.wordmark` (the alternate subject). If you
  want foxglove-only, remove the `idx 1` branch in `drawGrid`/`draw` (see mapping).

## Fonts — load + assert
Loaded globally (not by the component) via `tokens/fonts.css`:
```
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');
```
Before any canonical capture, assert the face is ready so the grid is not measured
in a fallback:
```js
await document.fonts.load("500 12px 'IBM Plex Mono'");
await document.fonts.ready;
```

## Globals the effect reads / writes
| Global | Direction | Purpose |
|---|---|---|
| `window.XG_ASCII` | read | ASCII grids (foxglove, wordmark) |
| `window.XGVE_PAUSED` | read | freeze + clear |
| `window.XGVE_RMASK` | **write** | 24-px occupancy mask consumed by the background field |
| `window.XGVE_initFoxgloveGhost` | export | `(canvas) => cleanupFn` |
| `window.XGVE_FoxgloveLanding` | export | landing React component (from `.jsx`) |
| `window.XGVE_FoxWindow` | export | window React component (from `.jsx`) |

## Host page (production) load order
`react@18.3.1` → `react-dom@18.3.1` → `@babel/standalone@7.29.0` → `ascii-data.js`
→ canvas engines (incl. `xgve-foxglove-ghost.js`) → babel `.jsx` components → boot.
React/Babel are needed **only** for the landing/window React renderers — the
canonical **ghost is plain JS** and has zero framework dependency.

## CSS variables / theme tokens touched
- `--font-mono` (families) — from `tokens/typography.css`.
- Colours are **hard-coded literals** in the renderers (not tokens): see
  `CHARACTER_PALETTE.json → fillColors`. Void-black stage `#000` behind it.
