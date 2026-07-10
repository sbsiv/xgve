One-sentence: Small read-only status/label chip in mono caps — `signal` is solid Signal Red, with an optional status dot that can pulse.

```jsx
import { Badge } from './Badge.jsx';

<Badge variant="signal" dot pulse>Live</Badge>
<Badge variant="signal-soft">Beta</Badge>
<Badge variant="neutral">v4.2</Badge>
<Badge variant="outline" dot>Queued</Badge>
```

Variants: `neutral`, `signal`, `signal-soft`, `outline`, `positive`, `warning`. Props: `size` (sm/md), `dot`, `pulse`. Read-only — for interactive tokens use Tag. Keep `positive`/`warning` for data UIs; prefer `signal` on brand surfaces.
