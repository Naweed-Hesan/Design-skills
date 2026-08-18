import React from 'react';

export function SidebarNav({ sections = [], value, onChange, footer, header, width, style }) {
  return (
    <nav
      style={{
        display: 'flex', flexDirection: 'column',
        width: width || 'var(--sidebar-width)', flex: 'none',
        borderRadius: 'var(--radius-panel)',
        background: 'var(--surface-raised)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {header ? <div style={{ flex: 'none', padding: '16px 15px 12px' }}>{header}</div> : null}

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '4px 8px 8px' }}>
        {sections.map((section, si) => (
          <div key={si} style={{ marginBottom: 14 }}>
            {section.label ? (
              <div style={{
                padding: '6px 7px 5px',
                fontSize: 'var(--text-label-size)',
                color: 'var(--text-tertiary)',
              }}>{section.label}</div>
            ) : null}

            {(section.items || []).map((item) => {
              const active = item.value === value;
              return (
                <SidebarItem
                  key={item.value}
                  item={item}
                  active={active}
                  onSelect={() => onChange && onChange(item.value)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {footer ? (
        <div style={{ flex: 'none', padding: '13px 15px', borderTop: '1px solid var(--border-subtle)' }}>
          {footer}
        </div>
      ) : null}
    </nav>
  );
}

function SidebarItem({ item, active, onSelect }) {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-current={active ? 'page' : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 9,
        width: '100%', height: 30, padding: '0 8px',
        border: 0,
        borderRadius: 'var(--radius-control)',
        background: active ? 'var(--accent-soft)' : hover ? 'var(--surface-sunk)' : 'transparent',
        color: active ? 'var(--accent-text)' : hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontSize: 12.5,
        fontWeight: active ? 'var(--weight-medium)' : 'var(--weight-regular)',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'var(--transition-control)',
      }}
    >
      {item.icon ? <span style={{ display: 'flex', flex: 'none' }}>{item.icon}</span> : null}
      <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {item.label}
      </span>
      {item.count !== undefined ? (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 10.5, flex: 'none',
          color: active ? 'var(--accent-text)' : 'var(--text-disabled)',
        }}>{item.count}</span>
      ) : null}
    </button>
  );
}
