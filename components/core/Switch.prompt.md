A setting that takes effect the moment it is flipped. No Save button, no confirmation.

```jsx
<Switch checked={dark} onChange={setDark} />

<Switch checked={sync} onChange={setSync}
        label="Sync across devices"
        description="Changes appear on every device signed in to this account." />
```

**Passing a `label` gives you the entire settings row** — label and description on the
left, switch on the right, correct padding, whole row clickable. Do not build that row
yourself; that is what this prop is for.

If the change needs saving, it is a `Checkbox` in a form. A switch that waits for a Save
button is broken behaviour, no matter how it looks.

Labels name the thing being switched on, as a noun or a state — "Sync across devices",
"Public profile". Not "Enable syncing" and never "Turn on sync?". The description says
what actually changes, in one sentence.

Never disable a switch without saying why nearby. A dead toggle with no explanation reads
as a bug.
