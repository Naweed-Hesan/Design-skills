Three to six capabilities, side by side.

```jsx
<FeatureGrid features={[
  { icon: <Icon name="zap" size={18} />, title: 'One-click saving',
    description: 'Save any image from any page without leaving it.' },
  { icon: <Icon name="search" size={18} />, title: 'Search that works',
    description: 'Find anything by colour, source, or the words you tagged it with.' },
]} />
```

**Prefer `variant="plain"`.** Open features on the page breathe; a wall of cards adds
twelve borders and twelve shadows to say nothing. Use `card` only when the grid sits on a
busy background and needs its own surface.

Titles are what the feature *does*, short: "One-click saving", "Search that works". Not
"Powerful search capabilities".

Descriptions are one or two sentences about why it matters to the reader. Not a spec.

Three or six reads best; four is fine. Five leaves an orphan on the second row at most
widths — either cut one or add one.

Icons are optional and mostly decorative here. If you cannot find an icon that genuinely
means the feature, leave it out rather than reaching for a vaguely-related glyph.
