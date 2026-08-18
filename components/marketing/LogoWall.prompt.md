Social proof by association.

```jsx
<LogoWall label="Trusted by teams at" logos={[
  { src: '/logos/acme.svg', name: 'Acme' },
  { name: 'Northwind' },
]} />
```

**Normalise by height, never by width.** Logos come in wildly different aspect ratios, and
matching widths makes a tall logo enormous and a wide one tiny. One height is what makes
the row look intentional.

`grayscale` is on by default and should usually stay on. A row of full-colour logos fights
everything around it and, worse, makes the page look like an ad. Desaturated, it reads as
texture supporting the claim.

Five to eight. Fewer looks thin; more turns into a pattern nobody reads. Put the most
recognisable first and last — those are the positions people actually see.

Only real customers. This component makes a factual claim, and the `label` above it is
that claim in words. If they are integrations rather than customers, say so in the label.
