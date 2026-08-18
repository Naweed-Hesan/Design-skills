import React from 'react';

export function ContextMenu({ items = [], open, onClose, anchor = 'left', width = 190, style, children }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose && onClose(); };
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-flex', ...style }}>
      {children}
      {open ? (
        <div
          role="menu"
          style={{
            position: 'absolute', top: 'calc(100% + 5px)', zIndex: 40,
            [anchor]: 0,
            width,
            padding: 4,
            borderRadius: 'var(--radius-control)',
            background: 'var(--surface-overlay)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--shadow-popover)',
            animation: 'ds-pop var(--duration-fast) var(--ease)',
          }}
        >
          {items.map((item, i) =>
            item === '-' || item.separator ? (
              <div key={`sep-${i}`} style={{ height: 1, margin: '4px 2px', background: 'var(--border-subtle)' }} />
            ) : (
              <MenuItem key={item.value || i} item={item} onClose={onClose} />
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

function MenuItem({ item, onClose }) {
  const [hover, setHover] = React.useState(false);
  const danger = item.tone === 'danger';

  return (
    <button
      role="menuitem"
      disabled={item.disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => { if (item.onSelect) item.onSelect(); if (onClose) onClose(); }}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        width: '100%', height: 28, padding: '0 8px',
        border: 0, borderRadius: 'var(--radius-inset)',
        background: hover && !item.disabled ? (danger ? 'var(--danger-soft)' : 'var(--surface-sunk)') : 'transparent',
        color: item.disabled ? 'var(--text-disabled)' : danger ? 'var(--danger)' : 'var(--text-secondary)',
        fontSize: 12.5, textAlign: 'left',
        cursor: item.disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-instant) var(--ease)',
      }}
    >
      {item.icon ? <span style={{ display: 'flex', flex: 'none' }}>{item.icon}</span> : null}
      <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {item.label}
      </span>
      {item.shortcut ? (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-disabled)', flex: 'none' }}>
          {item.shortcut}
        </span>
      ) : null}
    </button>
  );
}
