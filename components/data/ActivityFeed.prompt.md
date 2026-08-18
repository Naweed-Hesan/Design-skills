Who did what, when — audit logs, comment threads, version history, notifications.

```jsx
<ActivityFeed items={[
  { actor: 'Ada', action: 'published', target: 'Spring campaign',
    time: '2 hours ago', avatar: <Avatar name="Ada Lovelace" size={24} /> },
  { action: 'Sync completed', time: 'Yesterday', icon: <Icon name="refresh" size={13} /> },
]} />
```

The sentence is built from three parts — **actor, action, target** — so the eye lands on
who and what, with the verb quiet between them. Keep the action a plain verb phrase:
"published", "invited 3 people to", "deleted". Not "has published" and not "PUBLISH_EVENT".

System events with no person behind them use `icon` instead of `avatar`. That difference
is worth preserving: people can tell at a glance which changes were human.

Times are relative, because that is how people think about recent activity. Put the
absolute timestamp in a `title` so it is available on hover.

`detail` is for the payload — the comment text, the changed value. Keep it to a couple of
lines; a feed of long details is a list, not a feed.

Newest first, always.
