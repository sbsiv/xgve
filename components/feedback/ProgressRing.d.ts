import * as React from 'react';

/**
 * XGVE ProgressRing — the broken-ring / gauge motif as a determinate (or
 * indeterminate) progress indicator, with a mono readout in the centre.
 * An intentional brand-signature addition.
 */
export interface ProgressRingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress 0–100. @default 0 */
  value?: number;
  /** Pixel diameter. @default 96 */
  size?: number;
  /** Stroke width in the 0–100 viewBox. @default 8 */
  thickness?: number;
  /** Degrees of open gap at the bottom (the "broken" arc). @default 90 */
  gap?: number;
  /** Spin a fixed red arc instead of showing a value. @default false */
  indeterminate?: boolean;
  /** Show the % readout in the centre. @default true */
  showValue?: boolean;
  /** Small mono caption under the value (e.g. "BUILD"). */
  label?: string;
}

export function ProgressRing(props: ProgressRingProps): React.JSX.Element;
