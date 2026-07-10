import * as React from 'react';

/**
 * XGVE Card — surface container on the black field. Depth by surface lightness +
 * hairline rule, never shadow. Optional red accent top-rule and corner chamfer.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  /** Surface treatment. @default "raised" */
  variant?: 'raised' | 'flat' | 'overlay' | 'outline';
  /** Inner padding. @default "md" */
  padding?: 'sm' | 'md' | 'lg';
  /** Draw a Signal-Red technical rule across the top edge. @default false */
  accent?: boolean;
  /** Cut the top-right corner at 45° (brand chamfer; removes the border). @default false */
  chamfer?: boolean;
  /** Hover-lift + focus ring; renders as a <button> unless `as` is set. @default false */
  interactive?: boolean;
  /** Override the rendered element. */
  as?: keyof React.JSX.IntrinsicElements;
}

export function Card(props: CardProps): React.JSX.Element;
