One plan, in a row of two to four.

```jsx
<PricingCard name="Pro" price="$24" description="For people who save every day."
  featured badge="Most popular"
  action={<Button variant="primary" fullWidth size="lg">Start free trial</Button>}
  features={['Unlimited saves', 'Colour search', 'Shared boards',
             { label: 'Priority support', included: false }]}
  note="Billed monthly. Cancel any time." />
```

**Feature lists must be parallel across cards.** The same features in the same order, so
the eye can compare down a column. A cheaper plan omitting a row entirely, rather than
marking it excluded, makes comparison impossible — that is what `included: false` is for.

**At most one `featured` card.** Featuring everything features nothing.

Prices use tabular figures so "$9" and "$24" align down the row. Pass them pre-formatted;
pass `period=""` for a free or one-off plan rather than showing "Free/mo".

Every card gets exactly one button, and they should all be the same size. A row where one
plan has a big button and another has a text link is a row that has decided for the reader.

`note` is pinned to the bottom so cards with different feature counts still line up their
small print. Put billing terms there, not in a footnote nobody reads.
