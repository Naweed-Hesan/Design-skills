Someone else saying the thing you cannot say about yourself.

```jsx
<Testimonial size="lg"
  quote="We stopped losing references the week we switched. That is the whole review."
  name="Ada Lovelace" role="Design lead, Acme"
  avatar={<Avatar name="Ada Lovelace" size="lg" />} />
```

**The role is where the credibility lives.** "Ada Lovelace" persuades nobody; "Design lead
at Acme" persuades someone with the same job. Always include it. An unattributed quote is
worse than no quote — it reads as invented.

Quotes are capped at `--prose-max` like all long-form text, no matter how wide the
section.

No decorative quotation marks, no giant typographic apostrophe. It is a `blockquote`; the
markup carries the meaning and the design does not need to shout it.

`size="lg"` for one quote carrying a section. `md` for a row of three. Do not mix sizes in
one row.

Use their words, including the awkward ones. A quote edited into marketing copy stops
sounding like a person, which defeats the point.
