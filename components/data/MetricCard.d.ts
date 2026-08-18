import * as React from 'react';

/** One number, its movement, and its shape.
 *
 * @startingPoint section="Analytics" subtitle="KPI tile with delta and sparkline" viewport="700x160"
 */
export interface MetricCardProps {
  /** What the number is. Tertiary and small — the number is the headline. */
  label: React.ReactNode;
  /** Pre-formatted. Pass "2,481" or "$12.4k", not a raw float. */
  value: React.ReactNode;
  /** Percentage change. Sign drives the arrow and the colour. */
  delta?: number;
  /** What the delta is measured against — "vs last week". Without it a delta is meaningless. */
  deltaLabel?: React.ReactNode;
  /** A <Sparkline /> */
  sparkline?: React.ReactNode;
  icon?: React.ReactNode;
  /** auto = up is good · positive/negative = invert · neutral = no colour.
   *  Set this for metrics where down is good, like error rate or cost. */
  tone?: 'auto' | 'positive' | 'negative' | 'neutral';
  style?: React.CSSProperties;
}

export declare function MetricCard(props: MetricCardProps): React.ReactElement;
