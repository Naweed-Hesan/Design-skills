A condition that is true right now and stays true until something changes.

```jsx
<Banner tone="warning" title="You are near your storage limit"
        action={<Button size="sm" variant="primary">Upgrade</Button>}>
  238 of 250 saves used. New saves will fail once you hit the limit.
</Banner>

<Banner tone="danger" title="Sync failed" action={<Button size="sm">Retry</Button>}>
  Last synced 2 hours ago.
</Banner>
```

**`Banner` for conditions, `Toast` for events.** If it stops being true on its own, it is a
toast. If it stays true until someone acts, it is a banner.

Put it where the condition applies — the affected panel, the top of the affected section.
A wall of banners at the top of every page is how people learn to ignore them.

**Give it the action that resolves it.** A warning with no way out is just anxiety.

`onDismiss` only where dismissing is honest. If the condition still exists after the X, it
will come back and the X was a lie. Errors that block work should not be dismissible.

`danger` gets `role="alert"` so it is announced immediately; the others are polite.
