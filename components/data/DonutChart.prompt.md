Parts of a whole, when there are three or four parts and the whole is meaningful.

```jsx
<DonutChart
  data={[['Branding', 84], ['Type', 52], ['3d', 31], ['Other', 18]]}
  centerValue="185" centerLabel="saves" />
```

**Three or four segments. Past six it is unreadable** — the small slices become slivers
nobody can compare. Rank them with a horizontal `BarChart` instead, which stays legible at
any count.

Humans compare angles badly, which is why the legend carries percentages and the centre
carries the total. Those numbers, not the ring, are what people actually read; the ring
tells them roughly how it splits.

**Put the total in the hole.** A donut with an empty centre wastes the one place the eye
goes first.

If the parts do not sum to a meaningful whole, this is the wrong chart — a donut asserts
that they do.

For a single proportion — used vs remaining — a `ProgressBar` or `UsageMeter` is clearer
and takes a fraction of the space.
