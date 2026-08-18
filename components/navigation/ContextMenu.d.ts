import * as React from 'react';

export interface MenuItem {
  value?: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Pre-resolved shortcut text — use resolveKeys(), never a hard-coded glyph */
  shortcut?: string;
  onSelect?: () => void;
  disabled?: boolean;
  /** Red, for the destructive item. At most one per menu, at the bottom. */
  tone?: 'default' | 'danger';
  separator?: boolean;
}

/** A popover menu of actions. Wraps its trigger; you own the open state. */
export interface ContextMenuProps {
  /** Items, or the string "-" for a separator */
  items: Array<MenuItem | '-'>;
  open: boolean;
  /** Called on select, outside click, and Escape */
  onClose?: () => void;
  /** Which edge the menu aligns to */
  anchor?: 'left' | 'right';
  width?: number;
  /** The trigger */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function ContextMenu(props: ContextMenuProps): React.ReactElement;
