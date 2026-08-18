Anything measured over time. The default chart for a trend.

```jsx
<LineChart series={[revenue]} labels={months} formatValue={v => `$${v}k`} />
<LineChart series={[{ name: 'Saves', data: a }, { name: 'Views', data: b }]} area={false} />
```

Axis ticks land on round numbers automatically, and x labels thin out as the chart
narrows, so it stays readable at any width.

**The area fill is only for a single series** — stacked translucent fills turn to mud. With
more than one line the component drops the fill on its own.

Series colours come from `--chart-1` through `--chart-6`, in order, and series 1 is the
accent. Past three lines a chart is usually unreadable; consider small multiples or a
table instead.

`smooth` is on by default and suits dense, continuous data. Turn it off for sparse or
spiky series, where a curve invents values between the points that were never measured.

When the shape alone is the message and the axis is noise, use `Sparkline`. When
categories are being ranked rather than tracked, use `BarChart`.
