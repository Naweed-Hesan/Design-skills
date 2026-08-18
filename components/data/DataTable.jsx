import React from 'react';

/* Uses the system Checkbox rather than a native input, so selection matches
   every other control. The runtime resolves it off DS at render time, so
   load order between component files does not matter. */

export function DataTable({
  columns = [], rows = [], rowKey = 'id',
  sort, onSortChange, selectable = false, selected = [], onSelectedChange,
  onRowClick, empty, style,
}) {
  const keyOf = (row, i) => (typeof rowKey === 'function' ? rowKey(row) : row[rowKey] !== undefined ? row[rowKey] : i);
  const allSelected = rows.length > 0 && selected.length === rows.length;
  const someSelected = selected.length > 0 && !allSelected;

  const toggleAll = () => {
    if (!onSelectedChange) return;
    onSelectedChange(allSelected ? [] : rows.map(keyOf));
  };

  const toggleRow = (k) => {
    if (!onSelectedChange) return;
    onSelectedChange(selected.includes(k) ? selected.filter((x) => x !== k) : [...selected, k]);
  };

  if (!rows.length && empty) {
    return <div style={style}>{empty}</div>;
  }

  return (
    <div style={{ width: '100%', overflowX: 'auto', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
        <thead>
          <tr>
            {selectable ? (
              <th style={{ ...thStyle, width: 34, paddingLeft: 14 }}>
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                  aria-label="Select all rows"
                />
              </th>
            ) : null}

            {columns.map((col) => {
              const active = sort && sort.key === col.key;
              return (
                <th
                  key={col.key}
                  style={{
                    ...thStyle,
                    width: col.width,
                    textAlign: col.align || 'left',
                    cursor: col.sortable ? 'pointer' : 'default',
                  }}
                  onClick={() => {
                    if (!col.sortable || !onSortChange) return;
                    onSortChange({ key: col.key, dir: active && sort.dir === 'asc' ? 'desc' : 'asc' });
                  }}
                  aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}
                >
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    justifyContent: col.align === 'right' ? 'flex-end' : 'flex-start',
                  }}>
                    {col.label}
                    {col.sortable ? (
                      <svg className="ds-icon" width="11" height="11" viewBox="0 0 16 16" aria-hidden="true"
                           style={{ color: active ? 'var(--accent)' : 'var(--text-disabled)', opacity: active ? 1 : 0.5 }}>
                        <path d={active && sort.dir === 'desc' ? 'M3.5 6.3L8 10.8l4.5-4.5' : 'M3.5 9.7L8 5.2l4.5 4.5'} />
                      </svg>
                    ) : null}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => {
            const k = keyOf(row, i);
            const isSel = selected.includes(k);
            return (
              <Row
                key={k}
                row={row}
                columns={columns}
                selectable={selectable}
                isSelected={isSel}
                onToggle={() => toggleRow(k)}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '0 12px 9px',
  textAlign: 'left',
  fontSize: 11.5,
  fontWeight: 'var(--weight-regular)',
  color: 'var(--text-tertiary)',
  borderBottom: '1px solid var(--border-subtle)',
  whiteSpace: 'nowrap',
};

function Row({ row, columns, selectable, isSelected, onToggle, onClick }) {
  const [hover, setHover] = React.useState(false);

  return (
    <tr
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        background: isSelected ? 'var(--accent-softer)' : hover ? 'var(--surface-subtle)' : 'transparent',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background var(--duration-instant) var(--ease)',
      }}
    >
      {selectable ? (
        <td style={{ ...tdStyle, paddingLeft: 14 }} onClick={(e) => e.stopPropagation()}>
          <Checkbox checked={isSelected} onChange={onToggle} aria-label="Select row" />
        </td>
      ) : null}

      {columns.map((col) => (
        <td
          key={col.key}
          style={{
            ...tdStyle,
            textAlign: col.align || 'left',
            fontFamily: col.mono ? 'var(--font-mono)' : undefined,
            fontSize: col.mono ? 'var(--text-mono-size)' : undefined,
            fontVariantNumeric: col.mono ? 'tabular-nums' : undefined,
            color: col.muted ? 'var(--text-tertiary)' : 'var(--text-secondary)',
          }}
        >
          {col.render ? col.render(row) : row[col.key]}
        </td>
      ))}
    </tr>
  );
}

const tdStyle = {
  padding: '10px 12px',
  borderBottom: '1px solid var(--border-subtle)',
  verticalAlign: 'middle',
};
