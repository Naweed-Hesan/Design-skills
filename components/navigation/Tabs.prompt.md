Switching between views of the same subject — the sections of a settings page, the tabs of
a record.

```jsx
<Tabs items={['Overview', 'People', 'Billing']} value={tab} onChange={setTab} />
<Tabs value={tab} onChange={setTab} items={[
  { value: 'all', label: 'All', count: 248 },
  { value: 'drafts', label: 'Drafts', count: 12 },
]} />
```

**`Tabs` for views, `SegmentedControl` for a setting.** Tabs change what you are looking
at; a segmented control changes a property of what you are already looking at. Sort order
is a segmented control. "People vs Billing" is tabs.

Counts are useful when the number affects whether someone clicks — inbox counts, pending
items. **Omit the count rather than showing 0**; a row of zeroes is discouraging and tells
nobody anything.

Keep to about six. Past that people stop reading the row, and the content probably wants a
sidebar instead.

Tab labels are nouns, not verbs — "Billing" not "Manage billing".
