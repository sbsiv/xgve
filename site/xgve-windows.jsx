/* XGVE Studios — minimalist retro draggable windows (1b style).
 * RetroWindow: thin-border mono title-bar window, draggable by its title bar,
 * square glyph closes it. FoxgloveWindow (FOXGLOVE_MULTIVERSAL.APP: flora ASCII +
 * spec column) and ReadmeWindow (readme.txt). Exposed on window.*.
 */
(function () {
  const React = window.React;
  const h = React.createElement;

  function useDrag(x0, y0) {
    const [p, setP] = React.useState({ x: x0, y: y0 });
    const ref = React.useRef(p); ref.current = p;
    const off = React.useRef(null);
    return [p, {
      onPointerDown: (e) => { off.current = { dx: e.clientX - ref.current.x, dy: e.clientY - ref.current.y }; e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId); },
      onPointerMove: (e) => { if (off.current) setP({ x: e.clientX - off.current.dx, y: e.clientY - off.current.dy }); },
      onPointerUp: () => { off.current = null; },
      style: { cursor: "grab", touchAction: "none" }
    }];
  }

  const MONO = "'IBM Plex Mono', monospace";
  /* PLACEHOLDER links — swap for real handles before launch */
  const LINKS = [
    ["X / TWITTER", "https://x.com/xgvestudios"],
    ["ITCH.IO", "https://xgve.itch.io"],
    ["GITHUB", "https://github.com/xgve"],
    ["DISCORD", "https://discord.gg/xgve"],
  ];
  const WISHLIST_URL = "";   // set to the Steam/itch store page when live — chip becomes the wishlist link

  function RetroWindow({ title, x0, y0, w, onClose, children }) {
    const [p, dragProps] = useDrag(x0, y0);
    return h("div", { style: { position: "fixed", left: p.x, top: p.y, width: w, zIndex: 90, background: "#070709", border: "1px solid #33363d", boxShadow: "0 12px 40px rgba(0,0,0,.6)", fontFamily: MONO, animation: "xgwin-in .16s ease-out" } },
      h("div", Object.assign({}, dragProps, { style: Object.assign({ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderBottom: "1px solid #33363d", userSelect: "none" }, dragProps.style) }),
        h("button", { onClick: onClose, onPointerDown: function (e) { e.stopPropagation(); }, title: "Close", className: "xgwin-close", style: { width: 11, height: 11, flex: "none", background: "transparent", border: "1px solid #83848c", cursor: "pointer", padding: 0 } }),
        h("div", { style: { flex: 1, textAlign: "center", fontSize: 11, letterSpacing: "0.18em", color: "#c6ced8", textTransform: "uppercase", overflow: "hidden", whiteSpace: "nowrap" } }, title),
        h("span", { style: { width: 11, flex: "none" } })
      ),
      children
    );
  }

  function Flora({ w, hpx }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const cv = ref.current, g = window.XG_ASCII && window.XG_ASCII.foxglove;
      if (!cv || !g) return;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = w * dpr; cv.height = hpx * dpr;
      cv.style.width = w + "px"; cv.style.height = hpx + "px";
      const x = cv.getContext("2d"); x.scale(dpr, dpr);
      const C = g.cols, R = g.rows, ch = hpx / R, cw = ch * 0.62;
      const ox = (w - cw * C) / 2;
      const t0 = performance.now(); let raf = 0, prev = 0;
      const NOISE = "01#@%&$X=+*".split("");
      function paint(now) {
        if (now - prev > 90) {
          prev = now;
          const el = (now - t0) / 2800, rf = el >= 1 ? 1 : el * el * (3 - 2 * el);
          x.clearRect(0, 0, w, hpx);
          x.textBaseline = "middle"; x.textAlign = "center";
          x.font = "500 " + (ch * 0.95).toFixed(1) + "px " + MONO;
          for (let yy = 0; yy < R; yy++) {
            const o = 1 - yy / R;                       // bottom builds first (like the original)
            if (o > rf) continue;
            const cr = g.chars[yy] || "", kr = (g.colors && g.colors[yy]) || "";
            for (let xx = 0; xx < C; xx++) {
              let c = cr[xx]; if (c === " " || c === undefined) continue;
              if (rf < 1 && o > rf - 0.08) c = NOISE[(Math.random() * NOISE.length) | 0];
              else if (Math.random() < 0.012) c = NOISE[(Math.random() * NOISE.length) | 0];
              const hsh = (xx * 7 + yy * 13) % 23;
              x.fillStyle = kr[xx] === "r" || hsh === 0 ? "#e6202e" : hsh < 3 ? "#4fa3c0" : hsh < 8 ? "#6f7480" : "#c6ced8";
              x.fillText(c, ox + xx * cw + cw / 2, yy * ch + ch / 2);
            }
          }
        }
        raf = requestAnimationFrame(paint);
      }
      raf = requestAnimationFrame(paint);
      return () => cancelAnimationFrame(raf);
    }, [w, hpx]);
    return h("canvas", { ref: ref, "aria-hidden": true, style: { display: "block", flex: "none" } });
  }

  function FoxgloveWindow({ onClose }) {
    return h(RetroWindow, { title: "FOXGLOVE_MULTIVERSAL.APP", x0: Math.max(12, window.innerWidth - 560), y0: 80, w: Math.min(480, window.innerWidth - 24), onClose: onClose },
      h("div", { style: { display: "flex", gap: 18, padding: 16 } },
        h(Flora, { w: 240, hpx: 330 }),
        h("div", { style: { flex: 1, minWidth: 0, paddingTop: 8 } },
          h("div", { style: { fontSize: 10, letterSpacing: "0.22em", color: "#565b64", textTransform: "uppercase" } }, "FLORA_SERIES"),
          h("div", { style: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: 1.08, color: "#fff", margin: "10px 0 14px" } }, "Foxglove", h("br"), "Multiversal"),
          h("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 9, marginBottom: 18 } },
            h("div", { style: { background: "#c11722", color: "#fff", fontSize: 10, letterSpacing: "0.16em", padding: "6px 10px" } }, "\u25cf IN DEVELOPMENT"),
            h("a", { href: WISHLIST_URL || ("mailto:hello@xgve.io?subject=" + encodeURIComponent("Notify me: Foxglove Multiversal")), target: WISHLIST_URL ? "_blank" : undefined, rel: WISHLIST_URL ? "noopener" : undefined, title: WISHLIST_URL ? "Wishlist Foxglove Multiversal" : "Get notified when Foxglove Multiversal is available to wishlist", className: "xgwl-btn", style: { display: "inline-block", background: "transparent", border: "1px solid #83848c", color: "#e9eaec", fontSize: 10, letterSpacing: "0.16em", padding: "6px 12px", textDecoration: "none", cursor: "pointer" } }, "WISHLIST")),
          h("div", { style: { fontSize: 12, lineHeight: 1.8, color: "#6f7480" } },
            "Climb the corporate ladder while unravelling the mysteries at Foxglove Multiversal.")
        )
      )
    );
  }

  function ReadmeWindow({ onClose }) {
    return h(RetroWindow, { title: "readme.txt", x0: Math.max(12, Math.min(70, window.innerWidth - 452)), y0: Math.max(60, window.innerHeight - 360), w: Math.min(440, window.innerWidth - 24), onClose: onClose },
      h("div", { style: { padding: "18px 22px 22px", fontSize: 12.5, lineHeight: 1.95, color: "#c6ced8" } },
        h("div", null, "XGVE is an experimental studio bringing good ideas to life through taste, technology, and intentional design."),
        h("div", { style: { marginTop: 22, color: "#565b64" } }, "// continuity note ................"),
        h("div", { style: { color: "#3f434c" } }, "you have been here before.")
      )
    );
  }

  function ContactWindow({ onClose }) {
    const [em, setEm] = React.useState("");
    const dim = { color: "#565b64" };
    const lnk = { color: "#c6ced8", textDecoration: "none", letterSpacing: "0.12em" };
    return h(RetroWindow, { title: "contact.txt", x0: Math.max(12, (window.innerWidth - 380) / 2), y0: 110, w: Math.min(380, window.innerWidth - 24), onClose: onClose },
      h("div", { style: { padding: "18px 20px 22px", fontSize: 12.5, lineHeight: 2, color: "#c6ced8" } },
        h("a", { href: "mailto:hello@xgve.io", style: { color: "#fff", textDecoration: "none", letterSpacing: "0.1em" } }, "hello@xgve.io"),
        h("div", { style: Object.assign({ marginTop: 16 }, dim) }, "// socials"),
        LINKS.map(function (l) { return h("div", { key: l[0] }, h("a", { href: l[1], target: "_blank", rel: "noopener", style: lnk }, l[0])); }),
        h("div", { style: Object.assign({ marginTop: 16 }, dim) }, "// mailing list"),
        h("div", { style: { display: "flex", gap: 8, marginTop: 6 } },
          h("input", { value: em, onChange: function (e) { setEm(e.target.value); }, placeholder: "you@domain", style: { flex: 1, minWidth: 0, background: "#0b0b0e", border: "1px solid #33363d", color: "#e9eaec", fontFamily: MONO, fontSize: 12, padding: "7px 9px", outline: "none" } }),
          h("button", { onClick: function () { location.href = "mailto:hello@xgve.io?subject=Mailing%20list&body=" + encodeURIComponent("Subscribe: " + em); }, style: { background: "transparent", border: "1px solid #83848c", color: "#e9eaec", fontFamily: MONO, fontSize: 10, letterSpacing: "0.14em", padding: "7px 10px", cursor: "pointer" } }, "[ SUBSCRIBE ]"))
      )
    );
  }

  window.XGVE_FoxWindow = FoxgloveWindow;
  window.XGVE_ReadmeWindow = ReadmeWindow;
  window.XGVE_ContactWindow = ContactWindow;
})();
