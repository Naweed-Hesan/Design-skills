const { PageHeader, Toolbar, FilterBar, StatusPill, Tabs, Badge, Button, IconButton, Input,
        Select, SegmentedControl, Divider, Icon, Card } = DS;

function Demo() {
  const [tab, setTab] = React.useState('All');
  const [view, setView] = React.useState('grid');
  const [q, setQ] = React.useState('');

  return (
    <div className="stack">
      <Card padding={0}>
        <PageHeader
          title="People" subtitle="184 members across 3 teams"
          meta={<Badge tone="accent">Pro</Badge>}
          actions={<>
            <Button icon={<Icon name="download" />}>Export</Button>
            <Button variant="primary" icon={<Icon name="plus" />}>Invite people</Button>
          </>}
          tabs={<Tabs items={['All', 'Admins', 'Invited']} value={tab} onChange={setTab} />} />
      </Card>

      <Card padding={0}>
        <Toolbar
          left={<>
            <IconButton icon={<Icon name="menu" />} label="Menu" />
            <Divider vertical spacing={4} style={{ height: 20 }} />
            <SegmentedControl value={view} onChange={setView} size="sm" options={[
              { value: 'grid', icon: <Icon name="grid" />, title: 'Grid' },
              { value: 'list', icon: <Icon name="list" />, title: 'List' },
            ]} />
          </>}
          right={<>
            <IconButton icon={<Icon name="filter" />} label="Filter" variant="bordered" />
            <Button variant="primary" size="sm">Save</Button>
          </>} />
      </Card>

      <Card title="Filters">
        <FilterBar
          resultLabel="184 of 2,481"
          active={[{ label: 'Plan: Pro', onRemove: () => {} },
                   { label: 'Last 30 days', onRemove: () => {} }]}
          onClear={() => {}}>
          <div style={{ width: 200 }}>
            <Input value={q} onChange={setQ} placeholder="Search people" icon={<Icon name="search" />} />
          </div>
          <div style={{ width: 150 }}>
            <Select value="" onChange={() => {}} placeholder="Any plan" options={['Free', 'Pro', 'Team']} fullWidth />
          </div>
        </FilterBar>
      </Card>

      <Card title="Workflow states">
        <div className="row">
          <StatusPill status="draft" />
          <StatusPill status="review" />
          <StatusPill status="scheduled" />
          <StatusPill status="published" />
          <StatusPill status="archived" />
          <StatusPill status="failed" />
          <StatusPill status="syncing" label="Syncing" tone="info" />
        </div>
      </Card>
    </div>
  );
}
