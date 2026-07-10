import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * XGVE Select — styled native <select> matching Input, with a custom chevron
 * and Signal-Red focus ring. Pass options as strings or {value,label} objects.
 */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Control height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Options — array of strings or {value,label,disabled}. */
  options?: Array<string | SelectOption>;
  /** Placeholder shown as a disabled first option when no value is selected. */
  placeholder?: string;
  /** @default false */
  disabled?: boolean;
}

export function Select(props: SelectProps): React.JSX.Element;
