import * as React from 'react';

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** A line icon before the label */
  icon?: React.ReactNode;
  /** A count after the label, in mono. Omit rather than showing 0. */
  count?: number;
}

/** Switching between views of the same subject. */
export interface TabsProps {
  items: Array<string | TabItem>;
  value: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

export declare function Tabs(props: TabsProps): React.ReactElement;
