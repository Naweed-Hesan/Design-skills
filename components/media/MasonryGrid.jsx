import React from 'react';

export function MasonryGrid({ children, columns = 4, gap, minColumnWidth, style }) {
  const g = gap !== undefined ? gap : 'var(--grid-gap)';

  /* CSS columns rather than grid: it packs by height without measuring, so
     items of unknown aspect ratio flow without a layout pass. */
  return (
    <div
      style={{
        columnCount: minColumnWidth ? undefined : columns,
        columnWidth: minColumnWidth || undefined,
        columnGap: g,
        ...style,
      }}
    >
      {React.Children.map(children, (child, i) => (
        <div key={i} style={{ breakInside: 'avoid', marginBottom: g }}>{child}</div>
      ))}
    </div>
  );
}
