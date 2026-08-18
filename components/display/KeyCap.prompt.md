A keyboard shortcut, written once and rendered correctly on every platform.

```jsx
<KeyCap combo="mod+shift+s" />   // ⇧⌘S on macOS · Shift Ctrl S elsewhere
<KeyCap combo="esc" />
<KeyCap combo="mod+k" platform="mac" />   // force, for a screenshot
```

**Never write ⌘ or Ctrl into a string.** Use `mod` and let it resolve — that is the entire
reason this component exists. A hard-coded ⌘ is wrong for most of the people reading it.

Modifier order differs by platform and is handled for you: macOS orders ⌃⌥⇧⌘, Windows
orders Ctrl Shift Alt. macOS also sets the caps tight together; elsewhere they are spaced.

Use `resolveKeys` directly when you need the strings rather than the markup — a native
menu, a tooltip, an aria-keyshortcuts attribute.

Show shortcuts where the action is, not in a list somewhere else: in the menu item, in the
tooltip, at the right edge of the command. A shortcut nobody sees is a shortcut nobody uses.
