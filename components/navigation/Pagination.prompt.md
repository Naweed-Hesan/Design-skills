Stepping through a long list in pages.

```jsx
<Pagination page={page} pageCount={20} onChange={setPage} totalLabel="248 files" />
```

Renders nothing when there is one page and no `totalLabel` — so you can leave it in the
layout without guarding it.

Page numbers are mono so they do not shift width as they change. The window keeps the
first page, the last page, and one either side of the current one; everything else
collapses.

**`totalLabel` is the useful half.** "248 files" tells someone how much there is; the page
numbers only tell them where they are in it. Include it whenever you know the count.

For a feed or a media wall, infinite scroll or a "Load more" button usually beats
pagination — people browsing do not think in pages. For tables, records and search
results, pagination is right: people want to come back to page 4.
