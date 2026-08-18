# Templates

Two starting points. Which one you want is decided by the ask — see the routing table at
the top of `SKILL.md`.

## `canvas.dc.html`

A Claude Design canvas: an app shell with three screens, a theme toggle, and the brand
layer exposed as controls in the properties panel (accent, corners, density, theme).

Copy it beside a `support.js` and edit. The brand knobs are the part worth keeping — they
let someone retheme the design without touching code, and they are already wired to write
custom properties onto the root, so every corner and control height follows.

Grammar reference: `references/dc-canvas.md`.

## `kit/`

A running React prototype built from the component library — sidebar, page header, charts,
a sortable and selectable table, a settings screen with instant-apply switches.

Copy the folder and cut it down. Details in `kit/README.md`, conventions in
`references/react-kit.md`.

## Which to reach for

A canvas is faster to look at and cheaper to throw away, and someone can retheme it from
the properties panel. A kit is worth it once behaviour is the question — sorting,
filtering, selection, empty states — because those are the things a static mockup cannot
answer.
