import React from 'react';

export function PageHeader({
  title, subtitle, breadcrumb, actions, tabs, meta, sticky = false, style,
}) {
  return (
    <header
      style={{
        display: 'flex', flexDirection: 'column',
        flex: 'none',
        padding: '0 0 0',
        background: 'var(--surface-raised)',
        position: sticky ? 'sticky' : undefined,
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 10 : undefined,
        ...style,
      }}
    >
      {breadcrumb ? <div style={{ padding: '12px 16px 0' }}>{breadcrumb}</div> : null}

      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 16,
        padding: `${breadcrumb ? 8 : 15}px 16px ${tabs ? 11 : 15}px`,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
            <h1 style={{
              fontSize: 'var(--text-h3-size)',
              lineHeight: 'var(--text-h3-line)',
              letterSpacing: 'var(--text-h3-track)',
              color: 'var(--text-primary)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              minWidth: 0,
            }}>{title}</h1>
            {meta ? <span style={{ flex: 'none', display: 'flex', gap: 6 }}>{meta}</span> : null}
          </div>
          {subtitle ? (
            <p style={{ marginTop: 4, fontSize: 12.5, color: 'var(--text-tertiary)' }}>{subtitle}</p>
          ) : null}
        </div>

        {actions ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, flex: 'none' }}>{actions}</div>
        ) : null}
      </div>

      {tabs ? <div style={{ padding: '0 16px' }}>{tabs}</div> : null}
    </header>
  );
}
