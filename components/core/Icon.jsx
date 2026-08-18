import React from 'react';

/* Line icons, drawn on a 16x16 grid at stroke-width 1.5.
   Inline rather than a CDN so the system has no runtime dependency and
   renders identically in a canvas, a kit, or an exported file. */
const PATHS = {
  plus: 'M8 3.5v9M3.5 8h9',
  minus: 'M3.5 8h9',
  x: 'M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6',
  check: 'M3.5 8.4l3 3 6-6.6',
  search: 'M10.4 10.4L14 14@circle:7,7,4.4',
  'chevron-right': 'M6.5 3.5L11 8l-4.5 4.5',
  'chevron-left': 'M9.5 3.5L5 8l4.5 4.5',
  'chevron-down': 'M3.5 6.3L8 10.8l4.5-4.5',
  'chevron-up': 'M3.5 9.7L8 5.2l4.5 4.5',
  'arrow-right': 'M3 8h10M9.2 4.2L13 8l-3.8 3.8',
  'arrow-left': 'M13 8H3M6.8 4.2L3 8l3.8 3.8',
  'arrow-up-right': 'M5 11l6-6M5.6 5H11v5.4',
  'external-link': 'M9.5 3.5H12.5V6.5M12.5 3.5L7.5 8.5M11 9.5v3h-8v-8h3',
  'more-horizontal': 'M4 8h.01M8 8h.01M12 8h.01',
  'more-vertical': 'M8 4v.01M8 8v.01M8 12v.01',
  menu: 'M3 4.5h10M3 8h10M3 11.5h10',
  trash: 'M3 4.5h10M6.5 4.5V3h3v1.5M4.6 4.5l.6 8.5h5.6l.6-8.5M6.6 6.8v4M9.4 6.8v4',
  edit: 'M11.2 2.9l2 2-7.4 7.4-2.6.6.6-2.6z',
  copy: 'M5.5 5.5h7v7h-7zM3.5 10.5v-7h7',
  download: 'M8 3v7M5 7.2L8 10.2l3-3M3 12.5h10',
  upload: 'M8 12.5v-7M5 8.3L8 5.3l3 3M3 12.5h10',
  refresh: 'M13 8a5 5 0 11-1.6-3.7M13 2.6V5.4h-2.8',
  filter: 'M2.5 4h11L9.4 8.6v3.8l-2.8 1.4V8.6z',
  settings: 'M8 5.6A2.4 2.4 0 108 10.4 2.4 2.4 0 008 5.6M12.6 9.7l1.2.9-1.2 2-1.4-.5a4.6 4.6 0 01-1.3.8L9.6 14.5H7.2L6.9 13a4.6 4.6 0 01-1.3-.8l-1.4.5-1.2-2 1.2-.9a4.6 4.6 0 010-1.5l-1.2-.9 1.2-2 1.4.5a4.6 4.6 0 011.3-.8l.3-1.5h2.4l.3 1.5c.5.2.9.5 1.3.8l1.4-.5 1.2 2-1.2.9a4.6 4.6 0 010 1.5z',
  user: 'M13 13.5v-1.2a3 3 0 00-3-3H6a3 3 0 00-3 3v1.2@circle:8,5,2.6',
  users: 'M11 13.5v-1.2a3 3 0 00-3-3H4.5a3 3 0 00-3 3v1.2M14.5 13.5v-1.2a3 3 0 00-2.2-2.9M10.2 2.6a3 3 0 010 5.6@circle:6.2,5,2.6',
  bell: 'M12 6a4 4 0 10-8 0c0 4-1.5 5-1.5 5h11S12 10 12 6M9.4 13.5a1.6 1.6 0 01-2.8 0',
  star: 'M8 2.4l1.8 3.8 4 .6-2.9 2.9.7 4.1L8 11.9l-3.6 1.9.7-4.1L2.2 6.8l4-.6z',
  heart: 'M8 13.5S2.5 10.2 2.5 6.5A2.9 2.9 0 018 5a2.9 2.9 0 015.5 1.5c0 3.7-5.5 7-5.5 7z',
  eye: 'M1.5 8S4 3.5 8 3.5 14.5 8 14.5 8 12 12.5 8 12.5 1.5 8 1.5 8@circle:8,8,2.1',
  'eye-off': 'M6.5 4a5.6 5.6 0 011.5-.2c4 0 6.5 4.2 6.5 4.2a11 11 0 01-2 2.5M4 5.3A11 11 0 001.5 8S4 12.2 8 12.2c.9 0 1.7-.2 2.4-.5M2 2l12 12M6.6 6.8a2 2 0 002.8 2.8',
  lock: 'M4 7.2h8v6H4zM5.8 7.2V5.2a2.2 2.2 0 014.4 0v2',
  image: 'M2.5 3h11v10h-11zM2.5 10.6l3-3 2.4 2.4 2.6-2.6 3 3@circle:6,5.8,1',
  file: 'M9 2.5H4.5v11h7V5zM9 2.5V5h2.5',
  folder: 'M2.5 12.5v-9h4l1.5 2h5.5v7z',
  calendar: 'M2.5 4.5h11v9h-11zM2.5 7.2h11M5.5 2.8v2.4M10.5 2.8v2.4',
  clock: 'M8 4.6V8l2.2 1.3@circle:8,8,5.5',
  home: 'M2.5 7L8 2.6 13.5 7v6.4h-11zM6.4 13.4V9.2h3.2v4.2',
  grid: 'M2.5 2.5h5v5h-5zM8.5 2.5h5v5h-5zM2.5 8.5h5v5h-5zM8.5 8.5h5v5h-5z',
  list: 'M5.5 4.2h8M5.5 8h8M5.5 11.8h8M2.6 4.2h.01M2.6 8h.01M2.6 11.8h.01',
  layers: 'M8 2.2l5.6 3L8 8.2 2.4 5.2zM2.4 8L8 11l5.6-3M2.4 10.8L8 13.8l5.6-3',
  'bar-chart': 'M3 13.5V7M8 13.5V3M13 13.5v-4',
  'trending-up': 'M2.5 11.2l4-4 2.4 2.4 4.6-4.6M9.6 5h4v4',
  'trending-down': 'M2.5 4.8l4 4 2.4-2.4 4.6 4.6M9.6 11h4V7',
  'credit-card': 'M2 4.2h12v7.6H2zM2 7h12',
  zap: 'M8.8 1.8L3.4 9.2h4L7.2 14.2l5.4-7.4h-4z',
  'alert-triangle': 'M8 2.8L14.2 13H1.8zM8 6.6v3M8 11.6h.01',
  'alert-circle': 'M8 5v3.4M8 11h.01@circle:8,8,5.6',
  info: 'M8 11V7.6M8 5h.01@circle:8,8,5.6',
  'check-circle': 'M5.4 8.2l1.9 1.9 3.6-4@circle:8,8,5.6',
  'x-circle': 'M6.2 6.2l3.6 3.6M9.8 6.2l-3.6 3.6@circle:8,8,5.6',
  sun: 'M8 1.6v1.5M8 12.9v1.5M1.6 8h1.5M12.9 8h1.5M3.5 3.5l1.1 1.1M11.4 11.4l1.1 1.1M12.5 3.5l-1.1 1.1M4.6 11.4l-1.1 1.1@circle:8,8,2.9',
  moon: 'M13.2 9.9A5.6 5.6 0 016.1 2.8a5.6 5.6 0 107.1 7.1z',
  link: 'M6.8 9.2a2.6 2.6 0 003.9.3l1.6-1.6a2.6 2.6 0 00-3.7-3.7l-.9.9M9.2 6.8a2.6 2.6 0 00-3.9-.3L3.7 8.1a2.6 2.6 0 003.7 3.7l.9-.9',
  play: 'M5 3.4l7 4.6-7 4.6z',
  pause: 'M5.5 3.6v8.8M10.5 3.6v8.8',
};

export function Icon({ name, size = 14, strokeWidth = 1.5, style, ...rest }) {
  const raw = PATHS[name];
  if (!raw) return <span style={{ width: size, height: size, display: 'inline-block' }} />;

  /* A few glyphs need a circle as well as a path; "@circle:cx,cy,r" appends one. */
  const [d, circleSpec] = raw.split('@circle:');
  const circle = circleSpec ? circleSpec.split(',').map(Number) : null;

  return (
    <svg
      className="ds-icon"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
      style={style}
      {...rest}
    >
      {d ? <path d={d} /> : null}
      {circle ? <circle cx={circle[0]} cy={circle[1]} r={circle[2]} /> : null}
    </svg>
  );
}

/** Every icon name available, for pickers and the guidelines specimen. */
export const ICON_NAMES = Object.keys(PATHS);
