import React from 'react';

export function ColorSwatchSet({ colors = [], size = 44, showHex = true, onCopy, columns, style }) {
  const norm = colors.map((c) => (typeof c === 'string' ? { hex: c } : c));

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: columns ? `repeat(${columns}, minmax(0, 1fr))` : `repeat(auto-fill, minmax(${size}px, 1fr))`,
        gap: 8,
        ...style,
      }}
    >
      {norm.map((c, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onCopy && onCopy(c.hex)}
          title={onCopy ? `Copy ${c.hex}` : c.hex}
          style={{
            display: 'block', padding: 0, border: 0, textAlign: 'left',
            background: 'transparent',
            cursor: onCopy ? 'pointer' : 'default',
          }}
        >
          <span style={{
            display: 'block', height: size,
            borderRadius: 'var(--radius-media)',
            background: c.hex,
            boxShadow: 'inset 0 0 0 1px var(--border-subtle)',
          }} />
          {c.name ? (
            <span style={{
              display: 'block', marginTop: 6, fontSize: 11,
              color: 'var(--text-secondary)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{c.name}</span>
          ) : null}
          {showHex ? (
            <span style={{
              display: 'block', marginTop: c.name ? 1 : 6,
              fontFamily: 'var(--font-mono)', fontSize: 10,
              color: 'var(--text-disabled)',
            }}>{String(c.hex).toLowerCase()}</span>
          ) : null}
        </button>
      ))}
    </div>
  );
}
