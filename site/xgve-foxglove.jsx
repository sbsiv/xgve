/* XGVE Studios — Foxglove Multiversal landing (recreation of direction 1c).
 * Flagship game hero: flora emblem reconstructed from glyph text, spec column,
 * continuity labels. Opened from the Work overlay. Plain-React recreation
 * (no DS bundle here) — ProgressRing + buttons are simple cosmetic versions.
 */
(function () {
  const React = window.React;
  const { useEffect, useRef } = React;

  const NOISE = ['#','@','8','0','%','&','?','7','1','$','X','B','H',':','.','*','=','+','o','w'];

  /* Foxglove flora, reconstructed bottom-up from glyph noise (window.XG_ASCII.foxglove). */
  function FoxgloveAscii({ font, dur }) {
    const ref = useRef(null);
    useEffect(() => {
      const el = ref.current, DATA = window.XG_ASCII;
      if (!el || !DATA || !DATA.foxglove) { if (el) el.textContent = ""; return; }
      const grid = DATA.foxglove, C = grid.cols, R = grid.rows, chars = grid.chars, cols = grid.colors;
      const fs = font, lh = fs * 1.15, cw = fs * 0.6;
      el.style.position = "relative"; el.style.width = (C * cw) + "px"; el.style.height = (R * lh) + "px";
      el.innerHTML = "";
      const mk = (color, glow) => { const p = document.createElement("pre");
        p.style.cssText = 'margin:0;position:absolute;inset:0;font-family:"IBM Plex Mono",monospace;font-size:' + fs + 'px;line-height:' + lh + 'px;white-space:pre;letter-spacing:0;color:' + color + ';text-shadow:' + glow + ';pointer-events:none;'; return p; };
      const white = mk("#e9eaec", "0 0 " + (fs * 0.5) + "px rgba(150,160,175,.22)");
      const red = mk("#ff2233", "0 0 " + (fs * 0.9) + "px rgba(255,34,51,.5)");
      el.appendChild(white); el.appendChild(red);
      const th = new Float32Array(C * R);
      for (let y = 0; y < R; y++) for (let x = 0; x < C; x++) { let t = 1 - (y / R); t = t * 0.8 + Math.random() * 0.2; th[y * C + x] = Math.min(0.999, t); }
      let start = 0, done = false, raf = 0, lastFlick = 0;
      const render = (p, flicker) => {
        let w = "", r = "";
        for (let y = 0; y < R; y++) {
          const cs = chars[y] || "", ks = cols[y] || "", base = y * C; let wl = "", rl = "";
          for (let x = 0; x < C; x++) {
            const ch = cs[x];
            if (ch === " " || ch === undefined) { wl += " "; rl += " "; continue; }
            const t = th[base + x], isR = ks[x] === "r";
            if (p >= t) { let o = ch; if (flicker && Math.random() < 0.012) o = NOISE[(Math.random() * NOISE.length) | 0]; if (isR) { rl += o; wl += " "; } else { wl += o; rl += " "; } }
            else if (p >= t - 0.11) { const g = NOISE[(Math.random() * NOISE.length) | 0]; if (isR) { rl += g; wl += " "; } else { wl += g; rl += " "; } }
            else { wl += " "; rl += " "; }
          }
          w += wl + "\n"; r += rl + "\n";
        }
        white.textContent = w; red.textContent = r;
      };
      const loop = (now) => {
        if (!start) start = now;
        if (!done) { let p = (now - start) / dur; if (p >= 1) { p = 1; done = true; render(1); } else render(p); }
        else if (now - lastFlick > 150) { lastFlick = now; render(1, true); }
        raf = requestAnimationFrame(loop);
      };
      render(0); raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }, [font, dur]);
    return React.createElement("div", { ref: ref, "aria-hidden": true });
  }

  function Ring({ value, size }) {
    const r = (size - 8) / 2, c = 2 * Math.PI * r, off = c * (1 - value / 100);
    return React.createElement("div", { style: { position: "relative", width: size, height: size, flex: "none" } },
      React.createElement("svg", { width: size, height: size, style: { transform: "rotate(-90deg)" } },
        React.createElement("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", stroke: "#26262a", strokeWidth: 3 }),
        React.createElement("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", stroke: "#e6021b", strokeWidth: 3, strokeDasharray: c, strokeDashoffset: off })
      ),
      React.createElement("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center", fontFamily: "IBM Plex Mono, monospace", fontSize: 15, color: "#fff", fontWeight: 600 } }, value)
    );
  }

  const mono = (extra) => Object.assign({ fontFamily: "IBM Plex Mono, monospace" }, extra || {});

  function FoxgloveLanding({ onClose }) {
    const btn = (primary) => ({ fontFamily: "IBM Plex Mono, monospace", fontSize: 12, letterSpacing: ".1em", padding: "13px 22px", cursor: "pointer", border: "1px solid " + (primary ? "#e6021b" : "#313136"), background: primary ? "#e6021b" : "transparent", color: "#fff", textTransform: "uppercase" });
    const tag = mono({ fontSize: 10, letterSpacing: ".1em", color: "#a8a9b0", border: "1px solid #313136", padding: "4px 9px" });
    return React.createElement("section",
      { className: "fox", "data-screen-label": "Foxglove Multiversal",
        style: { position: "fixed", inset: 0, zIndex: 70, background: "radial-gradient(150% 130% at 76% 50%, #0e0e11 0%, #000 60%)", display: "flex", alignItems: "center", padding: "0 clamp(30px,6vw,80px)", overflow: "hidden", animation: "work-in .5s ease-out both" } },
      React.createElement("button", { onClick: onClose, style: mono({ position: "absolute", top: 34, right: 40, zIndex: 5, background: "none", border: 0, color: "#83848c", fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", cursor: "pointer" }) }, "\u2190 Back"),

      // ---- left: spec column ----
      React.createElement("div", { style: { width: 520, flex: "none", zIndex: 2 } },
        React.createElement("div", { style: mono({ fontSize: 11, letterSpacing: ".14em", color: "#83848c", textTransform: "uppercase" }) }, "Flagship // Flora_Series \u00b7 \u03b1-XGVE-7A"),
        React.createElement("h2", { style: { fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: "clamp(46px,6vw,72px)", lineHeight: .92, color: "#fff", margin: "16px 0 0", letterSpacing: "-.02em" } },
          "Foxglove", React.createElement("br"), "Multiversal", React.createElement("span", { style: { color: "#e6021b" } }, ".")),
        React.createElement("div", { style: { display: "flex", gap: 8, margin: "24px 0" } },
          ["Simulation", "Roguelite", "Liminal"].map((t) => React.createElement("span", { key: t, style: tag }, t.toUpperCase()))),
        React.createElement("p", { style: { fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.66, color: "#a8a9b0", maxWidth: 430, margin: 0 } },
          "An alternate-history enterprise OS that reconstructs reality through text. Clock in, roll back, and watch the whole system reboot itself from institutional memory."),
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 22, margin: "28px 0 30px" } },
          React.createElement(Ring, { value: 98, size: 74 }),
          React.createElement("div", { style: mono({ fontSize: 10, lineHeight: 1.9, color: "#83848c", textTransform: "uppercase", letterSpacing: ".08em" }) },
            "Status: ", React.createElement("b", { style: { color: "#ff2233" } }, "TBC"), React.createElement("br"), "Engine: Continuity")),
        React.createElement("div", { style: { display: "flex", gap: 12 } },
          React.createElement("a", { href: "mailto:xgve@pm.me?subject=Foxglove%20Multiversal%20updates",
            style: Object.assign({ textDecoration: "none", display: "inline-block" }, btn(true)) }, "Get updates"))),

      // ---- right: flora reconstruction ----
      React.createElement("div", { style: { flex: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative", minWidth: 0 } },
        React.createElement("div", { style: mono({ position: "absolute", top: "8%", right: "2%", textAlign: "right", fontSize: 10, lineHeight: 1.7, color: "#83848c", textTransform: "uppercase", letterSpacing: ".08em" }) },
          "Continuity Label", React.createElement("br"), "\u03b1-XGVE-7A", React.createElement("br"), "Subject: ", React.createElement("b", { style: { color: "#e9eaec" } }, "Flora"), React.createElement("br"), "Stability: ", React.createElement("b", { style: { color: "#e9eaec" } }, "0.9837")),
        React.createElement("div", { style: mono({ position: "absolute", left: "2%", top: "22%", fontSize: 10, lineHeight: 1.8, color: "#5c5d64", textTransform: "uppercase", letterSpacing: ".08em" }) },
          "Node_0043.A", React.createElement("br"), "> reconstruct", React.createElement("br"), "> validate", React.createElement("br"), "> commit"),
        React.createElement(FoxgloveAscii, { font: 8, dur: 4200 }))
    );
  }

  window.XGVE_FoxgloveLanding = FoxgloveLanding;
})();
