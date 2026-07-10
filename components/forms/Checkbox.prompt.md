One-sentence: Square, sharp-cornered checkbox that fills Signal Red with a white check when on — supports indeterminate and a description line.

```jsx
import { Checkbox } from './Checkbox.jsx';

<Checkbox label="Enable telemetry" defaultChecked />
<Checkbox label="Select all" indeterminate />
<Checkbox label="Auto-deploy" description="Ship on every green build" />
<Checkbox label="Locked" disabled />
```

Props: `label`, `description`, `indeterminate`, `disabled`, plus native input attrs (`checked`, `onChange`).
