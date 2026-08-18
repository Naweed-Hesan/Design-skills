# Starter kit

An app shell to copy and cut down. Three screens, real state, both themes.

| File | What it holds |
| --- | --- |
| `index.html` | Mounts the app and declares the card annotations |
| `data.js` | Sample data — realistic values and realistic lengths |
| `App.jsx` | The shell, plus the three screens |

## What is actually interactive

- Switching screens from the rail
- The theme toggle in the header
- Sorting the table by name or size, and selecting rows
- Searching items, with the active filter shown as a removable chip
- The settings switches, each firing a toast

## Using it

Copy the folder, then work outward from `App.jsx`. Screens compose components and hold
state; the moment a screen starts writing colours and paddings, that styling belongs in a
component.

`DSMount` loads the whole library into `DS` and then runs your files in order, sharing one
scope — so `data.js` can define what `App.jsx` uses, with no imports and no exports.

Files load relative to this folder; `root` points back at the design system.
