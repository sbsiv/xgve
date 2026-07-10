import * as React from 'react';

/**
 * XGVE Toast — transient notification surface. Status shown by a leading glyph/dot
 * (not a coloured left-border). Presentational — pair with your own queue and
 * auto-dismiss timer.
 */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Status role. @default "default" */
  variant?: 'default' | 'signal' | 'positive' | 'warning';
  /** Bold first line. */
  title?: string;
  /** Supporting message. */
  message?: string;
  /** Custom leading icon (overrides the status dot). */
  icon?: React.ReactNode;
  /** Inline action label (mono, Signal Red). */
  actionLabel?: string;
  /** Action click handler. */
  onAction?: () => void;
  /** Adds a dismiss ✕ when provided. */
  onClose?: () => void;
}

export function Toast(props: ToastProps): React.JSX.Element;
