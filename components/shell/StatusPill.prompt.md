Where something is in a workflow.

```jsx
<StatusPill status="published" />
<StatusPill status="review" />
<StatusPill status="failed" />
<StatusPill status="syncing" label="Syncing" tone="info" />
```

The six common states carry their own label and tone, so a list of content stays
consistent without every caller re-deciding what colour "In review" is. Pass `label` and
`tone` for a state the presets do not cover.

**`StatusPill` for workflow position, `Badge` for everything else.** A pill answers "where
is this in the process"; a badge answers "what kind of thing is this". Plan tiers, counts
and labels are badges.

Always carries a dot, and the dot is not decoration — it means the state does not depend
on colour alone. Never remove it.

Pill-shaped rather than the chip radius, deliberately: it distinguishes workflow state
from a badge at a glance in a dense list.
