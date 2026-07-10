One-sentence: The broken-ring / gauge motif as a progress indicator — a neutral broken track with a Signal-Red arc and a centred mono readout; reads as a speedometer straight from the emblem.

```jsx
import { ProgressRing } from './ProgressRing.jsx';

<ProgressRing value={72} label="Build" />
<ProgressRing value={40} size={64} thickness={6} showValue={false} />
<ProgressRing indeterminate label="Syncing" />
```

Props: `value` (0–100), `size` (px), `thickness`, `gap` (open-arc degrees, default 90 → speedometer dial), `indeterminate` (spins a red arc), `showValue`, `label`. This is the XGVE-signature feedback element — prefer it over a generic bar for build/sync/capacity states.
