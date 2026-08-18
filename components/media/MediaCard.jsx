import React from 'react';

export function MediaCard({
  src, alt, title, meta, tags, selected = false, onClick, onSelect, actions, ratio, style,
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <figure
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', margin: 0, minWidth: 0,
        borderRadius: 'var(--radius-media)',
        overflow: 'hidden',
        background: 'var(--media-well)',
        cursor: onClick ? 'pointer' : 'default',
        outline: selected ? '2px solid var(--accent)' : 'none',
        outlineOffset: -2,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt || title || ''}
        loading="lazy"
        style={{
          display: 'block', width: '100%',
          aspectRatio: ratio || undefined,
          height: ratio ? '100%' : 'auto',
          objectFit: ratio ? 'cover' : undefined,
          transform: hover ? `scale(var(--zoom-media))` : 'scale(1)',
          transition: 'transform var(--duration-media) var(--ease)',
        }}
      />

      {/* Metadata lives on the overlay, never on the wall at rest. */}
      {(title || meta || actions) && hover ? (
        <figcaption
          style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            padding: '22px 10px 9px',
            background: 'linear-gradient(to top, var(--on-media-scrim-from), var(--on-media-scrim-to))',
            color: 'var(--on-media-text)',
            animation: 'ds-fade var(--duration-fast) var(--ease)',
            pointerEvents: 'none',
          }}
        >
          {title ? (
            <div style={{
              fontSize: 12, fontWeight: 'var(--weight-medium)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{title}</div>
          ) : null}
          {meta ? (
            <div style={{ marginTop: 1, fontSize: 10.5, opacity: 0.72, fontFamily: 'var(--font-mono)' }}>{meta}</div>
          ) : null}
        </figcaption>
      ) : null}

      {onSelect ? (
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          aria-label={selected ? 'Deselect' : 'Select'}
          aria-pressed={selected}
          style={{
            position: 'absolute', top: 7, left: 7,
            width: 19, height: 19, padding: 0,
            display: hover || selected ? 'flex' : 'none',
            alignItems: 'center', justifyContent: 'center',
            borderRadius: 'var(--radius-inset)',
            border: selected ? 'none' : '1px solid var(--on-media-border)',
            background: selected ? 'var(--accent-solid)' : 'var(--on-media-control)',
            color: 'var(--on-media-text)', cursor: 'pointer',
            backdropFilter: 'blur(4px)',
          }}
        >
          {selected ? (
            <svg className="ds-icon" width="11" height="11" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3.5 8.4l3 3 6-6.6" />
            </svg>
          ) : null}
        </button>
      ) : null}

      {actions && hover ? (
        <div style={{ position: 'absolute', top: 7, right: 7, display: 'flex', gap: 4 }}>{actions}</div>
      ) : null}
    </figure>
  );
}
