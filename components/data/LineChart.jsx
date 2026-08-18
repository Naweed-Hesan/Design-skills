import React from 'react';

const SERIES = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)', 'var(--chart-6)'];

/* Catmull-Rom to bezier — a smooth curve through every point, without the
   overshoot a naive spline gives you on spiky data. */
function smoothPath(pts, tension = 0.35) {
  if (pts.length < 2) return '';
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension * 2;
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension * 2;
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension * 2;
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension * 2;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`;
  }
  return d;
}

function niceTicks(min, max, count = 4) {
  const span = max - min || 1;
  const raw = span / count;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = (norm >= 5 ? 10 : norm >= 2 ? 5 : norm >= 1 ? 2 : 1) * mag;
  const lo = Math.floor(min / step) * step;
  const hi = Math.ceil(max / step) * step;
  const out = [];
  for (let v = lo; v <= hi + step / 2; v += step) out.push(Math.round(v * 1e6) / 1e6);
  return out;
}

export function LineChart({
  series = [], labels = [], height = 220, smooth = true, area = true,
  showGrid = true, showAxis = true, formatValue, style,
}) {
  const [hover, setHover] = React.useState(null);
  const wrapRef = React.useRef(null);
  const [width, setWidth] = React.useState(600);

  React.useEffect(() => {
    if (!wrapRef.current || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  const norm = series.map((s) => (Array.isArray(s) ? { name: '', data: s } : s));
  const fmt = formatValue || ((v) => String(v));

  const all = norm.flatMap((s) => s.data);
  const rawMin = Math.min(...all, 0);
  const rawMax = Math.max(...all, 1);
  const ticks = niceTicks(rawMin, rawMax);
  const min = ticks[0];
  const max = ticks[ticks.length - 1];

  const padL = showAxis ? 40 : 4;
  const padR = 6;
  const padT = 8;
  const padB = showAxis && labels.length ? 22 : 6;
  const w = Math.max(width, 120);
  const innerW = Math.max(w - padL - padR, 10);
  const innerH = Math.max(height - padT - padB, 10);

  const count = Math.max(...norm.map((s) => s.data.length), 1);
  const xAt = (i) => padL + (count === 1 ? innerW / 2 : (i / (count - 1)) * innerW);
  const yAt = (v) => padT + innerH - ((v - min) / (max - min || 1)) * innerH;

  return (
    <div ref={wrapRef} style={{ width: '100%', position: 'relative', ...style }}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${w} ${height}`}
        style={{ display: 'block', overflow: 'visible' }}
        onMouseLeave={() => setHover(null)}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * w;
          const i = Math.round(((x - padL) / innerW) * (count - 1));
          setHover(i >= 0 && i < count ? i : null);
        }}
      >
        <defs>
          {norm.map((s, si) => (
            <linearGradient key={si} id={`ds-line-fill-${si}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-fill-from)" />
              <stop offset="100%" stopColor="var(--chart-fill-to)" />
            </linearGradient>
          ))}
        </defs>

        {showGrid ? ticks.map((t) => (
          <line key={t} x1={padL} x2={w - padR} y1={yAt(t)} y2={yAt(t)}
                stroke="var(--chart-grid)" strokeWidth="1" />
        )) : null}

        {showAxis ? ticks.map((t) => (
          <text key={t} x={padL - 8} y={yAt(t) + 3} textAnchor="end"
                style={{ fontSize: 10, fill: 'var(--chart-axis)', fontFamily: 'var(--font-mono)' }}>
            {fmt(t)}
          </text>
        )) : null}

        {norm.map((s, si) => {
          const pts = s.data.map((v, i) => [xAt(i), yAt(v)]);
          const d = smooth ? smoothPath(pts) : pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ');
          const color = s.color || SERIES[si % SERIES.length];

          return (
            <g key={si}>
              {area && norm.length === 1 ? (
                <path d={`${d} L${xAt(s.data.length - 1)},${padT + innerH} L${xAt(0)},${padT + innerH} Z`}
                      fill={`url(#ds-line-fill-${si})`} stroke="none" />
              ) : null}
              <path d={d} fill="none" stroke={color} strokeWidth="1.75"
                    strokeLinecap="round" strokeLinejoin="round" />
              {hover !== null && s.data[hover] !== undefined ? (
                <circle cx={xAt(hover)} cy={yAt(s.data[hover])} r="3.5"
                        fill="var(--surface-raised)" stroke={color} strokeWidth="2" />
              ) : null}
            </g>
          );
        })}

        {hover !== null ? (
          <line x1={xAt(hover)} x2={xAt(hover)} y1={padT} y2={padT + innerH}
                stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="3 3" />
        ) : null}

        {showAxis && labels.length ? labels.map((l, i) => {
          const step = Math.ceil(labels.length / Math.max(Math.floor(innerW / 60), 2));
          if (i % step !== 0 && i !== labels.length - 1) return null;
          return (
            <text key={i} x={xAt(i)} y={height - 6}
                  textAnchor={i === 0 ? 'start' : i === labels.length - 1 ? 'end' : 'middle'}
                  style={{ fontSize: 10, fill: 'var(--chart-axis)' }}>{l}</text>
          );
        }) : null}
      </svg>

      {hover !== null ? (
        <div style={{
          position: 'absolute', top: 0,
          left: `${(xAt(hover) / w) * 100}%`,
          transform: 'translate(-50%, -100%)',
          padding: '5px 8px', borderRadius: 'var(--radius-inset)',
          background: 'var(--surface-inverse)', color: 'var(--text-inverse)',
          fontSize: 11, whiteSpace: 'nowrap', pointerEvents: 'none',
          boxShadow: 'var(--shadow-sm)',
        }}>
          {labels[hover] ? <span style={{ opacity: 0.7, marginRight: 6 }}>{labels[hover]}</span> : null}
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            {norm.map((s) => fmt(s.data[hover])).join(' · ')}
          </span>
        </div>
      ) : null}
    </div>
  );
}
