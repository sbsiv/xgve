/* XGVE Studios — dual alternating ASCII reveal, white, layered over the field.
 * A: the REAL Foxglove trademark art (XG_ASCII.foxglove) FAR RIGHT — builds up
 *    bottom-first, holds, disintegrates, morphing out of the background field.
 * B: big XGVE wordmark (XG_ASCII.wordmark) BOTTOM-LEFT — builds left→right.
 * Alternate (never together). NOTE: this uses the brand's own 2D ASCII art — a
 * faithful trademark. A true parametric 3D foxglove would need a 3D model/depth
 * source of the mark (can't be fabricated from the flat art).
 * window.XGVE_initFoxgloveGhost(canvas).
 */
(function () {
  var NOISE = "01#@%&$X=+*<>/\\|".split("");
  var SHIM = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>?!".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  function smooth(t) { t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * (3 - 2 * t); }

  window.XGVE_initFoxgloveGhost = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0, H = 0, dpr = 1;
    function size() {
      dpr = Math.min(1.5, window.devicePixelRatio || 1);
      var host = canvas.parentElement || document.body;
      W = host.clientWidth || window.innerWidth; H = host.clientHeight || window.innerHeight;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size(); window.addEventListener("resize", size);

    var foxCells = null, wordCells = null;
    function prepGrid(key, ord) {
      var g = window.XG_ASCII && window.XG_ASCII[key]; if (!g) return null;
      var C = g.cols, R = g.rows, chars = g.chars, cols = g.colors || [], cells = [];
      for (var y = 0; y < R; y++) {
        var row = chars[y] || "", kr = cols[y] || "";
        for (var x = 0; x < C; x++) { var c = row[x]; if (c === " " || c === undefined) continue; var di = DENS.indexOf(c); cells.push({ x: x, y: y, ch: c, red: kr[x] === "r", o: ord(x, y, C, R), d: di < 0 ? 0.5 : di / (DENS.length - 1) }); }
      }
      return { C: C, R: R, cells: cells };
    }
    function prep() {
      foxCells = prepGrid("foxglove", function (x, y, C, R) { return 1 - y / R; });   // bottom-first
      wordCells = prepGrid("wordmark", function (x, y, C, R) { return x / C; });        // left→right
    }

    var T = [{ Tb: 4.2, Th: 2.6, Td: 3.0, Tg: 1.1 }, { Tb: 3.0, Th: 1.8, Td: 2.2, Tg: 1.1 }];
    var raf = 0, prev = 0, tt = 0, idx = 0, subStart = 0, lastPaint = 0, pClear = false;
    function phaseRF(e, d) {
      if (reduced) return 1;
      if (e < d.Tb) return smooth(e / d.Tb);
      if (e < d.Tb + d.Th) return 1;
      if (e < d.Tb + d.Th + d.Td) return 1 - smooth((e - d.Tb - d.Th) / d.Td);
      return -1;
    }
    function drawGrid(g, rf, cx, hFrac, wFrac, place, exact) {
      if (!g) return;
      var C = g.C, R = g.R, ch = (H * hFrac) / R, cw = ch * 0.6;
      if (cw * C > W * wFrac) { cw = (W * wFrac) / C; ch = cw / 0.6; }
      var blockW = cw * C, blockH = ch * R;
      var ox = place === "bl" ? W * 0.04 : cx * W - blockW / 2;
      var oy = place === "bl" ? H * 0.9 - blockH : (H - blockH) / 2;
      ctx.textBaseline = "middle"; ctx.textAlign = "center";
      ctx.font = "500 " + (ch * 0.95).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = (performance.now() * 0.012) | 0;
      var ts = performance.now() * 0.001;
      var mask = new Set();
      for (var i = 0; i < g.cells.length; i++) {
        var cell = g.cells[i], reveal = rf - cell.o;
        if (reveal <= 0) continue;
        var glyph;
        if (reveal < 0.06) glyph = NOISE[(Math.random() * NOISE.length) | 0];
        else if (exact) glyph = (Math.random() < 0.015) ? NOISE[(Math.random() * NOISE.length) | 0] : cell.ch;
        else glyph = SHIM[(cell.x * 17 + cell.y * 29 + salt) % SHIM.length];
        var px = ox + cell.x * cw + cw / 2, py = oy + cell.y * ch + ch / 2;
        var sway = Math.sin(ts * 0.55);
        px += (cell.d - 0.5) * 30 * sway;                            // pseudo-depth parallax (both subjects)
        var lite = 0.85 + 0.35 * (cell.d - 0.5) * Math.sin(ts * 0.55 + 0.6);
        mask.add((((px / 24) | 0) * 4096) + ((py / 24) | 0));
        var wv = Math.sin(px * 0.011 + ts * 1.2) + Math.sin(py * 0.013 - ts * 0.9);
        ctx.globalAlpha = Math.min(1, smooth(reveal / 0.22) * (0.52 + 0.24 * (wv * 0.25 + 0.5)) * lite);
        var isRed = cell.red || (exact && ((cell.x * 7 + cell.y * 13) % 11 === 0));
        ctx.fillStyle = isRed ? "rgba(230,32,46,0.95)" : "rgba(198,204,214,0.95)";
        ctx.fillText(glyph, px, py + wv * 2.4);
      }
      window.XGVE_RMASK = mask;
    }
    function draw(now) {
      if (window.XGVE_PAUSED) {
        if (!pClear) { ctx.clearRect(0, 0, W, H); window.XGVE_RMASK = null; pClear = true; }
        prev = now; raf = requestAnimationFrame(draw); return;
      }
      pClear = false;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016; prev = now;
      tt += reduced ? 0 : dt;
      if (now - lastPaint < 33) { raf = requestAnimationFrame(draw); return; }   // ~30fps paint, timeline stays true
      lastPaint = now;
      ctx.clearRect(0, 0, W, H);
      var cur = reduced ? 0 : idx, d = T[cur], e = tt - subStart;
      if (!reduced && e >= d.Tb + d.Th + d.Td + d.Tg) { idx = (idx + 1) % 2; subStart = tt; window.XGVE_RMASK = null; raf = requestAnimationFrame(draw); return; }
      var rf = phaseRF(e, d);
      if (rf >= 0) { if (cur === 0) drawGrid(foxCells, rf, 0.85, 0.72, 0.28, "right", true); else drawGrid(wordCells, rf, 0.30, 0.19, 0.40, "bl", false); }
      else {
        window.XGVE_RMASK = null;
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    var tries = 0;
    (function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.foxglove)) { if (tries++ < 60) { setTimeout(start, 80); return; } }
      prep(); subStart = 0; raf = requestAnimationFrame(draw);
    })();
    return function () { cancelAnimationFrame(raf); window.removeEventListener("resize", size); };
  };
})();
