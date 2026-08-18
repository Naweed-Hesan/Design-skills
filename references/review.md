# Review

Run this before calling anything done. It is the difference between work that looks
finished and work that is finished.

## Tokens

1. **No hard-coded values.** Search the diff for `#`, `px` on a radius, and any control
   height. Colours are semantic tokens; radii are roles (`--radius-panel`); heights are
   `--control-*`. A raw hex outside `tokens/` or a canvas `:root` block is a bug.
2. **No ramp steps in components.** A component referencing `--accent-500` instead of
   `--accent` will not survive the theme swap.
3. **Spacing lands on the 4px grid.** Any gap not a `--space-*` step was eyeballed.

## Colour and theme

4. **Dark theme actually works.** Toggle it and look. Check specifically: shadows still
   present, hairlines visible but not glowing, accent still readable, images not sitting
   on a well that vanished.
5. **The two contrast pairs clear 4.5:1** — white on `--accent-solid`, `--accent-text` on
   `--surface-raised`. See `references/contrast.md`.
6. **Tertiary text is on a raised surface, not the canvas.** On `--surface-canvas` it
   drops to 4.12:1; step up to secondary there.
7. **One accent thing per view is actionable.** If two elements are accent-coloured and
   only one does something, the other should not be.

## Type

8. **Sentence case throughout.** No `text-transform: uppercase`, no letter-spaced
   micro-headings, anywhere.
9. **Headings are 700** with the tracking from the scale. No light headings.
10. **Compared numbers are mono** with tabular figures — anything scanned down a column.
    Long-form text caps at `--prose-max`.

## Interaction

11. **Every interactive element has a hover and a focus state**, and focus is visible
    against both the control and the surface behind it. Test on a filled primary button,
    which is the hardest case.
12. **Nothing is only conveyed by colour.** A red dot needs a label, an icon, or a
    position that means something.

## States

13. **Empty, loading and error states exist** for anything that loads. An empty state says
    what goes here and offers the action that puts something there. Content skeletons, not
    spinners.
14. **Long content degrades.** Check a 60-character name, a number in the millions, and a
    list with one item. Truncation is deliberate, with the full value reachable.

## Motion

15. **Nothing exceeds 220ms** except a single media zoom, and everything uses the one
    curve. The reduced-motion block is present and actually disables things.

## Last look

16. **Squint at it.** The most important thing on the screen should still be the most
    prominent. If the chrome is what survives the squint, the hierarchy is inverted.
