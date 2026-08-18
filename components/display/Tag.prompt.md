A keyword a **person** applied — not a state the system assigned.

```jsx
<Tag>brutalism</Tag>
<Tag onRemove={() => remove('type')}>type</Tag>
<Tag onClick={() => filterBy('3d')} active={filter === '3d'}>3d</Tag>
```

Tags are bordered and transparent; badges are filled. That difference is doing real work —
a row of filled chips fights the content, and tags usually appear in rows.

Tags read **lowercase**, because that is how people type them and how they are stored.
Do not title-case them on the way out.

`onRemove` only where removing is genuinely available. In a read-only list — search
results, a public profile — leave it off; an X that does nothing is worse than no X.

`active` marks a tag currently filtering the view. Combined with `onClick` this makes a
tag row into a filter bar, which is usually better than a separate control.
