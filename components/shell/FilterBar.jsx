import React from 'react';

export function FilterBar({ children, active = [], onClear, resultLabel, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 9, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        {children}
        {resultLabel ? (
          <span style={{ marginLeft: 'auto', fontSize: 11.5, color: 'var(--text-tertiary)' }}>
            {resultLabel}
          </span>
        ) : null}
      </div>

      {active.length ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          {active.map((f, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                height: 22, padding: '0 5px 0 9px',
                borderRadius: 'var(--radius-chip)',
                background: 'var(--accent-soft)',
                color: 'var(--accent-text)',
                fontSize: 11.5, whiteSpace: 'nowrap',
              }}
            >
              {f.label}
              {f.onRemove ? (
                <button
                  onClick={f.onRemove}
                  aria-label={`Remove filter ${typeof f.label === 'string' ? f.label : ''}`}
                  style={{
                    width: 15, height: 15, padding: 0, border: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 'var(--radius-inset)',
                    background: 'transparent', color: 'currentColor', cursor: 'pointer',
                  }}
                >
                  <svg className="ds-icon" width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
                  </svg>
                </button>
              ) : null}
            </span>
          ))}

          {onClear ? (
            <button
              onClick={onClear}
              style={{
                border: 0, background: 'transparent', padding: '0 4px',
                fontSize: 11.5, color: 'var(--text-tertiary)', cursor: 'pointer',
                textDecoration: 'underline', textUnderlineOffset: 2,
              }}
            >Clear all</button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
