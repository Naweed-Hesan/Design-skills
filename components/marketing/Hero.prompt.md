The top of a marketing page. The one place in the system where type gets genuinely large.

```jsx
<Hero
  title="Every image you save, in one place"
  lead="Save from any page in one click. Find it again in seconds."
  actions={<><Button variant="primary" size="lg">Get started</Button>
             <Button size="lg">See how it works</Button></>}
  note="Free for 250 saves. No card required." />
```

**The title says what the product does**, in words someone could repeat to a colleague.
Not a slogan, not a pun, not "Reimagine your workflow". If the reader cannot tell what
this is from the title and lead, nothing further down will rescue it.

The lead caps at `--prose-max` even on a 1400px page, because a line of text 1200px wide
is unreadable. That cap is not negotiable.

**One primary action.** A second, quieter one is fine — "See how it works". Three buttons
means the page has not decided what it wants.

`note` is where "No card required" goes. It removes the main objection to clicking, and it
belongs directly under the button, not in the footer.

Passing `media` switches to a two-column layout and ignores `align` — a split hero is
always left-aligned, because centred text beside an image reads as a mistake.

`--text-hero-size` is a clamp, so it scales with the viewport without breakpoints.
