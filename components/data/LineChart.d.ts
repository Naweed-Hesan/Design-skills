import * as React from 'react';

export interface ChartSeries {
  name?: string;
  data: number[];
  /** Overrides the automatic --chart-n assignment. Rarely needed. */
  color?: string;
}

/** A value over time.
 *
 * @startingPoint section="Analytics" subtitle="Trend line with grid, axis and hover readout" viewport="700x300"
 */
export interface LineChartProps {
  /** One series per line. A bare number[] is accepted for the single-series case. */
  series: Array<ChartSeries | number[]>;
  /** X-axis labels, thinned automatically to fit the width */
  labels?: string[];
  height?: number;
  /** Curved rather than straight segments. Turn off for sparse or spiky data. */
  smooth?: boolean;
  /** Gradient fill beneath the line. Only applied when there is a single series. */
  area?: boolean;
  showGrid?: boolean;
  showAxis?: boolean;
  /** Formats axis ticks and the hover readout — units, currency, compact notation */
  formatValue?: (value: number) => string;
  style?: React.CSSProperties;
}

export declare function LineChart(props: LineChartProps): React.ReactElement;
