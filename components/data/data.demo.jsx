const { Card, LineChart, BarChart, Sparkline, DonutChart, MetricCard, DataTable, ActivityFeed, Avatar, Icon, Badge } = DS;

const REVENUE = [18, 22, 19, 28, 34, 31, 42, 38, 47, 52, 48, 61];
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const SOURCES = [['pinterest.com', 84], ['behance.net', 52], ['instagram.com', 38], ['dribbble.com', 21], ['reddit.com', 12]];
const PEOPLE = [
  { id: 1, name: 'Ada Lovelace', saves: 2481, seen: '2 hours ago', plan: 'Pro' },
  { id: 2, name: 'Grace Hopper', saves: 1206, seen: 'Yesterday', plan: 'Pro' },
  { id: 3, name: 'Katherine Johnson', saves: 874, seen: '3 days ago', plan: 'Free' },
];

function Demo() {
  const [sort, setSort] = React.useState({ key: 'saves', dir: 'desc' });
  const [selected, setSelected] = React.useState([2]);

  const rows = [...PEOPLE].sort((a, b) => {
    const d = a[sort.key] > b[sort.key] ? 1 : -1;
    return sort.dir === 'asc' ? d : -d;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        <MetricCard label="Saves this week" value="2,481" delta={12.4} deltaLabel="vs last week"
                    sparkline={<Sparkline data={REVENUE.slice(-7)} />} />
        <MetricCard label="Active people" value="184" delta={4.1} deltaLabel="vs last week" />
        <MetricCard label="Error rate" value="0.8%" delta={-31} deltaLabel="vs last week" tone="negative" />
        <MetricCard label="Storage" value="18.2 gb" delta={0} deltaLabel="vs last week" tone="neutral" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 10 }}>
        <Card title="Revenue" subtitle="Last 12 months">
          <LineChart series={[REVENUE]} labels={MONTHS} height={200} formatValue={v => `$${v}k`} />
        </Card>
        <Card title="Saves by board">
          <DonutChart data={[['Branding', 84], ['Type', 52], ['3d', 31], ['Other', 18]]}
                      centerValue="185" centerLabel="saves" size={118} />
        </Card>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <Card title="Top sources">
          <BarChart data={SOURCES} formatValue={v => `${v}%`} />
        </Card>
        <Card title="Recent activity">
          <ActivityFeed items={[
            { actor: 'Ada', action: 'published', target: 'Spring campaign', time: '2 hours ago',
              avatar: <Avatar name="Ada Lovelace" size={24} /> },
            { action: 'Sync completed', time: 'Yesterday', icon: <Icon name="refresh" size={13} /> },
            { actor: 'Grace', action: 'invited 3 people to', target: 'Type & poster', time: '2 days ago',
              avatar: <Avatar name="Grace Hopper" size={24} /> },
          ]} />
        </Card>
      </div>

      <Card title="People" padding={0}>
        <DataTable
          rows={rows} rowKey="id" sort={sort} onSortChange={setSort}
          selectable selected={selected} onSelectedChange={setSelected}
          columns={[
            { key: 'name', label: 'Name', sortable: true,
              render: r => <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Avatar name={r.name} size="sm" />{r.name}</span> },
            { key: 'plan', label: 'Plan', render: r => <Badge tone={r.plan === 'Pro' ? 'accent' : 'neutral'}>{r.plan}</Badge> },
            { key: 'saves', label: 'Saves', align: 'right', mono: true, sortable: true },
            { key: 'seen', label: 'Last seen', muted: true },
          ]} />
      </Card>
    </div>
  );
}
