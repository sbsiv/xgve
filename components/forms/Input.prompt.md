One-sentence: Single-line text field with optional label, leading/trailing icon adornments, hint and error — focus draws the Signal-Red ring.

```jsx
import { Input } from './Input.jsx';

<Input label="Project name" placeholder="untitled-engine" required />
<Input label="Search" leading={<Search/>} placeholder="Find a node…" />
<Input label="API key" defaultValue="xg_live_…" trailing={<Copy/>} />
<Input label="Seed" error="Must be a positive integer" defaultValue="-1" />
```

Sizes `sm`/`md`/`lg`. Props: `leading`, `trailing` (icon nodes), `hint`, `error` (turns field + message red, sets aria-invalid), `required`, `disabled`. All native input attributes pass through (`type`, `value`, `onChange`, …).
