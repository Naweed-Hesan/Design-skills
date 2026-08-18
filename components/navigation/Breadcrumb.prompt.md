Where you are in a hierarchy that is deeper than two levels, and how to get back up.

```jsx
<Breadcrumb items={path} onNavigate={goTo} />
```

**Only for real hierarchies** — folders, nested categories, a file path. If your app is
flat, a breadcrumb inventing depth is worse than nothing. Two levels does not need one; a
back button or the page title is enough.

The last item is where you are and is not a link. Everything before it is.

Long paths collapse in the middle, keeping the root and the last two — those are the ones
people use. The hidden section is in the ellipsis's tooltip.

A breadcrumb is not navigation between siblings. If someone needs to move between things
at the same level, that is `Tabs` or a `Select`.
