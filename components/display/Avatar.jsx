import React from 'react';

const SIZES = { xs: 18, sm: 22, md: 28, lg: 40, xl: 64 };

/* Deterministic colour from the name, so the same person is always the same
   colour without storing anything. */
function hueFor(name) {
  let h = 0;
  for (let i = 0; i < (name || '').length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
  return h;
}

function initials(name) {
  const parts = (name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name, src, size = 'md', status, style, ...rest }) {
  const dim = typeof size === 'number' ? size : SIZES[size] || SIZES.md;
  const hue = hueFor(name);

  return (
    <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', ...style }} {...rest}>
      {src ? (
        <img
          src={src}
          alt={name || ''}
          width={dim}
          height={dim}
          style={{
            width: dim, height: dim, borderRadius: '50%', objectFit: 'cover',
            background: 'var(--media-well)', display: 'block',
          }}
        />
      ) : (
        <span
          aria-label={name}
          style={{
            width: dim, height: dim, borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `hsl(${hue} 42% 88%)`,
            color: `hsl(${hue} 46% 28%)`,
            fontSize: Math.max(9, Math.round(dim * 0.38)),
            fontWeight: 'var(--weight-medium)',
            letterSpacing: '-0.01em',
            userSelect: 'none',
          }}
        >
          {initials(name)}
        </span>
      )}
      {status ? (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', right: -1, bottom: -1,
            width: Math.max(6, dim * 0.28), height: Math.max(6, dim * 0.28),
            borderRadius: '50%',
            background: status === 'online' ? 'var(--success)'
              : status === 'busy' ? 'var(--danger)'
              : 'var(--text-disabled)',
            border: '2px solid var(--surface-raised)',
          }}
        />
      ) : null}
    </span>
  );
}

/** Overlapping avatars for "these people". */
export function AvatarGroup({ people = [], size = 'sm', max = 4, style }) {
  const dim = typeof size === 'number' ? size : SIZES[size] || SIZES.sm;
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', ...style }}>
      {shown.map((p, i) => (
        <span key={i} style={{ marginLeft: i ? -dim * 0.3 : 0, border: '2px solid var(--surface-raised)', borderRadius: '50%', display: 'flex' }}>
          <Avatar name={typeof p === 'string' ? p : p.name} src={typeof p === 'string' ? undefined : p.src} size={dim} />
        </span>
      ))}
      {extra > 0 ? (
        <span style={{
          marginLeft: -dim * 0.3, width: dim, height: dim, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--surface-sunk)', color: 'var(--text-tertiary)',
          border: '2px solid var(--surface-raised)',
          fontSize: Math.max(9, Math.round(dim * 0.34)),
          fontFamily: 'var(--font-mono)',
        }}>+{extra}</span>
      ) : null}
    </span>
  );
}
