One choice from a list, when there are enough options that showing them all would crowd
the layout.

```jsx
<Select value={board} onChange={setBoard} options={['Branding', 'Type', 'Product ui']} />
<Select value={plan} onChange={setPlan} placeholder="Choose a plan…"
        options={[{ value: 'pro', label: 'Pro — $24/mo' }]} fullWidth />
```

**Two to four options: use `SegmentedControl` instead** — seeing all the choices at once
is worth the space. Six or more, or options with long labels: `Select`. Five is a judgement
call; if the options are short, show them.

This is the native element with the system's chrome on it, which means it gets real
keyboard behaviour and the platform's own picker on mobile for free. Do not replace it
with a custom dropdown unless you need multi-select or option icons — and then it is a
different component, not this one with props bolted on.

Sort options the way someone would look for them: alphabetically for names, by magnitude
for ranges, by frequency for actions. Not by the order they appear in your database.
