import * as React from 'react';

export interface Feature {
  /** A line icon at 18–20px */
  icon?: React.ReactNode;
  /** What it does, as a short noun phrase */
  title: React.ReactNode;
  /** One or two sentences on why it matters */
  description?: React.ReactNode;
  /** An optional "Learn more" */
  link?: React.ReactNode;
}

/** A row of capabilities. */
export interface FeatureGridProps {
  features: Feature[];
  /** A hint — the grid uses auto-fit, so it reflows on its own */
  columns?: number;
  /** plain = open on the page · card = each feature on its own raised surface */
  variant?: 'plain' | 'card';
  style?: React.CSSProperties;
}

export declare function FeatureGrid(props: FeatureGridProps): React.ReactElement;
