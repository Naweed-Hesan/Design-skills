---
name: design-system
description: House design system for building any interface or marketing page — token foundations with a swappable brand layer, a brand-neutral component library, and the rules that keep every project looking like it came from the same studio. Use when designing or building a UI, app screen, dashboard, admin tool, browser extension, settings page, landing page, marketing site, pricing page, or a design system itself — whether the output is a Claude Design canvas, a React prototype, or a set of tokens.
---

# Design system

Quiet chrome, generous whitespace, and one accent that only appears where something is
active. Structure comes from hairlines and soft shadows, never from heavy boxes. The
content is the loudest thing on any screen; the interface around it stays out of the way.

This system is **brand-neutral by construction**. The look of any given project lives in
one file — `tokens/brand.css` — and everything else is fixed machinery. That is the whole
architecture: swap the brand layer, keep the discipline.

## Start here, every time

**1 · Decide what you are producing.** The ask tells you:

| The ask sounds like | Produce | How |
| --- | --- | --- |
| "mock up…", "design a screen for…", "show me…" | A canvas of artboards | `references/dc-canvas.md` |
| "build…", "prototype…", "make it work" | A running React kit | `references/react-kit.md` |
| "design system for…", "set up the tokens" | Tokens + guidelines | this file + `references/brand-layer.md` |

If it is genuinely ambiguous, produce the canvas — it is faster to look at and cheaper to
throw away. Say which you picked and why in one line.

**2 · Set the brand layer before you draw anything.** Never start a project on the default
teal. Read `references/brand-layer.md`, make the five decisions (accent, neutrals,
typefaces, corners, density), and write them into `tokens/brand.css` — or copy a file out
of `presets/`. Two minutes here is what stops the project looking like the last one.

**3 · Verify the two contrast pairs.** White on `--accent-solid`, and `--accent-text` on
`--surface-raised`. Both must clear 4.5:1. `references/contrast.md` has the arithmetic.
Do this the moment you pick an accent, not at the end.

**4 · Build.** Read the `.prompt.md` beside any component before you use it — it says when
to reach for that component and when to reach for something else. Read the `.d.ts` for
exact props.

**5 · Run `references/review.md`** before you call it done. It is twelve checks and it
catches the things that make work look unfinished.

## Non-negotiables

These hold no matter what the brand layer says. They are the system.

- **Never hard-code a colour, radius or control height.** Every value is a token:
  `var(--text-primary)`, `var(--surface-raised)`, `var(--accent)`, `var(--border-subtle)`,
  `var(--radius-panel)`, `var(--control-md)`. Components reference semantic names only —
  never a ramp step like `--accent-500` directly, because that breaks the theme swap.
- **Sentence case. No uppercase labels, ever.** No `text-transform: uppercase`, no
  letter-spaced micro-headings. Section labels recede by being small, regular weight and
  tertiary colour — not by being SET IN CAPS.
- **Headings are bold (700) with tight tracking.** A light or regular heading belongs to a
  different system.
- **One accent, used sparingly.** It marks what is active, selected, or the single primary
  action in view. It is never decoration. If two things on screen are accent-coloured and
  only one is actionable, you have a bug.
- **One primary button per view.** Everything else is secondary, ghost, or an icon button.
- **Hairlines and shadows, not boxes.** Borders live at 6–10% opacity. If you are
  thickening a border to separate two things, you want a surface change or a shadow.
- **Mono for compared numbers** — sizes, counts, prices, dimensions, percentages, ids,
  hex values. Anything a reader scans down a column gets `--font-mono` and tabular figures.
- **Line icons at stroke-width 1.5**, 13–15px inside controls, 18–22px in empty states.
  Never a filled icon, never an emoji standing in for one.
- **Both themes, always.** Every screen works on light and dark. Dark is not an
  afterthought you bolt on — `[data-theme="dark"]` is already wired through the tokens.
