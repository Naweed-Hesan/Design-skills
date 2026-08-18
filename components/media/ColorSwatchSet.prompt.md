A palette — colours pulled from an image, or a brand's set.

```jsx
<ColorSwatchSet colors={['#0b8b8e', '#3a5f7d', '#c08a2e']} onCopy={copy} />
<ColorSwatchSet columns={5} colors={brand} size={56} />
```

**Hex values read lowercase and in mono**, because that is how they are stored and how
they get compared down a column. Do not uppercase them.

Each swatch carries an inset hairline so white and near-white stay visible against the
panel. That is not decoration — without it, `#ffffff` disappears.

`onCopy` is worth wiring whenever the values are useful elsewhere. Copying a hex is the
main thing people do with a palette. Confirm it with a `Toast`.

Give swatches names when they have them ("Accent", "Paper"). An unnamed grid of hexes is a
reference; a named one is a system.
