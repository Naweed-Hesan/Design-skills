One number that matters, with its movement.

```jsx
<MetricCard label="Saves this week" value="2,481" delta={12.4} deltaLabel="vs last week"
            sparkline={<Sparkline data={last7} />} />

<MetricCard label="Error rate" value="0.8%" delta={-31} deltaLabel="vs last week" tone="negative" />
```

**`tone` matters more than it looks.** By default up is green. For error rate, churn, cost
or latency, down is the good direction — pass `tone="negative"` or the card will
congratulate someone on a rising failure rate.

**Always give `deltaLabel`.** "+12.4%" against nothing is not information. Against what,
over what period.

`value` is pre-formatted — "2,481", "$12.4k", "18%". The card sets tabular figures so a row
of these stays aligned, but the rounding and the units are yours.

Four to a row at most. A wall of twelve metric cards is a dashboard nobody reads; pick the
ones someone would act on.

The sparkline is optional and adds the shape behind the number — worth it when the path
matters, noise when the number alone is the answer.
