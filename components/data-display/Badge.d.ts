import * as React from 'react';

/**
 * XGVE Badge — small, read-only status/label chip in mono caps. `signal` = solid
 * Signal Red; `signal-soft` = red tint. Optional status dot with a restrained pulse.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Colour role. @default "neutral" */
  variant?: 'neutral' | 'signal' | 'signal-soft' | 'outline' | 'positive' | 'warning';
  /** @default "sm" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  /** Animate the dot with the restrained status pulse (requires `dot`). @default false */
  pulse?: boolean;
}

export function Badge(props: BadgeProps): React.JSX.Element;
