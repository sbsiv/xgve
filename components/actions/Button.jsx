import React from 'react';

/**
 * XGVE Button — the primary action primitive.
 * Sharp-cornered by default; the brand "rounds" via a 45° corner chamfer.
 * Signal Red is the primary/confirm fill. Destructive uses a red outline that
 * fills on hover so it reads as caution, distinct from the solid confirm.
 */

const CSS = `
.xgbtn{--_h:var(--size-control-md);--_px:18px;--_fs:var(--text-sm);
  position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  height:var(--_h);padding:0 var(--_px);font-family:var(--font-body);font-size:var(--_fs);
  font-weight:var(--weight-semibold);letter-spacing:0.01em;line-height:1;white-space:nowrap;
  border:var(--border-thin) solid transparent;border-radius:var(--radius-0);cursor:pointer;
  color:var(--content-primary);background:transparent;transition:var(--transition-colors),transform var(--dur-instant) var(--ease-out);
  -webkit-appearance:none;appearance:none;user-select:none;}
.xgbtn:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgbtn:disabled{cursor:not-allowed;opacity:1;color:var(--content-faint);
  background:var(--surface-default);border-color:var(--border-subtle);}
.xgbtn--sm{--_h:var(--size-control-sm);--_px:12px;--_fs:var(--text-xs);}
.xgbtn--lg{--_h:var(--size-control-lg);--_px:24px;--_fs:var(--text-base);}
.xgbtn--full{width:100%;}
.xgbtn--chamfer{clip-path:polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));}

.xgbtn--primary{background:var(--accent);color:var(--accent-content);}
.xgbtn--primary:hover:not(:disabled){background:var(--accent-hover);}
.xgbtn--primary:active:not(:disabled){background:var(--accent-active);}

.xgbtn--secondary{background:transparent;border-color:var(--border-default);color:var(--content-primary);}
.xgbtn--secondary:hover:not(:disabled){background:var(--surface-hover);border-color:var(--border-strong);}
.xgbtn--secondary:active:not(:disabled){background:var(--surface-active);}

.xgbtn--ghost{background:transparent;color:var(--content-secondary);}
.xgbtn--ghost:hover:not(:disabled){background:var(--surface-hover);color:var(--content-primary);}
.xgbtn--ghost:active:not(:disabled){background:var(--surface-active);}

.xgbtn--danger{background:transparent;border-color:var(--accent-border);color:var(--accent);}
.xgbtn--danger:hover:not(:disabled){background:var(--accent);color:var(--accent-content);border-color:var(--accent);}
.xgbtn--danger:active:not(:disabled){background:var(--accent-active);border-color:var(--accent-active);}

.xgbtn__ico{display:inline-flex;flex:none;width:1em;height:1em;font-size:1.25em;}
.xgbtn__ico svg{width:100%;height:100%;display:block;}
.xgbtn--loading{color:transparent !important;}
.xgbtn__spin{position:absolute;width:1.05em;height:1.05em;border:2px solid currentColor;
  border-top-color:transparent;border-radius:50%;animation:xgbtn-spin .6s linear infinite;
  color:var(--accent-content);}
.xgbtn--secondary .xgbtn__spin,.xgbtn--ghost .xgbtn__spin,.xgbtn--danger .xgbtn__spin{color:var(--content-primary);}
@keyframes xgbtn-spin{to{transform:rotate(360deg);}}
@media (prefers-reduced-motion:reduce){.xgbtn__spin{animation-duration:1.2s;}}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'button');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  chamfer = false,
  loading = false,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  inject();
  const cls = [
    'xgbtn',
    `xgbtn--${variant}`,
    size !== 'md' && `xgbtn--${size}`,
    fullWidth && 'xgbtn--full',
    chamfer && 'xgbtn--chamfer',
    loading && 'xgbtn--loading',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={cls} disabled={disabled || loading} {...rest}>
      {loading && <span className="xgbtn__spin" aria-hidden="true" />}
      {iconLeft && <span className="xgbtn__ico" aria-hidden="true">{iconLeft}</span>}
      {children}
      {iconRight && <span className="xgbtn__ico" aria-hidden="true">{iconRight}</span>}
    </button>
  );
}
