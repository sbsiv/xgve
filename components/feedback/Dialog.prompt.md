One-sentence: Modal surface over a controlled dark-blur scrim — sharp panel, red accent top-rule, Escape/scrim-click to close; compose footer actions with XGVE Buttons.

```jsx
import { Dialog } from './Dialog.jsx';
import { Button } from '../actions/Button.jsx';

<Dialog open={open} onClose={close}
  eyebrow="Confirm" title="Delete node Aurora?"
  description="This tears down the node and its build cache. It cannot be undone."
  footer={<>
    <Button variant="ghost" onClick={close}>Cancel</Button>
    <Button variant="danger" onClick={destroy}>Delete node</Button>
  </>}>
  <p>Any in-flight builds on this node will be cancelled.</p>
</Dialog>
```

Props: `open`, `onClose`, `eyebrow`, `title`, `description`, `footer`, `accent` (red top-rule, default true), `width`, `closeOnScrim`. Fixed-position overlay — no portal wiring needed.
