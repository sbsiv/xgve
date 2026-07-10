import * as React from 'react';

/**
 * XGVE IconButton — square, icon-only action for toolbars and dense UI.
 * Icon-agnostic; pass a line-icon node as children. Always provide `label`.
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** The icon node (a 20–24px line SVG / Lucide element). */
  children?: React.ReactNode;
  /** Accessible name — sets aria-label + title. Required for a11y. */
  label: string;
  /** Visual role. @default "ghost" */
  variant?: 'ghost' | 'outline' | 'solid';
  /** Square size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Toggle/selected state — tints the glyph Signal Red. @default false */
  active?: boolean;
  /** @default false */
  disabled?: boolean;
  /** @default "button" */
  type?: 'button' | 'submit' | 'reset';
}

export function IconButton(props: IconButtonProps): React.JSX.Element;
