The system's panel. Anything that needs its own surface — a section, a form, a chart, a
list — sits in one of these.

```jsx
<Card title="Revenue" subtitle="Last 30 days" actions={<Button size="sm">Export</Button>}>
  <LineChart series={data} />
</Card>

<Card padding={0}><DataTable rows={rows} columns={cols} /></Card>

<Card title="Delete board?" footer={<><Button>Cancel</Button><Button variant="danger">Delete</Button></>}>
  <p>This removes 42 saves. It cannot be undone.</p>
</Card>
```

Cards **float on the canvas** with a 10–12px gap around them — they are not flush boxes
with borders. That gap is what makes the system read as panels on paper.

Use `padding={0}` for content that should reach the edges: tables, media grids, image
headers. The header and footer keep their own padding.

`inset` is for a card *inside* a card — it drops the shadow and picks up a hairline
instead, because two shadows stacked look like a mistake.

Do not nest more than two levels. If you need a third, the information wants a different
structure, not another box.
