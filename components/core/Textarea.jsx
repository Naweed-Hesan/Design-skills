import React from 'react';

export function Textarea({
  value, onChange, placeholder, rows = 4, invalid = false, disabled = false,
  maxLength, showCount = false, autoGrow = false, style, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!autoGrow || !ref.current) return;
    ref.current.style.height = 'auto';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  }, [value, autoGrow]);

  return (
    <div style={{ width: '100%', ...style }}>
      <div
        style={{
          padding: '8px 10px',
          borderRadius: 'var(--radius-control)',
          background: disabled ? 'var(--surface-sunk)' : 'var(--surface-raised)',
          border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border)'}`,
          boxShadow: focus && !invalid ? 'var(--focus-ring)' : 'none',
          opacity: disabled ? 0.6 : 1,
          transition: 'var(--transition-control)',
        }}
      >
        <textarea
          ref={ref}
          value={value}
          rows={rows}
          maxLength={maxLength}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value, e)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          aria-invalid={invalid || undefined}
          style={{
            width: '100%',
            border: 0,
            outline: 'none',
            resize: autoGrow ? 'none' : 'vertical',
            overflow: autoGrow ? 'hidden' : undefined,
            background: 'transparent',
            color: 'var(--text-primary)',
            fontSize: '12.5px',
            lineHeight: 1.55,
            display: 'block',
          }}
          {...rest}
        />
      </div>
      {showCount && maxLength ? (
        <div style={{
          marginTop: 5, textAlign: 'right',
          fontFamily: 'var(--font-mono)', fontSize: 10.5,
          color: (value || '').length > maxLength * 0.9 ? 'var(--warning)' : 'var(--text-disabled)',
        }}>
          {(value || '').length} / {maxLength}
        </div>
      ) : null}
    </div>
  );
}
