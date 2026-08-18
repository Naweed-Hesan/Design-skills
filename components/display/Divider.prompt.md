A hairline, at 6% opacity by default.

```jsx
<Divider spacing={16} />
<Divider label="Older" spacing={20} />
<Divider vertical spacing={8} />   // between toolbar controls
```

**Reach for spacing first.** Most rules people add are doing a job that whitespace already
does better. A divider earns its place when two things are genuinely different in kind,
not merely adjacent.

`label` is for breaking a list by time or category — "Today", "Last week", "or". The rule
runs to both sides so the label reads as part of the structure.

`vertical` needs a flex parent with a height to stretch into; it will collapse otherwise.

Never stack a divider next to a card's own border, and never use one to separate rows that
already have their own bottom rule. Two lines a few pixels apart is the most common
symptom of a layout that stopped being designed.
