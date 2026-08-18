The closing ask, once, at the bottom of the page.

```jsx
<CTABanner
  title="Start saving in about a minute"
  description="Install the extension, save your first image, and see if it sticks."
  actions={<Button size="lg" style={{ background: 'var(--surface-raised)',
                                      color: 'var(--accent-text)', border: 0 }}>Get started</Button>}
  note="Free for 250 saves. No card required." />
```

**One per page.** A CTA banner repeated three times down a page is a page that does not
trust its own content.

On `variant="accent"` the fill is already the accent, so a primary button would vanish
into it. Use a light button that reads *against* the fill — that is why the example
overrides the background. `variant="surface"` is the quieter option and takes a normal
primary button.

The title is what the reader does next, not what you want: "Start saving in about a
minute", not "Sign up today". Say how long it takes if it is genuinely short.

`note` handles the objection right at the decision point — pricing, cancellation, no card.
It belongs here, not three sections up.
