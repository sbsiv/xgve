# 07 — Technical Rendering Strategy

Which technology renders each effect, and why. The governing rule: **use the simplest
tech that achieves the exact look; escalate to Canvas only where DOM/CSS/SVG cannot do
it performantly.** This site sits right at that line — the generative ASCII genuinely
needs Canvas; everything else is DOM/CSS.

---

## A. Technology map

| Effect | Tech | Why (and the cheaper option we rejected/kept) |
|---|---|---|
| Page shell, layout, corners, tagline, windows | **HTML + CSS** | static structure; DOM is directly editable & accessible. |
| Metallic emblem | **CSS gradients + CSS masks** | no raster of chrome; `mask-image` (data-URI silhouette) + `linear-gradient` + `mix-blend-mode:screen` sheen. SVG would work but CSS masks are lighter here. |
| Emblem motion (rev/pulse/sheen) | **CSS animations** | declarative, GPU-friendly transforms/filters; no JS loop needed. |
| Background ASCII field | **Canvas 2D** (atlas `drawImage`) | thousands of animated glyphs at 30fps — DOM/SVG can't; WebGL is overkill and the atlas keeps 2D smooth. |
| Emblem ASCII half | **Canvas 2D** | per-glyph churn + pseudo-depth per frame. |
| Reveal layer | **Canvas 2D** | build/dissolve + occupancy mask each frame. |
| Cursor brush | **DOM spans + Web Animations API** | a handful of short-lived nodes; DOM is simpler than a canvas layer and the WAAPI handles the fade/GC. |
| Tagline chroma / VHS | **CSS** (`text-shadow`, `repeating-linear-gradient`, `mix-blend-mode`) | pure CSS; no canvas. |
| Grain, vignette, dust, ring | **CSS** (inline SVG turbulence / gradients) | decorative, cheap, toggleable. |
| State (tweaks, windows, pause) | **React 18** (thin) | a small shell; could be vanilla, but React keeps the window/tweak state tidy. |

**No WebGL, no shaders, no `<video>`, no motion library** (GSAP/Framer). The only
runtime deps are React + ReactDOM + Babel-standalone (dev transpile — precompile for
prod). Everything visual is first-party.

## B. Why Canvas here is justified (and its limits)

The ASCII field is ~ (W/30)×(H/30) cells — at 1440×900 that's ~1,440 cells, each a
`drawImage` blit, at a 30fps paint cap: comfortably real-time. DOM equivalents (1,400
animated `<span>`s) would thrash layout; SVG `<text>` × 1,400 animated per frame would
also stall. WebGL would render it but adds context-loss handling, shader maintenance,
and a heavier failure mode for a look that Canvas 2D nails. **Canvas 2D is the correct
floor.** If you ever need 4K-native at 60fps you *could* move the field to an instanced
WebGL point sprite of the atlas — but only then, and keep the CSS/DOM for everything
else.

## C. Performance techniques in the code (reproduce all)

1. **Glyph atlas + `drawImage`** instead of per-cell `fillText` (kills stutter).
2. **dpr cap:** field & reveal `Math.min(1.5, devicePixelRatio)`; emblem `2`. At 1.5×
   the field pushes ~44% fewer pixels than 2× with no visible loss on glyph art.
3. **Paint cap ~30fps:** `if (now − lastPaint < 30) skip;` — but the animation
   **timeline advances on real `dt`**, so motion looks smooth while halving paint cost.
   (Reveal uses 33ms; emblem 70ms ≈ 14fps churn.)
4. **Off-screen pause:** `if (document.hidden) skip;` — no work on background tabs.
5. **Explicit Pause mode** (`window.XGVE_PAUSED`) → zero field/reveal paint cost; the
   "static wallpaper" for low-power or focus.
6. **Grain default OFF** — the full-screen `screen`-blend composite is the single most
   expensive optional layer; it's a Tweak, not a default.
7. **No `backdrop-filter`** anywhere (an earlier blur on corner chips was removed — it
   forced an expensive full-screen blur pass each frame).
8. **`ResizeObserver` + `resize`** rebuild atlases/measurements only on actual size
   changes, not per frame.

## D. Mobile GPU / battery

- 30fps paint + dpr 1.5 keeps mid phones smooth; the reveal layer (extra full-screen
  canvas) is **disabled < 760px**, halving mobile canvas cost.
- reduced-motion → static field, no loops → near-zero battery draw.
- No blur/backdrop-filter (mobile GPUs hate them).
- Everything is client-side; no network after first load (see `08`, self-host).

## E. Fallbacks & compatibility

- **No Canvas / JS off:** the DOM still renders — black stage, the metallic emblem
  (CSS), the tagline, the corners. You lose the ASCII layers only. Acceptable graceful
  degradation. (For a true no-JS story, ship a static hero PNG as a `<noscript>`/
  background — optional.)
- **`mask-image`**: prefix `-webkit-mask-*` (done). Supported in all current evergreen
  browsers; on ancient WebKit the metal falls back to an unmasked gradient box — avoid
  by keeping the `-webkit-` prefixes.
- **Web Animations API**: evergreen-safe; if targeting very old browsers, the cursor
  brush can fall back to a CSS keyframe.
- **Fonts:** IBM Plex Mono MUST be loaded before the atlases build (they snapshot the
  font). Load fonts in `<head>`; the engines already retry-mount (`setTimeout` poll)
  until `window.XG_ASCII` + React are present, which also covers late font load in
  practice — but self-hosting with `font-display: block` for Plex Mono is safest.

## F. Script load order (critical — from `index.html`)

```
1. React, ReactDOM, Babel-standalone           (CDN dev builds — swap to prod for launch)
2. ascii-data.js            → window.XG_ASCII   (plain JS, must be first of ours)
3. xgve-asciifield.js       → window.XGVE_initAsciiField
4. xgve-ascii-emblem.js     → window.XGVE_initAsciiEmblem
5. xgve-foxglove-ghost.js   → window.XGVE_initFoxgloveGhost
6. tweaks-panel.jsx  (babel)
7. xgve-lockup.jsx   (babel) → window.XGVE_RedlineEmblem
8. xgve-foxglove.jsx (babel) → window.XGVE_FoxgloveLanding
9. xgve-work.jsx     (babel) → window.XGVE_WorkOverlay
10. xgve-windows.jsx (babel) → window.XGVE_FoxWindow/ReadmeWindow/ContactWindow
11. xgve-site.jsx    (babel) → window.XGVE_App
boot(): waits for XGVE_App + useTweaks + RedlineEmblem + WorkOverlay + FoxgloveLanding,
        then ReactDOM.createRoot('#root').render(<XGVE_App/>). Polls every 40ms.
```

The three canvas engines are plain `<script>` (no Babel) and self-register on `window`;
the React pieces are `type="text/babel"`. The engines poll for `window.XG_ASCII` so
load order among them is forgiving, but keep `ascii-data.js` early.

## G. Production build notes (see `../site/SELFHOST.md`)

- Replace the three unpkg dev scripts with **production** React/ReactDOM and precompiled
  JS (or keep Babel-standalone but expect the dev-time transpile cost — this is most of
  the "lag" felt in preview; it disappears in a built deploy).
- Self-host the OFL fonts (IBM Plex Mono / Space Grotesk / Inter); remove Google Fonts
  `<link>`s.
- Absolute `og:image` URL. Deploy the whole folder tree (site references `../assets`,
  `../styles.css`, `../tokens`).
- No analytics/APIs; fully static.
