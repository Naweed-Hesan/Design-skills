One action control for the whole system. Use it for every clickable command; reach for
`IconButton` only when a label would be redundant.

```jsx
<Button variant="primary" icon={<Icon name="plus" />}>Add files</Button>
<Button>Cancel</Button>
<Button variant="ghost" size="sm">Skip</Button>
<Button variant="danger" icon={<Icon name="trash" />}>Delete</Button>
```

**One primary button per view.** If two things look equally primary, neither is.
`secondary` is the default and the one you will use most. `ghost` is for tertiary actions
sitting beside a primary — Cancel, Skip, Dismiss. `accentSoft` marks a control as *active*
rather than as the main action; it is a state, not a rank.

Labels are sentence case and start with a verb: "Add files", "Publish", "Invite people".
Not "OK", not "Submit", not "Click here".

`danger` is for destructive actions only, and it is still a bordered button — a filled red
button is a fire alarm. Confirm destructive actions in a `Dialog`; do not rely on the
button's colour to do it.
