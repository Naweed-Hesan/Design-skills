import React from 'react';

export function Sparkline({
  data = [], width = 72, height = 22, color, area = true, showEnd = true, style,
}) {
  if (!data.length) return <span style={{ display: 'inline-block', width, height, ...style }} />;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pad = 2;
  const stroke = color || 'var(--chart-1)';

  const pts = data.map((v, i) => [
    pad + (i / Math.max(data.length - 1, 1)) * (width - pad * 2),
    pad + (1 - (v - min) / span) * (height - pad * 2),
  ]);
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const last = pts[pts.length - 1];

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}
         style={{ display: 'block', overflow: 'visible', ...style }} aria-hidden="true">
      {area ? (
        <path d={`${d} L${last[0]},${height - pad} L${pts[0][0]},${height - pad} Z`}
              fill={stroke} opacity="0.12" stroke="none" />
      ) : null}
      <path d={d} fill="none" stroke={stroke} strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" />
      {showEnd ? <circle cx={last[0]} cy={last[1]} r="1.9" fill={stroke} /> : null}
    </svg>
  );
}
