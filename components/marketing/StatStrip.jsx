import React from 'react';

export function StatStrip({ stats = [], align = 'center', divided = true, style }) {
  return (
    <div
      style={{
        display: 'flex', flexWrap: 'wrap',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: divided ? 0 : 56,
        maxWidth: 'var(--marketing-max)',
        margin: '0 auto',
        ...style,
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            padding: divided ? '0 40px' : 0,
            borderLeft: divided && i > 0 ? '1px solid var(--border-subtle)' : 'none',
            textAlign: align === 'center' ? 'center' : 'left',
            minWidth: 0,
          }}
        >
          <div style={{
            fontSize: 32, lineHeight: 1.05,
            fontWeight: 'var(--weight-bold)',
            letterSpacing: '-0.032em',
            color: 'var(--text-primary)',
            fontVariantNumeric: 'tabular-nums',
          }}>{s.value}</div>
          <div style={{ marginTop: 6, fontSize: 12.5, color: 'var(--text-tertiary)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
