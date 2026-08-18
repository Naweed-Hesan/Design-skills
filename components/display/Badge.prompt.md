A state the **system** assigned: published, failed, pro, beta, 3 pending.

```jsx
<Badge tone="success" dot>Published</Badge>
<Badge tone="warning">Needs review</Badge>
<Badge tone="accent">Pro</Badge>
<Badge>Draft</Badge>
```

**`Badge` for system state, `Tag` for a keyword someone typed.** That is the whole
distinction and it decides which one you want. "Published" is a badge. "brutalism" is a
tag.

`dot` is for status scanned down a list — the dot gives the eye a fixed point at the start
of each row. Without a list to scan, it is just decoration.

Never rely on tone alone. `tone="danger"` plus the word "Failed" is a state; a red badge
saying nothing is a puzzle. Anyone who cannot distinguish the tones still needs to read
what happened.

Keep to one word where possible, two at most. A badge is a label, not a sentence.
