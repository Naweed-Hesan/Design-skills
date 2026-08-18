import * as React from 'react';

export interface LightboxField {
  label: React.ReactNode;
  value: React.ReactNode;
  /** Mono, for dimensions, sizes, hex values and ids */
  mono?: boolean;
}

/** One item at full size, with its metadata.
 *
 * @startingPoint section="Media" subtitle="Media viewer with metadata sidebar" viewport="700x400"
 */
export interface LightboxProps {
  open: boolean;
  src: string;
  alt?: string;
  title?: React.ReactNode;
  /** The metadata list in the sidebar. Omit the sidebar by passing none. */
  fields?: LightboxField[];
  actions?: React.ReactNode;
  /** Called by Escape, the scrim, and the close control */
  onClose?: () => void;
  /** Wire both to enable arrow-key navigation through the set */
  onPrev?: () => void;
  onNext?: () => void;
  style?: React.CSSProperties;
}

export declare function Lightbox(props: LightboxProps): React.ReactElement | null;
