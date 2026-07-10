import React from 'react';

/**
 * XGVE Toast — a transient notification surface. Status is carried by a leading
 * glyph/dot (never a coloured left-border — the brand forbids that card style).
 * Slides in and ends still. Presentational: wire your own queue/auto-dismiss.
 */

const CSS = `
.xgtoast{display:flex;align-items:flex-start;gap:12px;width:100%;max-width:400px;
  padding:var(--space-5) var(--space-5) var(--space-5) var(--space-4);
  background:var(--surface-overlay);border:var(--border-thin) solid var(--border-default);
  border-radius:var(--radius-0);box-shadow:var(--shadow-md);font-family:var(--font-body);
  color:var(--content-primary);animation:xgtoast-in var(--dur-base) var(--ease-enter);}
.xgtoast--signal{border-top:var(--border-thick) solid var(--accent);}
.xgtoast__ico{flex:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;margin-top:1px;}
.xgtoast__ico svg{width:18px;height:18px;display:block;}
.xgtoast__dot{width:8px;height:8px;border-radius:var(--radius-pill);margin-top:6px;}
.xgtoast--default .xgtoast__ico,.xgtoast--default .xgtoast__dot{color:var(--content-secondary);background:var(--content-secondary);}
.xgtoast--signal .xgtoast__ico,.xgtoast--signal .xgtoast__dot{color:var(--accent);background:var(--accent);}
.xgtoast--positive .xgtoast__ico,.xgtoast--positive .xgtoast__dot{color:var(--xg-fn-positive);background:var(--xg-fn-positive);}
.xgtoast--warning .xgtoast__ico,.xgtoast--warning .xgtoast__dot{color:var(--xg-fn-warning);background:var(--xg-fn-warning);}
.xgtoast__ico{background:transparent !important;}
.xgtoast__body{flex:1;min-width:0;}
.xgtoast__title{font-size:var(--text-sm);font-weight:var(--weight-semibold);margin:0;line-height:1.3;}
.xgtoast__msg{font-size:var(--text-sm);color:var(--content-secondary);margin:3px 0 0;line-height:var(--leading-normal);}
.xgtoast__actions{display:flex;gap:12px;margin-top:10px;}
.xgtoast__action{font-family:var(--font-mono);font-size:11px;letter-spacing:var(--tracking-wide);
  text-transform:uppercase;color:var(--accent);background:none;border:none;padding:0;cursor:pointer;}
.xgtoast__action:hover{color:var(--accent-hover);}
.xgtoast__action:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtoast__close{flex:none;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;
  margin:-2px -2px 0 0;background:transparent;border:none;color:var(--content-muted);cursor:pointer;
  border-radius:var(--radius-1);transition:var(--transition-colors);}
.xgtoast__close:hover{background:var(--surface-hover);color:var(--content-primary);}
.xgtoast__close:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtoast__close svg{width:14px;height:14px;display:block;}
@keyframes xgtoast-in{from{opacity:0;transform:translateX(16px);}to{opacity:1;transform:translateX(0);}}
@media (prefers-reduced-motion:reduce){.xgtoast{animation:none;}}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'toast');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Toast({
  variant = 'default',
  title,
  message,
  icon,
  actionLabel,
  onAction,
  onClose,
  className = '',
  ...rest
}) {
  inject();
  const cls = ['xgtoast', `xgtoast--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} role="status" {...rest}>
      {icon
        ? <span className="xgtoast__ico" aria-hidden="true">{icon}</span>
        : <span className="xgtoast__dot" aria-hidden="true" />}
      <div className="xgtoast__body">
        {title && <p className="xgtoast__title">{title}</p>}
        {message && <p className="xgtoast__msg">{message}</p>}
        {actionLabel && (
          <div className="xgtoast__actions">
            <button type="button" className="xgtoast__action" onClick={onAction}>{actionLabel}</button>
          </div>
        )}
      </div>
      {onClose && (
        <button type="button" className="xgtoast__close" aria-label="Dismiss" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
      )}
    </div>
  );
}
