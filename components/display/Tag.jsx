import React from 'react';

export function Tag({ children, onRemove, onClick, active = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = Boolean(onClick);

  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        height: 22, padding: onRemove ? '0 5px 0 9px' : '0 9px',
        borderRadius: 'var(--radius-chip)',
        border: `1px solid ${active ? 'transparent' : 'var(--border)'}`,
        background: active ? 'var(--accent-soft)' : hover && interactive ? 'var(--surface-sunk)' : 'transparent',
        color: active ? 'var(--accent-text)' : 'var(--text-secondary)',
        fontSize: 11.5, lineHeight: 1, whiteSpace: 'nowrap',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'var(--transition-control)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          aria-label={`Remove ${typeof children === 'string' ? children : 'tag'}`}
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{
            width: 15, height: 15, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 0, border: 0, borderRadius: 'var(--radius-inset)',
            background: 'transparent', color: 'var(--text-tertiary)', cursor: 'pointer',
          }}
        >
          <svg className="ds-icon" width="10" height="10" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
          </svg>
        </button>
      ) : null}
    </span>
  );
}
