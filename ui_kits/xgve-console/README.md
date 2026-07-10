# XGVE Console — UI kit

An interactive, click-through recreation of a fictional **XGVE Console** — the
control surface for the *eXperimental generative venture engine*. It exists to
show the design system's components working together in a real product layout on
the black field.

> **Brand demonstration, not a real product.** No XGVE product code or Figma was
> supplied, so this surface, its data and its flows are invented to exercise the
> components. It is intentionally cosmetic: state is faked, nothing persists.

## Flow
1. **Access screen** (`Login.jsx`) — XGVE lockup, access-key `Input`, primary
   `Button`, a live mono status line, and a cropped broken-ring motif. Submitting
   enters the console.
2. **Console** (`Console.jsx`) — sidebar nav + topbar + main:
   - **Overview** `Tabs` — three `ProgressRing` stat cards (throughput / capacity /
     sync health), a **Nodes** table with status `Badge`s and filter `Tag`s, and a
     **Recent builds** list.
   - **New build** — the topbar `Button` opens a `Dialog` (`Select` · `Input` ·
     `Switch`). Queuing pushes a signal `Toast` and prepends the build to the list.
   - **Nodes / Builds** tabs narrow the view; **Ventures / Logs** show an
     indeterminate `ProgressRing` placeholder.

## Files
- `index.html` — mounts the app; loads `styles.css` + `_ds_bundle.js`, then the
  screen scripts. Tagged `@dsCard group="Console"`.
- `icons.jsx` — shared Lucide-geometry line-icon set on `window.XG_Icons`.
- `Login.jsx` → `window.XG_Login`
- `Console.jsx` → `window.XG_Console` (Sidebar, Topbar, StatRing, NodesTable,
  BuildsList, NewBuildDialog — all composing DS components)
- `App.jsx` → `window.XG_App` (login → console state machine)

## Components exercised
`Button`, `IconButton`, `Input`, `Select`, `Switch`, `Card`, `Badge`, `Tag`,
`Tabs`, `Dialog`, `Toast`, `ProgressRing` — plus the real emblem/lockup assets and
the token system (surfaces, mono eyebrows, hairline rules, Signal-Red accents).

## Run
Open `index.html` from the built system (needs `_ds_bundle.js` at the project
root, produced by the compiler). Icons are inline SVG; no CDN icon dependency.
