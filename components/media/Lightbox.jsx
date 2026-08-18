import React from 'react';

export function Lightbox({
  open, src, alt, title, fields = [], actions, onClose, onPrev, onNext, style,
}) {
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape' && onClose) onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div
      onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 90,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 10, padding: 20,
        background: 'var(--scrim)',
        animation: 'ds-fade var(--duration-fast) var(--ease)',
      }}
    >
      {onPrev ? <NavArrow dir="prev" onClick={onPrev} /> : null}

      <div style={{
        display: 'flex', alignItems: 'stretch', gap: 10,
        maxWidth: 1100, maxHeight: '100%', minWidth: 0,
        ...style,
      }}>
        <div style={{
          flex: 1, minWidth: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius-panel)',
          background: 'var(--surface-raised)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
        }}>
          <img src={src} alt={alt || title || ''}
               style={{ display: 'block', maxWidth: '100%', maxHeight: '82vh', objectFit: 'contain' }} />
        </div>

        {(title || fields.length || actions) ? (
          <aside style={{
            width: 248, flex: 'none',
            display: 'flex', flexDirection: 'column',
            padding: 16,
            borderRadius: 'var(--radius-panel)',
            background: 'var(--surface-raised)',
            boxShadow: 'var(--shadow-lg)',
            overflowY: 'auto',
          }}>
            {title ? (
              <h3 style={{ fontSize: 'var(--text-h4-size)', letterSpacing: 'var(--text-h4-track)', color: 'var(--text-primary)' }}>
                {title}
              </h3>
            ) : null}

            {fields.length ? (
              <dl style={{ margin: '14px 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
                {fields.map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <dt style={{ width: 74, flex: 'none', fontSize: 11.5, color: 'var(--text-tertiary)' }}>{f.label}</dt>
                    <dd style={{
                      margin: 0, flex: 1, minWidth: 0,
                      fontSize: 11.5, color: 'var(--text-secondary)',
                      fontFamily: f.mono ? 'var(--font-mono)' : undefined,
                      overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>{f.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {actions ? (
              <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {actions}
              </div>
            ) : null}
          </aside>
        ) : null}
      </div>

      {onNext ? <NavArrow dir="next" onClick={onNext} /> : null}
    </div>
  );
}

function NavArrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      style={{
        width: 34, height: 34, flex: 'none', padding: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', border: 0,
        background: 'var(--surface-raised)', color: 'var(--text-secondary)',
        boxShadow: 'var(--shadow-sm)', cursor: 'pointer',
      }}
    >
      <svg className="ds-icon" width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
        <path d={dir === 'prev' ? 'M9.5 3.5L5 8l4.5 4.5' : 'M6.5 3.5L11 8l-4.5 4.5'} />
      </svg>
    </button>
  );
}
