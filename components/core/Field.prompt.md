Wraps a control with its label and its message.

```jsx
<Field label="Board name" hint="Shown in the sidebar.">
  <Input value={name} onChange={setName} />
</Field>

<Field label="Email" error="That address is already in use.">
  <Input value={email} onChange={setEmail} invalid />
</Field>

<FieldRow label="Storage location" hint="Where new saves are written.">
  <Select value={loc} onChange={setLoc} options={LOCATIONS} />
</FieldRow>
```

**`Field` stacks, `FieldRow` sits label-left.** Use `Field` in narrow panels, modals and
sidebars where a label column would not fit. Use `FieldRow` in wide settings pages, where
a column of labels gives the eye something to scan.

`error` replaces `hint` when it appears, so the row does not jump. Write errors that say
what to do next — "That address is already in use" not "Invalid input", "Pick a date after
today" not "Bad value".

`required` marks the exceptions. If every field is required, mark nothing and say so once
at the top; a form of asterisks tells nobody anything.
