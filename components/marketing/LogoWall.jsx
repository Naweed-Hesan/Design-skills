import React from 'react';

export function LogoWall({ logos = [], label, grayscale = true, height = 26, style }) {
  return (
    <div style={{ textAlign: 'center', ...style }}>
      {label ? (
        <div style={{ marginBottom: 22, fontSize: 12, color: 'var(--text-tertiary)' }}>{label}</div>
      ) : null}

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 44, flexWrap: 'wrap',
      }}>
        {logos.map((l, i) => {
          const src = typeof l === 'string' ? l : l.src;
          const name = typeof l === 'string' ? '' : l.name;
          return src ? (
            <img
              key={i}
              src={src}
              alt={name}
              style={{
                height, width: 'auto', display: 'block',
                filter: grayscale ? 'grayscale(1)' : 'none',
                opacity: grayscale ? 0.55 : 1,
              }}
            />
          ) : (
            <span key={i} style={{
              fontSize: 15,
              fontWeight: 'var(--weight-medium)',
              letterSpacing: '-0.02em',
              color: 'var(--text-disabled)',
            }}>{name}</span>
          );
        })}
      </div>
    </div>
  );
}
