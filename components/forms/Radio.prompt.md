One-sentence: Circular single-select radio (Signal-Red ring + dot when on); group several under a shared `name` with the RadioGroup wrapper.

```jsx
import { Radio, RadioGroup } from './Radio.jsx';

<RadioGroup legend="Deploy target">
  <Radio name="target" value="prod" label="Production" defaultChecked />
  <Radio name="target" value="staging" label="Staging" description="Preview builds" />
  <Radio name="target" value="local" label="Local" disabled />
</RadioGroup>
```

`RadioGroup` props: `legend`, `row` (horizontal layout). `Radio` props: `label`, `description`, `disabled`, plus native attrs (`name`, `value`, `checked`, `onChange`).
