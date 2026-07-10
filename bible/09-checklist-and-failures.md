# 09 — Visual Regression Checklist & Common Reconstruction Failures

Two tools for verifying a rebuild against canon: a **pass/fail checklist**, and a
catalogue of the **mistakes most likely to happen** with how to detect and fix each.

Verification method note: the ASCII layers are **Canvas** — they are invisible to
DOM-snapshot screenshot tools and they paint a frame AFTER load. Always verify with a
**real pixel screenshot taken ≥1.5s after load**, and probe the canvases by counting
non-transparent pixels (`getImageData`) — never trust an immediate DOM sample (it reads
0 before the first paint; this exact artifact once made a working field look "broken").

---

## A. Regression checklist (compare rebuild ↔ canonical screenshots in `screens/`)

**Silhouette & proportion**
- [ ] One black viewport, no scroll, at 375 / 768 / 1440 / 2560.
- [ ] Emblem centered; size tracks viewport **height** (`96vh`, cap 1040; `86vw` <760).
- [ ] Emblem aspect ratio 524/425; split exactly at horizontal center (metal clip 49.6%).
- [ ] Tagline directly beneath emblem; wraps+centers on phones, one line on desktop.
- [ ] Four corners pinned (TL wordmark, TR Pause, BL ©, BR readme/contact/Foxglove).

**ASCII field**
- [ ] Reads as **legible characters** (CELL ~30), not fine noise.
- [ ] Always moving at rest; kaleidoscopic mirror symmetry visible; patterns morph.
- [ ] Low-contrast atmosphere — does NOT compete with the emblem/tagline.
- [ ] Scarce red (~9–14% of glyphs), never a red field.
- [ ] Edges fade (radial mask), not hard-cropped.

**Pseudo-depth & reveals**
- [ ] Emblem-ASCII half shimmers, sways with depth, letters drift toward the seam,
      2 rogue red glyphs escape left.
- [ ] Foxglove builds bottom-first far-right; XGVE wordmark builds L→R bottom-left;
      they **alternate**, never together; each holds then dissolves.
- [ ] The field visibly **parts** where a reveal forms (occupancy break), not a sticker.
- [ ] Reveals are white (`#c6ced8`-ish) with scarce red; exact foxglove art detail
      preserved (characters are the shading — not shimmered away).

**Metal**
- [ ] Right half = brushed steel (cool grays, one sheen band), crisp edges, NO drop
      shadow / bevel / glow / rainbow chrome.
- [ ] Needle heat-graded; calm signal-pulse at rest; sheen sweeps ~5.5s.
- [ ] Four red trail squares present at the documented fractional positions.

**Type & color**
- [ ] IBM Plex Mono for every ASCII/label; Space Grotesk tagline; Inter body.
- [ ] Tagline has cyan/magenta chroma + faint VHS scanline + red period; found NOWHERE
      else.
- [ ] Exact hexes (`#000`, `#e6021b`/`#e6202e`, `#c6ced8`, metal stops) — not "close."

**Motion timing**
- [ ] Entrance: field up (1.3s) → emblem assembles center-out (2.1s) → metal deblurs
      (from 1.6s) → tagline rises (2.3s).
- [ ] No bounce, no content spin, no glitch. Only field/pulse/sheen/chroma loop.

**Interaction**
- [ ] Cursor drags a 3-glyph ASCII brush (desktop); none on touch.
- [ ] Corner chips: red hover border; red focus outline.
- [ ] Windows drag from title bar; `□` + Esc close; open with scale-in.
- [ ] Pause freezes field + reveals, emblem keeps animating; label→Resume.

**Responsive & a11y & perf**
- [ ] Reveal layer hidden < 760px; field stays; nothing else hidden.
- [ ] `prefers-reduced-motion`: static field, static foxglove, no loops, brush off.
- [ ] Smooth (~30fps paints, dpr≤1.5 field); no jank; grain OFF by default.

## B. Common reconstruction failures — detect & correct

1. **Treating the field as generic "Matrix rain" / terminal effect.**
   *Detect:* columns of falling glyphs, or random static.
   *Fix:* it's a **geometric interference field** — 2 counter-rotating kaleidoscopic
   folds + 7 sine modes with mirror symmetry (`02 §C`). Symmetry + morphing, not rain.

2. **Wrong monospace (Courier, Fira Code, DejaVu, system mono).**
   *Detect:* ligatures, different glyph widths/weight, "off" texture.
   *Fix:* IBM Plex Mono, weight 500–600. It must load before atlases build.

