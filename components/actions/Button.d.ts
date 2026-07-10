import * as React from 'react';

/**
 * XGVE Button — the primary action primitive.
 * Sharp-cornered by default; the brand "rounds" via a 45° corner chamfer.
 * Signal Red is the primary/confirm fill. Destructive uses a red outline that
 * fills on hover so it reads as caution, distinct from the solid confirm.
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Button label / content. */
  children?: React.ReactNode;
  /** Visual role. `primary` = Signal-Red confirm; `danger` = red-outline destructive. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** Control height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon element rendered before the label (pass a 24px line SVG / Lucide node). */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to the container width. @default false */
  fullWidth?: boolean;
  /** Cut the top-right & bottom-left corners at 45° (brand chamfer). @default false */
  chamfer?: boolean;
  /** Show a spinner and disable interaction. @default false */
  loading?: boolean;
  /** @default false */
  disabled?: boolean;
  /** @default "button" */
  type?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): React.JSX.Element;
