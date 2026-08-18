import * as React from 'react';

/** Multi-line text entry. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value' | 'style'> {
  value?: string;
  /** Receives the string value directly, plus the raw event as a second argument */
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  /** Starting height in rows. Ignored visually once autoGrow takes over. */
  rows?: number;
  invalid?: boolean;
  disabled?: boolean;
  maxLength?: number;
  /** Shows "n / max" beneath, turning amber past 90% */
  showCount?: boolean;
  /** Grows with content instead of scrolling. Disables the resize handle. */
  autoGrow?: boolean;
  style?: React.CSSProperties;
}

export declare function Textarea(props: TextareaProps): React.ReactElement;
