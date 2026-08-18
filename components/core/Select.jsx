import React from 'react';

const SIZES = { sm: 'var(--control-sm)', md: 'var(--control-md)', lg: 'var(--control-lg)' };

/** Options may be plain strings or { value, label } pairs. */
function normalise(options) {
  return (options || []).map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  );
}

export function Select({
  value, onChange, options, placeholder, size = 'md',
  disabled = false, invalid = false, fullWidth = false, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const opts = normalise(options);

  return (
    <div
      style={{
        position: 'relative',
        display: fullWidth ? 'block' : 'inline-block',
        width: fullWidth ? '100%' : undefined,
        ...style,
      }}
    >
      <select
        value={value === undefined || value === null ? '' : value}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.value, e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        aria-invalid={invalid || undefined}
        style={{
          width: '100%',
          height: SIZES[size] || SIZES.md,
          padding: '0 28px 0 10px',
          borderRadius: 'var(--radius-control)',
          background: disabled ? 'var(--surface-sunk)' : 'var(--surface-raised)',
          border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border)'}`,
          boxShadow: focus && !invalid ? 'var(--focus-ring)' : 'none',
          color: value ? 'var(--text-primary)' : 'var(--text-disabled)',
          fontSize: '12.5px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.6 : 1,
          appearance: 'none',
          WebkitAppearance: 'none',
          outline: 'none',
          transition: 'var(--transition-control)',
        }}
        {...rest}
      >
        {placeholder ? <option value="" disabled>{placeholder}</option> : null}
        {opts.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <svg
        className="ds-icon"
        width="13" height="13" viewBox="0 0 16 16"
        aria-hidden="true"
        style={{
          position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)',
          color: 'var(--text-tertiary)', pointerEvents: 'none',
        }}
      >
        <path d="M3.5 6.3L8 10.8l4.5-4.5" />
      </svg>
    </div>
  );
}