3. **Field too small / too dense → reads as noise, not ASCII.**
   *Detect:* you can't tell they're characters.
   *Fix:* `CELL = 30`. Bigger legible glyphs (this was an explicit correction).

4. **Field too bright / high-contrast → competes with center.**
   *Detect:* the field grabs the eye before the emblem.
   *Fix:* keep base alpha low (`0.12 + …`), edge-fade on, `opacity:0.9`. Atmosphere.

5. **Pseudo-depth missing → foxglove/emblem look flat & cheap.**
   *Detect:* static, pasted-on ASCII; "loses all detail" or "doesn't feel alive."
   *Fix:* derive `d` from the `DENS` ramp; add parallax sway `(d−.5)*A*sin(t*.55)` +
   rolling light (`02 §D`). This is the signature move — never skip it.

6. **Reveals layered ON TOP instead of integrated.**
   *Detect:* the foxglove sits over the pattern like a decal; the field doesn't part.
   *Fix:* publish `XGVE_RMASK` from the reveal; field multiplies alpha ×0.14 where
   masked (`02 §E`). Same palette + shared wave motion.

7. **Metal too glossy / chrome / shadowed.**
   *Detect:* mirror reflections, rainbow, drop shadow, bevel, outer glow.
   *Fix:* brushed steel — the `157deg` cool-gray gradient + one `screen` sheen; sharp
   masked edges; zero shadow (only the 0 0 5px red on trail squares).

8. **Split junction "improved" (feathered/interleaved/seam line).**
   *Detect:* a gradient blend or red divider at center.
   *Fix:* it is a **clean hard split** at 49.6% (an interleave was tried & rejected).
   Keep the junction *flow motion* on the ASCII side; keep the *geometry* a hard edge.

9. **Chromatic aberration / VHS applied broadly (generic cyberpunk).**
   *Detect:* the whole page has RGB split / scanlines / neon.
   *Fix:* those live ONLY on the tagline, subtly. The field/emblem/UI are clean.

10. **Adding a busy HUD / lots of terminal chrome.**
    *Detect:* corner data blocks, radars, coordinates, progress bars, JP text.
    *Fix:* corners are **four minimal labels**. A dense HUD was explicitly rejected.

11. **Normalising the ASCII (aligning, equalising density, freezing churn, deleting
    rogue red glyphs).**
    *Detect:* too tidy, too still, no escapees, uniform brightness.
    *Fix:* the shimmer, density variation, junction flow, and rogue glyphs are
    intentional. Do not clean them.

12. **Fabricating a 3D foxglove / redrawing the mark.**
    *Detect:* a volumetric flower unlike the trademark; invented geometry.
    *Fix:* trademark honesty — use the real `XG_ASCII.foxglove` art + pseudo-depth
    only. True 3D needs a real 3D source (`00 §6`, doctrine §6).

13. **Stretching desktop / mis-centering the emblem on mobile.**
    *Detect:* emblem crowding corners on wide screens, or overflowing on portrait.
    *Fix:* `clamp(420px,96vh,1040px)` (height-bound) desktop; `86vw` < 760px.

14. **Hiding too much on mobile.**
    *Detect:* field or emblem removed on phones.
    *Fix:* only the **reveal layer** hides < 760px. Field + emblem + tagline + corners
    always present.

15. **Replacing custom motion with generic fade-ins; or continuous spins/bounces.**
    *Detect:* everything just fades; or things bounce/spin forever.
    *Fix:* follow the entrance timeline (`05 §A`) and the "ends still" rule. Only
    field/pulse/sheen/chroma loop.

16. **Using a raster screenshot of the emblem instead of the live CSS-mask metal +
    Canvas ASCII.**
    *Detect:* no motion, no depth, fixed resolution.
    *Fix:* rebuild the live layers; the emblem is CSS gradients + masks, not an image.

17. **Reintroducing `backdrop-filter`/blur or leaving grain on → lag.**
    *Detect:* jank, hot GPU, low fps.
    *Fix:* no backdrop-filter; grain OFF by default; 30fps paint cap; dpr≤1.5.

18. **Sampling canvas pixels immediately after load and concluding "it's broken."**
    *Detect:* your automated check reports an empty field.
    *Fix:* wait ≥1.5s; canvases paint after mount. Re-check.
