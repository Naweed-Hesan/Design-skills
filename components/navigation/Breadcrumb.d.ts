import * as React from 'react';

export interface BreadcrumbItem {
  value: string;
  label: React.ReactNode;
}

/** Where you are in a hierarchy, and the way back up. */
export interface BreadcrumbProps {
  /** Root first, current page last. The last item renders as text, not a link. */
  items: BreadcrumbItem[];
  onNavigate?: (value: string, item: BreadcrumbItem) => void;
  /** Past this many, the middle collapses to an ellipsis with a title attribute */
  maxItems?: number;
  style?: React.CSSProperties;
}

export declare function Breadcrumb(props: BreadcrumbProps): React.ReactElement;
