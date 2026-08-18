One item at full size, with everything known about it.

```jsx
<Lightbox open={!!current} src={current?.url} title={current?.title}
          onClose={close} onPrev={prev} onNext={next}
          fields={[
            { label: 'Dimensions', value: '736 × 920', mono: true },
            { label: 'Size', value: '412 kb', mono: true },
            { label: 'Source', value: 'behance.net' },
          ]}
          actions={<><Button size="sm">Download</Button><Button size="sm" variant="ghost">Delete</Button></>} />
```

**Wire `onPrev` and `onNext`.** Arrow keys through a set is the whole reason a lightbox
beats opening a detail page — people came to look at several things, not one.

Closes on Escape and on the scrim. Both, always.

The sidebar is where metadata belongs, which is what keeps the wall itself clean. Measured
values are mono so they line up down the list.

The image is `object-fit: contain` and capped at 82vh — it is never cropped and never
pushes the sidebar off screen. Do not "fix" this to fill the frame; cropping someone's
image in the viewer is the one thing a viewer must not do.

For editing rather than viewing, use a `Dialog` or a full page. A lightbox is for looking.
