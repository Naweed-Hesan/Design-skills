import React from 'react';

export function MetricCard({
  label, value, delta, deltaLabel, sparkline, icon, tone = 'auto', style,
}) {
  const dir = delta === undefined || delta === null ? null : delta > 0 ? 'up' : delta < 0 ? 'down' : 'flat';
  const good = tone === 'auto' ? dir === 'up' : tone === 'positive';
  const deltaColor = dir === 'flat' || dir === null ? 'var(--text-tertiary)'
    : tone === 'neutral' ? 'var(--text-tertiary)'
    : good ? 'var(--success)' : 'var(--danger)';

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column',
        padding: 15,
        borderRadius: 'var(--radius-panel)',
        background: 'var(--surface-raised)',
        boxShadow: 'var(--shadow-md)',
        minWidth: 0,
        ...style,
      }}
    >
      {/* Label row carries the sparkline: the value row below needs its full
          width for the number and the delta, which must never wrap. */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
        {icon ? <span style={{ color: 'var(--text-tertiary)', display: 'flex' }}>{icon}</span> : null}
        <span style={{
          flex: 1, minWidth: 0, fontSize: 11.5, color: 'var(--text-tertiary)',
          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        }}>{label}</span>
        {sparkline ? <span style={{ flex: 'none', display: 'flex' }}>{sparkline}</span> : null}
      </div>

      <div style={{ marginTop: 8, minWidth: 0 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontSize: 25, lineHeight: 1.1,
            fontWeight: 'var(--weight-bold)',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            fontVariantNumeric: 'tabular-nums',
          }}>{value}</div>

          {dir ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 5, whiteSpace: 'nowrap' }}>
              {dir !== 'flat' ? (
                <svg className="ds-icon" width="12" height="12" viewBox="0 0 16 16" aria-hidden="true"
                     style={{ color: deltaColor }}>
                  <path d={dir === 'up' ? 'M2.5 11.2l4-4 2.4 2.4 4.6-4.6M9.6 5h4v4' : 'M2.5 4.8l4 4 2.4-2.4 4.6 4.6M9.6 11h4V7'} />
                </svg>
              ) : null}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                fontVariantNumeric: 'tabular-nums', color: deltaColor,
              }}>
                {delta > 0 ? '+' : ''}{delta}%
              </span>
              {deltaLabel ? (
                <span style={{ fontSize: 11, color: 'var(--text-disabled)' }}>{deltaLabel}</span>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
