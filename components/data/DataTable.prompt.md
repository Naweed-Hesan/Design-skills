Rows of records that people scan, sort and compare.

```jsx
<DataTable
  rows={people} rowKey="id"
  sort={sort} onSortChange={setSort}
  selectable selected={selected} onSelectedChange={setSelected}
  empty={<EmptyState compact title="No people match these filters" />}
  columns={[
    { key: 'name', label: 'Name', sortable: true,
      render: r => <span style={{display:'flex',alignItems:'center',gap:8}}>
        <Avatar name={r.name} size="sm" />{r.name}</span> },
    { key: 'saves', label: 'Saves', align: 'right', mono: true, sortable: true },
    { key: 'seen', label: 'Last seen', muted: true },
  ]} />
```

**`mono` and `align: 'right'` on every numeric column.** That is what makes a column of
numbers comparable at a glance — the whole reason to use a table instead of cards.

The table reports sort intent; you do the sorting. That keeps it working with server-side
paging without a second code path.

Always pass `empty`. A table header over nothing is the most common unfinished state in
any interface.

Row click and selection coexist — the checkbox stops propagation. If rows are clickable,
make that obvious somewhere other than the cursor.

Keep to about six columns. Past that, move detail into an expandable row or a side panel;
horizontal scrolling in a table is where scanning goes to die.

When each row leads with a picture, `ContentListItem`-style rows read better than a table.
