import React from 'react';

export function Breadcrumb({ items = [], onNavigate, maxItems = 4, style }) {
  let shown = items;
  let collapsed = false;

  /* Keep the first and the last two; the middle becomes an ellipsis. */
  if (items.length > maxItems) {
    shown = [items[0], null, ...items.slice(-2)];
    collapsed = true;
  }

  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 5, minWidth: 0, ...style }}>
      {shown.map((item, i) => {
        const last = i === shown.length - 1;

        if (item === null) {
          return (
            <React.Fragment key="collapsed">
              <span style={{ color: 'var(--text-disabled)', fontSize: 12.5 }} title={items.slice(1, -2).map((x) => x.label).join(' / ')}>…</span>
              <Sep />
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={item.value || i}>
            {last ? (
              <span style={{
                fontSize: 12.5, color: 'var(--text-primary)',
                fontWeight: 'var(--weight-medium)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }} aria-current="page">{item.label}</span>
            ) : (
              <>
                <button
                  onClick={() => onNavigate && onNavigate(item.value, item)}
                  style={{
                    border: 0, background: 'transparent', padding: 0,
                    fontSize: 12.5, color: 'var(--text-tertiary)',
                    cursor: 'pointer', whiteSpace: 'nowrap',
                  }}
                >{item.label}</button>
                <Sep />
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

function Sep() {
  return (
    <svg className="ds-icon" width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"
         style={{ color: 'var(--text-disabled)', flex: 'none' }}>
      <path d="M6.5 3.5L11 8l-4.5 4.5" />
    </svg>
  );
}
