import React from 'react';

export function PricingCard({
  name, price, period = '/mo', description, features = [], action,
  featured = false, badge, note, style,
}) {
  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column',
        padding: featured ? 24 : 22,
        borderRadius: 'var(--radius-panel)',
        background: 'var(--surface-raised)',
        boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        border: featured ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
        position: 'relative',
        ...style,
      }}
    >
      {badge ? (
        <span style={{
          position: 'absolute', top: -9, left: 22,
          height: 18, padding: '0 8px',
          display: 'inline-flex', alignItems: 'center',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--accent-solid)', color: 'var(--text-on-accent)',
          fontSize: 10.5,
        }}>{badge}</span>
      ) : null}

      <div style={{ fontSize: 12.5, color: 'var(--text-tertiary)' }}>{name}</div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, marginTop: 9 }}>
        <span style={{
          fontSize: 34, lineHeight: 1,
          fontWeight: 'var(--weight-bold)',
          letterSpacing: '-0.032em',
          color: 'var(--text-primary)',
          fontVariantNumeric: 'tabular-nums',
        }}>{price}</span>
        {period ? <span style={{ fontSize: 12.5, color: 'var(--text-tertiary)' }}>{period}</span> : null}
      </div>

      {description ? (
        <p style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.5, color: 'var(--text-tertiary)' }}>
          {description}
        </p>
      ) : null}

      {action ? <div style={{ marginTop: 18 }}>{action}</div> : null}

      {features.length ? (
        <ul style={{ listStyle: 'none', margin: '20px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {features.map((f, i) => {
            const text = typeof f === 'string' ? f : f.label;
            const included = typeof f === 'string' ? true : f.included !== false;
            return (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                <svg className="ds-icon" width="13" height="13" viewBox="0 0 16 16" aria-hidden="true"
                     style={{ marginTop: 3, flex: 'none', color: included ? 'var(--accent)' : 'var(--text-disabled)' }}>
                  <path d={included ? 'M3.5 8.4l3 3 6-6.6' : 'M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6'} />
                </svg>
                <span style={{
                  fontSize: 12.5, lineHeight: 1.45,
                  color: included ? 'var(--text-secondary)' : 'var(--text-disabled)',
                }}>{text}</span>
              </li>
            );
          })}
        </ul>
      ) : null}

      {note ? (
        <div style={{ marginTop: 'auto', paddingTop: 16, fontSize: 11, color: 'var(--text-disabled)' }}>{note}</div>
      ) : null}
    </div>
  );
}
