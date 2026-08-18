const { Card, Badge, Tag, Avatar, AvatarGroup, KeyCap, EmptyState, Skeleton, SkeletonText, Divider, Button, Icon } = DS;

function Demo() {
  return (
    <div className="stack">
      <div className="row">
        <Badge tone="success" dot>Published</Badge>
        <Badge tone="warning">Needs review</Badge>
        <Badge tone="danger" dot>Failed</Badge>
        <Badge tone="accent">Pro</Badge>
        <Badge>Draft</Badge>
        <Divider vertical spacing={4} style={{ height: 20 }} />
        <Tag>brutalism</Tag>
        <Tag onRemove={() => {}}>type</Tag>
        <Tag onClick={() => {}} active>3d</Tag>
      </div>

      <div className="row">
        <Avatar name="Ada Lovelace" size="xs" />
        <Avatar name="Grace Hopper" size="sm" />
        <Avatar name="Katherine Johnson" size="md" status="online" />
        <Avatar name="Annie Easley" size="lg" status="busy" />
        <AvatarGroup people={['Ada Lovelace','Grace Hopper','Katherine Johnson','Annie Easley','Mary Jackson']} />
        <Divider vertical spacing={4} style={{ height: 20 }} />
        <KeyCap combo="mod+shift+s" />
        <KeyCap combo="esc" />
        <KeyCap combo="mod+k" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, alignItems: 'start' }}>
        <Card title="Storage" subtitle="Last 30 days" actions={<Button size="sm" variant="ghost">Manage</Button>}>
          <p style={{ fontSize: 12.5, color: 'var(--text-tertiary)' }}>
            18.2 gb of 25 gb used across 2,481 saves.
          </p>
        </Card>

        <Card inset title="Nested panel">
          <SkeletonText lines={3} />
        </Card>

        <Card padding={0}>
          <EmptyState compact
            icon={<Icon name="folder" size={20} />}
            title="No saves in this board yet"
            description="Drag images here, or use the extension."
            action={<Button size="sm" variant="primary" icon={<Icon name="plus" />}>Add files</Button>} />
        </Card>
      </div>

      <div className="row" style={{ alignItems: 'flex-start' }}>
        <Skeleton width={120} height={80} radius="var(--radius-media)" />
        <Skeleton circle height={40} />
        <div style={{ width: 200 }}><SkeletonText lines={4} /></div>
      </div>
    </div>
  );
}
