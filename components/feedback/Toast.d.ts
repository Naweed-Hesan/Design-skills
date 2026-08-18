import * as React from 'react';

/** Confirmation that something just happened. */
export interface ToastProps {
  /** What happened, past tense. "Saved to Branding", not "Saving…" */
  message: React.ReactNode;
  description?: React.ReactNode;
  tone?: 'neutral' | 'success' | 'danger' | 'warning';
  /** One action, usually Undo */
  action?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}

export declare function Toast(props: ToastProps): React.ReactElement;

export interface ToastStackProps {
  toasts: Array<ToastProps & { id: string | number }>;
  onDismiss?: (id: string | number) => void;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

/** Fixed-position stack. Render once near the root of the app. */
export declare function ToastStack(props: ToastStackProps): React.ReactElement;
