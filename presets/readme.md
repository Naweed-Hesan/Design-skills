# Presets

Finished brand layers. Copy one over `tokens/brand.css` to reskin the whole system:

```bash
cp presets/slate.css tokens/brand.css
```

Then update `tokens/fonts.css` to load the typefaces the preset names — the stack in the
preset is a reference, `fonts.css` is what actually fetches the files.

| Preset | Accent | Neutrals | Corners | Density | Suits |
| --- | --- | --- | --- | --- | --- |
| `teal.css` | greenish-blue | warm | soft 16/10/8 | standard 26/32/40 | the default |
| `slate.css` | restrained blue | cool | sharp 6/4/4 | compact 24/28/36 | dense tools, admin |
| `ember.css` | orange-red | warm | rounded 22/14/12 | roomy 32/40/48 | consumer, marketing |
| `iris.css` | violet | cool-neutral | soft 16/10/8 | standard 26/32/40 | creative tools |

All four are contrast-verified:

```bash
python3 scripts/check-contrast.py presets/*.css
```

If you edit one, re-run it. The checker exits non-zero on failure, so it works in a hook.

One note it will report on every preset: **tertiary text on the canvas surface** lands
between 4.0 and 4.4:1. That is expected and not a failure — tertiary is specified for
raised surfaces. On the bare canvas, step up to `--text-secondary`.
