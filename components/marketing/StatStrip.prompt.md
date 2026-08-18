Three or four numbers that make a claim concrete.

```jsx
<StatStrip stats={[
  { value: '2.4m', label: 'Images saved' },
  { value: '18k', label: 'Active people' },
  { value: '99.9%', label: 'Uptime' },
]} />
```

**Round hard.** "2.4m" not "2,417,882". Precision here reads as instrumentation, not
scale — and an exact number that never changes reads as fake.

Three or four. Two looks like you ran out; five is a dashboard.

Every number needs a label that says what it counts. "18k" alone is meaningless, and a
label like "Users" is barely better than none — "Active people this month" is a claim
someone can evaluate.

Only real, current numbers. This component's entire job is credibility, and one number a
reader doubts costs you the other three.

Tabular figures, so the row does not shift as the numbers change.
