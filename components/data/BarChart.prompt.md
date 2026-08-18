Comparing categories against each other.

```jsx
<BarChart data={[['pinterest.com', 84], ['behance.net', 52]]} formatValue={v => `${v}%`} />
<BarChart orientation="vertical" data={byMonth} height={160} />
```

**Horizontal for ranked categories, vertical for time buckets.** Horizontal is the default
and usually right: labels get real room instead of being turned sideways, and a ranked
list reads top to bottom the way people expect. Reach for vertical only when the x axis is
time and the order is inherent.

**Sort descending** unless the order means something. An unsorted bar chart makes the
reader do the ranking that the chart was supposed to do.

Values sit at the right in mono with tabular figures, so they form a column that can be
compared directly — often the fastest read in the whole chart.

`colorByIndex` only when categories are unordered and distinguishing them matters. For a
ranked list, one colour is correct; a rainbow implies a grouping that is not there.

Bars start at zero. Always. A truncated axis on a bar chart misrepresents the comparison
the bars exist to make.
