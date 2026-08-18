import React from 'react';

export function EmptyState({ icon, title, description, action, compact = false, style }) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center',
        padding: compact ? '28px 20px' : '56px 24px',
        gap: 3,
        ...style,
      }}
    >
      {icon ? (
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: compact ? 34 : 42, height: compact ? 34 : 42,
          marginBottom: 10,
          borderRadius: 'var(--radius-control)',
          background: 'var(--surface-sunk)',
          color: 'var(--text-tertiary)',
        }}>{icon}</span>
      ) : null}

      <h4 style={{
        fontSize: compact ? 13 : 'var(--text-h4-size)',
        lineHeight: 1.35,
        letterSpacing: 'var(--text-h4-track)',
        color: 'var(--text-primary)',
      }}>{title}</h4>

      {description ? (
        <p style={{
          maxWidth: 340, marginTop: 4,
          fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-tertiary)',
        }}>{description}</p>
      ) : null}

      {action ? <div style={{ marginTop: 14 }}>{action}</div> : null}
    </div>
  );
}
