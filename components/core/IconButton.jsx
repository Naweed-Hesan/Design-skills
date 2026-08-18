import React from 'react';

const SIZES = { sm: 'var(--control-sm)', md: 'var(--control-md)', lg: 'var(--control-lg)' };
const ICON = { sm: 13, md: 14, lg: 16 };

export function IconButton({
  icon, label, variant = 'plain', size = 'md', active = false,
  disabled = false, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = SIZES[size] || SIZES.md;

  const base = active
    ? { background: 'var(--accent-soft)', color: 'var(--accent-text)', border: '1px solid transparent' }
    : variant === 'bordered'
    ? { background: 'var(--surface-raised)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }
    : { background: 'transparent', color: 'var(--text-tertiary)', border: '1px solid transparent' };

  const hoverStyle = active
    ? { background: 'var(--accent-softer)' }
    : variant === 'bordered'
    ? { color: 'var(--text-primary)', borderColor: 'var(--border-strong)' }
    : { color: 'var(--text-primary)', background: 'var(--surface-sunk)' };

  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      aria-pressed={active || undefined}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim,
        height: dim,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
        padding: 0,
        borderRadius: 'var(--radius-control)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'var(--transition-control)',
        ...base,
        ...(hover && !disabled ? hoverStyle : null),
        ...style,
      }}
      {...rest}
    >
      {React.isValidElement(icon) && icon.props.size === undefined
        ? React.cloneElement(icon, { size: ICON[size] || 14 })
        : icon}
    </button>
  );
}
