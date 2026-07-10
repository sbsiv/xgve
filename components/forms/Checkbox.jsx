import React from 'react';

/**
 * XGVE Checkbox — square control, sharp corners. Checked = Signal-Red fill with
 * a white check. Supports indeterminate. Label sits to the right.
 */

const CSS = `
.xgcheck{display:inline-flex;align-items:flex-start;gap:10px;font-family:var(--font-body);cursor:pointer;
  color:var(--content-primary);font-size:var(--text-sm);line-height:1.35;user-select:none;}
.xgcheck--disabled{cursor:not-allowed;color:var(--content-faint);}
.xgcheck__native{position:absolute;opacity:0;width:0;height:0;pointer-events:none;}
.xgcheck__box{position:relative;flex:none;width:18px;height:18px;margin-top:1px;background:var(--surface-overlay);
  border:var(--border-thin) solid var(--border-strong);border-radius:var(--radius-1);
  transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);
  display:inline-flex;align-items:center;justify-content:center;color:var(--accent-content);}
.xgcheck:hover .xgcheck__box{border-color:var(--content-muted);}
.xgcheck__box svg{width:12px;height:12px;opacity:0;transform:scale(0.6);transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-enter);}
.xgcheck__native:checked + .xgcheck__box,.xgcheck__native:indeterminate + .xgcheck__box{
  background:var(--accent);border-color:var(--accent);}
.xgcheck__native:checked + .xgcheck__box svg,.xgcheck__native:indeterminate + .xgcheck__box svg{opacity:1;transform:scale(1);}
.xgcheck__native:focus-visible + .xgcheck__box{box-shadow:var(--ring-focus);}
.xgcheck--disabled .xgcheck__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xgcheck__desc{display:block;color:var(--content-muted);font-size:var(--text-xs);margin-top:2px;}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'checkbox');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  const cls = ['xgcheck', disabled && 'xgcheck--disabled', className].filter(Boolean).join(' ');

  return (
    <label className={cls} htmlFor={uid}>
      <input ref={ref} id={uid} type="checkbox" className="xgcheck__native"
        checked={checked} defaultChecked={defaultChecked} disabled={disabled} {...rest} />
      <span className="xgcheck__box" aria-hidden="true">
        {indeterminate
          ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="6" y1="12" x2="18" y2="12"/></svg>
          : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
      </span>
      {label && <span>{label}{description && <span className="xgcheck__desc">{description}</span>}</span>}
    </label>
  );
}
