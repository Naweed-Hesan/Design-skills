import React from 'react';

const TONES = {
  neutral: { icon: null, color: 'var(--text-tertiary)' },
  success: { icon: 'M5.4 8.2l1.9 1.9 3.6-4', color: 'var(--success)' },
  danger:  { icon: 'M6.2 6.2l3.6 3.6M9.8 6.2l-3.6 3.6', color: 'var(--danger)' },
  warning: { icon: 'M8 5v3.4M8 11h.01', color: 'var(--warning)' },
};

export function Toast({ message, description, tone = 'neutral', action, onDismiss, style }) {
  const t = TONES[tone] || TONES.neutral;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 10,
        minWidth: 260, maxWidth: 400,
        padding: '11px 12px',
        borderRadius: 'var(--radius-control)',
        background: 'var(--surface-overlay)',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-popover)',
        animation: 'ds-pop var(--duration-base) var(--ease)',
        ...style,
      }}
    >
      {t.icon ? (
        <svg className="ds-icon" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true"
             style={{ color: t.color, marginTop: 1 }}>
          <circle cx="8" cy="8" r="5.6" /><path d={t.icon} />
        </svg>
      ) : null}

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12.5, color: 'var(--text-primary)' }}>{message}</div>
        {description ? (
          <div style={{ marginTop: 2, fontSize: 11.5, color: 'var(--text-tertiary)', lineHeight: 1.45 }}>
            {description}
          </div>
        ) : null}
      </div>

      {action ? <div style={{ flex: 'none' }}>{action}</div> : null}

      {onDismiss ? (
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            width: 20, height: 20, flex: 'none', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: 0, borderRadius: 'var(--radius-inset)',
            background: 'transparent', color: 'var(--text-disabled)', cursor: 'pointer',
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

/** Fixed stack in a corner. Render one of these near the root. */
export function ToastStack({ toasts = [], onDismiss, position = 'bottom-right' }) {
  const [v, h] = position.split('-');
  return (
    <div
      style={{
        position: 'fixed', zIndex: 60,
        [v]: 16, [h]: 16,
        display: 'flex', flexDirection: v === 'top' ? 'column' : 'column-reverse',
        gap: 8,
        pointerEvents: 'none',
      }}
    >
      {toasts.map((t) => (
        <div key={t.id} style={{ pointerEvents: 'auto' }}>
          <Toast {...t} onDismiss={() => onDismiss && onDismiss(t.id)} />
        </div>
      ))}
    </div>
  );
}
