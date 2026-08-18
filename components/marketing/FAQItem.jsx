import React from 'react';

export function FAQItem({ question, children, open: openProp, defaultOpen = false, onToggle, style }) {
  const [openState, setOpenState] = React.useState(defaultOpen);
  const controlled = openProp !== undefined;
  const open = controlled ? openProp : openState;

  const toggle = () => {
    if (!controlled) setOpenState((v) => !v);
    if (onToggle) onToggle(!open);
  };

  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)', ...style }}>
      <button
        onClick={toggle}
        aria-expanded={open}
        style={{
          display: 'flex', alignItems: 'center', gap: 14,
          width: '100%', padding: '16px 0',
          border: 0, background: 'transparent', textAlign: 'left',
          cursor: 'pointer',
        }}
      >
        <span style={{
          flex: 1, minWidth: 0,
          fontSize: 13.5, fontWeight: 'var(--weight-medium)',
          letterSpacing: '-0.011em',
          color: 'var(--text-primary)',
        }}>{question}</span>

        <svg className="ds-icon" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"
             style={{
               flex: 'none', color: 'var(--text-tertiary)',
               transform: open ? 'rotate(180deg)' : 'none',
               transition: 'transform var(--duration-fast) var(--ease)',
             }}>
          <path d="M3.5 6.3L8 10.8l4.5-4.5" />
        </svg>
      </button>

      {open ? (
        <div style={{
          maxWidth: 'var(--prose-max)',
          padding: '0 0 18px',
          fontSize: 13, lineHeight: 1.6,
          color: 'var(--text-tertiary)',
          animation: 'ds-fade var(--duration-fast) var(--ease)',
        }}>{children}</div>
      ) : null}
    </div>
  );
}
