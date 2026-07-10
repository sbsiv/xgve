/* XGVE Console — shared line-icon set (Lucide geometry, MIT). Exposed on window
   so every screen script shares them. Stroke language matches the hairline rules. */
(function () {
  const React = window.React;
  const S = (props, children) => React.createElement('svg', Object.assign({
    viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2,
    strokeLinecap: 'round', strokeLinejoin: 'round', width: '1em', height: '1em',
  }, props), children);
  const P = (d, key) => React.createElement('path', { d, key });
  const L = (x1, y1, x2, y2, key) => React.createElement('line', { x1, y1, x2, y2, key });
  const C = (cx, cy, r, key) => React.createElement('circle', { cx, cy, r, key });
  const poly = (points, key) => React.createElement('polyline', { points, key });

  const Icons = {
    Grid: () => S({}, [React.createElement('rect',{x:3,y:3,width:7,height:7,key:'a'}),React.createElement('rect',{x:14,y:3,width:7,height:7,key:'b'}),React.createElement('rect',{x:14,y:14,width:7,height:7,key:'c'}),React.createElement('rect',{x:3,y:14,width:7,height:7,key:'d'})]),
    Box: () => S({}, [P('M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z','a'),poly('3.27 6.96 12 12.01 20.73 6.96','b'),L(12,22.08,12,12,'c')]),
    Hammer: () => S({}, [P('M15 12l-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9','a'),P('M17.64 15L22 10.64','b'),P('M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h.86c.85 0 1.65.33 2.25.93l1.25 1.25','c')]),
    Rocket: () => S({}, [P('M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z','a'),P('M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z','b'),P('M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0','c'),P('M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5','d')]),
    Terminal: () => S({}, [poly('4 17 10 11 4 5','a'),L(12,19,20,19,'b')]),
    Search: () => S({}, [C(11,11,7,'a'),L(21,21,16.65,16.65,'b')]),
    Bell: () => S({}, [P('M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9','a'),P('M13.73 21a2 2 0 0 1-3.46 0','b')]),
    Settings: () => S({}, [C(12,12,3,'a'),P('M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z','b')]),
    Plus: () => S({}, [L(12,5,12,19,'a'),L(5,12,19,12,'b')]),
    ArrowRight: () => S({}, [L(5,12,19,12,'a'),poly('12 5 19 12 12 19','b')]),
    ArrowUpRight: () => S({}, [L(7,17,17,7,'a'),poly('7 7 17 7 17 17','b')]),
    ChevronRight: () => S({}, [poly('9 18 15 12 9 6','a')]),
    Activity: () => S({}, [poly('22 12 18 12 15 21 9 3 6 12 2 12','a')]),
    Cpu: () => S({}, [React.createElement('rect',{x:4,y:4,width:16,height:16,rx:1,key:'a'}),React.createElement('rect',{x:9,y:9,width:6,height:6,key:'b'}),L(9,1,9,4,'c'),L(15,1,15,4,'d'),L(9,20,9,23,'e'),L(15,20,15,23,'f'),L(20,9,23,9,'g'),L(20,14,23,14,'h'),L(1,9,4,9,'i'),L(1,14,4,14,'j')]),
    Zap: () => S({}, [React.createElement('polygon',{points:'13 2 3 14 12 14 11 22 21 10 12 10 13 2',key:'a'})]),
    LogOut: () => S({}, [P('M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4','a'),poly('16 17 21 12 16 7','b'),L(21,12,9,12,'c')]),
    Check: () => S({}, [poly('20 6 9 17 4 12','a')]),
  };
  window.XG_Icons = Icons;
})();
