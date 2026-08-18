import React from 'react';

export function Card({
  title, subtitle, actions, footer, children,
  padding = 16, headerPadding, elevation = 'md', inset = false, style, bodyStyle, ...rest
}) {
  const SHADOWS = { none: 'none', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)' };

  /* The header and footer keep their own padding regardless of `padding`,
     which exists so the BODY can go edge-to-edge for tables and media.
     Zeroing the chrome too would jam the title into the rounded corner. */
  const chrome = headerPadding !== undefined ? headerPadding : padding || 16;

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        borderRadius: 'var(--radius-panel)',
        background: inset ? 'var(--surface-subtle)' : 'var(--surface-raised)',
        boxShadow: inset ? 'none' : SHADOWS[elevation] || SHADOWS.md,
        border: inset ? '1px solid var(--border-subtle)' : 'none',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      {title || actions ? (
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: `${chrome}px ${chrome}px ${subtitle ? 12 : 13}px`,
            borderBottom: children ? '1px solid var(--border-subtle)' : 'none',
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            {title ? (
              <h3 style={{
                fontSize: 'var(--text-title-size)',
                fontWeight: 'var(--weight-bold)',
                letterSpacing: 'var(--text-title-track)',
                color: 'var(--text-primary)',
              }}>{title}</h3>
            ) : null}
            {subtitle ? (
              <p style={{ marginTop: 3, fontSize: 11.5, color: 'var(--text-tertiary)' }}>{subtitle}</p>
            ) : null}
          </div>
          {actions ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 'none' }}>{actions}</div>
          ) : null}
        </header>
      ) : null}

      {children ? (
        <div style={{ flex: 1, minWidth: 0, padding, ...bodyStyle }}>{children}</div>
      ) : null}

      {footer ? (
        <footer style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8,
          padding: `12px ${chrome}px`,
          borderTop: '1px solid var(--border-subtle)',
          background: 'var(--surface-subtle)',
        }}>{footer}</footer>
      ) : null}
    </section>
  );
}
