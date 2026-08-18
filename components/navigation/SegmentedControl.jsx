import React from 'react';

export function SegmentedControl({ options = [], value, onChange, size = 'md', fullWidth = false, style }) {
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const height = size === 'sm' ? 'var(--control-sm)' : 'var(--control-md)';

  return (
    <div
      role="radiogroup"
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        gap: 2, padding: 3,
        borderRadius: 'calc(var(--radius-control) + 3px)',
        background: 'var(--surface-sunk)',
        ...style,
      }}
    >
      {norm.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            role="radio"
            aria-checked={active}
            title={o.label && typeof o.label !== 'string' ? o.title : undefined}
            onClick={() => onChange && onChange(o.value)}
            style={{
              flex: fullWidth ? 1 : 'none',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              height, padding: '0 11px',
              border: 0,
              borderRadius: 'var(--radius-control)',
              background: active ? 'var(--surface-raised)' : 'transparent',
              boxShadow: active ? 'var(--shadow-xs)' : 'none',
              color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontSize: 12,
              fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'var(--transition-control)',
            }}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
