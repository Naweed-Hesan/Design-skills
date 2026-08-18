For actions where a label would be noise — toolbar controls, a close button, a row's
overflow menu, view switchers.

```jsx
<IconButton icon={<Icon name="settings" />} label="Settings" variant="bordered" />
<IconButton icon={<Icon name="grid" />} label="Grid view" variant="bordered" active />
<IconButton icon={<Icon name="more-horizontal" />} label="More actions" />
```

**`label` is required and is not decoration.** It is the accessible name and the tooltip.
An icon-only control with no label is unusable for anyone not already familiar with it.

Use `plain` inside a row or a card where the control should disappear until hovered, and
`bordered` in a toolbar where it should read as a control at rest.

`active` is for the selected member of a set — a view switcher, a tool picker. It uses the
accent tint, so only one member of a group should carry it.

If the action is important enough that people need to read what it does, it is a `Button`
with a label, not an `IconButton`.
