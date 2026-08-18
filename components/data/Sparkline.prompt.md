The shape of a trend, where a full chart would not fit and the exact values are not the
point.

```jsx
<Sparkline data={last30} />
<Sparkline data={last30} color="var(--danger)" width={90} />
```

Lives inside a `MetricCard`, a table cell, or a list row — beside the number it describes,
never on its own. A sparkline with no number next to it is decoration.

**No axis, no grid, no labels.** If the reader needs values, they need a `LineChart`. The
whole point is that this is scanned, not read.

The end dot marks "now", which is where the eye should land. Keep it on unless the
sparkline is already adjacent to the current value.

Colour it by direction only when direction carries meaning — `--success` rising,
`--danger` falling — and only if you are also stating that in text. On its own, colour is
not a message.

It is `aria-hidden`, so the number beside it must carry the information.
