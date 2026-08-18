A wall of images at their own aspect ratios — a library, a gallery, search results.

```jsx
<MasonryGrid columns={4}>
  {items.map(i => <MediaCard key={i.id} {...i} />)}
</MasonryGrid>

<MasonryGrid minColumnWidth={220} />   // responsive
```

**Keep the gutter tight.** The default `--grid-gap` is small on purpose: a dense wall
reads as one surface of imagery, which is the point. Wide gutters turn it into a grid of
separate cards and the images stop talking to each other.

Uses CSS columns, so items flow top-to-bottom then across. That means **reading order is
by column, not by row** — fine for a browsable wall, wrong for anything ranked. If order
matters to the reader, use a regular grid.

`minColumnWidth` instead of `columns` when the container width varies; columns are added
as room allows and nothing has to be measured.

Only for items of genuinely varying height. Uniform thumbnails in a masonry layout is just
a grid with extra steps — use `display: grid`.
