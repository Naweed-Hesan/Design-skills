import React from 'react';

export function Checkbox({
  checked = false, onChange, label, description, indeterminate = false,
  disabled = false, style, ...rest
}) {
  const on = checked || indeterminate;

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: description ? 'flex-start' : 'center',
        gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{
          position: 'absolute', opacity: 0, width: 0, height: 0, margin: 0,
        }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          width: 15, height: 15, flex: 'none',
          marginTop: description ? 1 : 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius-inset)',
          background: on ? 'var(--accent-solid)' : 'var(--surface-raised)',
          border: `1px solid ${on ? 'var(--accent-solid)' : 'var(--border-strong)'}`,
          color: 'var(--text-on-accent)',
          transition: 'var(--transition-control)',
        }}
      >
        {indeterminate ? (
          <svg className="ds-icon" width="11" height="11" viewBox="0 0 16 16"><path d="M4 8h8" /></svg>
        ) : checked ? (
          <svg className="ds-icon" width="11" height="11" viewBox="0 0 16 16"><path d="M3.5 8.4l3 3 6-6.6" /></svg>
        ) : null}
      </span>
      {label ? (
        <span style={{ minWidth: 0 }}>
          <span style={{ fontSize: 12.5, color: 'var(--text-secondary)' }}>{label}</span>
          {description ? (
            <span style={{ display: 'block', marginTop: 2, fontSize: 11.5, color: 'var(--text-tertiary)' }}>
              {description}
            </span>
          ) : null}
        </span>
      ) : null}
    </label>
  );
}
