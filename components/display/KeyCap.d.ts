import * as React from 'react';

/** A keyboard shortcut, resolved for the platform it is being read on.
 *
 * @startingPoint section="Display" subtitle="Shortcuts resolved per platform" viewport="700x140"
 */
export interface KeyCapProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Platform-neutral combo, e.g. "mod+shift+s". Never write a glyph into this. */
  combo: string;
  /** Force a platform. Omit to detect from the browser. */
  platform?: 'mac' | 'windows';
  style?: React.CSSProperties;
}

export declare function KeyCap(props: KeyCapProps): React.ReactElement;

/** The resolver on its own, for menus and tooltips that render their own markup. */
export declare function resolveKeys(combo: string, platform?: 'mac' | 'windows'): string[];
