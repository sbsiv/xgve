One-sentence: XGVE's primary action button — Signal-Red solid for confirm/primary, neutral outline for secondary, red-outline for destructive; sharp corners with an optional 45° chamfer.

```jsx
import { Button } from './Button.jsx';

<Button variant="primary" onClick={launch}>Launch build</Button>
<Button variant="secondary" iconRight={<ArrowRight/>}>View system</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Delete node</Button>
<Button variant="primary" chamfer loading>Deploying</Button>
```

Variants: `primary` (solid Signal Red — the confirm/go), `secondary` (hairline neutral outline), `ghost` (text-only), `danger` (red outline that fills red on hover — destructive/caution). Sizes: `sm` / `md` / `lg` (28 / 36 / 44px). Props: `iconLeft`, `iconRight` (pass line-icon nodes), `fullWidth`, `chamfer` (cut corners), `loading`, `disabled`.

Rules: one primary/red action per view — red is the signal, keep it scarce. Use `secondary`/`ghost` for everything else. Reach for `chamfer` sparingly as an accent, not on every button.
