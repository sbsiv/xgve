import React from 'react';

/**
 * XGVE Card — a surface container on the black field. Slightly-lighter surface,
 * 1px hairline rule, sharp corners. Depth comes from surface lightness, not
 * shadow. Optional red accent top-rule, one-corner chamfer, and interactive hover.
 */

const CSS = `
.xgcard{position:relative;background:var(--surface-raised);border:var(--border-thin) solid var(--border-subtle);
  border-radius:var(--radius-0);color:var(--content-primary);font-family:var(--font-body);
  display:flex;flex-direction:column;transition:var(--transition-colors),transform var(--dur-fast) var(--ease-out);}
.xgcard--pad-sm{padding:var(--space-5);}
.xgcard--pad-md{padding:var(--space-7);}
.xgcard--pad-lg{padding:var(--space-8);}
.xgcard--flat{background:var(--surface-default);}
.xgcard--overlay{background:var(--surface-overlay);border-color:var(--border-default);}
.xgcard--outline{background:transparent;border-color:var(--border-default);}
.xgcard--accent{border-top:var(--border-heavy) solid var(--accent);}
.xgcard--chamfer{border:none;
  clip-path:polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%);}
.xgcard--interactive{cursor:pointer;}
.xgcard--interactive:hover{background:var(--surface-overlay);border-color:var(--border-strong);}
.xgcard--interactive:active{transform:translateY(1px);}
.xgcard--interactive:focus-visible{outline:none;box-shadow:var(--ring-focus);}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'card');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Card({
  children,
  variant = 'raised',
  padding = 'md',
  accent = false,
  chamfer = false,
  interactive = false,
  as,
  className = '',
  ...rest
}) {
  inject();
  const Tag = as || (interactive ? 'button' : 'div');
  const variantClass = { raised: '', flat: 'xgcard--flat', overlay: 'xgcard--overlay', outline: 'xgcard--outline' }[variant] || '';
  const cls = [
    'xgcard',
    variantClass,
    `xgcard--pad-${padding}`,
    accent && 'xgcard--accent',
    chamfer && 'xgcard--chamfer',
    interactive && 'xgcard--interactive',
    className,
  ].filter(Boolean).join(' ');
  return <Tag className={cls} {...rest}>{children}</Tag>;
}
