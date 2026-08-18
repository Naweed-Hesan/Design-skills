import * as React from 'react';

/** A person. Falls back to initials on a colour derived from the name. */
export interface AvatarProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'> {
  /** Used for initials, the colour, and the accessible name. Always pass it. */
  name?: string;
  /** Photo URL. Without it, initials are used. */
  src?: string;
  /** A named step, or an exact pixel size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** A presence dot in the corner */
  status?: 'online' | 'busy' | 'away';
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): React.ReactElement;

export interface AvatarGroupProps {
  /** Names, or { name, src } objects */
  people: Array<string | { name: string; src?: string }>;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
  /** How many to show before collapsing the rest into "+n" */
  max?: number;
  style?: React.CSSProperties;
}

export declare function AvatarGroup(props: AvatarGroupProps): React.ReactElement;
