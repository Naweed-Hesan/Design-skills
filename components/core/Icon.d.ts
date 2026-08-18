import * as React from 'react';

/**
 * A line icon from the system's inline set. No CDN, no dependency.
 *
 * @startingPoint section="Core" subtitle="The full icon set at every size" viewport="700x220"
 */
export interface IconProps extends Omit<React.SVGAttributes<SVGElement>, 'name'> {
  /** Icon name — see ICON_NAMES. An unknown name renders a blank box of the same size. */
  name: string;
  /** Rendered square size in px. 13–15 inside controls, 18–22 in empty states. */
  size?: number;
  /** Stroke width. 1.5 is the system value — do not change it per-icon. */
  strokeWidth?: number;
  style?: React.CSSProperties;
}

export declare function Icon(props: IconProps): React.ReactElement;

/** Every available icon name. */
export declare const ICON_NAMES: string[];
