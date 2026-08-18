One image on a wall.

```jsx
<MediaCard src={item.url} title={item.title} meta="736 × 920 · 412 kb"
           selected={sel.has(item.id)} onSelect={() => toggle(item.id)}
           onClick={() => openLightbox(item)} />
```

**No border, no caption, no badge at rest.** The image is the interface; everything else
appears on hover or in a panel. A wall where every tile has a visible label is a wall
nobody looks at.

Leave `ratio` off in a `MasonryGrid` — the natural aspect ratio is the entire reason for
masonry. Set it only for a uniform grid where consistency matters more.

`meta` is mono because it is measurements and sizes — things read, not prose.

The hover zoom is the one place this system exceeds 220ms (`--duration-media`). It is
slow on purpose; a fast zoom on an image feels twitchy.

`alt` falls back to `title`. Pass `alt=""` only when the image is genuinely decorative,
which on a media wall it almost never is.
