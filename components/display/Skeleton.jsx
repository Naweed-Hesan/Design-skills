import React from 'react';

export function Skeleton({ width = '100%', height = 12, radius, circle = false, style, ...rest }) {
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'block',
        width: circle ? height : width,
        height,
        flex: 'none',
        borderRadius: circle ? '50%' : radius || 'var(--radius-inset)',
        background: 'linear-gradient(90deg, var(--surface-sunk) 25%, var(--surface-subtle) 37%, var(--surface-sunk) 63%)',
        backgroundSize: '400% 100%',
        animation: 'ds-shimmer 1.4s var(--ease) infinite',
        ...style,
      }}
      {...rest}
    />
  );
}

/** A few lines of text, the last one short like real text. */
export function SkeletonText({ lines = 3, gap = 8, style }) {
  return (
    <span style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} height={11} width={i === lines - 1 ? '62%' : '100%'} />
      ))}
    </span>
  );
}
