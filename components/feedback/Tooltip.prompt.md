One-sentence: Small mono technical label shown on hover/focus of a single trigger element, with optional Signal-Red shortcut hint.

```jsx
import { Tooltip } from './Tooltip.jsx';
import { IconButton } from '../actions/IconButton.jsx';

<Tooltip label="Search" shortcut="⌘K">
  <IconButton label="Search"><Search/></IconButton>
</Tooltip>

<Tooltip label="Redeploy" placement="bottom">
  <button>Deploy</button>
</Tooltip>
```

Props: `label`, `shortcut` (rendered Signal Red), `placement` (top/bottom/left/right). Wrap exactly one interactive child; the tooltip shows on hover and keyboard focus.
