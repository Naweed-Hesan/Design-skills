import * as React from 'react';

/** Label, control, and one line of hint or error beneath. */
export interface FieldProps {
  label?: React.ReactNode;
  /** Guidance shown when there is no error. Replaced by `error` when one appears. */
  hint?: React.ReactNode;
  /** The error message. Say what is wrong and what to do — not "Invalid input". */
  error?: React.ReactNode;
  /** Draws a red asterisk. Only use it if some fields really are optional. */
  required?: boolean;
  /** Matches the control's id, so clicking the label focuses it */
  htmlFor?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export declare function Field(props: FieldProps): React.ReactElement;

/** Label left, control right, hairline beneath. For settings and wide forms. */
export interface FieldRowProps {
  label: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  children: React.ReactNode;
  /** Width of the label column in px */
  labelWidth?: number;
  style?: React.CSSProperties;
}

export declare function FieldRow(props: FieldRowProps): React.ReactElement;
