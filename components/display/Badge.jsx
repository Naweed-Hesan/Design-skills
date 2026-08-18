import React from 'react';

const TONES = {
  neutral: { background: 'var(--surface-sunk)', color: 'var(--text-secondary)' },
  accent:  { background: 'var(--accent-soft)', color: 'var(--accent-text)' },
  success: { background: 'var(--success-soft)', color: 'var(--success)' },
  warning: { background: 'var(--warning-soft)', color: 'var(--warning)' },
  danger:  { background: 'var(--danger-soft)', color: 'var(--danger)' },
  info:    { background: 'var(--info-soft)', color: 'var(--info)' },
};

export function Badge({ children, tone = 'neutral', dot = false, icon, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        height: 20, padding: '0 8px',
        borderRadius: 'var(--radius-chip)',
        fontSize: 11.5, lineHeight: 1, whiteSpace: 'nowrap',
        ...t,
        ...style,
      }}
      {...rest}
    >
      {dot ? (
        <span aria-hidden="true" style={{
          width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flex: 'none',
        }} />
      ) : icon}
      {children}
    </span>
  );
}
