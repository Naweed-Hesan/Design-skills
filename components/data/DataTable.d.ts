import * as React from 'react';

export interface Column<Row = any> {
  key: string;
  label: React.ReactNode;
  /** Custom cell. Without it, row[key] is rendered. */
  render?: (row: Row) => React.ReactNode;
  width?: number | string;
  /** Right-align numbers so they compare down the column */
  align?: 'left' | 'right' | 'center';
  /** Mono with tabular figures — for anything numeric */
  mono?: boolean;
  /** Tertiary colour, for secondary detail */
  muted?: boolean;
  sortable?: boolean;
}

export interface SortState {
  key: string;
  dir: 'asc' | 'desc';
}

/** Rows of records.
 *
 * @startingPoint section="Admin" subtitle="Sortable, selectable data table" viewport="700x340"
 */
export interface DataTableProps<Row = any> {
  columns: Array<Column<Row>>;
  rows: Row[];
  /** Field name or a function. Falls back to the row index. */
  rowKey?: string | ((row: Row) => string | number);
  sort?: SortState;
  /** You perform the sort — the table only reports the intent */
  onSortChange?: (sort: SortState) => void;
  selectable?: boolean;
  selected?: Array<string | number>;
  onSelectedChange?: (selected: Array<string | number>) => void;
  onRowClick?: (row: Row) => void;
  /** Rendered instead of the table when there are no rows. Pass an <EmptyState compact />. */
  empty?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function DataTable<Row = any>(props: DataTableProps<Row>): React.ReactElement;
