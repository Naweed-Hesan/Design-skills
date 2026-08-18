Two to four exclusive options where seeing all of them is worth the space.

```jsx
<SegmentedControl options={['Day', 'Week', 'Month']} value={range} onChange={setRange} />
<SegmentedControl value={view} onChange={setView} options={[
  { value: 'grid', icon: <Icon name="grid" />, title: 'Grid' },
  { value: 'list', icon: <Icon name="list" />, title: 'List' },
]} />
```

**Six or more options: use `Select`.** The whole point is showing every choice at once, so
once the row starts wrapping or the labels start truncating, it is the wrong control.

Changes a property of what is on screen — a range, a sort, a view mode. If it changes
*what* is on screen, that is `Tabs`.

Icon-only segments still need naming: pass `title` so there is a tooltip and an accessible
name. Two icons with no labels is a guessing game for anyone new.

Order the options the way they are ordered in the world — Day / Week / Month, not
alphabetically. Put the most common first when there is no natural order.
