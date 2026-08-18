import React from 'react';

export function Tabs({ items = [], value, onChange, size = 'md', style }) {
  const norm = items.map((t) => (typeof t === 'string' ? { value: t, label: t } : t));
  const height = size === 'sm' ? 30 : 36;

  return (
    <div
      role="tablist"
      style={{
        display: 'flex', alignItems: 'center', gap: 2,
        borderBottom: '1px solid var(--border-subtle)',
        ...style,
      }}
    >
      {norm.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange && onChange(t.value)}
            style={{
              position: 'relative',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              height, padding: '0 10px',
              border: 0, background: 'transparent',
              color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontSize: 12.5,
              fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
              cursor: 'pointer',
              transition: 'color var(--duration-fast) var(--ease)',
            }}
          >
            {t.icon}
            {t.label}
            {t.count !== undefined ? (
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 10.5,
                color: active ? 'var(--accent-text)' : 'var(--text-disabled)',
              }}>{t.count}</span>
            ) : null}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute', left: 6, right: 6, bottom: -1, height: 2,
                borderRadius: '2px 2px 0 0',
                background: active ? 'var(--accent)' : 'transparent',
                transition: 'background var(--duration-fast) var(--ease)',
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
