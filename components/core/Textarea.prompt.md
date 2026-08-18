Multi-line text entry — descriptions, notes, messages, anything longer than a phrase.

```jsx
<Textarea value={notes} onChange={setNotes} placeholder="What changed?" rows={4} />
<Textarea value={bio} onChange={setBio} maxLength={280} showCount autoGrow />
```

Use `autoGrow` when the text is the point (a message composer, a note field) and a fixed
box that scrolls would hide what someone wrote. Use fixed `rows` inside a dense form where
a growing field would push everything around.

`showCount` needs `maxLength` to mean anything. Only show a count when the limit is real
and someone can hit it — a counter on a field nobody fills is just noise.

For a single line, use `Input`. For rich text, this is not the component — you want an
editor, and it should still sit inside the same bordered container so it matches.
