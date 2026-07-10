import React from 'react';

/**
 * XGVE Badge — a small, read-only status/label chip. Neutral by default; `signal`
 * is Signal Red. Optional status dot (with a restrained pulse). Sharp corners.
 */

const CSS = `
.xgbadge{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-mono);
  font-size:11px;font-weight:var(--weight-medium);letter-spacing:var(--tracking-wide);
  line-height:1;padding:4px 8px;border-radius:var(--radius-1);white-space:nowrap;
  border:var(--border-thin) solid transparent;text-transform:uppercase;}
.xgbadge--md{font-size:var(--text-xs);padding:5px 10px;}
.xgbadge--neutral{background:var(--surface-overlay);color:var(--content-secondary);border-color:var(--border-default);}
.xgbadge--signal{background:var(--accent);color:var(--accent-content);}
.xgbadge--signal-soft{background:var(--accent-surface);color:var(--accent);border-color:var(--accent-border);}
.xgbadge--outline{background:transparent;color:var(--content-primary);border-color:var(--border-strong);}
.xgbadge--positive{background:transparent;color:var(--xg-fn-positive);border-color:color-mix(in srgb, var(--xg-fn-positive) 45%, transparent);}
.xgbadge--warning{background:transparent;color:var(--xg-fn-warning);border-color:color-mix(in srgb, var(--xg-fn-warning) 45%, transparent);}
.xgbadge__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor;flex:none;}
.xgbadge--signal .xgbadge__dot{background:var(--accent-content);}
.xgbadge__dot--pulse{animation:xg-status-pulse 1.8s var(--ease-in-out) infinite;}
@media (prefers-reduced-motion:reduce){.xgbadge__dot--pulse{animation:none;}}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'badge');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Badge({
  children,
  variant = 'neutral',
  size = 'sm',
  dot = false,
  pulse = false,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgbadge', `xgbadge--${variant}`, `xgbadge--${size}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className={`xgbadge__dot${pulse ? ' xgbadge__dot--pulse' : ''}`} aria-hidden="true" />}
      {children}
    </span>
  );
}
