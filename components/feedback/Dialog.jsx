import React from 'react';

/**
 * XGVE Dialog — modal surface over a dark scrim. Sharp-cornered overlay panel,
 * hairline rule, optional red accent top-rule. Scrim uses a controlled dark blur
 * (no colour shift). Escape and scrim-click call onClose. Fixed-position overlay
 * (no portal needed).
 */

const CSS = `
.xgdlg__scrim{position:fixed;inset:0;z-index:var(--z-dialog);display:flex;align-items:center;
  justify-content:center;padding:var(--space-8);background:var(--scrim-strong);
  -webkit-backdrop-filter:blur(var(--blur-sm));backdrop-filter:blur(var(--blur-sm));
  animation:xgdlg-fade var(--dur-base) var(--ease-out);}
.xgdlg{position:relative;width:100%;max-width:var(--_w,480px);max-height:calc(100vh - 2*var(--space-8));
  display:flex;flex-direction:column;background:var(--surface-overlay);
  border:var(--border-thin) solid var(--border-default);border-radius:var(--radius-0);
  box-shadow:var(--shadow-overlay);font-family:var(--font-body);color:var(--content-primary);
  animation:xgdlg-rise var(--dur-base) var(--ease-enter);}
.xgdlg--accent{border-top:var(--border-heavy) solid var(--accent);}
.xgdlg__head{display:flex;align-items:flex-start;gap:16px;padding:var(--space-7) var(--space-7) var(--space-4);}
.xgdlg__titles{flex:1;min-width:0;}
.xgdlg__eyebrow{font-family:var(--font-mono);font-size:10px;letter-spacing:var(--tracking-widest);
  text-transform:uppercase;color:var(--accent);margin:0 0 6px;}
.xgdlg__title{font-family:var(--font-display);font-size:var(--text-xl);font-weight:var(--weight-semibold);
  letter-spacing:var(--tracking-tight);margin:0;}
.xgdlg__desc{margin:8px 0 0;font-size:var(--text-sm);line-height:var(--leading-normal);color:var(--content-secondary);}
.xgdlg__close{flex:none;display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;
  margin:-4px -4px 0 0;background:transparent;border:none;color:var(--content-muted);cursor:pointer;
  border-radius:var(--radius-1);transition:var(--transition-colors);}
.xgdlg__close:hover{background:var(--surface-hover);color:var(--content-primary);}
.xgdlg__close:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgdlg__close svg{width:16px;height:16px;display:block;}
.xgdlg__body{padding:0 var(--space-7) var(--space-4);overflow:auto;font-size:var(--text-sm);
  line-height:var(--leading-normal);color:var(--content-secondary);}
.xgdlg__foot{display:flex;justify-content:flex-end;gap:10px;padding:var(--space-5) var(--space-7) var(--space-7);}
@keyframes xgdlg-fade{from{opacity:0;}to{opacity:1;}}
@keyframes xgdlg-rise{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
@media (prefers-reduced-motion:reduce){.xgdlg__scrim,.xgdlg{animation:none;}}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'dialog');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  description,
  children,
  footer,
  accent = true,
  width = 480,
  closeOnScrim = true,
  className = '',
}) {
  inject();
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  const cls = ['xgdlg', accent && 'xgdlg--accent', className].filter(Boolean).join(' ');
  return (
    <div className="xgdlg__scrim" onMouseDown={(e) => { if (closeOnScrim && e.target === e.currentTarget && onClose) onClose(); }}>
      <div className={cls} role="dialog" aria-modal="true" aria-label={title}
        style={{ '--_w': typeof width === 'number' ? `${width}px` : width }}>
        <div className="xgdlg__head">
          <div className="xgdlg__titles">
            {eyebrow && <p className="xgdlg__eyebrow">{eyebrow}</p>}
            {title && <h2 className="xgdlg__title">{title}</h2>}
            {description && <p className="xgdlg__desc">{description}</p>}
          </div>
          {onClose && (
            <button type="button" className="xgdlg__close" aria-label="Close" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
            </button>
          )}
        </div>
        {children && <div className="xgdlg__body">{children}</div>}
        {footer && <div className="xgdlg__foot">{footer}</div>}
      </div>
    </div>
  );
}
