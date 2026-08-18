import * as React from 'react';

export interface SegmentOption {
  value: string;
  label?: React.ReactNode;
  /** A line icon. With no label, pass `title` so the control is still named. */
  icon?: React.ReactNode;
  title?: string;
}

/** Two to four exclusive options, all visible at once.
 *
 * @startingPoint section="Navigation" subtitle="Inset segmented switches" viewport="700x120"
 */
export interface SegmentedControlProps {
  options: Array<string | SegmentOption>;
  value: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement;
