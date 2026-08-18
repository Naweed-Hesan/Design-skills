import React from 'react';

export function Toolbar({ left, center, right, dense = false, bordered = true, style }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: dense ? 40 : 'var(--topbar-height)',
        flex: 'none',
        padding: '0 12px',
        borderBottom: bordered ? '1px solid var(--border-subtle)' : 'none',
        background: 'var(--surface-raised)',
        ...style,
      }}
    >
      {left ? <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>{left}</div> : null}
      {center ? <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, minWidth: 0 }}>{center}</div> : <div style={{ flex: 1 }} />}
      {right ? <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 'none' }}>{right}</div> : null}
    </div>
  );
}
