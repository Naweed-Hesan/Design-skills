The shape of the content, while the content loads.

```jsx
<Skeleton height={180} radius="var(--radius-media)" />
<Skeleton circle height={28} />
<SkeletonText lines={3} />
```

**Skeletons for content, spinners for actions.** A page or a panel filling in gets
skeletons; a button you just pressed gets a spinner. A spinner where a list will appear
tells nobody what is coming.

Match the real shape — same heights, same widths, same number of rows. A skeleton that
does not match causes a visible jump when the content lands, which is worse than showing
nothing. `SkeletonText` ends its last line short for exactly this reason.

Only for the first load. When content is *refreshing* and something is already on screen,
leave it up and dim it slightly — replacing real content with grey bars is a step
backwards for the reader.

If loading is reliably under about 200ms, show nothing at all. A flash of skeleton is
noise.
