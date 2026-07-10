import * as React from 'react';

/**
 * XGVE Dialog — modal surface over a controlled dark blur scrim. Sharp panel,
 * hairline rule, red accent top-rule. Escape / scrim-click call onClose. Compose
 * footer actions with XGVE Buttons.
 */
export interface DialogProps {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Called on Escape, scrim click, or the close button. */
  onClose?: () => void;
  /** Small mono eyebrow above the title (Signal Red). */
  eyebrow?: string;
  /** Dialog heading. */
  title?: string;
  /** Supporting line under the title. */
  description?: string;
  /** Body content. */
  children?: React.ReactNode;
  /** Footer node — typically a row of Buttons. */
  footer?: React.ReactNode;
  /** Red accent top-rule. @default true */
  accent?: boolean;
  /** Max width (px or CSS length). @default 480 */
  width?: number | string;
  /** Close when the scrim is clicked. @default true */
  closeOnScrim?: boolean;
}

export function Dialog(props: DialogProps): React.JSX.Element | null;
