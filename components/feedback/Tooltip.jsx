import React from 'react';

/**
 * XGVE Tooltip — a small technical label shown on hover/focus of its child.
 * Mono text, sharp corners, hairline rule. Placement top/bottom/left/right.
 * Wraps a single interactive child.
 */

const CSS = `
.xgtip{position:relative;display:inline-flex;}
.xgtip__pop{position:absolute;z-index:var(--z-tooltip);pointer-events:none;
  font-family:var(--font-mono);font-size:11px;letter-spacing:var(--tracking-wide);line-height:1.3;
  color:var(--content-primary);background:var(--surface-overlay);
  border:var(--border-thin) solid var(--border-default);border-radius:var(--radius-1);
  padding:5px 8px;white-space:nowrap;box-shadow:var(--shadow-sm);
  opacity:0;transform:scale(0.96);transition:opacity var(--dur-fast) var(--ease-out),transform var(--dur-fast) var(--ease-out);}
.xgtip__pop[data-show="true"]{opacity:1;transform:scale(1);}
.xgtip__pop[data-place="top"]{bottom:calc(100% + 8px);left:50%;transform-origin:bottom center;translate:-50% 0;}
.xgtip__pop[data-place="bottom"]{top:calc(100% + 8px);left:50%;transform-origin:top center;translate:-50% 0;}
.xgtip__pop[data-place="left"]{right:calc(100% + 8px);top:50%;transform-origin:right center;translate:0 -50%;}
.xgtip__pop[data-place="right"]{left:calc(100% + 8px);top:50%;transform-origin:left center;translate:0 -50%;}
.xgtip__kbd{color:var(--accent);margin-left:6px;}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'tooltip');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Tooltip({
  label,
  shortcut,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  inject();
  const [show, setShow] = React.useState(false);
  const cls = ['xgtip', className].filter(Boolean).join(' ');
  return (
    <span className={cls} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocusCapture={() => setShow(true)} onBlurCapture={() => setShow(false)} {...rest}>
      {children}
      <span className="xgtip__pop" role="tooltip" data-show={show} data-place={placement}>
        {label}{shortcut && <span className="xgtip__kbd">{shortcut}</span>}
      </span>
    </span>
  );
}
