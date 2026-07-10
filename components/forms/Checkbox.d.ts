import * as React from 'react';

/**
 * XGVE Checkbox — square, sharp-cornered; checked fills Signal Red with a white
 * check. Supports indeterminate and an optional description line.
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text to the right of the box. */
  label?: React.ReactNode;
  /** Secondary description under the label. */
  description?: string;
  /** Indeterminate (mixed) visual + native state. @default false */
  indeterminate?: boolean;
  /** @default false */
  disabled?: boolean;
}

export function Checkbox(props: CheckboxProps): React.JSX.Element;
