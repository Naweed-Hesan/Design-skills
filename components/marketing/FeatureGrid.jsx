import React from 'react';

export function FeatureGrid({ features = [], columns = 3, variant = 'plain', style }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${columns >= 4 ? 200 : 240}px, 1fr))`,
        gap: variant === 'card' ? 12 : 36,
        maxWidth: 'var(--marketing-max)',
        margin: '0 auto',
        ...style,
      }}
    >
      {features.map((f, i) => (
        <div
          key={i}
          style={
            variant === 'card'
              ? {
                  padding: 20,
                  borderRadius: 'var(--radius-panel)',
                  background: 'var(--surface-raised)',
                  boxShadow: 'var(--shadow-sm)',
                }
              : undefined
          }
        >
          {f.icon ? (
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 34, height: 34, marginBottom: 14,
              borderRadius: 'var(--radius-control)',
              background: 'var(--accent-soft)',
              color: 'var(--accent-text)',
            }}>{f.icon}</span>
          ) : null}

          <h3 style={{
            fontSize: 'var(--text-h4-size)',
            lineHeight: 'var(--text-h4-line)',
            letterSpacing: 'var(--text-h4-track)',
            color: 'var(--text-primary)',
          }}>{f.title}</h3>

          {f.description ? (
            <p style={{
              marginTop: 7, fontSize: 13, lineHeight: 1.55,
              color: 'var(--text-tertiary)',
            }}>{f.description}</p>
          ) : null}

          {f.link ? <div style={{ marginTop: 12 }}>{f.link}</div> : null}
        </div>
      ))}
    </div>
  );
}
