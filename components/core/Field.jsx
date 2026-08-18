import React from 'react';

export function Field({ label, hint, error, required = false, htmlFor, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%', ...style }}>
      {label ? (
        <label
          htmlFor={htmlFor}
          style={{
            fontSize: 'var(--text-label-size)',
            fontWeight: 'var(--weight-medium)',
            letterSpacing: 'var(--text-label-track)',
            color: 'var(--text-secondary)',
          }}
        >
          {label}
          {required ? <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span> : null}
        </label>
      ) : null}

      {children}

      {error ? (
        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: 'var(--danger)' }}>
          <svg className="ds-icon" width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
            <circle cx="8" cy="8" r="5.6" /><path d="M8 5v3.4M8 11h.01" />
          </svg>
          {error}
        </span>
      ) : hint ? (
        <span style={{ fontSize: 11.5, color: 'var(--text-tertiary)', lineHeight: 1.45 }}>{hint}</span>
      ) : null}
    </div>
  );
}

/** Label on the left, control on the right. For settings and wide forms. */
export function FieldRow({ label, hint, error, children, labelWidth = 180, style }) {
  return (
    <div
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 20,
        padding: '12px 0',
        borderBottom: '1px solid var(--border-subtle)',
        ...style,
      }}
    >
      <div style={{ width: labelWidth, flex: 'none', paddingTop: 6 }}>
        <div style={{ fontSize: 12.5, color: 'var(--text-primary)' }}>{label}</div>
        {hint ? (
          <div style={{ marginTop: 3, fontSize: 11.5, color: 'var(--text-tertiary)', lineHeight: 1.45 }}>{hint}</div>
        ) : null}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        {children}
        {error ? (
          <div style={{ marginTop: 5, fontSize: 11.5, color: 'var(--danger)' }}>{error}</div>
        ) : null}
      </div>
    </div>
  );
}
