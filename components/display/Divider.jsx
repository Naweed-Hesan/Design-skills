import React from 'react';

export function Divider({ label, vertical = false, spacing = 0, strong = false, style }) {
  const line = strong ? 'var(--border)' : 'var(--border-subtle)';

  if (vertical) {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        style={{
          width: 1, alignSelf: 'stretch', flex: 'none',
          background: line, margin: `0 ${spacing}px`,
          ...style,
        }}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        style={{ display: 'flex', alignItems: 'center', gap: 10, margin: `${spacing}px 0`, ...style }}
      >
        <span style={{ flex: 1, height: 1, background: line }} />
        <span style={{ fontSize: 'var(--text-label-size)', color: 'var(--text-tertiary)' }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: line }} />
      </div>
    );
  }

  return (
    <hr
      style={{
        border: 0, height: 1, background: line,
        margin: `${spacing}px 0`, width: '100%',
        ...style,
      }}
    />
  );
}
