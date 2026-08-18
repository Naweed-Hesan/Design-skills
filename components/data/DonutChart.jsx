import React from 'react';

const SERIES = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)'];

export function DonutChart({
  data = [], size = 132, thickness = 14, centerLabel, centerValue,
  showLegend = true, formatValue, style,
}) {
  const norm = data.map((d) => (Array.isArray(d) ? { label: d[0], value: d[1] } : d));
  const total = norm.reduce((a, d) => a + d.value, 0) || 1;
  const fmt = formatValue || ((v) => v.toLocaleString());

  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 20, ...style }}>
      <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
        <svg width={size} height={size} style={{ display: 'block', transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none"
                  stroke="var(--surface-sunk)" strokeWidth={thickness} />
          {norm.map((d, i) => {
            const len = (d.value / total) * c;
            const el = (
              <circle
                key={i}
                cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={d.color || SERIES[i % SERIES.length]}
                strokeWidth={thickness}
                strokeDasharray={`${len} ${c - len}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              >
                <title>{`${d.label}: ${fmt(d.value)}`}</title>
              </circle>
            );
            offset += len;
            return el;
          })}
        </svg>

        {centerValue !== undefined || centerLabel ? (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', pointerEvents: 'none',
          }}>
            {centerValue !== undefined ? (
              <span style={{
                fontSize: 20, fontWeight: 'var(--weight-bold)',
                letterSpacing: '-0.028em', color: 'var(--text-primary)',
                fontVariantNumeric: 'tabular-nums',
              }}>{centerValue}</span>
            ) : null}
            {centerLabel ? (
              <span style={{ marginTop: 1, fontSize: 11, color: 'var(--text-tertiary)' }}>{centerLabel}</span>
            ) : null}
          </div>
        ) : null}
      </div>

      {showLegend ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, minWidth: 0 }}>
          {norm.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <span style={{
                width: 8, height: 8, flex: 'none', borderRadius: 2,
                background: d.color || SERIES[i % SERIES.length],
              }} />
              <span style={{
                flex: 1, minWidth: 0, fontSize: 12, color: 'var(--text-secondary)',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{d.label}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, flex: 'none',
                fontVariantNumeric: 'tabular-nums', color: 'var(--text-tertiary)',
              }}>{Math.round((d.value / total) * 100)}%</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
