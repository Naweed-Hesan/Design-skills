For a choice that takes effect when the surrounding form is saved, and for selecting rows.

```jsx
<Checkbox checked={gifs} onChange={setGifs} label="Include gifs" />
<Checkbox checked={all} indeterminate={some} onChange={selectAll} />
<Checkbox checked={v} onChange={setV} label="Make public"
          description="Anyone with the link will be able to view this." />
```

**`Checkbox` for deferred, `Switch` for instant.** If the change happens the moment
someone clicks — a setting, a preference, a filter — that is a `Switch`. If it is part of
a form with a Save button, it is a `Checkbox`. Getting this backwards is the most common
mistake in the whole system: a switch that does nothing until you press Save is a lie.

`indeterminate` is for a parent controlling children that are partly selected — a
select-all header when some rows are checked. It is a display state, not a third value;
clicking it should select everything.

Use `description` when the consequence is not obvious from the label. One sentence.
