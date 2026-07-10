import React from 'react';

/**
 * XGVE Tabs — horizontal section switcher. The active tab is marked by a hard
 * Signal-Red underline rule (no pill, no soft highlight). Controlled or
 * uncontrolled. `underline` variant sits on a full hairline baseline; `enclosed`
 * gives each tab a top-cut panel.
 */

const CSS = `
.xgtabs{font-family:var(--font-body);width:100%;}
.xgtabs__list{display:flex;gap:2px;position:relative;}
.xgtabs--underline .xgtabs__list{border-bottom:var(--border-thin) solid var(--border-default);}
.xgtabs__tab{position:relative;display:inline-flex;align-items:center;gap:8px;padding:10px 14px;
  font-size:var(--text-sm);font-weight:var(--weight-medium);letter-spacing:0.01em;line-height:1;
  color:var(--content-muted);background:transparent;border:none;cursor:pointer;
  transition:var(--transition-colors);-webkit-appearance:none;appearance:none;}
.xgtabs__tab:hover:not(:disabled){color:var(--content-primary);}
.xgtabs__tab:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtabs__tab:disabled{color:var(--content-faint);cursor:not-allowed;}
.xgtabs__tab[data-active="true"]{color:var(--content-primary);}
.xgtabs__tab[data-active="true"]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;
  height:2px;background:var(--accent);}
.xgtabs--enclosed .xgtabs__tab{border:var(--border-thin) solid transparent;border-bottom:none;
  background:var(--surface-default);color:var(--content-muted);
  clip-path:polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);}
.xgtabs--enclosed .xgtabs__tab[data-active="true"]{background:var(--surface-raised);color:var(--content-primary);border-top:var(--border-thick) solid var(--accent);}
.xgtabs--enclosed .xgtabs__tab[data-active="true"]::after{display:none;}
.xgtabs__ico{display:inline-flex;width:var(--icon-sm);height:var(--icon-sm);}
.xgtabs__ico svg{width:100%;height:100%;display:block;}
.xgtabs__count{font-family:var(--font-mono);font-size:10px;padding:1px 5px;border-radius:var(--radius-1);
  background:var(--surface-overlay);color:var(--content-secondary);}
.xgtabs__tab[data-active="true"] .xgtabs__count{background:var(--accent-surface);color:var(--accent);}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'tabs');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  inject();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;

  const select = (v) => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };

  const cls = ['xgtabs', `xgtabs--${variant}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <div className="xgtabs__list" role="tablist">
        {items.map((it) => (
          <button key={it.value} role="tab" type="button"
            className="xgtabs__tab" data-active={active === it.value}
            aria-selected={active === it.value} disabled={it.disabled}
            onClick={() => !it.disabled && select(it.value)}>
            {it.icon && <span className="xgtabs__ico" aria-hidden="true">{it.icon}</span>}
            {it.label}
            {it.count != null && <span className="xgtabs__count">{it.count}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}
