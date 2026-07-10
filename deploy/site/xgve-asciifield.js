/* XGVE Studios — screen-wide geometric ASCII field (full-bleed, always moving).
 * Known-good 2D engine: glyph sprite ATLAS blitted with drawImage (smooth, no
 * stutter). Two independently rotating kaleidoscopic folds feed several overlapping
 * geometric modes whose weights morph over time. Large varied glyph set; white/gray
 * with scarce red on the peaks. window.XGVE_initAsciiField(canvas).
 * (The 3D wave-sheet variant is parked — see todo 45 — this reliably fills the view.)
 */
(function () {
  var CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#@%&$*+=-<>/\\|!?:;.^~coxsevz".split("");
  window.XGVE_initAsciiField = function (canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var CELL = opts.cell || 30;
    var W = 0, H = 0, cols = 0, rows = 0, dpr = 1, aspect = 1;
    var atlasW = null, atlasR = null, tile = 0, N = CHARS.length;

    function makeAtlas(col) {
      var a = document.createElement("canvas");
      a.width = tile * N; a.height = tile;
      var x = a.getContext("2d");
      x.textBaseline = "middle"; x.textAlign = "center";
      x.font = "600 " + Math.floor((CELL - 6) * dpr) + "px 'IBM Plex Mono', monospace";
      x.fillStyle = col;
      for (var i = 0; i < N; i++) x.fillText(CHARS[i], i * tile + tile / 2, tile / 2);
      return a;
    }
    function resize() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth;
      H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / CELL); rows = Math.ceil(H / CELL); aspect = W / H;
      tile = Math.ceil(CELL * dpr); atlasW = makeAtlas("#c6ced8"); atlasR = makeAtlas("#e6202e");
    }
    resize(); window.addEventListener("resize", resize);
    requestAnimationFrame(resize); setTimeout(resize, 140);
    if (window.ResizeObserver) { try { new ResizeObserver(resize).observe(canvas.parentElement || document.body); } catch (e) {} }

    var raf = 0, prev = 0, tt = 0, lastPaint = 0;
    function draw(now) {
      if (document.hidden) { prev = now; raf = requestAnimationFrame(draw); return; }
      if (window.XGVE_PAUSED) { prev = now; raf = requestAnimationFrame(draw); return; }   // frozen frame stays on canvas
      if (now - lastPaint < 30) { raf = requestAnimationFrame(draw); return; }              // ~30fps paint cap
      lastPaint = now;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016; prev = now;
      tt += reduced ? 0 : dt * 2.3;
      var T = tt;
      var ra = T * 0.07, ca = Math.cos(ra), sa = Math.sin(ra);
      var rb = -T * 0.05 + 1.3, cb = Math.cos(rb), sb = Math.sin(rb);
      var w1 = 0.55 + 0.45 * Math.sin(T * 0.17), w2 = 0.55 + 0.45 * Math.sin(T * 0.13 + 2),
          w3 = 0.55 + 0.45 * Math.sin(T * 0.10 + 4), w4 = 0.5 + 0.5 * Math.sin(T * 0.08 + 1),
          w5 = 0.5 + 0.5 * Math.sin(T * 0.15 + 3), w6 = 0.5 + 0.5 * Math.sin(T * 0.07 + 5),
          w7 = 0.5 + 0.5 * Math.sin(T * 0.12 + 2.5);
      ctx.clearRect(0, 0, W, H);
      var cxp = W / 2, cyp = H / 2, salt = (T * 7) | 0, half = CELL / 2;
      for (var j = 0; j < rows; j++) {
        var py = j * CELL + half, ny = (py - cyp) / cyp;
        for (var i = 0; i < cols; i++) {
          var px = i * CELL + half, nx = (px - cxp) / cxp * aspect;
          var rx = nx * ca - ny * sa, ry = nx * sa + ny * ca;
          var u = Math.abs(rx), v = Math.abs(ry);
          var r = Math.sqrt(u * u + v * v), ang = Math.atan2(v, u + 1e-4);
          var bx = nx * cb - ny * sb, by = nx * sb + ny * cb;
          var r2 = Math.sqrt(bx * bx + by * by);
          var s = w1 * Math.sin(r * 8 - T * 1.3)
                + w2 * Math.sin(ang * 6 + r * 4.5 - T * 0.9)
                + w3 * Math.sin(u * 20 + v * 20 - T * 1.6)
                + w4 * Math.sin((u - v) * 26 + T * 1.8)
                + w5 * Math.sin(r2 * 11 - T * 1.1)
                + w6 * Math.sin(Math.max(u, v) * 16 - T * 1.2)
                + w7 * Math.sin((u * 2 + v) * 13 + T * 0.7);
          var val = 0.5 + s * 0.19;
          if (val < 0.30) continue;
          var zN = s * 0.45;                                    // parametric 3D depth
          var scale = 1 + zN * 0.35; if (scale < 0.55) scale = 0.55;
          var dx = px + (px - cxp) / cxp * zN * 16;             // radial parallax
          var dy = py - zN * CELL * 0.9;                        // relief lift
          var sz = CELL * scale, hs = sz / 2;
          var hash = (i * 131 + j * 57) & 255;
          var idx = (hash + salt) % N;
          var depthB = 0.55 + 0.45 * Math.max(0, Math.min(1, zN * 0.45 + 0.5));
          var msk = window.XGVE_RMASK;
          var brk = msk && msk.has((((px / 24) | 0) * 4096) + ((py / 24) | 0)) ? 0.14 : 1;
          ctx.globalAlpha = (0.12 + Math.min(0.62, (val - 0.30) * 0.8)) * depthB * brk;
          var red = val > 0.88 || (((hash & 7) === 0) && val > 0.66);
          ctx.drawImage(red ? atlasR : atlasW, idx * tile, 0, tile, tile, dx - hs, dy - hs, sz, sz);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    if (reduced) { cancelAnimationFrame(raf); draw(0); }
    return function () { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  };
})();
