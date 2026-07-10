import * as React from 'react';

/**
 * XGVE Tag — interactive token for filters/categories/inputs. Selectable (toggles
 * Signal Red) and/or removable (trailing ✕). Renders as a <button> when `onClick`
 * is set, otherwise a <span>.
 */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onClick'> {
  children?: React.ReactNode;
  /** Selected/active state — tints Signal Red. @default false */
  selected?: boolean;
  /** Show a leading dot. @default false */
  dot?: boolean;
  /** When provided, renders a trailing ✕ that calls this on click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Makes the whole tag a toggle button. */
  onClick?: (e: React.MouseEvent) => void;
}

export function Tag(props: TagProps): React.JSX.Element;
