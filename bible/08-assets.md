# 08 — Asset Library, Manifest & Export

All assets the website loads, plus the source masters and how the derived assets were
produced. The site is asset-light: three PNGs load at runtime; everything else is
generated (ASCII data) or CSS.

Naming convention used across the project: **`xgve-[asset]-[variant]-[size]-[theme].[ext]`**
(e.g. `xgve-icon-mono-white.png`, `xgve-wordmark-redx.png`). Keep it.

---

## A. Assets the WEBSITE loads at runtime

| File | Purpose | Where referenced | Resizable? |
|---|---|---|---|
| `assets/wordmark/xgve-wordmark-redx.png` | Top-left brand wordmark (white "XGVE", red notch on the X) | `xgve-site.jsx` TL corner, `height:25px` | yes (vectorless — export ≥2× the 25px display height) |
| `assets/web/xgve-favicon.ico` | Favicon | `index.html` `<link rel=icon>` | no (multi-res ico) |
| `assets/web/xgve-icon-512.png` | OG / social preview (placeholder) | `index.html` `og:image` | replace with a real 1200×630 social card before launch |
| `site/ascii-data.js` | Trademark ASCII grids (emblem/wordmark/foxglove) | all three canvas engines | n/a (data) — treat as a brand asset |
| `site/emblem-masks.css` | Data-URI silhouettes `--m-struct` / `--m-needle` (from 2048 master) | `xgve-redline.css` metal layers | regenerate from 2048 master, don't upscale |

That's the entire runtime asset surface. No background photos, no icon font, no SVG
sprite. (An icon set is intentionally absent — the brand uses glyphs/ASCII and the
emblem, not a UI icon library.)

## B. Source masters (in `uploads/` and `assets/`) — keep, do not lose

| File | What it is |
|---|---|
| `uploads/XGVE_Asset_Pack/icon/XGVE_icon_transparent_2048.png` | **2048×1661 master emblem** — source for the metal masks. The highest-fidelity mark. |
| `assets/icon/xgve-icon-transparent.png` | emblem, transparent |
| `assets/icon/xgve-icon-mono-white.png` / `-mono-black.png` | mono emblem (red stripped) |
| `assets/logo/emblem-structure-hires.png` | white-structure matte (from 2048 master) |
| `assets/logo/emblem-needle-hires.png` | red-needle matte, trail squares removed (from 2048 master) |
| `assets/logo/xgve-lockup-horizontal-*.png` | horizontal lockups (transparent/white/black/dark) |
| `assets/wordmark/xgve-wordmark-*.png` | wordmarks: `redx` (site), `metallic`, `transparent`, `tagline` variants |
| `assets/web/xgve-icon-{16..512}.png` | favicon/app-icon size ladder (transparent + black variants exist under icon/) |

## C. How the derived assets were produced (reproduce exactly)

### Metal masks (`emblem-masks.css`) — from the 2048 master
A canvas script reads `XGVE_icon_transparent_2048.png`, and for every opaque pixel:
- classifies **red** (`r>110 && r>g*1.55 && r>b*1.55`);
- red pixels NOT inside the four trail-square boxes → `--m-needle` matte (white on
  transparent);
- all non-red pixels → `--m-struct` matte (white on transparent);
- both mattes are exported as **data-URIs** into `site/emblem-masks.css` as
  `--m-struct` / `--m-needle`. Trail-square boxes are excluded so the squares can be
  recreated crisply as CSS divs (`.rl-px`).
Because it samples the 2048px master, the mask stays sharp at the site's 1040px emblem.
**Never generate the mask from a small icon and upscale — it pixelates** (this was a
real bug; fix was to regenerate from 2048).

### ASCII grids (`ascii-data.js`)
Produced via the image→ASCII pipeline in `02-ascii-system.md §H` from the trademark
marks (emblem 82×35, wordmark 120×14, foxglove 74×67), then hand-verified. The foxglove
grid is the studio's flagship flora mark in ASCII — a first-class brand asset.

## D. Export settings / recommendations

| Asset | Format | Notes |
|---|---|---|
| Wordmark, emblem, lockups | PNG-24 transparent | export at ≥2× intended display; provide `-white` / `-black` / `-dark` theme variants |
| Favicon | `.ico` (16/32/48) + `xgve-icon-32/16.png` | already present |
| Social card (replace placeholder) | PNG/JPG **1200×630** | a real hero screenshot on black; set as absolute `og:image` |
| Web/app icons | PNG 16→512 | present ladder |
| (Optional) SVG masters | SVG | the brand currently has **no vector master** — flagged; if one is produced, prefer it for masks & lockups. |

## E. Missing / flagged (hand-off honesty)

- **No vector (SVG) master** of the emblem or wordmark exists — everything derives from
  raster. If you obtain a vector, regenerate masks + lockups from it.
- **Fonts** are Google-Fonts stand-ins (Space Grotesk / Inter / IBM Plex Mono, all OFL).
  Self-host the OFL files for offline/production (see `SELFHOST.md`); the look is
  unchanged since these ARE the intended families.
- **`og:image`** is a placeholder icon — swap for a real 1200×630 card.
- **Social URLs / wishlist / mailing list** in `contact.txt` + Foxglove window are
  PLACEHOLDERS (`x.com/xgvestudios`, `xgve.itch.io`, `github.com/xgve`, `discord.gg/xgve`,
  `WISHLIST_URL=""`).

## F. Full runtime file list (for a clean rebuild)

```
site/index.html            site/ascii-data.js         site/emblem-masks.css
site/xgve-site.css          site/xgve-redline.css
site/xgve-asciifield.js     site/xgve-ascii-emblem.js  site/xgve-foxglove-ghost.js
site/xgve-lockup.jsx        site/xgve-windows.jsx      site/xgve-site.jsx
site/xgve-foxglove.jsx*     site/xgve-work.jsx*        site/tweaks-panel.jsx
../styles.css  ../tokens/*  ../assets/wordmark/xgve-wordmark-redx.png
../assets/web/xgve-favicon.ico  ../assets/web/xgve-icon-512.png
(* legacy imports still referenced by boot(); keep or stub the window globals they set)
Not used by the default view: xgve-hud.css, xgve-masks.js, xgve-firestream.js.
```
