import * as React from 'react';

/** A trend line with no axis, sized to sit inline. */
export interface SparklineProps {
  data: number[];
  width?: number;
  height?: number;
  /** Defaults to --chart-1. Pass --success / --danger to encode direction. */
  color?: string;
  area?: boolean;
  /** A dot on the final point, so the eye lands on "now" */
  showEnd?: boolean;
  style?: React.CSSProperties;
}

export declare function Sparkline(props: SparklineProps): React.ReactElement;
