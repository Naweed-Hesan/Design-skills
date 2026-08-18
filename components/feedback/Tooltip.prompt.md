A few words naming or clarifying a control, on hover and on focus.

```jsx
<Tooltip label="Copy link"><IconButton icon={<Icon name="link" />} label="Copy link" /></Tooltip>
<Tooltip label="Uses your last export settings" side="right"><Button>Quick export</Button></Tooltip>
```

**Never the only place information appears.** Tooltips do not exist on touch, are missed by
anyone navigating quickly, and vanish the moment the pointer moves. Anything required to
use the control belongs on the surface.

Opens on focus as well as hover, so keyboard users get it too.

A few words. If you are writing a sentence, the interface is missing a description
somewhere — put it in a `Field` hint, a `Banner`, or the empty state.

`IconButton` already shows its `label` as a title, so it does not need wrapping unless you
want the styled tooltip and its delay.

The 350ms delay is deliberate: it stops a row of tooltips firing as the pointer crosses a
toolbar. Do not drop it to 0.
