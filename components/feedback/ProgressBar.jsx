import React from 'react';

export function ProgressBar({
  value = 0, max = 100, label, valueLabel, tone = 'accent',
  size = 'md', indeterminate = false, style,
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const height = size === 'sm' ? 3 : size === 'lg' ? 8 : 5;

  const COLORS = {
    accent: 'var(--accent)',
    success: 'var(--success)',
    warning: 'var(--warning)',
    danger: 'var(--danger)',
  };

  return (
    <div style={{ width: '100%', ...style }}>
      {label || valueLabel ? (
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          gap: 10, marginBottom: 6,
        }}>
          {label ? <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</span> : <span />}
          {valueLabel ? (
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 11,
              fontVariantNumeric: 'tabular-nums',
              color: 'var(--text-tertiary)',
            }}>{valueLabel}</span>
          ) : null}
        </div>
      ) : null}

      <div
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{
          height, borderRadius: 'var(--radius-pill)',
          background: 'var(--surface-sunk)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: indeterminate ? '35%' : `${pct}%`,
            borderRadius: 'var(--radius-pill)',
            background: COLORS[tone] || COLORS.accent,
            transition: indeterminate ? 'none' : 'width var(--duration-base) var(--ease)',
            animation: indeterminate ? 'ds-indeterminate 1.3s var(--ease) infinite' : 'none',
          }}
        />
      </div>
    </div>
  );
}
