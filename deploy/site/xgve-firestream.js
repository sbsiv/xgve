/* XGVE Studios — ASCII glyph stream pouring off the emblem's left edge.
 * Row-aligned monospace glyphs stream left like dissolving code: dense & hot
 * (red/orange) near the emblem, cooling through white to steel-blue as they go.
 * window.XGVE_initFireStream(canvas, getOrigin) — getOrigin()->{x,y,h}.
 */
(function () {
  var GLYPHS = "01101#@%&$X=+*:.7?01001".split("");
  var rnd = function () { return GLYPHS[(Math.random() * GLYPHS.length) | 0]; };

  window.XGVE_initFireStream = function (canvas, getOrigin) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0, H = 0, dpr = 1;
    function resize() {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize(); window.addEventListener("resize", resize);

    var ROW = 13;               // row pitch → ascii scanline feel
    var parts = [], MAX = 460;
    function spawn(ox, oy, eh) {
      var row = Math.round((oy + (Math.random() - 0.5) * eh) / ROW) * ROW;
      parts.push({
        x: ox + Math.random() * 6, y: row,
        vx: -(60 + Math.random() * 150),
        vy: (Math.random() - 0.5) * 7,
        life: 0, ttl: 1.6 + Math.random() * 2.4,
        ch: rnd(), sz: 10 + Math.random() * 3,
        rechar: 0
      });
      if (parts.length > MAX) parts.shift();
    }

    function color(temp, a) {
      var r, g, b;
      if (temp > 0.62) { r = 255; g = 55 + (1 - temp) * 210; b = 45; }   // ember red→orange
      else if (temp > 0.34) { r = 240; g = 242; b = 235; }               // white-hot
      else { r = 110; g = 170; b = 255; }                                // cool steel-blue
      return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a.toFixed(3) + ")";
    }

    var raf = 0, prev = 0;
    function frame(t) {
      var dt = prev ? Math.min(0.05, (t - prev) / 1000) : 0.016; prev = t;
      ctx.clearRect(0, 0, W, H);
      var o = getOrigin && getOrigin();
      if (o && !reduced) { var n = 4 + (Math.random() * 4 | 0); for (var i = 0; i < n; i++) spawn(o.x, o.y, o.h || 140); }
      ctx.textBaseline = "middle"; ctx.textAlign = "center";
      for (var j = parts.length - 1; j >= 0; j--) {
        var p = parts[j];
        p.life += dt;
        var f = p.life / p.ttl;
        if (f >= 1) { parts.splice(j, 1); continue; }
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.rechar += dt; if (p.rechar > 0.12) { p.rechar = 0; if (Math.random() < 0.5) p.ch = rnd(); }
        var temp = 1 - f;
        var a = (f < 0.1 ? f / 0.1 : (f > 0.62 ? (1 - f) / 0.38 : 1)) * 0.92;
        ctx.font = "500 " + p.sz.toFixed(1) + "px 'IBM Plex Mono', monospace";
        ctx.fillStyle = color(temp, a);
        ctx.fillText(p.ch, p.x, p.y);
      }
      raf = requestAnimationFrame(frame);
    }
    if (!reduced) raf = requestAnimationFrame(frame);
    return function () { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  };
})();
