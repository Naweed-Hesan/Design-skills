import React from 'react';

const STATES = {
  draft:     { label: 'Draft',     tone: 'neutral' },
  review:    { label: 'In review', tone: 'warning' },
  scheduled: { label: 'Scheduled', tone: 'info' },
  published: { label: 'Published', tone: 'success' },
  archived:  { label: 'Archived',  tone: 'neutral' },
  failed:    { label: 'Failed',    tone: 'danger' },
};

const TONES = {
  neutral: { fg: 'var(--text-tertiary)', bg: 'var(--surface-sunk)' },
  success: { fg: 'var(--success)', bg: 'var(--success-soft)' },
  warning: { fg: 'var(--warning)', bg: 'var(--warning-soft)' },
  danger:  { fg: 'var(--danger)', bg: 'var(--danger-soft)' },
  info:    { fg: 'var(--info)', bg: 'var(--info-soft)' },
};

export function StatusPill({ status, label, tone, style, ...rest }) {
  const preset = STATES[status] || {};
  const t = TONES[tone || preset.tone || 'neutral'];

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        height: 20, padding: '0 8px 0 6px',
        borderRadius: 'var(--radius-pill)',
        background: t.bg, color: t.fg,
        fontSize: 11.5, lineHeight: 1, whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{
        width: 5, height: 5, borderRadius: '50%', background: 'currentColor', flex: 'none',
      }} />
      {label || preset.label || status}
    </span>
  );
}
