import * as React from 'react';

export interface ActiveFilter {
  label: React.ReactNode;
  onRemove?: () => void;
}

/** Filter controls, plus what is currently applied. */
export interface FilterBarProps {
  /** The controls — Input, Select, SegmentedControl */
  children?: React.ReactNode;
  /** Applied filters, shown as removable chips beneath the controls */
  active?: ActiveFilter[];
  /** Renders "Clear all". Only shown when something is active. */
  onClear?: () => void;
  /** The count, right-aligned — "184 of 2,481". Update it as filters change. */
  resultLabel?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function FilterBar(props: FilterBarProps): React.ReactElement;
