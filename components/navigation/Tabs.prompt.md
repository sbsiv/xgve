One-sentence: Horizontal section switcher whose active tab is marked by a hard Signal-Red underline (no pill, no glow) — controlled or uncontrolled.

```jsx
import { Tabs } from './Tabs.jsx';

<Tabs
  defaultValue="overview"
  onChange={setView}
  items={[
    { value: 'overview', label: 'Overview' },
    { value: 'nodes', label: 'Nodes', count: 4 },
    { value: 'logs', label: 'Logs', icon: <Terminal/> },
    { value: 'billing', label: 'Billing', disabled: true },
  ]}
/>
```

Variants: `underline` (default — baseline rule + red active underline), `enclosed` (top-cut panel tabs with a red top-rule when active). Items support `icon`, `count`, `disabled`. Pair with your own panel that reacts to `onChange`.
