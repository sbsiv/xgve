/* XGVE Studios — endless-zoom psychedelic ASCII field (full-bleed, interactive).
 * Scroll wheel drives an infinite kaleidoscope journey (Droste octave crossfade —
 * seamless, never repeats). Each octave seeds a pattern FAMILY from a generator
 * bank — waves / mandala / log-spiral tunnel / hex lattice / moiré / rose rings /
 * circuit weave — plus kaleidoscope fold, domain warp, hue mood, and optionally
 * "ridge" filament shaping (crisp glowing contour lines at zero-crossings).
 * Brightness maps onto a density-ordered glyph ramp (true ASCII shading).
 * Additive glow, whole-field spin, breathing pulse; wheel inertia + idle drift.
 * Publishes --zoom-act (0..1 scroll activity) so the hero emblem fades while
 * journeying. window.XGVE_initAsciiField(canvas).
 */
(function () {
  // density-ordered glyph ramp: sparse -> dense (brightness = glyph weight)
  var RAMP = "·.:-;!i~^\"+=<>*coxszvunAYLKEXW08#%@$&".split("");

  function rnd(n) { var x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
  var SEGS = [4, 5, 6, 8, 10, 12, 16];
  var _pc = {};
  function octP(k) {
    if (_pc[k]) return _pc[k];
    var rot = rnd(k) * 6.2832;
    var seg = SEGS[Math.floor(rnd(k + 7.7) * SEGS.length)];
    var p = {
      c: Math.cos(rot), s: Math.sin(rot),
      seg: seg, wedge: 6.2832 / seg,
      f1: 5 + rnd(k + 1.3) * 10, f2: 4 + rnd(k + 2.6) * 11, f3: 5 + rnd(k + 3.9) * 13,
      twist: (rnd(k + 4.2) - 0.5) * 1.8, warp: 0.15 + rnd(k + 6.4) * 0.5,
      phase: rnd(k + 5.8) * 6.2832, hue: rnd(k + 9.1) * 12,
      fam: Math.floor(rnd(k + 11.7) * 7),          // pattern family
      ridge: rnd(k + 13.3) < 0.45,                 // filament shaping
      arms: 1 + Math.floor(rnd(k + 14.9) * 5),     // spiral arm count
      ox: (rnd(k + 15.5) - 0.5) * 0.9, oy: (rnd(k + 16.1) - 0.5) * 0.9  // moiré offset
    };
    _pc[k] = p; return p;
  }

  // one octave from the generator bank; m<1 => features grow (zoom in). Returns ~-1..1
  function patt(P, nx, ny, m, T) {
    var x = nx * m, y = ny * m;
    var rx = x * P.c - y * P.s, ry = x * P.s + y * P.c;
    var r = Math.sqrt(rx * rx + ry * ry);
    var a = Math.atan2(ry, rx);
    // shared domain warp + kaleidoscope fold
    var wr = r + 0.26 * Math.sin(a * P.seg * 0.5 + T * 0.6) + 0.15 * Math.sin(r * P.f1 * 0.5 - T);
    var wa = a + P.warp * Math.sin(r * P.f2 * 0.32 - T * 0.4) + r * (0.14 + 0.07 * Math.sin(T * 0.3));
    wa = ((wa % P.wedge) + P.wedge) % P.wedge;
    if (wa > P.wedge * 0.5) wa = P.wedge - wa;
    var s;
    switch (P.fam) {
      case 1:   // mandala: petal rings (radial x angular product)
        s = Math.sin(wr * P.f1 - T) * Math.cos(wa * P.seg + P.phase)
          + 0.5 * Math.sin(wr * P.f2 * 0.5 + T * 0.7) * Math.cos(wa * P.seg * 2);
        s *= 0.66; break;
      case 2:   // log-spiral tunnel (unfolded angle for continuous swirl)
        s = (Math.sin(Math.log(r + 0.1) * P.f1 * 1.1 + a * P.arms - T * 1.2)
          + 0.55 * Math.sin(Math.log(r + 0.1) * P.f2 * 0.7 - a * P.arms + T * 0.8)) * 0.64; break;
      case 3: { // crystalline hex lattice: three plane waves at 60°
        var u2 = rx * -0.5 + ry * 0.8660, u3 = rx * -0.5 - ry * 0.8660;
        s = (Math.sin(rx * P.f1 - T * 0.7) + Math.sin(u2 * P.f1 + T * 0.5) + Math.sin(u3 * P.f1 + P.phase)) * 0.333; break;
      }
      case 4: { // moiré: two ring sets beating against each other
        var qx = rx - P.ox, qy = ry - P.oy;
        var r2 = Math.sqrt(qx * qx + qy * qy);
        s = (Math.sin(r * P.f1 * 1.8 - T * 0.8) + Math.sin(r2 * P.f1 * 1.8 + T * 0.6)) * 0.5; break;
      }
      case 5:   // rose rings: petal-modulated ring spacing
        s = Math.sin(wr * P.f1 * (1 + 0.35 * Math.cos(a * P.seg * 0.5 + P.phase)) - T); break;
      case 6:   // circuit weave: rectilinear max-field + diagonal carrier
        s = (Math.max(Math.sin(rx * P.f1 - T * 0.6), Math.sin(ry * P.f1 + T * 0.5))
          + 0.4 * Math.sin((rx + ry) * P.f2 * 0.5 + P.phase)) * 0.71; break;
      default:  // wave interference (the original field)
        s = (Math.sin(wr * P.f1 - T * 1.0 + P.phase)
          + Math.sin(wa * P.seg + wr * P.f2 * 0.5 - T * 0.7)
          + Math.sin((rx * rx - ry * ry) * P.f3 * 0.28 + T * 0.45)
          + Math.sin(Math.max(Math.abs(rx), Math.abs(ry)) * P.f1 * 0.8 - T * 0.9)) * 0.25;
    }
    return s > 1 ? 1 : s < -1 ? -1 : s;
  }
  // brightness shaping: fields (soft) vs filaments (crisp lines at zero-crossings)
  function shape(P, s) {
    return P.ridge ? Math.pow(1 - Math.abs(s), 2.2) : 0.5 + s * 0.5;
  }

  window.XGVE_initAsciiField = function (canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d");
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var CELL = opts.cell || 30;
    var W = 0, H = 0, cols = 0, rows = 0, dpr = 1, aspect = 1;
    var tile = 0, N = RAMP.length;

    // palette atlases: 0 = neutral structure, 1..12 = hue ring, 13 = signal red peak
    var PAL = ["#8b93a3"];
    for (var hh = 0; hh < 12; hh++) PAL.push("hsl(" + (hh * 30) + ",82%,63%)");
    PAL.push("#ff2036");
    var NC = PAL.length, atlas = [];

    function makeAtlas(col) {
      var a = document.createElement("canvas");
      a.width = tile * N; a.height = tile;
      var x = a.getContext("2d");
      x.textBaseline = "middle"; x.textAlign = "center";
      x.font = "600 " + Math.floor((CELL - 6) * dpr) + "px 'IBM Plex Mono', monospace";
      x.fillStyle = col;
      for (var i = 0; i < N; i++) x.fillText(RAMP[i], i * tile + tile / 2, tile / 2);
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
      tile = Math.ceil(CELL * dpr);
      atlas = []; for (var c = 0; c < NC; c++) atlas.push(makeAtlas(PAL[c]));
    }
    resize(); window.addEventListener("resize", resize);
    requestAnimationFrame(resize); setTimeout(resize, 140);
    if (window.ResizeObserver) { try { new ResizeObserver(resize).observe(canvas.parentElement || document.body); } catch (e) {} }

    // ---- endless-zoom journey state ------------------------------------
    var Z = 0, zvel = 0, actS = 0;
    var DRIFT = reduced ? 0 : 0.05;
    function onWheel(e) {
      zvel += -e.deltaY * 0.0012;
      if (zvel > 3.4) zvel = 3.4; else if (zvel < -3.4) zvel = -3.4;
    }
    window.addEventListener("wheel", onWheel, { passive: true });

    var raf = 0, prev = 0, tt = 0, lastPaint = 0;
    function draw(now) {
      if (document.hidden) { prev = now; raf = requestAnimationFrame(draw); return; }
      if (window.XGVE_PAUSED) { prev = now; raf = requestAnimationFrame(draw); return; }
      if (now - lastPaint < 30) { raf = requestAnimationFrame(draw); return; }
      lastPaint = now;
      var dt = prev ? Math.min(0.05, (now - prev) / 1000) : 0.016; prev = now;
      tt += reduced ? 0 : dt * 2.0;
      var T = tt;

      Z += (DRIFT + zvel) * dt;
      zvel *= Math.exp(-dt * 2.6);
      window.XGVE_ZOOM = Z;
      var act = Math.min(1, Math.abs(zvel) / 1.3);
      // asymmetric: fade out fast, hold, then unfade slowly
      if (act > actS) actS += (act - actS) * Math.min(1, dt * 9);
      else actS += (act - actS) * Math.min(1, dt * 0.45);
      document.documentElement.style.setProperty("--zoom-act", actS.toFixed(3));

      var k = Math.floor(Z), f = Z - k, sm = f * f * (3 - 2 * f);
      var Pk = octP(k), Pk1 = octP(k + 1);
      var mK = Math.pow(2, -f), mK1 = Math.pow(2, 1 - f);
      var wA = 1 - sm, wB = sm;
      var hueBase = Pk.hue * (1 - sm) + Pk1.hue * sm + T * 0.55;
      var gs = T * 0.05 + 0.35 * Math.sin(T * 0.12), gc = Math.cos(gs), gsin = Math.sin(gs);
      var breathe = 0.82 + 0.18 * Math.sin(T * 0.8);

      ctx.clearRect(0, 0, W, H);
      var cxp = W / 2, cyp = H / 2, salt = (T * 7) | 0, half = CELL / 2;
      for (var j = 0; j < rows; j++) {
        var py = j * CELL + half, ny0 = (py - cyp) / cyp;
        for (var i = 0; i < cols; i++) {
          var px = i * CELL + half, nx0 = (px - cxp) / cxp * aspect;
          var nx = nx0 * gc - ny0 * gsin, ny = nx0 * gsin + ny0 * gc;
          var sK = patt(Pk, nx, ny, mK, T), sK1 = patt(Pk1, nx, ny, mK1, T);
          var val = shape(Pk, sK) * wA + shape(Pk1, sK1) * wB;
          if (val < 0.30) continue;
          var sB = sK * wA + sK1 * wB;
          var zN = sB * 0.95; if (zN > 1) zN = 1; else if (zN < -1) zN = -1;
          var scale = 1 + zN * 0.4; if (scale < 0.5) scale = 0.5;
          var dx = px + (px - cxp) / cxp * zN * 18;
          var dy = py - zN * CELL;
          var sz = CELL * scale, hs = sz / 2;
          var hash = (i * 131 + j * 57) & 255;
          // density ramp: brightness picks glyph weight (+ slight time jitter, sparkle on peaks)
          var tq = (val - 0.30) / 0.70; if (tq > 1) tq = 1;
          var idx = (tq * (N - 1)) | 0;
          idx += ((hash + salt) & 3) - 1; if (idx < 0) idx = 0; else if (idx >= N) idx = N - 1;
          if (val > 0.85 && ((hash + salt) & 15) === 0) idx = (hash * 7 + salt) % N;
          var band = (val * 6) | 0;
          var rad = Math.sqrt(nx * nx + ny * ny), ang = Math.atan2(ny, nx);
          var hue = hueBase + ang * 1.9 + rad * 3.4 + band * 0.6 + zN * 2;
          var ci = val > 0.93 ? 13 : band <= 0 ? 0 : 1 + (((Math.round(hue) % 12) + 12) % 12);
          var depthB = 0.55 + 0.45 * Math.max(0, Math.min(1, zN * 0.45 + 0.5));
          var msk = window.XGVE_RMASK;
          var brk = msk && msk.has((((px / 24) | 0) * 4096) + ((py / 24) | 0)) ? 0.14 : 1;
          ctx.globalAlpha = (0.16 + Math.min(0.74, (val - 0.30) * 0.98)) * depthB * brk * breathe;
          ctx.drawImage(atlas[ci], idx * tile, 0, tile, tile, dx - hs, dy - hs, sz, sz);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return function () {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("wheel", onWheel);
      document.documentElement.style.removeProperty("--zoom-act");
    };
  };
})();
