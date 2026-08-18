import React from 'react';

const MAC = { mod: '⌘', shift: '⇧', alt: '⌥', ctrl: '⌃', enter: '↵', backspace: '⌫', esc: 'esc', tab: '⇥' };
const PC  = { mod: 'Ctrl', shift: 'Shift', alt: 'Alt', ctrl: 'Ctrl', enter: 'Enter', backspace: 'Backspace', esc: 'Esc', tab: 'Tab' };

function isMac(platform) {
  if (platform === 'mac') return true;
  if (platform === 'windows') return false;
  return typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent || '');
}

/** "mod+shift+s" -> ["⇧", "⌘", "S"] on macOS, ["Shift", "Ctrl", "S"] elsewhere. */
export function resolveKeys(combo, platform) {
  const mac = isMac(platform);
  const map = mac ? MAC : PC;
  const order = ['ctrl', 'alt', 'shift', 'mod'];
  const parts = String(combo || '').toLowerCase().split('+').map((p) => p.trim()).filter(Boolean);

  const mods = parts.filter((p) => order.includes(p))
    .sort((a, b) => (mac ? order.indexOf(a) - order.indexOf(b) : order.indexOf(b) - order.indexOf(a)));
  const keys = parts.filter((p) => !order.includes(p));

  return [...mods, ...keys].map((p) => map[p] || (p.length === 1 ? p.toUpperCase() : p));
}

export function KeyCap({ combo, platform, style, ...rest }) {
  const keys = resolveKeys(combo, platform);
  const mac = isMac(platform);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: mac ? 1 : 3, ...style }} {...rest}>
      {keys.map((k, i) => (
        <kbd
          key={i}
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minWidth: 18, height: 18, padding: '0 4px',
            borderRadius: 'var(--radius-inset)',
            background: 'var(--surface-sunk)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-mono)',
            fontSize: 10.5, lineHeight: 1,
          }}
        >
          {k}
        </kbd>
      ))}
    </span>
  );
}
