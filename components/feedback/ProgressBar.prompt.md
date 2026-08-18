Progress through something with a known end — an upload, a quota, a multi-step flow.

```jsx
<ProgressBar value={62} label="Uploading 14 files" valueLabel="62%" />
<ProgressBar value={238} max={250} tone="warning" label="Storage" valueLabel="238 of 250" />
<ProgressBar indeterminate size="sm" />
```

`valueLabel` is mono with tabular figures so it does not jitter as it counts.

**Drive `tone` from the value**, not by hand: accent while normal, warning near the limit,
danger at it. A quota bar that stays accent-coloured at 99% has told the person nothing.

`indeterminate` only when you truly cannot know — and if it runs for more than a few
seconds, say what is happening in text beside it. A bar sliding forever with no
explanation reads as a hang.

For a quota with an upsell attached, use `UsageMeter` — it pairs the bar with the limit
and the upgrade path.

Show the numbers whenever you have them. "238 of 250" is more useful than a bar, and the
bar makes it fast to read; together they work, alone the bar is decorative.
