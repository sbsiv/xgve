import * as React from 'react';

/**
 * XGVE Switch — binary on/off toggle. On = Signal-Red track, white thumb.
 * Use for instant state (settings), not for form submit choices.
 */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label to the right of the track. */
  label?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** @default false */
  disabled?: boolean;
}

export function Switch(props: SwitchProps): React.JSX.Element;
