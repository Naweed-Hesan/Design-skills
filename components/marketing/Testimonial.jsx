import React from 'react';

export function Testimonial({ quote, name, role, avatar, logo, size = 'md', style }) {
  const big = size === 'lg';

  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', ...style }}>
      <blockquote style={{
        margin: 0,
        maxWidth: 'var(--prose-max)',
        fontSize: big ? 'var(--text-h3-size)' : 14,
        lineHeight: big ? 1.35 : 1.6,
        letterSpacing: big ? 'var(--text-h3-track)' : '-0.008em',
        fontWeight: big ? 'var(--weight-medium)' : 'var(--weight-regular)',
        color: big ? 'var(--text-primary)' : 'var(--text-secondary)',
        textWrap: 'pretty',
      }}>
        {quote}
      </blockquote>

      <figcaption style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: big ? 24 : 16 }}>
        {avatar}
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12.5, color: 'var(--text-primary)' }}>{name}</div>
          {role ? (
            <div style={{ marginTop: 1, fontSize: 11.5, color: 'var(--text-tertiary)' }}>{role}</div>
          ) : null}
        </div>
        {logo ? <div style={{ marginLeft: 'auto', opacity: 0.5 }}>{logo}</div> : null}
      </figcaption>
    </figure>
  );
}
