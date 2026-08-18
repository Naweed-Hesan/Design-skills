Never leave a blank panel. Every list, table, grid and search result needs one of these.

```jsx
<EmptyState
  icon={<Icon name="folder" size={20} />}
  title="No saves in this board yet"
  description="Drag images here, or use the extension to save from any page."
  action={<Button variant="primary" icon={<Icon name="plus" />}>Add files</Button>} />

<EmptyState compact title="No results for “brutalism”"
  description="Try a shorter word, or clear the filters." />
```

**The title says what goes here — not that nothing is here.** "No saves in this board yet"
beats "Empty". "No results for X" beats "No data". The person can already see it is empty;
what they need is what to do about it.

**Give them the action.** An empty state with a button that fills it is helpful; one that
just describes the void is not. The exception is a search with no results, where the
action is to change the search — say that instead.

Three distinct cases, three different messages: nothing created yet (offer the create
action), nothing matches the filter (offer to clear it), nothing loaded because of an
error (say what failed and offer retry). Using one message for all three is the common
mistake.

Use `compact` inside a card or a table body, where the full padding would push the layout
around.
