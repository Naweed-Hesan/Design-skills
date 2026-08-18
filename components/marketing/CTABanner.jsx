import React from 'react';

export function CTABanner({ title, description, actions, note, variant = 'accent', style }) {
  const solid = variant === 'accent';

  return (
    <section
      style={{
        display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap',
        maxWidth: 'var(--marketing-max)',
        margin: '0 auto',
        padding: '38px 36px',
        borderRadius: 'var(--radius-panel)',
        background: solid ? 'var(--accent-solid)' : 'var(--surface-raised)',
        border: solid ? 'none' : '1px solid var(--border-subtle)',
        boxShadow: solid ? 'none' : 'var(--shadow-sm)',
        ...style,
      }}
    >
      <div style={{ flex: 1, minWidth: 240 }}>
        <h2 style={{
          fontSize: 'var(--text-h2-size)',
          lineHeight: 'var(--text-h2-line)',
          letterSpacing: 'var(--text-h2-track)',
          color: solid ? 'var(--text-on-accent)' : 'var(--text-primary)',
        }}>{title}</h2>

        {description ? (
          <p style={{
            maxWidth: 'var(--prose-max)', marginTop: 9,
            fontSize: 13.5, lineHeight: 1.55,
            color: solid ? 'var(--text-on-accent)' : 'var(--text-tertiary)',
            opacity: solid ? 0.82 : 1,
          }}>{description}</p>
        ) : null}
      </div>

      <div style={{ flex: 'none' }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{actions}</div>
        {note ? (
          <div style={{
            marginTop: 10, fontSize: 11.5,
            color: solid ? 'var(--text-on-accent)' : 'var(--text-disabled)',
            opacity: solid ? 0.7 : 1,
          }}>{note}</div>
        ) : null}
      </div>
    </section>
  );
}
