import React from 'react';

const SIZES = { sm: 'var(--control-sm)', md: 'var(--control-md)', lg: 'var(--control-lg)' };

export function Input({
  value, onChange, placeholder, icon, suffix, size = 'md', type = 'text',
  invalid = false, disabled = false, fullWidth = true, mono = false,
  style, inputStyle, ...rest
}) {
  const [focus, setFocus] = React.useState(false);

  return (
    <div
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        gap: 7,
        height: SIZES[size] || SIZES.md,
        padding: '0 10px',
        borderRadius: 'var(--radius-control)',
        background: disabled ? 'var(--surface-sunk)' : 'var(--surface-raised)',
        border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border)'}`,
        boxShadow: focus && !invalid ? 'var(--focus-ring)' : 'none',
        opacity: disabled ? 0.6 : 1,
        transition: 'var(--transition-control)',
        ...style,
      }}
    >
      {icon ? <span style={{ color: 'var(--text-tertiary)', display: 'flex' }}>{icon}</span> : null}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value, e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        style={{
          flex: 1,
          minWidth: 0,
          border: 0,
          outline: 'none',
          background: 'transparent',
          color: 'var(--text-primary)',
          fontFamily: mono ? 'var(--font-mono)' : 'inherit',
          fontSize: mono ? 'var(--text-mono-size)' : '12.5px',
          fontVariantNumeric: mono ? 'tabular-nums' : undefined,
          ...inputStyle,
        }}
        {...rest}
      />
      {suffix ? (
        <span style={{ color: 'var(--text-tertiary)', fontSize: 11.5, flex: 'none' }}>{suffix}</span>
      ) : null}
    </div>
  );
}
