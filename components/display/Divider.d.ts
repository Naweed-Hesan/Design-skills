import * as React from 'react';

/** A hairline rule. */
export interface DividerProps {
  /** Centres a label in the rule — "or", "Today", "Older" */
  label?: React.ReactNode;
  /** Vertical, for separating controls in a toolbar. Stretches to its parent's height. */
  vertical?: boolean;
  /** Margin on the cross axis, in px */
  spacing?: number;
  /** --border instead of --border-subtle, for a rule that needs to register */
  strong?: boolean;
  style?: React.CSSProperties;
}

export declare function Divider(props: DividerProps): React.ReactElement;
