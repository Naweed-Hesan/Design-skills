# Producing a Claude Design canvas

A `.dc.html` file is one design document that Claude Design renders live and lets a person
edit visually. It is HTML with three additions: a template wrapper, expression bindings,
and a props block that turns chosen values into controls in the properties panel.

Everything below is drawn from a working document — this is the grammar the runtime
actually implements, not a general-purpose templating language.

## Skeleton

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script src="./support.js"></script>
</head>
<body>
<x-dc>

<helmet>
  <!-- anything that belongs in <head>: font links, the <style> block -->
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
  <style>
    :root { --accent:#0B8B8E; /* … */ }
    [data-theme="dark"] { --accent:#37B9B4; /* … */ }
  </style>
</helmet>

<div style="height:100vh;display:flex;flex-direction:column;background:var(--bg)">
  <!-- the design -->
</div>

</x-dc>

<script type="text/x-dc" data-dc-script data-props="{ … }">
  // state and handlers, plain JS
</script>
</body>
</html>
```

`support.js` is the runtime and sits beside the file. `<x-dc>` wraps the template;
`<helmet>` is hoisted into the document head.

## Bindings

`{{ expr }}` interpolates anywhere — text content or an attribute value. Names resolve
against whatever the script block exposes.

```html
<span>{{ fileCount }} files</span>
<div style="{{ rowStyle }}"></div>
<button onClick="{{ save }}">Save</button>
```

An attribute that is *entirely* one binding receives the real value (a function, an
object, a number). Mixed text stringifies.

### Lists

```html
<sc-for list="{{ boardRows }}" as="b" hint-placeholder-count="6">
  <div onClick="{{ b.go }}" style="{{ b.style }}">
    <span>{{ b.name }}</span>
    <span>{{ b.count }}</span>
  </div>
</sc-for>
```

`as` names the item; `$index` is available inside. `hint-placeholder-count` tells the
renderer how many skeleton rows to draw while the document is still streaming in — set it
to a realistic count so the layout does not jump.

### Conditionals

```html
<sc-if value="{{ isDark }}" hint-placeholder-val="{{ false }}">
  <svg><!-- moon --></svg>
</sc-if>
<sc-if value="{{ isLight }}" hint-placeholder-val="{{ true }}">
  <svg><!-- sun --></svg>
</sc-if>
```

`hint-placeholder-val` is the value assumed during streaming. Give the branch you want
drawn first. `<sc-else>` is available for a straight either/or.

### Hover and other states

Inline styles cannot express `:hover`, so state styles are their own attribute. The value
is a JS object; the runtime compiles it into a real class.

```html
<button
  style="color:var(--fg2);border:1px solid var(--line);transition:color 0.18s var(--ease)"
  style-hover="{color:'var(--fg)',borderColor:'var(--fg3)'}">
  Settings
</button>
```

The form is `style-<pseudo>`, so `style-focus` and `style-active` work the same way.
Always pair a state style with a `transition` on the base style.

### Attribute names

Written as HTML, compiled to React: `class` → `className`, `for` → `htmlFor`, and
lowercase handlers (`onclick`, `onchange`, `oninput`, `onkeydown`, `onmouseenter`, …) map
to their camelCase equivalents. Writing `onClick` directly also works and reads better.

## The props block — where the brand layer becomes editable

This is the part worth getting right. `data-props` is JSON that declares which values
appear as controls in the properties panel. Someone can then retheme the design without
touching code.

```json
{
  "$preview": { "width": 1440, "height": 900 },

  "accent":  { "editor": "color", "default": "#0B8B8E", "tsType": "string",
               "options": ["#0B8B8E", "#2A7F9E", "#8A5C9E", "#B4674A"],
               "section": "Brand" },
  "corners": { "editor": "enum", "default": "Soft",
               "options": ["Soft", "Rounded", "Sharp"],
               "tsType": "string", "section": "Brand" },
  "density": { "editor": "enum", "default": "Standard",
               "options": ["Compact", "Standard", "Roomy"],
               "tsType": "string", "section": "Brand" },
  "gridGap": { "editor": "range", "default": 4, "min": 0, "max": 16, "step": 1,
               "unit": "px", "tsType": "number", "section": "Layout" },
  "columns": { "editor": "int", "default": 4, "min": 3, "max": 6,
               "tsType": "number", "section": "Layout" },
  "motion":  { "editor": "enum", "default": "Subtle", "options": ["Subtle", "Off"],
               "tsType": "string", "section": "Behavior" }
}
```

It is a plain HTML attribute, so the JSON must be entity-escaped (`&quot;`) in the file.

| Key | Meaning |
| --- | --- |
| `$preview` | the document's canvas size |
| `editor` | `color` · `enum` · `range` · `int` |
| `default` | starting value |
| `options` | enum choices, or colour swatches offered beside the picker |
| `min`/`max`/`step`/`unit` | numeric bounds and the suffix shown |
| `section` | groups controls under a heading in the panel |
| `tsType` | the value's type |

**Expose the brand layer, every time.** At minimum `accent`, `corners` and `density` —
the same three decisions from `references/brand-layer.md`. Then read them in the script
block and write them onto the root:

```js
const CORNERS = { Soft: [16,10,8], Rounded: [22,14,12], Sharp: [6,4,4] };
const DENSITY = { Compact: [24,28,36], Standard: [26,32,40], Roomy: [32,40,48] };

const [rLg, rMd, rSm] = CORNERS[corners] || CORNERS.Soft;
const [cSm, cMd, cLg] = DENSITY[density] || DENSITY.Standard;
const root = { '--accent': accent, '--r-lg': rLg + 'px', '--r-md': rMd + 'px',
               '--r-sm': rSm + 'px', '--c-sm': cSm + 'px', '--c-md': cMd + 'px',
               '--c-lg': cLg + 'px' };
```

Apply `root` as the style on the outermost element. Now every corner and control height in
the document follows the panel.

## Tokens inside a canvas

A `.dc.html` is standalone — it cannot `@import` `styles.css`. Inline a condensed token
set in the `<helmet>` `<style>`, keeping the same semantic names so the design stays
portable back to the full system. The short forms used in practice:

```
--bg --panel --panel2 --sunk      surfaces
--line --line-soft                hairlines
--fg --fg2 --fg3                  text, three steps
--accent --accent-ink --accent-soft
--shadow --shadow-sm
--r-lg --r-md --r-sm              corners
--ease                            the one curve
```

Define both themes — `:root` and `[data-theme="dark"]` — and give the design a theme
toggle. A canvas that only works in light is half-finished.

## Multiple screens

There are no separate artboards inside one document. A multi-screen flow is state: hold
the current screen in the script block and gate each one with `sc-if`.

```html
<sc-if value="{{ isLibrary }}" hint-placeholder-val="{{ true }}">…</sc-if>
<sc-if value="{{ isSettings }}">…</sc-if>
```

Put a row of screen tabs in the chrome so every screen is one click away. That is what
makes a canvas reviewable.

## Checklist

- [ ] `$preview` matches the real target size
- [ ] Brand controls exposed — accent, corners, density at minimum
- [ ] Both themes defined, and a visible toggle
- [ ] Every `sc-for` has a realistic `hint-placeholder-count`
- [ ] Every `sc-if` that should render first has `hint-placeholder-val`
- [ ] Every `style-hover` has a matching `transition` on the base style
- [ ] Reduced-motion block present in the `<style>`
- [ ] No hard-coded hex outside the `:root` / `[data-theme]` blocks
