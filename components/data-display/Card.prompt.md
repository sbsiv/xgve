One-sentence: A surface container on the black field — slightly-lighter surface with a 1px hairline rule and sharp corners; depth by lightness, not shadow.

```jsx
import { Card } from './Card.jsx';

<Card padding="md">
  <h3>Engine node</h3>
  <p>us-east · 12ms</p>
</Card>

<Card variant="outline" accent interactive onClick={open}>…</Card>
<Card chamfer variant="overlay">…</Card>
```

Variants: `raised` (default), `flat`, `overlay`, `outline`. Props: `padding` (sm/md/lg), `accent` (red top-rule), `chamfer` (cut top-right corner), `interactive` (hover-lift + focus ring, renders `<button>`), `as`. Compose header/body/footer yourself with tokens — the Card is an unopinionated shell.
