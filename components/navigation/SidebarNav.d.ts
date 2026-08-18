import * as React from 'react';

export interface SidebarItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** A count at the right edge, in mono. Omit rather than showing 0. */
  count?: number;
}

export interface SidebarSection {
  /** A quiet heading above the group. Sentence case, never caps. */
  label?: React.ReactNode;
  items: SidebarItem[];
}

/** The primary rail of an app shell.
 *
 * @startingPoint section="Navigation" subtitle="Sidebar rail with headings and counts" viewport="700x340"
 */
export interface SidebarNavProps {
  sections: SidebarSection[];
  value: string;
  onChange?: (value: string) => void;
  /** Product name, search — whatever sits above the nav */
  header?: React.ReactNode;
  /** Account, storage, settings — whatever sits at the bottom */
  footer?: React.ReactNode;
  /** Defaults to --sidebar-width */
  width?: number | string;
  style?: React.CSSProperties;
}

export declare function SidebarNav(props: SidebarNavProps): React.ReactElement;
