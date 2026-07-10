# FOXGLOVE — Tests & acceptance criteria

Concrete, checkable assertions. Values are the canonical ones from
`ASCII_METADATA.json`, `CHARACTER_PALETTE.json`, `FOXGLOVE_MOTION_SPEC.md`.

## A. Data integrity (static, cheap)
- [ ] `cols === 74` and `rows === 67`.
- [ ] `chars.length === 67`; **every** row `.length === 74` (trailing spaces intact).
- [ ] `colors.length === 67`; every row `.length === 74`.
- [ ] non-space glyph cells `=== 2250`; unique glyphs `=== 54` (excl. space).
- [ ] `colors` contains only `.` (2708) and `w` (2250) — **no `r`** (no baked red).
- [ ] `sha256(foxglove.fixture.json)` matches `FOXGLOVE_CHECKSUM.txt`
      (`ce96ed9b…810310`). A mismatch = whitespace trim / glyph substitution / re-encode.
- [ ] No tabs; encoding UTF-8; no line wrapping applied to the source.

## B. Typography / rendering
- [ ] `document.fonts.check("500 12px 'IBM Plex Mono'")` is true before capture
      (no fallback-font layout).
- [ ] Canvas font string is `500 {ch*0.95}px 'IBM Plex Mono', monospace`.
- [ ] No layout shift after font load (canvas re-measures on resize only; cell size
      derived from viewport, not text metrics).
- [ ] No *random* glyph substitution at a fixed frame with `Math.random` stubbed:
      body cells (`reveal ≥ 0.06`) equal their source char; only the reveal-front
      (`reveal < 0.06` → row `y=0` blank, `y≈1..4` NOISE) differs — deterministic
      once random is stubbed.

## C. Geometry / position
- [ ] Grid renders 74 columns × 67 rows; `cw/ch === 0.6` (ghost).
- [ ] Ghost anchored far-right: `originX = 0.85*W - blockW/2`; vertically centred.
- [ ] Height-driven `ch = 0.72*H/67`, width-clamped so `cw*74 ≤ 0.28*W`.
- [ ] No line wrapping; no clipping outside the canvas bounds.

## D. Motion (deterministic given `t`)
- [ ] Build/hold/decay/gap = **4.2 / 2.6 / 3.0 / 1.1 s**; smoothstep `t*t*(3-2t)`.
- [ ] Reveal order bottom-first (`o = 1 - y/rows`).
- [ ] Sway = `(density-0.5)*30*sin(t*0.55)`; amplitude **30 px**; frequency **0.55**.
- [ ] Rolling light = `0.85 + 0.35*(density-0.5)*sin(t*0.55+0.6)`.
- [ ] Field wave lift = `(sin(px*0.011+t*1.2)+sin(py*0.013-t*0.9))*2.4`.
- [ ] **No rotation, no scale** on the foxglove; oscillation only.
- [ ] Red is deterministic `(x*7+y*13)%11===0` (~9.09 %) — identical between runs;
      no per-frame colour randomness.
- [ ] Paint cap ~30 fps (`<33 ms` skipped) while timeline stays true.

## E. Reduced motion
- [ ] With `prefers-reduced-motion: reduce`: reveal timeline frozen, `idx=0`, `rf=1`
      (full foxglove, no cycling).
- [ ] **Known caveat / optional strict fix:** sway/wave/light read
      `performance.now()` directly and keep moving. To fully honour reduced-motion,
      gate `t` (e.g. `t = reduced ? 0 : performance.now()*0.001`) — verify a strict
      build renders a *still* pose.

## F. Static capture pose (deterministic — no `waitForTimeout` roulette)
- [ ] Capture only after a **canonical-pose signal**, not a random frame.
- [ ] Pose is **deliberately chosen** (not merely `t=0`, which leaves the
      position-dependent field wave non-zero): `rf=1`, sway=0, field wave=0,
      `lite=0.85` flat, deterministic red `(x*7+y*13)%11`, NOISE stubbed. At `rf=1`
      the reveal front still leaves row `y=0` blank and `y≈1..4` as NOISE (faithful
      hold state). `preview.html?static=1` sets `window.__foxgloveReady=true` and
      `document.title='foxglove:ready'` **after** painting this pose.
- [ ] Do **not** use `await page.waitForTimeout(...)` to grab whatever pose appears.

## G. Canonical screenshots to diff against
- [ ] `canonical-static-desktop.png` — ghost, static pose, ~1280×760 desktop.
- [ ] `canonical-static-mobile.png` — ≤760 px viewport (ghost intentionally absent;
      documents the mobile state).
- [ ] Optional: reduced-motion pose, layer-isolation (white-only / red-only),
      density-view (colour by `density`) — all available as toggles in `preview.html`.

## H. Motion reference
Live loop = `preview.html` (default mode). If an `.mp4` is required, record that
route at 1280×760, DPR 1, reduced-motion **off**, ≥2 full 4.2 s build→decay loops.
Source code + this spec remain the source of truth; the recording is evidence only.
