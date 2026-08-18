import React from 'react';

const SERIES = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)'];

export function BarChart({
  data = [], orientation = 'horizontal', height, maxValue,
  formatValue, showValue = true, colorByIndex = false, style,
}) {
  const fmt = formatValue || ((v) => v.toLocaleString());
  const norm = data.map((d) => (Array.isArray(d) ? { label: d[0], value: d[1] } : d));
  const max = maxValue || Math.max(...norm.map((d) => d.value), 1);

  if (orientation === 'horizontal') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, ...style }}>
        {norm.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 108, flex: 'none', fontSize: 12, color: 'var(--text-secondary)',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }} title={d.label}>{d.label}</span>

            <div style={{ flex: 1, minWidth: 0, height: 7, borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunk)' }}>
              <div style={{
                width: `${(d.value / max) * 100}%`, height: '100%',
                borderRadius: 'var(--radius-pill)',
                background: d.color || (colorByIndex ? SERIES[i % SERIES.length] : 'var(--chart-1)'),
                transition: 'width var(--duration-base) var(--ease)',
              }} />
            </div>

            {showValue ? (
              <span style={{
                width: 54, flex: 'none', textAlign: 'right',
                fontFamily: 'var(--font-mono)', fontSize: 11,
                fontVariantNumeric: 'tabular-nums',
                color: 'var(--text-tertiary)',
              }}>{fmt(d.value)}</span>
            ) : null}
          </div>
        ))}
      </div>
    );
  }

  /* Vertical — for time buckets, where the x axis has a natural order. */
  const h = height || 180;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: h, ...style }}>
      {norm.map((d, i) => (
        <div key={i} style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%' }}>
          <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
            <div
              title={`${d.label}: ${fmt(d.value)}`}
              style={{
                width: '100%',
                height: `${Math.max((d.value / max) * 100, 1.5)}%`,
                borderRadius: 'var(--radius-inset) var(--radius-inset) 2px 2px',
                background: d.color || (colorByIndex ? SERIES[i % SERIES.length] : 'var(--chart-1)'),
                transition: 'height var(--duration-base) var(--ease)',
              }}
            />
          </div>
          <span style={{
            fontSize: 10, color: 'var(--chart-axis)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%',
          }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}
