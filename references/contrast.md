# Contrast

Verify this the moment you pick an accent, not at the end. A brand layer that fails here
produces an interface that has to be rebuilt, not retouched.

## The two pairs that matter

Every other pair in the system is already tuned. When you change the accent, exactly two
things can break:

| Pair | Must clear | Why |
| --- | --- | --- |
| `--text-on-accent` on `--accent-solid` | 4.5:1 | the label on a primary button |
| `--accent-text` on `--surface-raised` | 4.5:1 | links and accent-coloured text |

If either fails, do not lighten the text — darken the accent step. `--accent-solid` and
`--accent-text` exist precisely so you can push them darker without moving `--accent`,
which is the identity value and stays where your brand wants it.

## Why the accent has three roles

This is the single most common thing people get wrong when re-skinning, so it is worth
seeing the numbers. For the default teal:

```
--accent-500  #0B8B8E  on white   4.12:1   ← identity value, FAILS as text
--accent-600  #0A7E81  under white 4.87:1  ← --accent-solid, passes for a filled button
--accent-700  #0A7377  on white   5.63:1   ← --accent-text, passes for text
```

The hue you actually want as your brand colour usually cannot carry white text *and*
cannot be read as text on white. One step darker fixes the first, two steps fixes the
second. That is all the three roles are for.

Do not "solve" this by using `--accent` for everything and accepting 4.12:1. It is a real
failure that real people hit.

## Dark theme inverts the mapping

On a dark surface the **light** accent step is the accessible one:

```
--accent-300  #37B9B4  on #161616   7.55:1
--accent-900  #06201F  on #37B9B4   7.10:1   ← text on a filled control
```

So in dark theme `--accent`, `--accent-solid` and `--accent-text` all collapse to the same
light value, and `--text-on-accent` becomes the *darkest* step. `tokens/colors.css`
already does this. Do not mirror the light-theme mapping into the dark block.

## Verified defaults

Recompute these if you change the neutrals. Measured against `--surface-raised`.

```
Light (#FFFFFF)                     Dark (#161616)
  text-primary     19.80:1  AAA       text-primary     16.58:1  AAA
  text-secondary    8.90:1  AAA       text-secondary    8.69:1  AAA
  text-tertiary     4.70:1  AA        text-tertiary     4.68:1  AA
  text-disabled     2.83:1  exempt    text-disabled     exempt
```

Two consequences worth knowing:

- **Tertiary text belongs on raised surfaces.** On `--surface-canvas` (#F1F0EC) it drops
  to 4.12:1 — short of AA. Inside a panel it is fine; on the bare canvas, step up to
  `--text-secondary`.
- **Disabled text is exempt** under WCAG 1.4.3, which exempts inactive controls. It is
  meant to look unavailable. Do not "fix" it to 4.5:1 — that makes disabled look enabled.

Status colours all clear AA on their intended surface (5.30:1 to 6.35:1 on light, 5.43:1
to 8.29:1 on dark).

## Running it

```python
def lum(h):
    h = h.lstrip('#')
    c = [int(h[i:i+2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]

def ratio(a, b):
    la, lb = lum(a), lum(b)
    return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)

print(round(ratio('#FFFFFF', '#0A7E81'), 2))   # 4.87
```

Thresholds: **4.5:1** normal text · **3:1** text at 18.66px+ bold or 24px+, and UI
component boundaries · **7:1** for AAA.

## What is not covered by a ratio

- A 1px hairline at 8% opacity does not meet any contrast threshold and does not need to.
  It is decoration; the structure it implies is also carried by spacing and surface.
- Focus rings must be visible against **both** the control and the surface behind it.
  `--accent-ring` at 32% alpha is tuned for this — check it on a filled primary button,
  which is the hardest case.
- Placeholder text is not a label. If the only thing naming a field is its placeholder,
  the contrast is not the problem.
