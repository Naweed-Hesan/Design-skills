const { Toast, Banner, Dialog, Tooltip, ProgressBar, Button, IconButton, Icon, Card } = DS;

function Demo() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="stack">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        <Banner tone="warning" title="You are near your storage limit"
                action={<Button size="sm" variant="primary">Upgrade</Button>}>
          238 of 250 saves used. New saves will fail once you hit the limit.
        </Banner>
        <Banner tone="danger" title="Sync failed" action={<Button size="sm">Retry</Button>}>
          Last synced 2 hours ago.
        </Banner>
        <Banner tone="info" onDismiss={() => {}}>Colour search is now available on all plans.</Banner>
        <Banner tone="success" title="Import complete">2,481 saves were added to Branding.</Banner>
      </div>

      <div className="row" style={{ alignItems: 'flex-start' }}>
        <Toast message="Saved to Branding" tone="success" onDismiss={() => {}} />
        <Toast message="3 files deleted" action={<Button size="sm" variant="ghost">Undo</Button>} onDismiss={() => {}} />
      </div>

      <div className="row">
        <Tooltip label="Copy link"><IconButton icon={<Icon name="link" />} label="Copy link" variant="bordered" /></Tooltip>
        <Tooltip label="Uses your last export settings" side="right"><Button>Quick export</Button></Tooltip>
        <Button variant="primary" onClick={() => setOpen(true)}>Open dialog</Button>
      </div>

      <Card title="Progress">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <ProgressBar value={62} label="Uploading 14 files" valueLabel="62%" />
          <ProgressBar value={238} max={250} tone="warning" label="Storage" valueLabel="238 of 250" />
          <ProgressBar value={100} tone="success" label="Import" valueLabel="Complete" />
          <ProgressBar indeterminate size="sm" label="Reindexing" />
        </div>
      </Card>

      <Dialog open={open} onClose={() => setOpen(false)}
              title="Delete board?"
              description="This removes 42 saves. It cannot be undone."
              footer={<>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="danger" onClick={() => setOpen(false)}>Delete board</Button>
              </>} />
    </div>
  );
}
