import * as React from 'react';

/** One question and its answer, in a stack. */
export interface FAQItemProps {
  /** The question as someone would actually ask it */
  question: React.ReactNode;
  /** The answer */
  children?: React.ReactNode;
  /** Controlled open state. Omit to let the item manage its own. */
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  style?: React.CSSProperties;
}

export declare function FAQItem(props: FAQItemProps): React.ReactElement;
