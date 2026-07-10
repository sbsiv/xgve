One-sentence: Binary on/off switch — neutral track off, Signal-Red track with white thumb on; for instant settings state, not form choices.

```jsx
import { Switch } from './Switch.jsx';

<Switch label="Live mode" defaultChecked />
<Switch label="Reduced motion" />
<Switch size="sm" label="Compact" />
```

Sizes `sm`/`md`. Props: `label`, `disabled`, plus native attrs (`checked`, `onChange`). Renders with `role="switch"`.
