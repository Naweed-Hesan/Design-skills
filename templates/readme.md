# Templates

Two starting points. Which one you want is decided by the ask — see the routing table at
the top of `SKILL.md`.

## `canvas.dc.html`

A Claude Design canvas: an app shell with three screens, a theme toggle, and the brand
layer exposed as controls in the properties panel (accent, corners, density, theme).

The brand knobs are the part worth keeping — they let someone retheme the design without
touching code, and they are already wired to write custom properties onto the root, so
every corner and control height follows.

**It needs a `support.js` beside it, and that file is not in this repo.** `support.js` is
Claude Design's rendering runtime — it is what interprets `<x-dc>`, the `{{ }}` bindings,
`sc-for` / `sc-if` and the `data-props` block. Claude Design supplies it when the canvas is
created there, so:

- **Inside Claude Design** — nothing to do. The runtime is already present.
- **Opened as a local file** — the page renders blank. That is expected, not a bug. Copy
  `support.js` from an existing Claude Design export into the same folder to preview it
  offline.

No copy is vendored here on purpose: the file is generated ("do not edit — rebuild with
`bun run build`") and a stale copy would break the template whenever the platform's runtime
moves on.

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
