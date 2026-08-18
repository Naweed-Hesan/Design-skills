import * as React from 'react';

export interface DonutDatum {
  label: string;
  value: number;
  color?: string;
}

/** Parts of a whole — three or four of them. */
export interface DonutChartProps {
  data: Array<DonutDatum | [string, number]>;
  size?: number;
  /** Ring thickness. Below about 10 the segments stop reading as areas. */
  thickness?: number;
  /** Small text under the centre value */
  centerLabel?: React.ReactNode;
  /** The total, in the hole — the most valuable part of the chart */
  centerValue?: React.ReactNode;
  showLegend?: boolean;
  formatValue?: (value: number) => string;
  style?: React.CSSProperties;
}

export declare function DonutChart(props: DonutChartProps): React.ReactElement;
