import * as React from 'react';

/** A workflow state, with a dot so it is not carried by colour alone. */
export interface StatusPillProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** A known state — draft, review, scheduled, published, archived, failed —
   *  which supplies both the label and the tone. */
  status?: 'draft' | 'review' | 'scheduled' | 'published' | 'archived' | 'failed' | string;
  /** Overrides the preset label */
  label?: React.ReactNode;
  /** Overrides the preset tone */
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  style?: React.CSSProperties;
}

export declare function StatusPill(props: StatusPillProps): React.ReactElement;
