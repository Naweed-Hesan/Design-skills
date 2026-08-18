import React from 'react';

const TONES = {
  info:    { bg: 'var(--info-soft)', fg: 'var(--info)', icon: 'M8 11V7.6M8 5h.01' },
  success: { bg: 'var(--success-soft)', fg: 'var(--success)', icon: 'M5.4 8.2l1.9 1.9 3.6-4' },
  warning: { bg: 'var(--warning-soft)', fg: 'var(--warning)', icon: 'M8 5v3.4M8 11h.01' },
  danger:  { bg: 'var(--danger-soft)', fg: 'var(--danger)', icon: 'M6.2 6.2l3.6 3.6M9.8 6.2l-3.6 3.6' },
  neutral: { bg: 'var(--surface-sunk)', fg: 'var(--text-tertiary)', icon: 'M8 11V7.6M8 5h.01' },
};

export function Banner({ title, children, tone = 'info', action, onDismiss, style }) {
  const t = TONES[tone] || TONES.info;

  return (
    <div
      role={tone === 'danger' ? 'alert' : 'status'}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        padding: '11px 12px',
        borderRadius: 'var(--radius-control)',
        background: t.bg,
        ...style,
      }}
    >
      <svg className="ds-icon" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"
           style={{ color: t.fg, marginTop: 1, flex: 'none' }}>
        <circle cx="8" cy="8" r="5.6" /><path d={t.icon} />
      </svg>

      <div style={{ flex: 1, minWidth: 0 }}>
        {title ? (
          <div style={{ fontSize: 12.5, fontWeight: 'var(--weight-medium)', color: 'var(--text-primary)' }}>
            {title}
          </div>
        ) : null}
        {children ? (
          <div style={{ marginTop: title ? 3 : 0, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {children}
          </div>
        ) : null}
      </div>

      {action ? <div style={{ flex: 'none', marginTop: -1 }}>{action}</div> : null}

      {onDismiss ? (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            width: 20, height: 20, flex: 'none', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: 0, borderRadius: 'var(--radius-inset)',
            background: 'transparent', color: 'var(--text-tertiary)', cursor: 'pointer',
          }}
        >
          <svg className="ds-icon" width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
