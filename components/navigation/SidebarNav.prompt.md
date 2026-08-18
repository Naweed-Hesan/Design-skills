The primary rail of an app shell — the top-level places someone can go.

```jsx
<SidebarNav
  value={screen} onChange={setScreen}
  header={<ProductMark />}
  footer={<AccountRow />}
  sections={[
    { items: [
      { value: 'all', label: 'All saves', icon: <Icon name="layers" />, count: 248 },
    ]},
    { label: 'Boards', items: boards.map(b => ({ value: b.id, label: b.name, count: b.count })) },
  ]} />
```

Group with section labels once there are more than about six destinations. The labels are
sentence case and tertiary — they are signposts, not headings.

**Counts belong here** more than almost anywhere else: they tell someone whether a place is
worth visiting before they go. In mono, so they line up down the rail. Omit rather than
showing 0.

The active item takes the accent tint. Exactly one item is active at a time — if your
routing can produce two, fix the routing.

`header` and `footer` are pinned; only the item list scrolls. Put the account row and the
storage meter in the footer so they stay reachable in a long list of boards.

This is for navigation. A rail of *actions* is a `Toolbar`.
