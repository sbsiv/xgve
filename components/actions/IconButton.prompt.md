One-sentence: A square, icon-only action for toolbars, navigation and dense controls — icon-agnostic (pass a line-icon node), always labelled.

```jsx
import { IconButton } from './IconButton.jsx';

<IconButton label="Search"><Search/></IconButton>
<IconButton label="Settings" variant="outline"><Settings/></IconButton>
<IconButton label="Confirm" variant="solid"><Check/></IconButton>
<IconButton label="Notifications" active><Bell/></IconButton>
```

Variants: `ghost` (default, transparent), `outline` (hairline border), `solid` (Signal-Red fill). Sizes: `sm` / `md` / `lg`. `active` tints the glyph Signal Red for toggle/selected state. Lucide icons recommended for the stroke language.
