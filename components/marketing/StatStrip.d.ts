import * as React from 'react';

export interface Stat {
  /** Pre-formatted and rounded — "2.4m", "99.9%", "< 40ms" */
  value: React.ReactNode;
  /** What the number counts */
  label: React.ReactNode;
}

/** A row of numbers as proof. */
export interface StatStripProps {
  stats: Stat[];
  align?: 'center' | 'left';
  /** Hairlines between the stats */
  divided?: boolean;
  style?: React.CSSProperties;
}

export declare function StatStrip(props: StatStripProps): React.ReactElement;
