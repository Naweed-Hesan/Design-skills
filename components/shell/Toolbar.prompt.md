A row of controls that act on the content below it.

```jsx
<Toolbar
  left={<><IconButton icon={<Icon name="menu" />} label="Menu" />
          <SegmentedControl options={views} value={view} onChange={setView} /></>}
  right={<><IconButton icon={<Icon name="filter" />} label="Filter" variant="bordered" />
           <Button variant="primary" size="sm">Save</Button></>} />
```

**A toolbar holds actions; a `SidebarNav` holds places.** If clicking it takes you
somewhere else, it is navigation, not a toolbar control.

Group by function and separate groups with a vertical `Divider`, not by scattering things
across the width. Related controls sitting together is what makes a toolbar learnable.

Put destructive and rarely-used actions in a `ContextMenu` behind an overflow button.
Everything visible in a toolbar is competing for attention with everything else.

`center` is usually best left empty — a centred element in a toolbar shifts as the sides
change width, which makes the whole row feel unstable. Use it for a document title that
genuinely belongs in the middle, and little else.
