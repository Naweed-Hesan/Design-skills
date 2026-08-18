import * as React from 'react';

/** Page stepping for long lists. */
export interface PaginationProps {
  /** 1-based */
  page: number;
  pageCount: number;
  onChange?: (page: number) => void;
  /** Left-aligned context — "248 files". Renders even when there is only one page. */
  totalLabel?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Pagination(props: PaginationProps): React.ReactElement | null;
