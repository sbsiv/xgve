import React from 'react';

/**
 * XGVE Switch — binary toggle. Off = neutral track; on = Signal-Red track with a
 * white thumb that travels with a decisive settle. Sharp-ish (pill track, square
 * thumb feel kept minimal). For instant on/off state, not multi-select.
 */

const CSS = `
.xgswitch{display:inline-flex;align-items:center;gap:10px;font-family:var(--font-body);cursor:pointer;
  color:var(--content-primary);font-size:var(--text-sm);user-select:none;}
.xgswitch--disabled{cursor:not-allowed;color:var(--content-faint);}
.xgswitch__native{position:absolute;opacity:0;width:0;height:0;pointer-events:none;}
.xgswitch__track{position:relative;flex:none;width:40px;height:22px;background:var(--surface-default);
  border:var(--border-thin) solid var(--border-strong);border-radius:var(--radius-pill);
  transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);}
.xgswitch__thumb{position:absolute;top:2px;left:2px;width:16px;height:16px;background:var(--content-secondary);
  border-radius:var(--radius-pill);transition:transform var(--dur-base) var(--ease-out),background var(--dur-fast) var(--ease-out);}
.xgswitch:hover .xgswitch__track{border-color:var(--content-muted);}
.xgswitch__native:checked + .xgswitch__track{background:var(--accent);border-color:var(--accent);}
.xgswitch__native:checked + .xgswitch__track .xgswitch__thumb{transform:translateX(18px);background:var(--xg-white);}
.xgswitch__native:focus-visible + .xgswitch__track{box-shadow:var(--ring-focus);}
.xgswitch--disabled .xgswitch__track{background:var(--surface-default);border-color:var(--border-subtle);}
.xgswitch--sm .xgswitch__track{width:34px;height:19px;}
.xgswitch--sm .xgswitch__thumb{width:13px;height:13px;}
.xgswitch--sm .xgswitch__native:checked + .xgswitch__track .xgswitch__thumb{transform:translateX(15px);}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'switch');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Switch({
  label,
  size = 'md',
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const cls = ['xgswitch', size === 'sm' && 'xgswitch--sm', disabled && 'xgswitch--disabled', className].filter(Boolean).join(' ');
  return (
    <label className={cls} htmlFor={uid}>
      <input id={uid} type="checkbox" role="switch" className="xgswitch__native" disabled={disabled} {...rest} />
      <span className="xgswitch__track" aria-hidden="true"><span className="xgswitch__thumb" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
