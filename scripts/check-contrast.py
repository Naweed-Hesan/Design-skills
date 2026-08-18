#!/usr/bin/env python3
"""Verify a brand layer's contrast pairs.

    python3 scripts/check-contrast.py tokens/brand.css
    python3 scripts/check-contrast.py presets/*.css

Reads the accent ramp and neutral ramps out of a brand.css and checks every
pair the system depends on. Exits non-zero if any required pair fails, so it
can sit in a pre-commit hook.
"""
import re
import sys


def lum(h):
    h = h.lstrip('#')
    if len(h) == 3:
        h = ''.join(c * 2 for c in h)
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    c = [x / 12.92 if x <= 0.04045 else ((x + 0.055) / 1.055) ** 2.4 for x in c]
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]


def ratio(a, b):
    la, lb = lum(a), lum(b)
    return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)


def parse(path):
    src = open(path).read()
    src = re.sub(r'/\*.*?\*/', '', src, flags=re.S)
    return {m.group(1): m.group(2)
            for m in re.finditer(r'(--[a-z0-9-]+)\s*:\s*(#[0-9A-Fa-f]{3,6})\s*;', src)}


# (label, fg key, bg key, floor, required)
PAIRS = [
    ('white on accent-solid (filled button)', '#FFFFFF', '--accent-600', 4.5, True),
    ('accent-text on white (links)',          '--accent-700', '#FFFFFF', 4.5, True),
    ('accent-300 on dark panel',              '--accent-300', '--ink-850', 4.5, True),
    ('accent-900 on accent-300 (dark button)', '--accent-900', '--accent-300', 4.5, True),
    ('text-primary on white',    '--slate-900', '--paper-0', 7.0, True),
    ('text-secondary on white',  '--slate-700', '--paper-0', 4.5, True),
    ('text-tertiary on white',   '--slate-500', '--paper-0', 4.5, True),
    ('text-tertiary on canvas',  '--slate-500', '--paper-100', 4.5, False),
    ('dark text-primary',        '--ink-text-primary', '--ink-850', 7.0, True),
    ('dark text-secondary',      '--ink-text-secondary', '--ink-850', 4.5, True),
    ('dark text-tertiary',       '--ink-text-tertiary', '--ink-850', 4.5, True),
]


def resolve(tok, vals):
    return tok if tok.startswith('#') else vals.get(tok)


def check(path):
    vals = parse(path)
    print(f'\n{path}')
    failed = 0
    for label, fg, bg, floor, required in PAIRS:
        f, b = resolve(fg, vals), resolve(bg, vals)
        if not f or not b:
            print(f'  {label:40s}   — missing token, skipped')
            continue
        r = ratio(f, b)
        ok = r >= floor
        if not ok and required:
            failed += 1
        tag = 'ok  ' if ok else ('FAIL' if required else 'note')
        print(f'  {label:40s} {r:5.2f}:1  need {floor}  {tag}')
    return failed


if __name__ == '__main__':
    paths = sys.argv[1:] or ['tokens/brand.css']
    total = sum(check(p) for p in paths)
    print()
    if total:
        print(f'{total} required pair(s) failed')
        sys.exit(1)
    print('all required pairs pass')
