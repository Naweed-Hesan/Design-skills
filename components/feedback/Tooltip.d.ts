import * as React from 'react';

/** A short label on hover or focus. */
export interface TooltipProps {
  /** A few words. Never a sentence, never the only place information appears. */
  label: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  /** Delay in ms before showing. 350 stops tooltips flashing as the pointer crosses a toolbar. */
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Tooltip(props: TooltipProps): React.ReactElement;
