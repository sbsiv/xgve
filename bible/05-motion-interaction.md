# 05 — Interaction & Motion System

Exact triggers, durations, easings, and fallbacks for everything that moves. "Smoothly
animates in" is banned; use these numbers. Motion philosophy: **fast, decisive, ends
still** — the only permanent loops are the background field, the emblem's calm signal
pulse, the sheen sweep, and the tagline chroma. No bounce, no content spin, no glitch.

---

## A. Page entrance timeline (from load, seconds)

| t (s) | Element | From → To | Dur | Easing |
|---|---|---|---|---|
| 0.0 | `.ascii-field` | opacity 0 → 0.9 | 1.3 | ease-out |
| 0.0 | Emblem ASCII (left) | center-out reveal `rf 0→1` (smoothstep) | 2.1 | smoothstep |
| 1.6 | `.es-metal` (right) | opacity 0 + `blur(9px)` → 1 + blur 0 | 1.3 | ease-out |
| 2.1 | `.es-seam` *(if mounted)* | opacity 0 → 1 | 0.8 | ease-out |
| 2.3 | `.rl-tagline` | opacity 0 + `translateY(10px)` → in (`tag-in`) | 0.9 | ease-out |
| 0.0 | reveal layer | begins its own build/hold/dissolve cycle | — | — |

So: field fades up → the mark assembles as code from the center → the metallic half
resolves out of blur → the tagline rises last. Corners (`.hud`) fade/translate in via
`hud-in` on the idle phase.

## B. The redline emblem motion (keyframes)

Durations × `--rl-mo` (default 1). Classes: `.is-revving` → `.is-settled[data-idle]`.

```
rl-rev-anim  2.6s cubic-bezier(.28,.6,.32,1) .2s : rotate(-130deg,op0) →12% op1 →100% rotate(0)
rl-flutter   0.18s linear 2.7s ∞  : 5° → -0.8° → 4.6° → 0.2° → 5.2° → -0.6° → 5°   (limiter buzz)
rl-body-vibe 0.10s linear 2.6s ∞  : sub-px translate(±1.2) + rotate(±0.42°)        (whole-mark shudder)
rl-px-in     1.2s ease-out 1.9s   : trail squares fly in from lower-left, scale .6→1
rl-heat      on during rev; .is-settled → opacity 1→0 over 1s
settle       needle rotate→0 (0.7s), heat off (1s)
IDLE pulse   rl-pulse-needle 2.6s ∞ : brightness .72↔1.32 ;  rl-pulse-px 2.6s ∞ : opacity .35↔1
IDLE stream  rl-stream 2s ∞ staggered .0/.1/.2/.3s : squares translate out & fade
rl-sheen-sweep 5.5s ease-in-out ∞ : specular band bg-position 165%→-65% (fires ~55–100%)
```

## C. Ongoing ambient loops

| Loop | Where | Period | Notes |
|---|---|---|---|
| Field churn + folds | `.ascii-field` | continuous (30fps paint) | never stops except Pause/reduced |
| Reveal cycle | `.foxglove-ghost` | fox ~10.9s, word ~8.1s, alternating | build/hold/dissolve/gap |
| Emblem shimmer + junction flow + rogue glyphs | `.es-ascii` | continuous (~14fps) | glyph churn, `+ph*9` drift, escapees |
| Signal pulse | needle + trail | 2.6s | scarce-red heartbeat |
| Sheen sweep | steel | 5.5s | one specular pass |
| Tagline chroma | `.rl-tagline` | 3.8s | cyan/magenta offset breathes |
| VHS scanline | `.rl-tagline::after` | 0.7s | sparse black lines drift, `multiply` |
| Dust drift | `.dust` | 46s | −14px,−30px |
| Grain shift | `.grain` (if on) | 1.1s steps(3) | screen |

## D. The tagline treatment (exact)

