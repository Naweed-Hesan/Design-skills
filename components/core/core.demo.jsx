const { Button, IconButton, Input, Textarea, Select, Checkbox, Switch, Field, FieldRow, Icon } = DS;

function Demo() {
  const [on, setOn] = React.useState(true);
  const [check, setCheck] = React.useState(true);
  const [q, setQ] = React.useState('');
  const [note, setNote] = React.useState('');

  return (
    <div className="stack">
      <div className="row">
        <Button variant="primary" icon={<Icon name="plus" />}>Add files</Button>
        <Button>Cancel</Button>
        <Button variant="ghost">Skip</Button>
        <Button variant="danger" icon={<Icon name="trash" />}>Delete</Button>
        <Button variant="accentSoft" icon={<Icon name="check" />}>Selected</Button>
        <Button variant="primary" loading>Saving</Button>
        <Button disabled>Disabled</Button>
      </div>

      <div className="row">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg" variant="primary">Large</Button>
        <IconButton icon={<Icon name="settings" />} label="Settings" variant="bordered" />
        <IconButton icon={<Icon name="grid" />} label="Grid view" variant="bordered" active />
        <IconButton icon={<Icon name="more-horizontal" />} label="More actions" />
      </div>

      <div className="row" style={{ alignItems: 'flex-start' }}>
        <div style={{ width: 200 }}>
          <Input value={q} onChange={setQ} placeholder="Search files" icon={<Icon name="search" />} />
        </div>
        <div style={{ width: 170 }}>
          <Select value="" onChange={() => {}} placeholder="Move to…"
                  options={['Branding', 'Type', 'Product ui']} fullWidth />
        </div>
        <Checkbox checked={check} onChange={setCheck} label="Include gifs" />
        <Switch checked={on} onChange={setOn} />
      </div>

      <div className="row" style={{ alignItems: 'flex-start', gap: 20 }}>
        <div style={{ width: 240 }}>
          <Field label="Board name" hint="Shown in the sidebar.">
            <Input value="Type & poster" onChange={() => {}} />
          </Field>
        </div>
        <div style={{ width: 240 }}>
          <Field label="Email" error="That address is already in use.">
            <Input value="hi@example.com" onChange={() => {}} invalid />
          </Field>
        </div>
        <div style={{ width: 240 }}>
          <Textarea value={note} onChange={setNote} placeholder="What changed?" rows={3}
                    maxLength={140} showCount />
        </div>
      </div>

      <div style={{ maxWidth: 560 }}>
        <Switch checked={on} onChange={setOn} label="Sync across devices"
                description="Changes appear on every device signed in to this account." />
      </div>
    </div>
  );
}
