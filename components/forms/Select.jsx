import React from 'react';

/**
 * XGVE Select — native <select> styled to match Input. Sharp field, hairline
 * rule, Signal-Red focus ring, custom chevron.
 */

const CSS = `
.xgselect{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);width:100%;}
.xgselect__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-secondary);}
.xgselect__box{position:relative;display:flex;align-items:center;height:var(--size-control-md);
  background:var(--surface-overlay);border:var(--border-thin) solid var(--border-default);
  border-radius:var(--radius-1);transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);}
.xgselect__box:hover{border-color:var(--border-strong);}
.xgselect__box:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-surface);}
.xgselect--sm .xgselect__box{height:var(--size-control-sm);}
.xgselect--lg .xgselect__box{height:var(--size-control-lg);}
.xgselect__field{flex:1;height:100%;border:none;outline:none;background:transparent;
  color:var(--content-primary);font-family:inherit;font-size:var(--text-sm);letter-spacing:0.01em;
  padding:0 36px 0 12px;-webkit-appearance:none;appearance:none;cursor:pointer;}
.xgselect__field option{background:var(--surface-overlay);color:var(--content-primary);}
.xgselect__chev{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;
  width:var(--icon-sm);height:var(--icon-sm);color:var(--content-muted);}
.xgselect__box:focus-within .xgselect__chev{color:var(--accent);}
.xgselect--disabled .xgselect__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xgselect--disabled .xgselect__field{color:var(--content-faint);cursor:not-allowed;}
.xgselect--placeholder .xgselect__field{color:var(--content-muted);}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'select');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Select({
  label,
  size = 'md',
  options = [],
  placeholder,
  value,
  defaultValue,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const isControlled = value !== undefined;
  const current = isControlled ? value : defaultValue;
  const showingPlaceholder = placeholder && (current === undefined || current === '');
  const cls = [
    'xgselect',
    size !== 'md' && `xgselect--${size}`,
    disabled && 'xgselect--disabled',
    showingPlaceholder && 'xgselect--placeholder',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {label && <label className="xgselect__label" htmlFor={uid}>{label}</label>}
      <div className="xgselect__box">
        <select id={uid} className="xgselect__field" disabled={disabled}
          value={value} defaultValue={defaultValue} {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>;
          })}
        </select>
        <span className="xgselect__chev" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </div>
    </div>
  );
}
