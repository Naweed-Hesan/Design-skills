import * as React from 'react';

/** A placeholder in the shape of the content that is loading. */
export interface SkeletonProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'style' | 'width' | 'height'> {
  width?: number | string;
  height?: number | string;
  /** Defaults to --radius-inset. Pass --radius-media for image placeholders. */
  radius?: string;
  /** Square it off into a circle — for avatar placeholders. Uses `height` as the diameter. */
  circle?: boolean;
  style?: React.CSSProperties;
}

export declare function Skeleton(props: SkeletonProps): React.ReactElement;

export interface SkeletonTextProps {
  lines?: number;
  gap?: number;
  style?: React.CSSProperties;
}

/** Several lines, the last one short, the way a real paragraph ends. */
export declare function SkeletonText(props: SkeletonTextProps): React.ReactElement;
