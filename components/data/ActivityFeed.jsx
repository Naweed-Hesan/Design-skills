import React from 'react';

export function ActivityFeed({ items = [], showLine = true, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <div key={item.id || i} style={{ display: 'flex', gap: 11, minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
              <span style={{
                width: 24, height: 24, marginTop: 2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: item.avatar ? 'transparent' : 'var(--surface-sunk)',
                color: 'var(--text-tertiary)',
                overflow: 'hidden',
              }}>
                {item.avatar || item.icon}
              </span>
              {showLine && !last ? (
                <span style={{ flex: 1, width: 1, background: 'var(--border-subtle)', marginTop: 4 }} />
              ) : null}
            </div>

            <div style={{ flex: 1, minWidth: 0, paddingBottom: last ? 0 : 16 }}>
              <div style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item.actor ? (
                  <span style={{ color: 'var(--text-primary)', fontWeight: 'var(--weight-medium)' }}>{item.actor} </span>
                ) : null}
                {item.action}
                {item.target ? (
                  <span style={{ color: 'var(--text-primary)' }}> {item.target}</span>
                ) : null}
              </div>
              <div style={{ marginTop: 2, fontSize: 11, color: 'var(--text-disabled)' }}>{item.time}</div>
              {item.detail ? (
                <div style={{
                  marginTop: 8, padding: '9px 11px',
                  borderRadius: 'var(--radius-control)',
                  background: 'var(--surface-subtle)',
                  border: '1px solid var(--border-subtle)',
                  fontSize: 12, color: 'var(--text-tertiary)',
                }}>{item.detail}</div>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
