/* XGVE Studios — rotating ASCII mask PILLAR (left of the hero).
 * A single tall canvas: 4 rows stacked; each row is a turntable of 4 face-relief
 * masks orbiting a full 360° (front → profile → back → profile). White dot cloud
 * with scarce red, on a faint turntable podium. window.XGVE_initMasks(container).
 */
(function () {
  function g(u, v, cu, cv, su, sv) { var du = (u - cu) / su, dv = (v - cv) / sv; return Math.exp(-(du * du + dv * dv)); }
  function band(v, a, b) { if (v < a || v > b) return 0; var t = (v - a) / (b - a); return Math.sin(t * Math.PI); }

  function buildMaskPoints() {
    var pts = [], step = 0.08;
    for (var v = -1.05; v <= 1.05; v += step) {
      for (var u = -0.95; u <= 0.95; u += step) {
        var ex = u / 0.80, ey = (v - 0.05) / 1.05;
        if (ex * ex + ey * ey > 1) continue;
        var z = Math.cos(u * 1.3) * Math.cos((v - 0.05) * 0.95); if (z < 0) z = 0;
        z -= 0.60 * g(u, v, 0.33, 0.30, 0.15, 0.13);
        z -= 0.60 * g(u, v, -0.33, 0.30, 0.15, 0.13);
        z += 0.16 * g(u, v, 0.33, 0.48, 0.20, 0.08);
        z += 0.16 * g(u, v, -0.33, 0.48, 0.20, 0.08);
        z += 0.42 * Math.exp(-Math.pow(u / 0.09, 2)) * band(v, -0.22, 0.36);
        z -= 0.18 * g(u, v, 0.085, -0.26, 0.06, 0.06);
        z -= 0.18 * g(u, v, -0.085, -0.26, 0.06, 0.06);
        z -= 0.28 * g(u, v, 0, -0.52, 0.27, 0.09);
        if (z < 0) z = 0;
        pts.push({ x: u, y: (v - 0.05), z: z * 0.8, red: Math.random() < 0.04 });
      }
    }
    return pts;
  }

  window.XGVE_initMasks = function (container) {
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var ROWS = 4, PER = 4;
    var pts = buildMaskPoints();
    var W = 240, H = 600, dpr = Math.min(2, window.devicePixelRatio || 1);
    var cv = document.createElement("canvas");
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + "px"; cv.style.height = H + "px"; cv.style.display = "block";
    container.appendChild(cv);
    var ctx = cv.getContext("2d"); ctx.scale(dpr, dpr);

    var maskScale = 42, R = 52, pf = 250, cx = W / 2, rowH = H / ROWS;
    var maxW = R + maskScale * 1.1;

    function drawMask(theta, rowCy) {
      var ct = Math.cos(theta), st = Math.sin(theta);
      var slotX = st * R, slotZ = ct * R;
      var depth = (slotZ + maxW) / (2 * maxW);        // 0 back .. 1 front
      var aBase = 0.12 + Math.pow(Math.max(0, depth), 1.3) * 0.95;
      for (var p = 0; p < pts.length; p++) {
        var pt = pts[p];
        var Xr = pt.x * ct + pt.z * st;
        var Zr = -pt.x * st + pt.z * ct;
        var wx = Xr * maskScale + slotX;
        var wz = Zr * maskScale + slotZ;
        var persp = pf / (pf - wz);
        var sx = cx + wx * persp;
        var sy = rowCy - pt.y * maskScale * persp;
        var a = aBase * (0.75 + 0.25 * persp);
        if (a > 1) a = 1;
        var sz = 0.7 + persp * 0.7;
        if (pt.red) ctx.fillStyle = "rgba(255,42,56," + a.toFixed(2) + ")";
        else ctx.fillStyle = "rgba(233,234,236," + (a * 0.92).toFixed(2) + ")";
        ctx.fillRect(sx, sy, sz, sz);
      }
    }

    function drawPodium(rowCy, ph) {
      var py0 = rowCy + maskScale * 1.15, rx = R + maskScale * 0.55, ry = 13;
      for (var k = 0; k < 54; k++) {
        var th = k / 54 * Math.PI * 2 + ph;
        var px = cx + Math.cos(th) * rx, py = py0 + Math.sin(th) * ry;
        ctx.fillStyle = (k % 16 === 0) ? "rgba(255,42,56,.5)" : "rgba(120,124,132,.34)";
        ctx.fillRect(px, py, 1, 1);
      }
    }

    function frame(now) {
      ctx.clearRect(0, 0, W, H);
      var base = reduced ? 0.4 : now * 0.00046;
      for (var r = 0; r < ROWS; r++) {
        var rowCy = (r + 0.5) * rowH;
        drawPodium(rowCy, base * 0.8 + r);
        var Ar = base + r * 0.7;
        // order the 4 masks back-to-front
        var order = [];
        for (var k = 0; k < PER; k++) { var th = Ar + k * (Math.PI / 2); order.push({ th: th, z: Math.cos(th) }); }
        order.sort(function (a, b) { return a.z - b.z; });
        for (var i = 0; i < order.length; i++) drawMask(order[i].th, rowCy);
      }
      raf = requestAnimationFrame(frame);
    }
    var raf = requestAnimationFrame(frame);
    if (reduced) { cancelAnimationFrame(raf); frame(0); }
    return function () { cancelAnimationFrame(raf); };
  };
})();
