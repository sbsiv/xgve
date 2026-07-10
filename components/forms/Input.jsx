import React from 'react';

/**
 * XGVE Input — single-line text field. Dark inset field, hairline rule, sharp
 * corners; focus draws the Signal-Red ring. Optional leading/trailing adornments
 * (icon nodes) and an error state.
 */

const CSS = `
.xginput{display:flex;flex-direction:column;gap:6px;font-family:var(--font-body);width:100%;}
.xginput__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-secondary);}
.xginput__req{color:var(--accent);margin-left:3px;}
.xginput__box{display:flex;align-items:center;gap:8px;height:var(--size-control-md);
  padding:0 12px;background:var(--surface-overlay);border:var(--border-thin) solid var(--border-default);
  border-radius:var(--radius-1);transition:var(--transition-colors),box-shadow var(--dur-fast) var(--ease-out);}
.xginput__box:hover{border-color:var(--border-strong);}
.xginput__box:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-surface);}
.xginput--lg .xginput__box{height:var(--size-control-lg);}
.xginput--sm .xginput__box{height:var(--size-control-sm);}
.xginput__field{flex:1;min-width:0;height:100%;border:none;outline:none;background:transparent;
  color:var(--content-primary);font-family:inherit;font-size:var(--text-sm);letter-spacing:0.01em;}
.xginput__field::placeholder{color:var(--content-muted);}
.xginput__adorn{display:inline-flex;flex:none;width:var(--icon-sm);height:var(--icon-sm);color:var(--content-muted);}
.xginput__adorn svg{width:100%;height:100%;display:block;}
.xginput__box:focus-within .xginput__adorn{color:var(--content-secondary);}
.xginput--error .xginput__box{border-color:var(--accent);}
.xginput--error .xginput__box:focus-within{box-shadow:0 0 0 3px var(--accent-surface);}
.xginput__msg{font-family:var(--font-mono);font-size:11px;letter-spacing:var(--tracking-wide);color:var(--content-muted);}
.xginput--error .xginput__msg{color:var(--accent);}
.xginput--disabled{opacity:1;}
.xginput--disabled .xginput__box{background:var(--surface-default);border-color:var(--border-subtle);}
.xginput--disabled .xginput__field{color:var(--content-faint);cursor:not-allowed;}
.xginput--disabled .xginput__label{color:var(--content-faint);}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'input');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Input({
  label,
  required = false,
  size = 'md',
  leading,
  trailing,
  error,
  hint,
  disabled = false,
  id,
  className = '',
  ...rest
}) {
  inject();
  const uid = id || React.useId();
  const hasError = Boolean(error);
  const msg = hasError ? error : hint;
  const cls = [
    'xginput',
    size !== 'md' && `xginput--${size}`,
    hasError && 'xginput--error',
    disabled && 'xginput--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {label && (
        <label className="xginput__label" htmlFor={uid}>
          {label}{required && <span className="xginput__req" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="xginput__box">
        {leading && <span className="xginput__adorn" aria-hidden="true">{leading}</span>}
        <input id={uid} className="xginput__field" disabled={disabled}
          aria-invalid={hasError || undefined} {...rest} />
        {trailing && <span className="xginput__adorn" aria-hidden="true">{trailing}</span>}
      </div>
      {msg && <span className="xginput__msg">{msg}</span>}
    </div>
  );
}
