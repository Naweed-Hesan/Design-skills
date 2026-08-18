import * as React from 'react';

/** A condition that persists, stated in place. */
export interface BannerProps {
  title?: React.ReactNode;
  /** The explanation. One or two sentences. */
  children?: React.ReactNode;
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  /** The action that resolves the condition */
  action?: React.ReactNode;
  /** Only offer this if dismissing is genuinely allowed — the condition still exists */
  onDismiss?: () => void;
  style?: React.CSSProperties;
}

export declare function Banner(props: BannerProps): React.ReactElement;
