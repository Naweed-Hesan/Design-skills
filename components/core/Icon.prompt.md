The only icon source in the system. Every icon is a line glyph on a 16x16 grid at
stroke-width 1.5.

```jsx
<Icon name="plus" />
<Icon name="search" size={15} />
<Icon name="folder" size={20} />   // empty states
```

**Sizes:** 13–15px inside controls, 18–22px in empty states and feature blocks. Nothing
larger — an oversized line icon reads as an illustration that did not arrive.

Never draw a custom path inline, never use an emoji as an icon, and never mix a filled
icon set in. If a glyph you need is missing, add it to the `PATHS` map in `Icon.jsx` on
the same 16x16 grid so it matches everything else.

Icons are decorative by default (`aria-hidden`). When an icon is the only content of a
control, the control supplies the label — see `IconButton`.
