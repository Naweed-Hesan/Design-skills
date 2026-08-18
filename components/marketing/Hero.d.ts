import * as React from 'react';

/** The top of a marketing page.
 *
 * @startingPoint section="Marketing" subtitle="Hero with lead, actions and media" viewport="1200x560"
 */
export interface HeroProps {
  /** A short accent line above the title. Optional and usually skippable. */
  eyebrow?: React.ReactNode;
  /** What the product does, in a sentence someone could repeat */
  title: React.ReactNode;
  /** One or two sentences. Capped at --prose-max regardless of page width. */
  lead?: React.ReactNode;
  /** One primary button and at most one secondary */
  actions?: React.ReactNode;
  /** Small print under the actions — "No card required" */
  note?: React.ReactNode;
  /** A screenshot or illustration. Passing it switches to a two-column layout. */
  media?: React.ReactNode;
  /** Ignored when `media` is set — a split hero is always left-aligned */
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}

export declare function Hero(props: HeroProps): React.ReactElement;
