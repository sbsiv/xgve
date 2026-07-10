import * as React from 'react';

/**
 * XGVE Tooltip — small mono technical label on hover/focus of its child. Sharp,
 * hairline-ruled. Wrap a single interactive element (button, icon-button).
 */
export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Tooltip text. */
  label: React.ReactNode;
  /** Optional keyboard shortcut shown in Signal Red (e.g. "⌘K"). */
  shortcut?: string;
  /** Side to open toward. @default "top" */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** The trigger element. */
  children?: React.ReactNode;
}

export function Tooltip(props: TooltipProps): React.JSX.Element;
