import React from 'react';

export function Tooltip({ label, side = 'top', delay = 350, children, style }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);

  const show = () => { timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };

  React.useEffect(() => () => clearTimeout(timer.current), []);

  const pos = {
    top:    { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 6 },
    left:   { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 6 },
    right:  { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 6 },
  }[side];

  return (
    <span
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      style={{ position: 'relative', display: 'inline-flex', ...style }}
    >
      {children}
      {open && label ? (
        <span
          role="tooltip"
          style={{
            position: 'absolute', zIndex: 70, ...pos,
            padding: '5px 8px',
            borderRadius: 'var(--radius-inset)',
            background: 'var(--surface-inverse)',
            color: 'var(--text-inverse)',
            fontSize: 11.5, lineHeight: 1.35,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            boxShadow: 'var(--shadow-sm)',
            animation: 'ds-fade var(--duration-instant) var(--ease)',
          }}
        >
          {label}
        </span>
      ) : null}
    </span>
  );
}
