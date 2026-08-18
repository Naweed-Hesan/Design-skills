import React from 'react';

/** 1 … 4 5 [6] 7 8 … 20 — always the ends, always a window around the current page. */
function pageList(page, total, window = 1) {
  const out = [];
  const push = (v) => { if (out[out.length - 1] !== v) out.push(v); };

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - page) <= window) push(i);
    else push('…');
  }
  return out;
}

export function Pagination({ page = 1, pageCount = 1, onChange, totalLabel, style }) {
  if (pageCount <= 1 && !totalLabel) return null;
  const pages = pageList(page, pageCount);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>
      {totalLabel ? (
        <span style={{ fontSize: 11.5, color: 'var(--text-tertiary)', marginRight: 'auto' }}>{totalLabel}</span>
      ) : null}

      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Step dir="prev" disabled={page <= 1} onClick={() => onChange && onChange(page - 1)} />
        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`gap-${i}`} style={{ padding: '0 4px', color: 'var(--text-disabled)', fontSize: 12 }}>…</span>
          ) : (
            <button
              key={p}
              onClick={() => onChange && onChange(p)}
              aria-current={p === page ? 'page' : undefined}
              style={{
                minWidth: 26, height: 26, padding: '0 6px',
                border: 0, borderRadius: 'var(--radius-control)',
                background: p === page ? 'var(--accent-soft)' : 'transparent',
                color: p === page ? 'var(--accent-text)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)', fontSize: 11.5,
                cursor: 'pointer',
                transition: 'var(--transition-control)',
              }}
            >{p}</button>
          )
        )}
        <Step dir="next" disabled={page >= pageCount} onClick={() => onChange && onChange(page + 1)} />
      </div>
    </div>
  );
}

function Step({ dir, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous page' : 'Next page'}
      style={{
        width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: 0, borderRadius: 'var(--radius-control)', background: 'transparent',
        color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <svg className="ds-icon" width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
        <path d={dir === 'prev' ? 'M9.5 3.5L5 8l4.5 4.5' : 'M6.5 3.5L11 8l-4.5 4.5'} />
      </svg>
    </button>
  );
}
