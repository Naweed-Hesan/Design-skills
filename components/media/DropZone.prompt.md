Where files get dragged.

```jsx
<DropZone onDrop={upload} onBrowse={openPicker} hint="png, jpg or gif up to 20 mb" />
```

**Always pass `onBrowse`.** Dragging is not available on touch, is awkward with assistive
technology, and is impossible if the file is not already visible on screen. The browse
link is not a fallback, it is the primary path for a lot of people.

`hint` states the limits **before** someone hits them. "png, jpg or gif up to 20 mb" costs
one line and prevents the most common upload failure.

The dashed border is the one dashed line in the system, and it earns it: it reads as "not
a thing, a place to put things".

For a whole-page drop target, drive `active` from a listener on the document and pass it
in, so the zone lights up wherever the pointer is. Do not put a permanent dashed box
around your entire app.

Show progress after the drop — a `ProgressBar` per file, or one for the batch. A drop that
appears to do nothing is the second most common upload complaint.
