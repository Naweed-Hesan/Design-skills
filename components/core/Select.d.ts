import * as React from 'react';

/** A native select with the system's chrome. */
export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value' | 'size' | 'style'> {
  value?: string;
  /** Receives the string value directly, plus the raw event as a second argument */
  onChange?: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Plain strings, or { value, label } when the two differ */
  options: Array<string | SelectOption>;
  /** Shown when nothing is selected. Rendered as a disabled first option. */
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  invalid?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export declare function Select(props: SelectProps): React.ReactElement;
