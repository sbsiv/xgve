import * as React from 'react';

/**
 * XGVE Radio — circular single-select. Selected = Signal-Red ring + dot.
 * Group several under a shared `name`; RadioGroup lays them out with a legend.
 */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text to the right of the control. */
  label?: React.ReactNode;
  /** Secondary description under the label. */
  description?: string;
  /** @default false */
  disabled?: boolean;
}

export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Group legend / question. */
  legend?: string;
  /** Lay options in a row instead of a column. @default false */
  row?: boolean;
  children?: React.ReactNode;
}

export function Radio(props: RadioProps): React.JSX.Element;
export function RadioGroup(props: RadioGroupProps): React.JSX.Element;
