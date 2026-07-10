One-sentence: Interactive token for filters, categories and token-inputs — selectable (toggles Signal Red) and/or removable (trailing ✕).

```jsx
import { Tag } from './Tag.jsx';

<Tag onClick={toggle} selected={on}>Generative</Tag>
<Tag dot>Games</Tag>
<Tag onRemove={() => remove('wasm')}>wasm</Tag>
```

Props: `selected` (red tint), `dot`, `onClick` (makes it a toggle button, sets aria-pressed), `onRemove` (adds a ✕). For static status labels use Badge instead.
