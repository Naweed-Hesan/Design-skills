A popover of actions on one thing — a row's overflow menu, a card's actions.

```jsx
<ContextMenu open={open} onClose={() => setOpen(false)} anchor="right" items={[
  { label: 'Open', icon: <Icon name="external-link" />, onSelect: open },
  { label: 'Rename', shortcut: resolveKeys('mod+r').join(''), onSelect: rename },
  '-',
  { label: 'Delete', tone: 'danger', icon: <Icon name="trash" />, onSelect: remove },
]}>
  <IconButton icon={<Icon name="more-horizontal" />} label="More actions" onClick={() => setOpen(v => !v)} />
</ContextMenu>
```

Wraps its own trigger, so it positions itself. You own the open state — that way one
handler can close every menu on the page.

Closes on select, outside click, and Escape. All three, always.

**One destructive item, at the bottom, after a separator.** Never put Delete next to a
common action; people click by position once they know a menu.

Keep to about seven items. A long menu is a sign the actions want grouping, or that some
of them belong on the surface where people can see them.

Shortcuts go through `resolveKeys` so they read correctly per platform. Never type ⌘ into
a label.
