import React from 'react';

const WIDTHS = { sm: 380, md: 480, lg: 640 };

export function Dialog({ open, title, description, children, footer, onClose, size = 'md', style }) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 80,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        background: 'var(--scrim)',
        animation: 'ds-fade var(--duration-fast) var(--ease)',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        style={{
          width: '100%', maxWidth: WIDTHS[size] || WIDTHS.md,
          maxHeight: '100%',
          display: 'flex', flexDirection: 'column',
          borderRadius: 'var(--radius-panel)',
          background: 'var(--surface-overlay)',
          boxShadow: 'var(--shadow-lg)',
          animation: 'ds-pop var(--duration-base) var(--ease)',
          overflow: 'hidden',
          ...style,
        }}
      >
        <header style={{ flex: 'none', padding: '18px 18px 0', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {title ? (
              <h3 style={{
                fontSize: 'var(--text-h4-size)',
                letterSpacing: 'var(--text-h4-track)',
                color: 'var(--text-primary)',
              }}>{title}</h3>
            ) : null}
            {description ? (
              <p style={{ marginTop: 5, fontSize: 12.5, color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
                {description}
              </p>
            ) : null}
          </div>
          {onClose ? (
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 24, height: 24, flex: 'none', padding: 0, marginTop: -2,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 0, borderRadius: 'var(--radius-inset)',
                background: 'transparent', color: 'var(--text-tertiary)', cursor: 'pointer',
              }}
            >
              <svg className="ds-icon" width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
              </svg>
            </button>
          ) : null}
        </header>

        {children ? (
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px 18px' }}>{children}</div>
        ) : <div style={{ height: 16 }} />}

        {footer ? (
          <footer style={{
            flex: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8,
            padding: '13px 18px',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--surface-subtle)',
          }}>{footer}</footer>
        ) : null}
      </div>
    </div>
  );
}
