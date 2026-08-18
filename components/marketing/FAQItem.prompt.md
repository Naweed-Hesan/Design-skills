The questions people actually ask before buying.

```jsx
<div>
  <FAQItem question="What happens when I hit the free limit?" defaultOpen>
    Saving stops until you upgrade or delete some saves. Nothing is deleted for you.
  </FAQItem>
  <FAQItem question="Can I cancel any time?">Yes, and you keep access until the period ends.</FAQItem>
</div>
```

**Write the questions people ask, in their words** — including the uncomfortable ones.
"What happens when I hit the free limit?" and "Can I get my data out?" are the questions
that decide purchases. An FAQ that only answers flattering questions is marketing copy
wearing a disguise.

Answers are direct and cap at `--prose-max`. Lead with the answer, then the detail: "Yes,
and you keep access until the period ends" — not three sentences of context first.

Open the first one by default so the section does not read as a wall of closed doors.

Six to eight questions. Beyond that, the page is missing an explanation somewhere higher
up, and people should not have to open ten accordions to understand the product.

Each item manages its own state unless you pass `open` — pass it when only one should be
open at a time.
