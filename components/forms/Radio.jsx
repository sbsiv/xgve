import React from 'react';

/**
 * XGVE Radio — circular single-select control. Selected = Signal-Red ring with a
 * red dot. Use inside a shared `name` group; RadioGroup is a light wrapper.
 */

const CSS = `
.xgradio{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-body);cursor:pointer;
  color:var(--content-primary);font-size:var(--text-sm);line-height:1.35;user-select:none;}
.xgradio--disabled{cursor:not-allowed;color:var(--content-faint);}
.xgradio__native{position:absolute;opacity:0;width:0;height:0;pointer-events:none;}
.xgradio__box{position:relative;flex:none;width:18px;height:18px;margin-top:1px;border-radius:var(--radius-pill);
  background:var(--surface-overlay);border:var(--border-thin) solid var(--border-strong);
  transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);
  display:inline-flex;align-items:center;justify-content:center;}
.xgradio:hover .xgradio__box{border-color:var(--content-muted);}
.xgradio__box::after{content:"";width:8px;height:8px;border-radius:var(--radius-pill);background:var(--accent);
  opacity:0;transform:scale(0.4);transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-enter);}
.xgradio__native:checked + .xgradio__box{border-color:var(--accent);}
.xgradio__native:checked + .xgradio__box::after{opacity:1;transform:scale(1);}
.xgradio__native:focus-visible + .xgradio__box{box-shadow:var(--ring-focus);}
.xgradio--disabled .xgradio__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xgradio__desc{display:block;color:var(--content-muted);font-size:var(--text-xs);margin-top:2px;}
.xgradiogroup{display:flex;flex-direction:column;gap:12px;}
.xgradiogroup--row{flex-direction:row;gap:20px;flex-wrap:wrap;}
.xgradiogroup__legend{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-secondary);margin-bottom:2px;}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'radio');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Radio({
  label,
  description,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const cls = ['xgradio', disabled && 'xgradio--disabled', className].filter(Boolean).join(' ');
  return (
    <label className={cls} htmlFor={uid}>
      <input id={uid} type="radio" className="xgradio__native" disabled={disabled} {...rest} />
      <span className="xgradio__box" aria-hidden="true" />
      {label && <span>{label}{description && <span className="xgradio__desc">{description}</span>}</span>}
    </label>
  );
}

export function RadioGroup({ legend, row = false, children, className = '', ...rest }) {
  inject();
  const cls = ['xgradiogroup', row && 'xgradiogroup--row', className].filter(Boolean).join(' ');
  return (
    <div role="radiogroup" className={cls} {...rest}>
      {legend && <div className="xgradiogroup__legend">{legend}</div>}
      {children}
    </div>
  );
}
