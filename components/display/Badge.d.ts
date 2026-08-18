import * as React from 'react';

/** A small label for a state the system assigned. */
export interface BadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  children?: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
  /** A filled dot before the label, for status that reads at a glance in a list */
  dot?: boolean;
  /** A line icon before the label. Ignored when `dot` is set. */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Badge(props: BadgeProps): React.ReactElement;
