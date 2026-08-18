import * as React from 'react';

/** A square control carrying only an icon. The label is required — it becomes the
 *  accessible name and the tooltip. */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** The icon element. Its size is set automatically from `size` unless you pass one. */
  icon: React.ReactNode;
  /** Required. Names the control for screen readers and shows as its title on hover. */
  label: string;
  /** plain = chromeless · bordered = reads as a control at rest */
  variant?: 'plain' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  /** Tints the control with the accent to show it is the selected option in a group */
  active?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export declare function IconButton(props: IconButtonProps): React.ReactElement;