- **Motion confirms, it never performs.** One curve, nothing over 220ms except a single
  media zoom, and all of it gone under `prefers-reduced-motion`.

## Layout defaults

- Panels are `Card` — panel radius, `--shadow-md`, floating on `--surface-canvas` with a
  10–12px gap. Not bordered boxes sitting flush.
- App shell: `--sidebar-width` rail, `PageHeader` at the top of the main column, content
  capped at `--content-max`.
- Marketing sections cap at `--marketing-max`; long-form text always caps at
  `--prose-max` (680px) regardless of how wide the page is.
- Control heights are `--control-sm/md/lg` and nothing in between.
- Vertical rhythm is the 4px grid. A 7px gap means someone eyeballed it.

## Picking a component

| Need | Use |
| --- | --- |
| Any clickable command | `Button` — `IconButton` when a label would be noise |
| A container with its own surface | `Card` |
| A system-assigned state | `Badge`, or `StatusPill` for workflow states |
| A keyword someone typed | `Tag` |
| Confirming an action just happened | `Toast` |
| A condition that persists | `Banner` |
| Two to four exclusive options | `SegmentedControl` — six or more, `Select` |
| Switching between views | `Tabs` |
| A setting that applies instantly | `Switch` |
| A setting that needs saving | `Checkbox` inside a form |
| A number with its movement | `MetricCard` |
| Anything over time | `LineChart` — `Sparkline` when the shape alone is enough |
| Ranked categories | `BarChart` horizontal |
| Parts of a whole, three or four of them | `DonutChart` |
| Rows of records | `DataTable` |
| A wall of images | `MasonryGrid` + `MediaCard` |
| Viewing one item with its metadata | `Lightbox` |
| Nothing here yet | `EmptyState` — never a blank panel |
| Content still loading | `Skeleton` — never a spinner for page content |
| The top of a marketing page | `Hero` |
| Plans and prices | `PricingCard` |
| Proof — logos, numbers, quotes | `LogoWall`, `StatStrip`, `Testimonial` |

## Copy

Plain and functional. Verbs for buttons ("Add files", "Publish", "Invite people"). Nouns
for titles. Say what happened — "Saved to Branding", "3 files deleted" — with no apology
and no exclamation mark. Descriptions are one sentence. Numbers are formatted for reading
(`1.2 mb`, `2,481`, `18%`), lowercase for units and file formats because that is how they
are stored.

Empty states say what goes here and give the action that puts something here. Error
messages say what failed and what to do next, never just "Something went wrong".

## File map

```
tokens/brand.css        ← the only file you edit per project
tokens/*.css            fixed machinery — colours, type, spacing, radii, shadows, motion
presets/                ready-made brand layers to copy over brand.css
guidelines/             specimens that re-render against whatever brand is loaded
components/
  core/                 Button, IconButton, Icon, Input, Textarea, Select, Checkbox,
                        Switch, Field
  display/              Card, Badge, Tag, Avatar, KeyCap, EmptyState, Skeleton, Divider
  navigation/           Tabs, SegmentedControl, SidebarNav, Breadcrumb, Pagination,
                        ContextMenu
  feedback/             Toast, Banner, Dialog, Tooltip, ProgressBar
  data/                 LineChart, BarChart, Sparkline, DonutChart, MetricCard,
                        DataTable, ActivityFeed
  media/                MasonryGrid, MediaCard, DropZone, Lightbox, ColorSwatchSet
  shell/                PageHeader, Toolbar, FilterBar, StatusPill
  marketing/            Hero, FeatureGrid, PricingCard, LogoWall, Testimonial,
                        CTABanner, FAQItem, StatStrip
templates/              starter canvas and starter React kit
references/             brand-layer · contrast · dc-canvas · react-kit · review
scripts/check-contrast.py   verifies a brand layer — run it after any accent change
```

Every component ships three files: `.jsx` (implementation), `.d.ts` (prop contract, with a
comment on each prop), and `.prompt.md` (when to use it, when not to).
