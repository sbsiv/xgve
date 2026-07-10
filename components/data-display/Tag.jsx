import React from 'react';

/**
 * XGVE Tag — an interactive token for filters, categories and inputs. Unlike the
 * read-only Badge, a Tag can be selectable (toggles Signal Red) or removable
 * (trailing ✕). Sharp corners; sentence-case body type.
 */

const CSS = `
.xgtag{display:inline-flex;align-items:center;gap:7px;font-family:var(--font-body);
  font-size:var(--text-xs);font-weight:var(--weight-medium);line-height:1;padding:5px 9px;
  border-radius:var(--radius-1);white-space:nowrap;background:var(--surface-overlay);
  color:var(--content-secondary);border:var(--border-thin) solid var(--border-default);
  transition:var(--transition-colors);}
.xgtag--button{cursor:pointer;-webkit-appearance:none;appearance:none;}
.xgtag--button:hover{border-color:var(--border-strong);color:var(--content-primary);}
.xgtag--button:focus-visible{outline:none;box-shadow:var(--ring-focus);}
.xgtag--selected{background:var(--accent-surface);border-color:var(--accent-border);color:var(--accent);}
.xgtag__dot{width:6px;height:6px;border-radius:var(--radius-pill);background:currentColor;flex:none;}
.xgtag__remove{display:inline-flex;align-items:center;justify-content:center;width:14px;height:14px;
  margin-right:-2px;border:none;background:transparent;color:currentColor;cursor:pointer;opacity:0.7;
  border-radius:var(--radius-1);transition:var(--transition-colors);}
.xgtag__remove:hover{opacity:1;background:var(--surface-hover);}
.xgtag__remove svg{width:11px;height:11px;display:block;}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'tag');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tag({
  children,
  selected = false,
  dot = false,
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  inject();
  const clickable = Boolean(onClick);
  const Tagname = clickable ? 'button' : 'span';
  const cls = [
    'xgtag',
    clickable && 'xgtag--button',
    selected && 'xgtag--selected',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tagname className={cls} onClick={onClick}
      aria-pressed={clickable ? selected : undefined}
      type={clickable ? 'button' : undefined} {...rest}>
      {dot && <span className="xgtag__dot" aria-hidden="true" />}
      {children}
      {onRemove && (
        <button type="button" className="xgtag__remove" aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
      )}
    </Tagname>
  );
}
