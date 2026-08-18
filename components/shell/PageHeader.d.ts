import * as React from 'react';

/** The top of a page inside an app shell.
 *
 * @startingPoint section="Shell" subtitle="Page title bar with actions and tabs" viewport="700x200"
 */
export interface PageHeaderProps {
  /** The page's name. A noun, not a sentence. */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** A <Breadcrumb /> above the title, for pages more than two levels deep */
  breadcrumb?: React.ReactNode;
  /** Buttons, right-aligned. At most one primary. */
  actions?: React.ReactNode;
  /** A <Tabs /> flush to the header's bottom edge */
  tabs?: React.ReactNode;
  /** Badges or status beside the title */
  meta?: React.ReactNode;
  sticky?: boolean;
  style?: React.CSSProperties;
}

export declare function PageHeader(props: PageHeaderProps): React.ReactElement;
