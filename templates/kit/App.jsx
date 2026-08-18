const { SidebarNav, PageHeader, Card, Button, IconButton, Icon, Tabs, MetricCard,
        LineChart, BarChart, Sparkline, DataTable, StatusPill, Avatar, Switch,
        FilterBar, Input, Select, EmptyState, ToastStack, Divider } = DS;

function App() {
  const [screen, setScreen] = React.useState('overview');
  const [theme, setTheme] = React.useState('light');
  const [toasts, setToasts] = React.useState([]);
  const [sort, setSort] = React.useState({ key: 'name', dir: 'asc' });
  const [selected, setSelected] = React.useState([]);
  const [q, setQ] = React.useState('');
  const [toggles, setToggles] = React.useState(
    SETTINGS.reduce((a, s) => ({ ...a, [s.id]: s.on }), {})
  );

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const push = (message, tone) =>
    setToasts((t) => [...t, { id: Date.now(), message, tone }]);

  const filtered = ITEMS
    .filter((i) => !q || i.name.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => {
      const d = a[sort.key] > b[sort.key] ? 1 : -1;
      return sort.dir === 'asc' ? d : -d;
    });

  const title = screen === 'overview' ? 'Overview' : screen === 'items' ? 'All items' : 'Settings';
  const subtitle = screen === 'overview' ? '184 items across 3 sections'
    : screen === 'items' ? `${filtered.length} of ${ITEMS.length} items`
    : 'Applied immediately';

  return (
    <div style={{ display: 'flex', height: '100vh', gap: 10, padding: 10, background: 'var(--surface-canvas)' }}>
      <SidebarNav
        value={screen} onChange={setScreen}
        header={<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, borderRadius: 6, background: 'var(--accent)' }} />
          <span style={{ fontSize: 13.5, fontWeight: 'var(--weight-medium)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
            Product
          </span>
        </div>}
        footer={<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Avatar name="Ada Lovelace" size="sm" />
          <span style={{ flex: 1, fontSize: 12, color: 'var(--text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            ada@example.com
          </span>
        </div>}
        sections={[{ items: NAV.map((n) => ({ ...n, icon: <Icon name={n.icon} /> })) }]} />

      <main style={{
        flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column',
        borderRadius: 'var(--radius-panel)', background: 'var(--surface-raised)',
        boxShadow: 'var(--shadow-md)', overflow: 'hidden',
      }}>
        <PageHeader
          title={title} subtitle={subtitle}
          actions={<>
            <IconButton
              icon={<Icon name={theme === 'dark' ? 'sun' : 'moon'} />}
              label="Toggle theme" variant="bordered"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
            <Button variant="primary" icon={<Icon name="plus" />}
                    onClick={() => push('Item created', 'success')}>New item</Button>
          </>} />

        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 16 }}>
          {screen === 'overview' ? <Overview /> : null}
          {screen === 'items' ? (
            <Items rows={filtered} q={q} setQ={setQ} sort={sort} setSort={setSort}
                   selected={selected} setSelected={setSelected} />
          ) : null}
          {screen === 'settings' ? <Settings toggles={toggles} setToggles={setToggles} push={push} /> : null}
        </div>
      </main>

      <ToastStack toasts={toasts} onDismiss={(id) => setToasts((t) => t.filter((x) => x.id !== id))} />
    </div>
  );
}

function Overview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
        {METRICS.map((m, i) => (
          <MetricCard key={i} {...m}
            sparkline={i === 0 ? <Sparkline data={TREND.slice(-7)} /> : undefined} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 12 }}>
        <Card title="Trend" subtitle="Last 12 months">
          <LineChart series={[TREND]} labels={MONTHS} height={200} formatValue={(v) => `${v}k`} />
        </Card>
        <Card title="Top sources">
          <BarChart data={SOURCES} formatValue={(v) => `${v}%`} />
        </Card>
      </div>
    </div>
  );
}

function Items({ rows, q, setQ, sort, setSort, selected, setSelected }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <FilterBar resultLabel={`${rows.length} of ${ITEMS.length}`}
                 active={q ? [{ label: `Search: ${q}`, onRemove: () => setQ('') }] : []}
                 onClear={q ? () => setQ('') : undefined}>
        <div style={{ width: 220 }}>
          <Input value={q} onChange={setQ} placeholder="Search items" icon={<Icon name="search" />} />
        </div>
        <div style={{ width: 150 }}>
          <Select value="" onChange={() => {}} placeholder="Any status"
                  options={['Published', 'In review', 'Draft']} fullWidth />
        </div>
      </FilterBar>

      <Card padding={0}>
        <DataTable
          rows={rows} rowKey="id" sort={sort} onSortChange={setSort}
          selectable selected={selected} onSelectedChange={setSelected}
          empty={<EmptyState compact title={`No items match “${q}”`}
                             description="Try a shorter word, or clear the search." />}
          columns={[
            { key: 'name', label: 'Name', sortable: true },
            { key: 'owner', label: 'Owner', render: (r) => (
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Avatar name={r.owner} size="sm" />{r.owner}
              </span>) },
            { key: 'status', label: 'Status', render: (r) => <StatusPill status={r.status} /> },
            { key: 'size', label: 'Size', align: 'right', mono: true, sortable: true,
              render: (r) => `${r.size} kb` },
            { key: 'seen', label: 'Updated', muted: true },
          ]} />
      </Card>
    </div>
  );
}

function Settings({ toggles, setToggles, push }) {
  return (
    <Card title="Preferences" subtitle="Changes apply immediately" style={{ maxWidth: 620 }}>
      {SETTINGS.map((s, i) => (
        <React.Fragment key={s.id}>
          {i > 0 ? <Divider /> : null}
          <Switch
            label={s.label} description={s.description}
            checked={toggles[s.id]}
            onChange={(v) => {
              setToggles((t) => ({ ...t, [s.id]: v }));
              push(`${s.label} ${v ? 'on' : 'off'}`);
            }} />
        </React.Fragment>
      ))}
    </Card>
  );
}
