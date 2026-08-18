import * as React from 'react';

/** Single-line text entry.
 *
 * @startingPoint section="Core" subtitle="Text fields with icons, suffixes and states" viewport="700x160"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'size' | 'style'> {
  value?: string;
  /** Receives the string value directly, plus the raw event as a second argument */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  /** Line icon shown inside the field, before the text */
  icon?: React.ReactNode;
  /** Trailing text — a unit, a count, a character limit */
  suffix?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  /** Red border. Pair with an error message from Field — colour alone is not a message. */
  invalid?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Mono face with tabular figures, for ids, hex values and numbers */
  mono?: boolean;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
}

export declare function Input(props: InputProps): React.ReactElement;
