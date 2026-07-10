import * as React from 'react';

/**
 * XGVE Input — single-line text field with optional label, adornments and error.
 * Focus draws the Signal-Red ring. All native <input> attributes pass through.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the box. */
  label?: string;
  /** Show a red required asterisk on the label. @default false */
  required?: boolean;
  /** Control height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Leading adornment (icon node) inside the field. */
  leading?: React.ReactNode;
  /** Trailing adornment (icon node) inside the field. */
  trailing?: React.ReactNode;
  /** Error message — turns the field + message Signal Red and sets aria-invalid. */
  error?: string;
  /** Helper text shown below when there is no error. */
  hint?: string;
  /** @default false */
  disabled?: boolean;
}

export function Input(props: InputProps): React.JSX.Element;
