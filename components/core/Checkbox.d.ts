import * as React from 'react';

/** A box that is checked or not. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'style'> {
  checked?: boolean;
  /** Receives the boolean directly, plus the raw event as a second argument */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Clicking the label toggles the box — always provide one unless it is in a table cell */
  label?: React.ReactNode;
  /** A second line under the label, for a consequence that is not obvious */
  description?: React.ReactNode;
  /** Partial selection, for a parent whose children are mixed. Draws a dash. */
  indeterminate?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): React.ReactElement;
