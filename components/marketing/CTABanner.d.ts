import * as React from 'react';

/** The closing ask at the bottom of a page. */
export interface CTABannerProps {
  /** The ask, as a short imperative or a question */
  title: React.ReactNode;
  description?: React.ReactNode;
  /** One button. On the accent variant it needs to read against the fill —
   *  a light/secondary button, not another accent one. */
  actions?: React.ReactNode;
  note?: React.ReactNode;
  /** accent = filled with --accent-solid · surface = a quiet raised panel */
  variant?: 'accent' | 'surface';
  style?: React.CSSProperties;
}

export declare function CTABanner(props: CTABannerProps): React.ReactElement;
