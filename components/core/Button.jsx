import React from 'react';

const SIZES = {
  sm: { height: 'var(--control-sm)', padding: '0 10px', font: '12px', gap: '6px', icon: 13 },
  md: { height: 'var(--control-md)', padding: '0 12px', font: '12.5px', gap: '7px', icon: 14 },
  lg: { height: 'var(--control-lg)', padding: '0 18px', font: '14px', gap: '8px', icon: 15 },
};

const TONES = {
  primary:    { background: 'var(--accent-solid)', color: 'var(--text-on-accent)', border: '1px solid transparent' },
  secondary:  { background: 'var(--surface-raised)', color: 'var(--text-secondary)', border: '1px solid var(--border)' },
  ghost:      { background: 'transparent', color: 'var(--text-tertiary)', border: '1px solid transparent' },
  danger:     { background: 'var(--surface-raised)', color: 'var(--danger)', border: '1px solid var(--border)' },
  accentSoft: { background: 'var(--accent-soft)', color: 'var(--accent-text)', border: '1px solid transparent' },
};

const HOVERS = {
  primary:    { background: 'var(--accent-hover)' },
  secondary:  { color: 'var(--text-primary)', borderColor: 'var(--border-strong)' },
  ghost:      { color: 'var(--text-primary)', background: 'var(--surface-sunk)' },
  danger:     { borderColor: 'var(--danger)' },
  accentSoft: { background: 'var(--accent-softer)' },
};

export function Button({
  children, variant = 'secondary', size = 'md', icon, iconAfter,
  fullWidth = false, disabled = false, loading = false, type = 'button',
  onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const tone = TONES[variant] || TONES.secondary;
  const inactive = disabled || loading;

  return (
    <button
      type={type}
      disabled={inactive}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        borderRadius: 'var(--radius-control)',
        fontSize: s.font,
        fontWeight: variant === 'primary' ? 'var(--weight-medium)' : 'var(--weight-regular)',
        letterSpacing: 'var(--text-body-track)',
        whiteSpace: 'nowrap',
        cursor: inactive ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'var(--transition-control)',
        ...tone,
        ...(hover && !inactive ? HOVERS[variant] || HOVERS.secondary : null),
        ...style,
      }}
      {...rest}
    >
      {loading ? <Spinner size={s.icon} /> : icon}
      {children}
      {iconAfter}
    </button>
  );
}

function Spinner({ size = 14 }) {
  return (
    <svg className="ds-icon" width={size} height={size} viewBox="0 0 16 16"
         style={{ animation: 'ds-spin 0.7s linear infinite' }} aria-hidden="true">
      <circle cx="8" cy="8" r="5.4" style={{ opacity: 0.25 }} />
      <path d="M8 2.6a5.4 5.4 0 015.4 5.4" />
    </svg>
  );
}
