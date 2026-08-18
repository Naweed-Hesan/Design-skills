import * as React from 'react';

export interface ActivityItem {
  id?: string | number;
  /** Who. Rendered in primary colour and medium weight. */
  actor?: React.ReactNode;
  /** What they did — the verb phrase. "published", "invited 3 people to" */
  action: React.ReactNode;
  /** What they did it to. Rendered in primary colour. */
  target?: React.ReactNode;
  /** Relative — "2 hours ago". Put the absolute time in a title attribute. */
  time?: React.ReactNode;
  /** An <Avatar />. Takes precedence over `icon`. */
  avatar?: React.ReactNode;
  /** A line icon, for system events with no person behind them */
  icon?: React.ReactNode;
  /** An inset block under the entry — a comment, a diff, a note */
  detail?: React.ReactNode;
}

export interface ActivityFeedProps {
  items: ActivityItem[];
  /** The connecting line down the gutter */
  showLine?: boolean;
  style?: React.CSSProperties;
}

export declare function ActivityFeed(props: ActivityFeedProps): React.ReactElement;
