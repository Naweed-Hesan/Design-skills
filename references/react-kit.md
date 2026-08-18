# Producing a React kit

A kit is a running prototype: real state, real interaction, built from the component
library against the token system. Use it when the ask is "build" or "prototype" rather
than "mock up".

## Shape

```
my-kit/
  index.html        mounts the app, declares the card annotations
  App.jsx           the shell — nav, header, screen switching
  OverviewScreen.jsx
  SettingsScreen.jsx
  data.js           sample data, kept out of the screens
  README.md         what each file does and what is actually interactive
```

## index.html

```html
<!-- @dsCard group="Admin" viewport="1440x980" subtitle="Overview, people, billing" -->
<!-- @startingPoint section="Admin" subtitle="Dashboard with charts and a table" viewport="1440x980" -->
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Admin</title>
<link rel="stylesheet" href="../../styles.css">
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="../../assets/ds-runtime.js"></script>
<style>
  html, body { height: 100%; overflow: hidden; }
  #root { height: 100vh; }
</style>
</head>
<body>
<div id="root"></div>
<script>
  DSMount({
    root: '../../',
    files: ['data.js', 'OverviewScreen.jsx', 'SettingsScreen.jsx', 'App.jsx'],
    render: 'App',
  });
</script>
</body>
</html>
```

`DSMount` loads the whole component library into a global `DS`, then loads your files in
order and renders the named component. `root` is the path back to the design system;
`files` are relative to the html file. Order matters — a file may use anything defined
before it.

In a screen file, pull what you need off `DS`:

```jsx
const { Card, Button, MetricCard, LineChart, Icon } = DS;

function OverviewScreen({ range, onRangeChange }) {
  return (
    <Card title="Revenue" actions={<Button size="sm">Export</Button>}>
      <LineChart series={REVENUE[range]} height={220} />
    </Card>
  );
}
```

No imports and no exports — the files share one scope, the way the runtime evaluates them.

## The annotations

Two HTML comments at the very top of the file, before `<!doctype>`:

```html
<!-- @dsCard group="Admin" viewport="1440x980" subtitle="…" name="Admin dashboard" -->
<!-- @startingPoint section="Admin" subtitle="…" viewport="1440x980" -->
```

`@dsCard` registers the file as a browsable card. `group` buckets it; `name` defaults to
the `<title>`; `viewport` is the render size; `subtitle` is one descriptive line.

`@startingPoint` marks it as something to start a new design *from*. Put these on whole
screens and on the handful of components that are genuinely a starting shape — a page
header, a settings panel, a pricing section. Not on every button.

`@startingPoint` also goes in a component's `.d.ts`, in the interface doc comment:

```ts
/**
 * The system's standard action control.
 *
 * @startingPoint section="Core" subtitle="Action buttons in every tone and size" viewport="700x180"
 */
export interface ButtonProps { … }
```

## Family demo cards

Each component family carries a `<family>.card.html` and `<family>.demo.jsx` that show
everything in it at once. Follow the existing ones when you add a family — they are how
someone sees what exists without reading source.

## Rules

- **Screens compose, they do not restyle.** A screen file arranges components and holds
  state. The moment it starts writing colours and paddings, that styling belongs in a
  component.
- **Sample data lives in `data.js`.** Realistic values, realistic lengths — a name that is
  always "John Smith" hides every layout bug that real data finds.
- **Make a few things genuinely work.** Sorting, filtering, selection, the theme toggle. A
  prototype where nothing responds teaches nobody anything. Say in the README which
  interactions are real.
- **Ship the theme toggle.** Put it in the header. It is how anyone checks that dark
  actually works.
- **No new dependencies.** React, the design system, and nothing else.
