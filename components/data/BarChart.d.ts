import * as React from 'react';

export interface BarDatum {
  label: string;
  value: number;
  color?: string;
}

/** Comparing categories. */
export interface BarChartProps {
  /** { label, value } objects, or [label, value] pairs */
  data: Array<BarDatum | [string, number]>;
  /** horizontal ranks categories · vertical is for time buckets */
  orientation?: 'horizontal' | 'vertical';
  /** Vertical only */
  height?: number;
  /** Pin the scale — useful when several charts must be compared to each other */
  maxValue?: number;
  formatValue?: (value: number) => string;
  /** Horizontal only: the mono value at the right of each row */
  showValue?: boolean;
  /** Give each bar its own series colour. Only when the categories are unordered. */
  colorByIndex?: boolean;
  style?: React.CSSProperties;
}

export declare function BarChart(props: BarChartProps): React.ReactElement;
