import * as React from 'react';

/** What sits where content would be, when there is none. */
export interface EmptyStateProps {
  /** A line icon at 18–22px. Optional — a good title often carries it alone. */
  icon?: React.ReactNode;
  /** Says what goes here. Not "No data". */
  title: React.ReactNode;
  /** One sentence on how something gets here */
  description?: React.ReactNode;
  /** The button that puts something here */
  action?: React.ReactNode;
  /** Tighter padding, for inside a card or a table body */
  compact?: boolean;
  style?: React.CSSProperties;
}

export declare function EmptyState(props: EmptyStateProps): React.ReactElement;
