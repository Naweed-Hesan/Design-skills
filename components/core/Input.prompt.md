Single-line text entry. `onChange` hands you the string, not the event — the event is the
second argument if you need it.

```jsx
<Input value={q} onChange={setQ} placeholder="Search files" icon={<Icon name="search" />} />
<Input value={id} onChange={setId} mono placeholder="#3a5f7d" />
<Input value={name} onChange={setName} invalid />
```

Use `mono` for anything stored rather than written — ids, hex values, keys, amounts.

**A placeholder is not a label.** It disappears the moment someone types. If the field
needs naming, wrap it in `Field` (narrow panels, modals) or `FieldRow` (label-left forms).
Placeholders are for showing the expected *format*: "Search files", "you@company.com".

`invalid` draws a red border and nothing else. Always pair it with the message on `Field`
— a red outline does not tell anyone what is wrong.

For more than about two lines of expected input, use `Textarea`.
