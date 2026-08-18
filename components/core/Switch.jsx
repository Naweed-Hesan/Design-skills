import React from 'react';

const SIZES = {
  sm: { w: 28, h: 16, knob: 12 },
  md: { w: 34, h: 20, knob: 16 },
};

export function Switch({
  checked = false, onChange, label, description, size = 'md',
  disabled = false, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;

  const control = (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label ? undefined : 'Toggle'}
      disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      style={{
        width: s.w, height: s.h, flex: 'none', padding: 0,
        borderRadius: 'var(--radius-pill)',
        border: '1px solid transparent',
        background: checked ? 'var(--accent-solid)' : 'var(--surface-sunk)',
        boxShadow: checked ? 'none' : 'inset 0 0 0 1px var(--border)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        position: 'relative',
        transition: 'background var(--duration-fast) var(--ease)',
      }}
      {...rest}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute', top: '50%',
          left: checked ? s.w - s.knob - 3 : 2,
          width: s.knob, height: s.knob,
          borderRadius: '50%',
          background: 'var(--surface-raised)',
          boxShadow: 'var(--shadow-xs)',
          transform: 'translateY(-50%)',
          transition: 'left var(--duration-fast) var(--ease)',
        }}
      />
    </button>
  );

  if (!label) return <span style={style}>{control}</span>;

  /* With a label, the switch owns the whole row — that is the settings pattern. */
  return (
    <label
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 14,
        width: '100%', padding: '10px 0',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      <span style={{ flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 12.5, color: 'var(--text-primary)' }}>{label}</span>
        {description ? (
          <span style={{ display: 'block', marginTop: 3, fontSize: 11.5, color: 'var(--text-tertiary)', lineHeight: 1.45 }}>
            {description}
          </span>
        ) : null}
      </span>
      {control}
    </label>
  );
}
