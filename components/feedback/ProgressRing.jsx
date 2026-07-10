import React from 'react';

/**
 * XGVE ProgressRing — the broken-ring / gauge motif as a determinate progress
 * indicator. A neutral broken track with a Signal-Red arc filling clockwise, and
 * a mono readout in the centre. Reads as a targeting ring / speedometer, straight
 * from the emblem's language. Intentional brand addition (see readme.md).
 */

const CSS = `
.xgring{position:relative;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-mono);}
.xgring__svg{display:block;}
.xgring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;
  justify-content:center;text-align:center;pointer-events:none;gap:1px;}
.xgring__track{stroke:var(--border-default);}
.xgring__fill{stroke:var(--accent);transition:stroke-dashoffset var(--dur-slow) var(--ease-out);}
.xgring__fill--indeterminate{animation:xgring-rot 1.1s linear infinite;transform-origin:50% 50%;}
.xgring__label{font-size:var(--text-sm);font-weight:var(--weight-medium);color:var(--content-primary);
  font-variant-numeric:tabular-nums;letter-spacing:var(--tracking-wide);}
.xgring__sub{font-size:9px;letter-spacing:var(--tracking-widest);text-transform:uppercase;color:var(--content-muted);}
@keyframes xgring-rot{to{transform:rotate(360deg);}}
@media (prefers-reduced-motion:reduce){.xgring__fill--indeterminate{animation-duration:2.2s;}}
`;

let _injected = false;
function inject() {
  if (_injected || typeof document === 'undefined') return;
  _injected = true;
  const s = document.createElement('style');
  s.setAttribute('data-xgve', 'progress-ring');
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function ProgressRing({
  value = 0,
  size = 96,
  thickness = 8,
  gap = 90,
  indeterminate = false,
  showValue = true,
  label,
  className = '',
  ...rest
}) {
  inject();
  const r = (100 - thickness) / 2;              // radius in a 0..100 viewBox
  const c = 2 * Math.PI * r;                     // circumference
  const sweep = 360 - gap;                       // visible arc degrees
  const arc = c * (sweep / 360);                 // visible arc length
  const start = 90 + gap / 2;                    // rotate so the gap centres at bottom
  const pct = Math.max(0, Math.min(100, value));
  const fillLen = arc * (pct / 100);

  const cls = ['xgring', className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <svg className="xgring__svg" width={size} height={size} viewBox="0 0 100 100"
        role="img" aria-label={label || (indeterminate ? 'Working' : `${Math.round(pct)}%`)}>
        <circle className="xgring__track" cx="50" cy="50" r={r} fill="none"
          strokeWidth={thickness} strokeLinecap="butt"
          strokeDasharray={`${arc} ${c - arc}`}
          transform={`rotate(${start} 50 50)`} />
        <circle className={`xgring__fill${indeterminate ? ' xgring__fill--indeterminate' : ''}`}
          cx="50" cy="50" r={r} fill="none"
          strokeWidth={thickness} strokeLinecap="butt"
          strokeDasharray={indeterminate ? `${arc * 0.28} ${c}` : `${fillLen} ${c - fillLen}`}
          transform={`rotate(${start} 50 50)`} />
      </svg>
      {(showValue || label) && (
        <div className="xgring__center">
          {showValue && !indeterminate && <div className="xgring__label">{Math.round(pct)}%</div>}
          {label && <div className="xgring__sub">{label}</div>}
        </div>
      )}
    </div>
  );
}
