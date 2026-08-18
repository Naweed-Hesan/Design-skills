import * as React from 'react';

/**
 * The system's standard action control.
 *
 * @startingPoint section="Core" subtitle="Action buttons in every tone and size" viewport="700x180"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children?: React.ReactNode;
  /** primary = filled accent · secondary = bordered · ghost = chromeless · danger = destructive · accentSoft = tinted, marks active */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'accentSoft';
  /** Maps to --control-sm/md/lg, so density is set by the brand layer */
  size?: 'sm' | 'md' | 'lg';
  /** Line icon rendered before the label */
  icon?: React.ReactNode;
  /** Line icon rendered after the label — use for "next" and external links, not decoration */
  iconAfter?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Swaps the leading icon for a spinner and blocks clicks */
  loading?: boolean;
  style?: React.CSSProperties;
}

export declare function Button(props: ButtonProps): React.ReactElement;
