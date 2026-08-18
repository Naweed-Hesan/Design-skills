Controls that narrow a list, and a visible record of what is currently applied.

```jsx
<FilterBar
  resultLabel="184 of 2,481"
  active={[{ label: 'Plan: Pro', onRemove: clearPlan },
           { label: 'Last 30 days', onRemove: clearRange }]}
  onClear={clearAll}>
  <Input value={q} onChange={setQ} placeholder="Search people" icon={<Icon name="search" />} />
  <Select value={plan} onChange={setPlan} options={PLANS} placeholder="Any plan" />
</FilterBar>
```

**The active chips are the important half.** A filtered list that does not show what is
filtering it is how people conclude the data is missing. Every applied filter gets a chip,
every chip removes just itself, and "Clear all" removes the lot.

`resultLabel` says "184 of 2,481" rather than just "184" — the ratio is what tells someone
whether their filter is doing something reasonable.

When filters produce nothing, show an `EmptyState` that offers to clear them, not the
generic empty message. "No people match these filters" plus a Clear button is the correct
response; "No people" is a lie.

Keep filters on one row where you can. Past four controls, put the rare ones behind a
"More filters" popover.
