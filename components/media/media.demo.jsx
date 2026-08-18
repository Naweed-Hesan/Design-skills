const { MasonryGrid, MediaCard, DropZone, Lightbox, ColorSwatchSet, Card, Button, IconButton, Icon } = DS;

/* Inline SVG data URIs — the demo stays self-contained with no asset fetch. */
function tile(w, h, hue) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hue} 44% 62%)"/>
      <stop offset="100%" stop-color="hsl(${hue + 40} 40% 40%)"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

const ITEMS = [
  { id: 1, w: 736, h: 575, hue: 190, title: 'Lunar identity system', meta: '736 × 575 · 412 kb' },
  { id: 2, w: 736, h: 920, hue: 24,  title: 'Poster design study',   meta: '736 × 920 · 688 kb' },
  { id: 3, w: 736, h: 736, hue: 280, title: 'Square composition',    meta: '736 × 736 · 604 kb' },
  { id: 4, w: 736, h: 460, hue: 140, title: 'Wide banner study',     meta: '736 × 460 · 288 kb' },
  { id: 5, w: 736, h: 1040, hue: 330, title: 'Editorial cover',      meta: '736 × 1040 · 1.0 mb' },
  { id: 6, w: 736, h: 640, hue: 60,  title: 'Gradient composition',  meta: '736 × 640 · 742 kb' },
  { id: 7, w: 736, h: 880, hue: 210, title: 'Type specimen',         meta: '736 × 880 · 858 kb' },
  { id: 8, w: 736, h: 520, hue: 10,  title: 'Noise and filter',      meta: '736 × 520 · 652 kb' },
];

function Demo() {
  const [sel, setSel] = React.useState([2]);
  const [open, setOpen] = React.useState(null);

  const toggle = (id) => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  return (
    <div className="stack">
      <Card title="Library" subtitle="Hover a tile for its metadata" padding={10}>
        <MasonryGrid columns={4}>
          {ITEMS.map(it => (
            <MediaCard key={it.id}
              src={tile(it.w, it.h, it.hue)} title={it.title} meta={it.meta}
              selected={sel.includes(it.id)} onSelect={() => toggle(it.id)}
              onClick={() => setOpen(it)}
              actions={<IconButton icon={<Icon name="heart" />} label="Favourite" variant="bordered" size="sm" />} />
          ))}
        </MasonryGrid>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 12, alignItems: 'start' }}>
        <DropZone onDrop={() => {}} onBrowse={() => {}} hint="png, jpg or gif up to 20 mb" />
        <Card title="Extracted palette">
          <ColorSwatchSet onCopy={() => {}} colors={[
            { hex: '#0B8B8E', name: 'Accent' }, { hex: '#3A5F7D', name: 'Deep' },
            { hex: '#C08A2E', name: 'Ochre' }, { hex: '#8A5C9E', name: 'Violet' },
          ]} />
        </Card>
      </div>

      <Lightbox
        open={!!open} src={open ? tile(open.w, open.h, open.hue) : ''} title={open?.title}
        onClose={() => setOpen(null)}
        onPrev={() => setOpen(ITEMS[Math.max(0, ITEMS.indexOf(open) - 1)])}
        onNext={() => setOpen(ITEMS[Math.min(ITEMS.length - 1, ITEMS.indexOf(open) + 1)])}
        fields={[
          { label: 'Dimensions', value: open ? `${open.w} × ${open.h}` : '', mono: true },
          { label: 'Size', value: open?.meta?.split('· ')[1] || '', mono: true },
          { label: 'Source', value: 'behance.net' },
          { label: 'Board', value: 'Branding' },
        ]}
        actions={<><Button size="sm">Download</Button><Button size="sm" variant="ghost">Delete</Button></>} />
    </div>
  );
}
