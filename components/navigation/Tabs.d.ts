import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  /** Optional trailing count chip. */
  count?: number;
  disabled?: boolean;
}

/**
 * XGVE Tabs — horizontal section switcher; active tab marked by a hard Signal-Red
 * underline. Controlled (`value`+`onChange`) or uncontrolled (`defaultValue`).
 *
 * @startingPoint section="Navigation" subtitle="Tabs with Signal-Red active rule" viewport="700x140"
 */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tab definitions. */
  items: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value (defaults to first item). */
  defaultValue?: string;
  /** Fires with the newly-selected value. */
  onChange?: (value: string) => void;
  /** `underline` (baseline + red rule) or `enclosed` (top-cut panels). @default "underline" */
  variant?: 'underline' | 'enclosed';
}

export function Tabs(props: TabsProps): React.JSX.Element;
