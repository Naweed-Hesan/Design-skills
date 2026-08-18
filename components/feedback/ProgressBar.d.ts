import * as React from 'react';

/** How far along something is. */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  /** Text on the left above the bar */
  label?: React.ReactNode;
  /** Text on the right above the bar, in mono — "18.2 of 25 gb", "72%" */
  valueLabel?: React.ReactNode;
  /** Colour the fill by state. Drive it from the value — amber near a limit, red at it. */
  tone?: 'accent' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Unknown duration. Only when you genuinely cannot compute progress. */
  indeterminate?: boolean;
  style?: React.CSSProperties;
}

export declare function ProgressBar(props: ProgressBarProps): React.ReactElement;
