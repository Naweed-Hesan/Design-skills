import * as React from 'react';

/** A wall of items at their natural aspect ratios.
 *
 * @startingPoint section="Media" subtitle="Tight masonry wall" viewport="700x400"
 */
export interface MasonryGridProps {
  children?: React.ReactNode;
  /** Fixed column count. Ignored when minColumnWidth is set. */
  columns?: number;
  /** Gutter. Defaults to --grid-gap. Tight gutters make the wall read as one surface. */
  gap?: number | string;
  /** Responsive alternative to `columns` — columns are added as width allows */
  minColumnWidth?: number | string;
  style?: React.CSSProperties;
}

export declare function MasonryGrid(props: MasonryGridProps): React.ReactElement;
