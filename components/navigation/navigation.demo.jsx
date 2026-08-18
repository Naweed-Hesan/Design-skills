const { Tabs, SegmentedControl, SidebarNav, Breadcrumb, Pagination, ContextMenu, IconButton, Icon, Card } = DS;

function Demo() {
  const [tab, setTab] = React.useState('all');
  const [range, setRange] = React.useState('Week');
  const [view, setView] = React.useState('grid');
  const [nav, setNav] = React.useState('branding');
  const [page, setPage] = React.useState(6);
  const [menu, setMenu] = React.useState(false);

  return (
    <div className="stack">
      <Breadcrumb
        items={[{ value: 'home', label: 'All saves' }, { value: 'b', label: 'Boards' },
                { value: 'c', label: 'Branding' }, { value: 'd', label: 'Lunar identity' }]}
        onNavigate={() => {}} />

      <Tabs value={tab} onChange={setTab} items={[
        { value: 'all', label: 'All', count: 248 },
        { value: 'drafts', label: 'Drafts', count: 12 },
        { value: 'archived', label: 'Archived' },
      ]} />

      <div className="row">
        <SegmentedControl options={['Day', 'Week', 'Month']} value={range} onChange={setRange} />
        <SegmentedControl value={view} onChange={setView} options={[
          { value: 'grid', icon: <Icon name="grid" />, title: 'Grid' },
          { value: 'list', icon: <Icon name="list" />, title: 'List' },
        ]} />
        <ContextMenu open={menu} onClose={() => setMenu(false)} anchor="left" items={[
          { label: 'Open', icon: <Icon name="external-link" /> },
          { label: 'Rename', shortcut: 'F2' },
          { label: 'Duplicate' },
          '-',
          { label: 'Delete', tone: 'danger', icon: <Icon name="trash" /> },
        ]}>
          <IconButton icon={<Icon name="more-horizontal" />} label="More actions"
                      variant="bordered" onClick={() => setMenu(v => !v)} />
        </ContextMenu>
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <SidebarNav
          value={nav} onChange={setNav}
          style={{ height: 260 }}
          sections={[
            { items: [
              { value: 'all', label: 'All saves', icon: <Icon name="layers" />, count: 248 },
              { value: 'recent', label: 'Recent', icon: <Icon name="clock" /> },
            ]},
            { label: 'Boards', items: [
              { value: 'branding', label: 'Branding', count: 84 },
              { value: 'type', label: 'Type & poster', count: 52 },
              { value: '3d', label: '3d & render', count: 31 },
            ]},
          ]} />

        <Card title="Pagination" style={{ flex: 1 }}>
          <Pagination page={page} pageCount={20} onChange={setPage} totalLabel="248 files" />
        </Card>
      </div>
    </div>
  );
}
