import * as React from 'react';

/** One item on a media wall. */
export interface MediaCardProps {
  src: string;
  /** Falls back to `title`. Pass "" only for genuinely decorative imagery. */
  alt?: string;
  /** Shown on the hover overlay, never on the wall at rest */
  title?: React.ReactNode;
  /** Secondary line on the overlay, in mono — dimensions, size, source */
  meta?: React.ReactNode;
  tags?: string[];
  selected?: boolean;
  onClick?: () => void;
  /** Adds the selection checkbox. Omit where multi-select is not offered. */
  onSelect?: () => void;
  /** Controls revealed on hover, top right */
  actions?: React.ReactNode;
  /** Force an aspect ratio, e.g. "4/3". Omit to keep the image's own — which is
   *  what makes a masonry wall work. */
  ratio?: string;
  style?: React.CSSProperties;
}

export declare function MediaCard(props: MediaCardProps): React.ReactElement;
