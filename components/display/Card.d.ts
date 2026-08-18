import * as React from 'react';

/** The system's panel. Everything that needs its own surface is one of these.
 *
 * @startingPoint section="Display" subtitle="Panel with header, body and footer" viewport="700x260"
 */
export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title' | 'style'> {
  /** Bold, at body size. Omit for a plain surface with no header. */
  title?: React.ReactNode;
  /** One line under the title */
  subtitle?: React.ReactNode;
  /** Controls in the header, right-aligned. Keep to two or fewer. */
  actions?: React.ReactNode;
  /** A footer bar on a sunk surface — where a form's buttons go */
  footer?: React.ReactNode;
  children?: React.ReactNode;
  /** Body and header padding in px. Drop to 0 for edge-to-edge tables and media. */
  padding?: number;
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** A quieter nested panel: subtle surface, hairline border, no shadow */
  inset?: boolean;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
}

export declare function Card(props: CardProps): React.ReactElement;
