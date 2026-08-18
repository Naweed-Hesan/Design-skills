/* Sample data. Realistic values and realistic lengths — a name that is always
   "John Smith" hides every layout bug that real data finds. */

const NAV = [
  { value: 'overview', label: 'Overview', icon: 'bar-chart' },
  { value: 'items', label: 'All items', icon: 'layers', count: 248 },
  { value: 'settings', label: 'Settings', icon: 'settings' },
];

const METRICS = [
  { label: 'Items this week', value: '2,481', delta: 12.4, deltaLabel: 'vs last week' },
  { label: 'Active people', value: '184', delta: 4.1, deltaLabel: 'vs last week' },
  { label: 'Error rate', value: '0.8%', delta: -31, deltaLabel: 'vs last week', tone: 'negative' },
  { label: 'Storage', value: '18.2 gb', delta: 0, deltaLabel: 'vs last week', tone: 'neutral' },
];

const TREND = [18, 22, 19, 28, 34, 31, 42, 38, 47, 52, 48, 61];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SOURCES = [
  ['pinterest.com', 84], ['behance.net', 52], ['instagram.com', 38],
  ['dribbble.com', 21], ['reddit.com', 12],
];

const ITEMS = [
  { id: 1, name: 'Lunar identity system', owner: 'Ada Lovelace', status: 'published', size: 412, seen: '2 hours ago' },
  { id: 2, name: 'Poster design study for the spring campaign', owner: 'Grace Hopper', status: 'review', size: 688, seen: 'Yesterday' },
  { id: 3, name: 'Editorial spread', owner: 'Katherine Johnson', status: 'draft', size: 904, seen: '3 days ago' },
  { id: 4, name: 'Gradient composition', owner: 'Annie Easley', status: 'published', size: 742, seen: 'Last week' },
  { id: 5, name: 'Layout grid study', owner: 'Mary Jackson', status: 'failed', size: 512, seen: 'Last week' },
  { id: 6, name: 'Type specimen', owner: 'Ada Lovelace', status: 'scheduled', size: 858, seen: '2 weeks ago' },
];

const SETTINGS = [
  { id: 'sync', label: 'Sync across devices', description: 'Changes appear on every device signed in to this account.', on: true },
  { id: 'notify', label: 'Email notifications', description: 'A weekly summary of what changed.', on: false },
  { id: 'beta', label: 'Early features', description: 'Try things before they are finished. They may break.', on: false },
];
