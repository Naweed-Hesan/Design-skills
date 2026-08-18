import React from 'react';

export function Hero({
  eyebrow, title, lead, actions, media, note, align = 'center', style,
}) {
  const centered = align === 'center' && !media;

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 56,
        maxWidth: 'var(--marketing-max)',
        margin: '0 auto',
        padding: `var(--space-12) var(--space-6)`,
        flexDirection: media ? 'row' : 'column',
        textAlign: centered ? 'center' : 'left',
        ...style,
      }}
    >
      <div style={{
        flex: 1, minWidth: 0,
        maxWidth: centered ? 720 : undefined,
        margin: centered ? '0 auto' : undefined,
      }}>
        {eyebrow ? (
          <div style={{ marginBottom: 14, fontSize: 12.5, color: 'var(--accent-text)' }}>{eyebrow}</div>
        ) : null}

        <h1 style={{
          fontSize: 'var(--text-hero-size)',
          lineHeight: 'var(--text-hero-line)',
          letterSpacing: 'var(--text-hero-track)',
          color: 'var(--text-primary)',
        }}>{title}</h1>

        {lead ? (
          <p style={{
            maxWidth: 'var(--prose-max)',
            margin: centered ? '18px auto 0' : '18px 0 0',
            fontSize: 'var(--text-lead-size)',
            lineHeight: 'var(--text-lead-line)',
            letterSpacing: 'var(--text-lead-track)',
            color: 'var(--text-tertiary)',
          }}>{lead}</p>
        ) : null}

        {actions ? (
          <div style={{
            display: 'flex', gap: 10, marginTop: 30, flexWrap: 'wrap',
            justifyContent: centered ? 'center' : 'flex-start',
          }}>{actions}</div>
        ) : null}

        {note ? (
          <div style={{ marginTop: 14, fontSize: 11.5, color: 'var(--text-disabled)' }}>{note}</div>
        ) : null}
      </div>

      {media ? <div style={{ flex: 1, minWidth: 0 }}>{media}</div> : null}
    </section>
  );
}
