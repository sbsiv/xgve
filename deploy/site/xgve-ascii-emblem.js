/* XGVE Studios — half-ASCII emblem (LEFT half) from the XG_ASCII.emblem grid.
 * The grid defines WHICH cells are lit (the emblem shape) + red cells; the glyph
 * shown in each is drawn from a large varied set and shimmers quickly, so the mark
 * reads as living code. Right half stays empty for the metallic emblem beneath.
 */
(function () {
  var CHARS = "ABCDEFGHKMNPQRSTUVWXYZ0123456789#@%&$*+=<>/\\|!?".split("");
  var DENS = " .`',:;^~-_!|/\\()<>+=*?icvzxsoeaftjrnuywkbdpqhg123456789SEZAGRUKD$%#@&MWB08";
  window.XGVE_initAsciiEmblem = function (canvas) {
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var W = 0, H = 0, dpr = 1, grid = null, lit = [], fs = 10, t0 = 0;

    function size() {
      var host = canvas.parentElement || canvas;
      W = canvas.clientWidth || host.clientWidth;
      H = canvas.clientHeight || host.clientHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function build() {
      lit = []; if (!grid || !W) return;
      var C = grid.cols, R = grid.rows, chars = grid.chars, cols = grid.colors;
      var cw = W / C, ch = H / R, half = W * 0.5; fs = ch;
      for (var y = 0; y < R; y++) {
        var cr = chars[y] || "", kr = cols[y] || "";
        for (var x = 0; x < C; x++) {
          var px = x * cw + cw / 2;
          if (px >= half) break;
          var c = cr[x];
          if (c === " " || c === undefined) continue;
          var di = DENS.indexOf(c);
          lit.push({ x: px, y: y * ch + ch / 2, red: kr[x] === "r", d: di < 0 ? 0.5 : di / (DENS.length - 1) });
        }
      }
      var mx = W * 0.5, my = H * 0.5, md = Math.hypot(mx, my) || 1;
      for (var k = 0; k < lit.length; k++) lit[k].o = Math.hypot(lit[k].x - mx, lit[k].y - my) / md;
    }
    function render() {
      if (!grid) return;
      ctx.clearRect(0, 0, W, H);
      ctx.textBaseline = "middle"; ctx.textAlign = "center";
      ctx.font = "600 " + (fs * 0.98).toFixed(1) + "px 'IBM Plex Mono', monospace";
      var salt = (performance.now() * 0.014) | 0, n = CHARS.length;
      var ts = performance.now() * 0.001;
      var rf = 1;
      if (!reduced && t0) { var el = (performance.now() - t0) / 2100; rf = el >= 1 ? 1 : el * el * (3 - 2 * el); }
      for (var i = 0; i < lit.length; i++) {
        var c = lit[i];
        if (c.o > rf) continue;
        var wv = Math.sin(c.x * 0.02 + ts * 1.3) + Math.sin(c.y * 0.024 - ts);
        var ph = (ts * 0.35 + c.x * 0.012 + c.y * 0.006) % 1;          // flow toward the junction
        var pa = ph > 0.72 ? 1 - (ph - 0.72) / 0.28 : (ph < 0.08 ? ph / 0.08 : 1);
        var lite = 0.85 + 0.35 * (c.d - 0.5) * Math.sin(ts * 0.5 + 0.6);   // pseudo-depth rolling light
        ctx.globalAlpha = Math.min(1, (0.78 + 0.2 * (wv * 0.25 + 0.5)) * (0.35 + 0.65 * pa) * lite);
        ctx.fillStyle = c.red ? "rgba(255,42,56,.95)" : "rgba(233,234,236,.96)";
        ctx.fillText(CHARS[(i * 17 + salt) % n], c.x + ph * 9 + (c.d - 0.5) * 22 * Math.sin(ts * 0.5), c.y + wv * 2.2);
      }
      // rogue red glyphs breaking free of the mark (drift left, fade)
      if (lit.length > 10) {
        for (var r2 = 0; r2 < 2; r2++) {
          var rp = ((ts * 0.12) + r2 * 0.5) % 1;
          var src = lit[(r2 * 137 + 29) % lit.length];
          ctx.globalAlpha = rp < 0.1 ? rp / 0.1 * 0.9 : (1 - rp) * 0.9;
          ctx.fillStyle = "rgba(255,42,56,.9)";
          ctx.fillText(CHARS[(r2 * 31 + salt) % n], src.x - rp * 80, src.y - rp * 26);
        }
      }
      ctx.globalAlpha = 1;
    }
    var raf = 0, prev = 0;
    function loop(now) { if (now - prev > 70) { prev = now; render(); } raf = requestAnimationFrame(loop); }

    var tries = 0;
    function start() {
      if (!(window.XG_ASCII && window.XG_ASCII.emblem)) { if (tries++ < 60) setTimeout(start, 80); return; }
      grid = window.XG_ASCII.emblem; size(); build(); t0 = performance.now(); render();
      window.addEventListener("resize", function () { size(); build(); render(); });
      if (!reduced) raf = requestAnimationFrame(loop);
    }
    start();
    return function () { cancelAnimationFrame(raf); };
  };
})();
