import * as React from 'react';

/** A row of controls above content. */
export interface ToolbarProps {
  left?: React.ReactNode;
  /** Takes the remaining width. Without it the space is left empty. */
  center?: React.ReactNode;
  right?: React.ReactNode;
  /** 40px instead of --topbar-height */
  dense?: boolean;
  bordered?: boolean;
  style?: React.CSSProperties;
}

export declare function Toolbar(props: ToolbarProps): React.ReactElement;
