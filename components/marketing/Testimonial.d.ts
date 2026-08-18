import * as React from 'react';

/** Someone else's words about the product. */
export interface TestimonialProps {
  /** Their words. No decorative quote marks — the blockquote is the semantics. */
  quote: React.ReactNode;
  /** A real name. An anonymous testimonial persuades nobody. */
  name: React.ReactNode;
  /** Role and company — where the credibility actually comes from */
  role?: React.ReactNode;
  avatar?: React.ReactNode;
  /** Their company's logo, right-aligned and faded */
  logo?: React.ReactNode;
  /** lg is for a single feature quote; md for a row of three */
  size?: 'md' | 'lg';
  style?: React.CSSProperties;
}

export declare function Testimonial(props: TestimonialProps): React.ReactElement;
