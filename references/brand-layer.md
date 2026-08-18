# The brand layer

Five decisions, made once at the start of a project, written into `tokens/brand.css`.
Everything else in the system follows from them.

Do this before you draw anything. Starting on the default teal and "fixing the colours
later" produces a project that looks like the last project with a hue swapped.

## 1 · Accent

The one hue that marks active, selected, or the single primary action.

Ask what the product *is* before picking. A finance tool and a photo library want
different confidence levels from their accent. Then build an 8-step ramp around it — not
by tinting toward white and black, which desaturates badly, but by moving lightness while
holding saturation and nudging hue slightly warmer as it darkens.

Wire up three steps and verify two pairs (`references/contrast.md`):

```
--accent-500   identity — borders, indicators, rules, small fills
--accent-600   one step darker, so white text on a filled control clears 4.5:1
--accent-700   darker still, for accent-coloured text on a light surface
--accent-300   the dark-theme value; on near-black this is the accessible one
```

Keep `--accent-rgb` and `--accent-rgb-dark` in sync with 500 and 300 — the soft fills,
selection colour and focus ring are alpha tints and need channels, not a hex.

**One accent.** If you find yourself wanting a second, what you actually want is a status
colour (already provided) or a chart series (already provided).

## 2 · Neutrals

The temperature of the whole thing, and the decision people underestimate.

The default ramps are **warm** — a touch of yellow-red in paper, ink and slate — which
sits under warm accents and reads as paper rather than screen. For a cool or technical
brand, shift the same hues the other way.

**Move hue, not lightness.** The lightness steps are load-bearing: they are what make the
text ratios in `references/contrast.md` hold. Re-tint them freely; do not restep them.

Note that `--ink-text-*` is a separate ramp, not `--slate-*` inverted. Dark surfaces need
a narrower contrast range or text glares.

## 3 · Typefaces

Two families. A third display face in an interface is almost always a mistake — earn it.

The sans **needs a real bold (700)**. Headings here are bold and tightly tracked; a family
topping out at 600 will look soft and the whole type system loses its spine. Check that
before falling in love with a typeface.

The mono is not decoration — it carries every number a reader compares down a column. It
needs tabular figures and a zero that cannot be confused with an O.

Whatever you pick, **update `tokens/fonts.css` too**. The stack in `brand.css` is a
reference; `fonts.css` is what actually fetches the files. Load only the weights you use.

## 4 · Corners

Pick one set and paste all its values. Mixing sets is what makes a system look assembled
rather than designed.

| Set | panel / control / media / inset | Reads as |
| --- | --- | --- |
| soft | 16 / 10 / 8 / 4 | friendly, current — the default |
| rounded | 22 / 14 / 12 / 6 | softer, more consumer |
| sharp | 6 / 4 / 4 / 2 | denser, more technical |

The relationship matters more than the numbers: controls round to roughly two thirds of
panels, media to about half. Keep that ratio if you invent a set.

## 5 · Density

Three control heights, and nothing between them.

| Set | sm / md / lg | For |
| --- | --- | --- |
| compact | 24 / 28 / 36 | dense tools, tables, admin |
| standard | 26 / 32 / 40 | the default |
| roomy | 32 / 40 / 48 | marketing, touch, consumer |

Density is not the same as spacing. The 4px grid does not change; what changes is how much
of it a control occupies.

## Presets

`presets/` holds finished brand layers. Copy one over `tokens/brand.css`:

```bash
cp presets/slate.css tokens/brand.css
```

| Preset | Accent | Neutrals | Corners | Density |
| --- | --- | --- | --- | --- |
| `teal.css` | teal — the default | warm | soft | standard |
| `slate.css` | blue-grey, restrained | cool | sharp | compact |
| `ember.css` | warm orange-red | warm | rounded | roomy |
| `iris.css` | violet | cool-neutral | soft | standard |

Each preset has been contrast-verified. If you edit one, re-verify.

## Sanity check

Before building, confirm all five:

- [ ] Accent ramp set, `--accent-rgb` and `--accent-rgb-dark` in sync with 500 and 300
- [ ] Both contrast pairs clear 4.5:1
- [ ] Neutrals re-tinted, lightness steps untouched
- [ ] Typefaces chosen **and** `tokens/fonts.css` updated to load them
- [ ] One corner set, all values from it
- [ ] One density set

Then open `guidelines/` — every specimen re-renders against whatever brand is loaded, so
you can see the whole system in the new skin before committing to it.