```
font: Space Grotesk 700, clamp(32px,4.6vw,68px), letter-spacing -0.01em, line-height 1, #fff, nowrap
chroma (rest):  text-shadow: -2.5px 0 rgba(0,225,255,.62), 2.5px 0 rgba(255,45,140,.62),
                             0 0 10px rgba(90,200,255,.28), 0 0 17px rgba(255,45,140,.18);
rl-chroma 3.8s ∞ : at 50% offsets widen to ±3.5px and halos strengthen  (breathing aberration)
VHS ::after : repeating-linear-gradient(to bottom, transparent 0 7px, rgba(0,0,0,.30) 7px 8px),
              mix-blend-mode: multiply, rl-vhs-scan .7s linear ∞ (bg-position 0 → -8px)
.dot : color var(--accent) #e6021b, text-shadow 0 0 10px rgba(255,34,51,.7)   (the red period)
```
This cyan/magenta split + faint scanline is the ONLY place chromatic aberration and
scanlines appear. It is subtle and lives only on the tagline — never apply it to the
field, emblem, or UI.

## E. Pointer & hover interactions

| Target | Trigger | Behaviour |
|---|---|---|
| Cursor (whole page) | mousemove (≥26ms) | ASCII **brush**: 3 glyphs spawn, drift up −30px, scale .55, fade over 1.4–2s (`02 §I`). Off under reduced-motion. |
| Corner chip (readme/contact/Foxglove/Pause) | hover | `border-color:#e6202e`, `background: rgba(216,32,46,.16)`, color→`#fff`, 0.2s ease |
| Corner chip | focus-visible | `outline: 1px solid #e6202e; outline-offset: 3px` |
| Legacy nav `.navlink` | hover | underline wipes in L→R (`::after right:100%→0`, `--dur-base`) |
| Window title bar | pointer-down + drag | window follows pointer (see §F); cursor `grab` |
| Window close `□` | hover | fills red (`background/border #e6202e`) |
| Work row (legacy) | hover | `padding-left 20px`, bg `--surface-hover`, red `→` arrow slides in, idx→red |

There is **no** scroll-linked motion, no parallax-on-scroll, no magnetic buttons —
the page does not scroll. Pointer effects are the brush + hovers only. (An earlier
emblem mouse-parallax was explicitly removed — the emblem does NOT track the cursor.)

## F. Retro window mechanics

- **Open:** corner click toggles `wins.{fox|readme|contact}`. Mount animation
  `xgwin-in .16s ease-out` (opacity 0→1, scale .96→1).
- **Drag:** `onPointerDown` captures offset + `setPointerCapture`; `onPointerMove`
  sets `left/top = pointer − offset`; `onPointerUp` releases. `touchAction:none` so
  touch-drag works. Windows are `position:fixed`, `z-index:90`.
- **Close:** the `□` button, or **Esc** (closes all three at once).
- **Spawn positions:** Foxglove near top-right (`x0 = innerWidth−560`, `y0 80`),
  readme bottom-left (`y0 = innerHeight−360`), contact center-ish (`x0 = (W−380)/2`,
  `y0 110`). All clamp to stay on-screen on small viewports.
- Windows can overlap; last-opened sits above (all z90, DOM order). No focus-raise
  logic — acceptable at this scale.

## G. Pause / Resume (static mode)

Corner **Pause** sets `window.XGVE_PAUSED = true`: the field **freezes on its current
frame** (keeps the last paint, stops advancing), the reveal layer **clears itself and
nulls `XGVE_RMASK`**, and the **emblem keeps animating** (it is cheap). Label flips to
**Resume**. This is the "no-lag static wallpaper" mode: a frozen geometric ASCII field
+ the live emblem, nothing else moving. Resume clears the flag and motion continues.

## H. Reduced-motion (`prefers-reduced-motion: reduce`) — full fallback

- Field: paints a single static frame (`tt` never advances), no churn.
- Reveal: shows the **foxglove static** (subject 0, `rf=1`), no build/dissolve/blink.
- Emblem ASCII: no shimmer loop (renders once).
- Emblem metal: needle pinned `0°`, trail visible, heat off, **no** pulse/stream/sheen.
- Tagline/wordmark: shown, no chroma/VHS/entrance transform.
- Cursor brush: disabled. Grain: off. Dust: `animation:none`.
Everything remains legible and on-brand; only the motion is removed.

## I. Interrupt / re-entrance behaviour

- The entrance timeline is CSS `animation … both`, so a reload replays it cleanly;
  there is no JS entrance state to desync.
- Tweaks (idle mode, field on/off, vignette, grain) apply live via React state; the
  field/reveal read globals each frame, so toggles take effect immediately without a
  remount.
- Resizing rebuilds the atlases (dpr) and re-measures every canvas via `resize`
  handlers + a `ResizeObserver` on the field; motion continues uninterrupted.
