import React from 'react';

export function DropZone({
  onDrop, onBrowse, accept, hint, active: activeProp, compact = false, children, style,
}) {
  const [dragging, setDragging] = React.useState(false);
  const active = activeProp !== undefined ? activeProp : dragging;

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        if (onDrop) onDrop(Array.from(e.dataTransfer.files || []), e);
      }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 3, textAlign: 'center',
        padding: compact ? '20px 16px' : '38px 24px',
        borderRadius: 'var(--radius-panel)',
        border: `1px dashed ${active ? 'var(--accent)' : 'var(--border-strong)'}`,
        background: active ? 'var(--accent-softer)' : 'var(--surface-subtle)',
        transition: 'var(--transition-control)',
        ...style,
      }}
    >
      {children || (
        <>
          <svg className="ds-icon" width={compact ? 18 : 22} height={compact ? 18 : 22} viewBox="0 0 16 16"
               aria-hidden="true" style={{ color: active ? 'var(--accent)' : 'var(--text-tertiary)', marginBottom: 7 }}>
            <path d="M8 12.5v-7M5 8.3L8 5.3l3 3M3 12.5h10" />
          </svg>
          <div style={{ fontSize: 12.5, color: 'var(--text-primary)' }}>
            {active ? 'Drop to upload' : 'Drag files here'}
            {!active && onBrowse ? (
              <>
                {' or '}
                <button
                  type="button"
                  onClick={onBrowse}
                  style={{
                    border: 0, background: 'transparent', padding: 0,
                    color: 'var(--accent-text)', cursor: 'pointer',
                    font: 'inherit', textDecoration: 'underline', textUnderlineOffset: 2,
                  }}
                >browse</button>
              </>
            ) : null}
          </div>
          {hint && !active ? (
            <div style={{ fontSize: 11.5, color: 'var(--text-tertiary)' }}>{hint}</div>
          ) : null}
        </>
      )}
    </div>
  );
}
