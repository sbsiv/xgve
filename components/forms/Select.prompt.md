One-sentence: Styled native select matching Input — custom chevron, Signal-Red focus ring, options as strings or {value,label} objects.

```jsx
import { Select } from './Select.jsx';

<Select label="Runtime" placeholder="Select…" options={['Node','Deno','Bun']} />
<Select label="Region" options={[
  { value: 'us-east', label: 'US East' },
  { value: 'eu-west', label: 'EU West', disabled: true },
]} defaultValue="us-east" />
```

Sizes `sm`/`md`/`lg`. Props: `options`, `placeholder` (disabled first option), `disabled`, plus native select attributes (`value`, `onChange`). For rich/searchable menus, compose a custom popover — this is the native control.
