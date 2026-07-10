One-sentence: Transient notification surface where status is a leading glyph/dot (never a coloured left-border) — slides in and ends still; presentational, so wire your own queue.

```jsx
import { Toast } from './Toast.jsx';

<Toast variant="signal" title="Build shipped" message="#1180 is live on 4 nodes." onClose={dismiss} />
<Toast variant="positive" title="All nodes healthy" />
<Toast variant="warning" title="Node degraded" message="EU-West latency 240ms"
       actionLabel="Investigate" onAction={open} onClose={dismiss} />
```

Variants: `default`, `signal`, `positive`, `warning`. Props: `title`, `message`, `icon` (overrides dot), `actionLabel` + `onAction`, `onClose` (adds ✕). Stack in a corner viewport you own; add auto-dismiss with a timer.
