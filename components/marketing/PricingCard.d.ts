import * as React from 'react';

export interface PricingFeature {
  label: React.ReactNode;
  /** false draws an x in the disabled colour, for an explicit exclusion */
  included?: boolean;
}

/** One plan.
 *
 * @startingPoint section="Marketing" subtitle="Plan cards with feature lists" viewport="700x400"
 */
export interface PricingCardProps {
  name: React.ReactNode;
  /** Pre-formatted — "$24", "Free". Set in tabular figures. */
  price: React.ReactNode;
  /** Defaults to "/mo". Pass "" for one-off or free plans. */
  period?: React.ReactNode;
  /** Who the plan is for, in one sentence */
  description?: React.ReactNode;
  /** Strings, or { label, included } to show an exclusion */
  features?: Array<string | PricingFeature>;
  /** The button. Exactly one per card. */
  action?: React.ReactNode;
  /** Accent border and a heavier shadow. At most one card in a row. */
  featured?: boolean;
  /** A tab on the top edge — "Most popular" */
  badge?: React.ReactNode;
  /** Small print pinned to the bottom, so cards in a row align */
  note?: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function PricingCard(props: PricingCardProps): React.ReactElement;
