/* XGVE Studios — hero: screen-wide geometric ASCII field (background) + the
 * emblem rendered half-ASCII (left) / metallic (right), with the tagline below.
 * Minimal corners; a glyph trail follows the cursor.
 */
(function () {
  const React = window.React;
  const h = React.createElement;
  const { useState, useEffect, useRef } = React;
  const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle } = window;
  const RedlineEmblem = window.XGVE_RedlineEmblem;
  const WorkOverlay = window.XGVE_WorkOverlay;

  const WORDMARK = "../assets/wordmark/xgve-wordmark-redx.png";
  const IDLE_CLASS = { "Signal pulse": "pulse", "Pixel stream": "stream" };

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "idle": "Signal pulse",
    "field": true,
    "vignette": true,
    "grain": false
  }/*EDITMODE-END*/;

  function App() {
    const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
    const idleKey = IDLE_CLASS[t.idle] || "pulse";
    const [wins, setWins] = useState({ fox: false, readme: false, contact: false });
    const [paused, setPaused] = useState(false);
    const fieldRef = useRef(null);
    const embRef = useRef(null);
    const ghostRef = useRef(null);

    // ESC closes windows
    useEffect(() => {
      const onKey = (e) => { if (e.key === "Escape") setWins({ fox: false, readme: false, contact: false }); };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, []);

    // cursor glyph trail
    useEffect(() => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const GLYPHS = "#@8%&$X017=+*:.";
      let last = 0;
      const onMove = (e) => {
        const now = performance.now();
        if (now - last < 26) return; last = now;
        const trail = document.querySelector(".ascii-trail");
        if (!trail) return;
        for (let k = 0; k < 3; k++) {                       // ascii brush: 3 glyphs per stroke
          const s = document.createElement("span");
          s.className = "tglyph";
          s.textContent = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          s.style.left = (e.clientX + (Math.random() - 0.5) * 28) + "px";
          s.style.top = (e.clientY + (Math.random() - 0.5) * 28) + "px";
          s.style.color = Math.random() < 0.16 ? "#ff2a38" : "#e9eaec";
          s.style.fontSize = (16 + Math.random() * 10).toFixed(1) + "px";
          trail.appendChild(s);
          const dx = (Math.random() - 0.5) * 18;
          s.animate(
            [{ opacity: 0.9, transform: "translate(-50%,-50%) scale(1)" },
             { opacity: 0, transform: "translate(-50%,-50%) translate(" + dx.toFixed(1) + "px,-30px) scale(0.55)" }],
            { duration: 1400 + Math.random() * 600, easing: "ease-out" }
          ).onfinish = () => s.remove();
        }
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // mount the ascii field (bg) + the ascii half of the emblem
    useEffect(() => {
      let alive = true; const dz = []; let tries = 0;
      const boot = () => {
        if (!alive) return;
        if (window.XGVE_initAsciiField && fieldRef.current && !fieldRef.current.dataset.on) {
          fieldRef.current.dataset.on = "1"; dz.push(window.XGVE_initAsciiField(fieldRef.current));
        }
        if (window.XGVE_initAsciiEmblem && embRef.current && !embRef.current.dataset.on) {
          embRef.current.dataset.on = "1"; dz.push(window.XGVE_initAsciiEmblem(embRef.current));
        }
        if (window.XGVE_initFoxgloveGhost && ghostRef.current && !ghostRef.current.dataset.on) {
          ghostRef.current.dataset.on = "1"; dz.push(window.XGVE_initFoxgloveGhost(ghostRef.current));
        }
        if ((!window.XGVE_initAsciiField || !window.XGVE_initAsciiEmblem || !window.XGVE_initFoxgloveGhost) && tries < 50) { tries++; setTimeout(boot, 60); }
      };
      boot();
      return () => { alive = false; dz.forEach((d) => d && d()); };
    }, []);

    return h(
      "div",
      { className: "stage phase-idle", "data-grain": t.grain ? "on" : "off", "data-vignette": t.vignette ? "on" : "off" },
      t.field && h("canvas", { className: "ascii-field", ref: fieldRef, "aria-hidden": true }),
      t.field && h("canvas", { className: "foxglove-ghost", ref: ghostRef, "aria-hidden": true }),
      h("div", { className: "grain", "aria-hidden": true }),
      h("div", { className: "ascii-trail", "aria-hidden": true }),

      // ---- emblem (half ascii / half metallic) + tagline ----
      h("div", { className: "stage-inner" },
        h("div", { className: "rl-lockup" },
          h("div", { className: "emblem-split" },
            h("div", { className: "es-metal" }, h(RedlineEmblem, { phase: "idle", idle: idleKey })),
            h("canvas", { className: "es-ascii", ref: embRef, "aria-hidden": true })
          ),
          h("p", { className: "rl-tagline" }, "Good taste, engineered", h("span", { className: "dot" }, "."))
        )
      ),

      // ---- minimal corners ----
      h("div", { className: "hud" },
        h("div", { className: "corner tl" }, h("img", { className: "tl-wordmark", src: WORDMARK, alt: "XGVE", draggable: false, style: { height: "25px", width: "auto", display: "block" } })),
        h("div", { className: "corner tr" }, h("button", { className: "navlink", onClick: () => { const p = !paused; setPaused(p); window.XGVE_PAUSED = p; } }, paused ? "Resume" : "Pause")),
        h("div", { className: "corner bl" }, "\u00a9 2026 XGVE STUDIOS\u2122"),
        h("div", { className: "corner br" },
          h("button", { className: "navlink", onClick: () => setWins((w) => ({ ...w, readme: !w.readme })) }, "readme"),
          h("button", { className: "navlink", onClick: () => setWins((w) => ({ ...w, contact: !w.contact })) }, "contact"),
          h("button", { className: "navlink", style: { color: "#ff2a38", borderColor: "rgba(216,32,46,0.6)" }, onClick: () => setWins((w) => ({ ...w, fox: !w.fox })) }, "Foxglove Multiversal"))
      ),

      wins.contact && window.XGVE_ContactWindow && h(window.XGVE_ContactWindow, { onClose: () => setWins((w) => ({ ...w, contact: false })) }),

      wins.fox && window.XGVE_FoxWindow && h(window.XGVE_FoxWindow, { onClose: () => setWins((w) => ({ ...w, fox: false })) }),
      wins.readme && window.XGVE_ReadmeWindow && h(window.XGVE_ReadmeWindow, { onClose: () => setWins((w) => ({ ...w, readme: false })) }),

      h(TweaksPanel, null,
        h(TweakSection, { label: "Emblem" }),
        h(TweakRadio, { label: "Idle", value: t.idle, options: Object.keys(IDLE_CLASS), onChange: (v) => setTweak("idle", v) }),
        h(TweakSection, { label: "Atmosphere" }),
        h(TweakToggle, { label: "ASCII field", value: t.field, onChange: (v) => setTweak("field", v) }),
        h(TweakToggle, { label: "Vignette", value: t.vignette, onChange: (v) => setTweak("vignette", v) }),
        h(TweakToggle, { label: "Film grain", value: t.grain, onChange: (v) => setTweak("grain", v) })
      )
    );
  }

  window.XGVE_App = App;
})();
