import React from 'react';

/**
 * XGVE IconButton — a square, icon-only action for toolbars, nav and dense UI.
 * Icon-agnostic: pass a line-icon node (Lucide recommended) as children.
 */

const CSS = `
.xgib{--_s:var(--size-control-md);display:inline-flex;align-items:center;justify-content:center;
  width:var(--_s);height:var(--_s);flex:none;padding:0;cursor:pointer;color:var(--content-secondary);
  background:transparent;border:var(--border-thin) solid transparent;border-radius:var(--radius-0);
  transition:var(--transition-colors);-webkit-appearance:none;appearance:none;}
.xgib:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgib:disabled{cursor:not-allowed;color:var(--content-faint);background:var(--surface-default);border-color:var(--border-subtle);}
.xgib--sm{--_s:var(--size-control-sm);}
.xgib--lg{--_s:var(--size-control-lg);}
.xgib__ico{display:inline-flex;width:var(--icon-md);height:var(--icon-md);}
.xgib--sm .xgib__ico{width:var(--icon-sm);height:var(--icon-sm);}
.xgib--lg .xgib__ico{width:var(--icon-lg);height:var(--icon-lg);}
.xgib__ico svg{width:100%;height:100%;display:block;}

.xgib--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--content-primary);}
.xgib--ghost:active:not(:disabled){background:var(--surface-active);}
.xgib--solid{background:var(--accent);color:var(--accent-content);border-color:var(--accent);}
.xgib--solid:hover:not(:disabled){background:var(--accent-hover);border-color:var(--accent-hover);}
.xgib--solid:active:not(:disabled){background:var(--accent-active);}
.xgib--outline{border-color:var(--border-default);color:var(--content-primary);}
.xgib--outline:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-strong);}
.xgib--outline:active:not(:disabled){background:var(--surface-active);}
.xgib--active{color:var(--accent);}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'icon-button');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  inject();
  const cls = [
    'xgib',
    `xgib--${variant}`,
    size !== 'md' && `xgib--${size}`,
    active && 'xgib--active',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={cls} aria-label={label} title={label} disabled={disabled} {...rest}>
      <span className="xgib__ico" aria-hidden="true">{children}</span>
    </button>
  );
}
