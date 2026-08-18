# Guidelines

Specimens of the foundations. Each one renders against **whatever brand layer is currently
loaded**, so after `cp presets/slate.css tokens/brand.css` these show the new system rather
than the old one.

Hex labels are read from the computed value of the token at render time, not hard-coded.
If a swatch shows the wrong colour, the token is wrong — not the specimen.

| | |
| --- | --- |
| `colors-surfaces.html` | The six surfaces, in both themes |
| `colors-text.html` | The four text steps on a raised surface |
| `colors-accent.html` | The ramp, and the three semantic roles |
| `colors-status.html` | Success, warning, danger, info |
| `colors-charts.html` | The six-series ramp |
| `type-display.html` | Display and headings |
| `type-body.html` | Body and UI text |
| `type-mono.html` | Mono and tabular figures in a table |
| `spacing-scale.html` | The 4px grid |
| `spacing-controls.html` | The three control heights |
| `radii.html` | Corner roles |
| `shadows.html` | Elevation |
| `motion.html` | The curve and the four durations — hover a tile |
| `icons.html` | The full icon set, read live from `Icon.jsx` |

`_specimen.css` and `_specimen.js` are shared chrome. `DSSpecimen.swatches()` builds a
swatch row from `[token, label]` pairs and labels each with its resolved value.
