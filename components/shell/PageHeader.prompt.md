The top of a page: where you are, and the actions that apply to the whole page.

```jsx
<PageHeader
  title="People" subtitle="184 members across 3 teams"
  meta={<Badge tone="accent">Pro</Badge>}
  actions={<><Button icon={<Icon name="download" />}>Export</Button>
             <Button variant="primary" icon={<Icon name="plus" />}>Invite people</Button></>}
  tabs={<Tabs items={['All', 'Admins', 'Invited']} value={tab} onChange={setTab} />} />
```

**Only page-level actions belong here.** Anything acting on a selection or a single row
belongs beside that thing — a header full of buttons that are usually disabled is a header
nobody reads.

At most one primary button, and it is the page's main verb: Invite people, New board,
Publish.

`tabs` sits flush to the bottom edge so the header and its tabs read as one unit. Pass a
`Tabs` and let the header handle the alignment.

Titles are nouns — "People", "Billing", "Spring campaign". Not "Manage people". The
subtitle carries the count or the context, which is usually more useful than a description.

`sticky` when the page scrolls long and the actions need to stay reachable. Not by
default; a sticky header on a short page just eats space.
