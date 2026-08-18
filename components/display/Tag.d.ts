import * as React from 'react';

/** A keyword someone applied. Bordered, not filled — that is what separates it from Badge. */
export interface TagProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'onClick'> {
  children?: React.ReactNode;
  /** Adds a remove button. Omit for read-only tags. */
  onRemove?: (event: React.MouseEvent) => void;
  /** Makes the tag clickable — for filtering by it */
  onClick?: (event: React.MouseEvent) => void;
  /** Accent tint, for a tag currently filtering the view */
  active?: boolean;
  style?: React.CSSProperties;
}

export declare function Tag(props: TagProps): React.ReactElement;
