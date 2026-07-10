/* XGVE Studios — Selected Work overlay.
 * A no-scroll, in-place reveal. Foxglove Multiversal is the only project; clicking
 * it opens the Foxglove Multiversal landing (direction 1c).
 */
(function () {
  const React = window.React;
  const { useState } = React;

  const PROJECTS = [
    { id: "foxglove", name: "Foxglove Multiversal", type: "Game", year: "TBC" },
  ];

  function WorkOverlay({ onClose }) {
    const [openId, setOpenId] = useState(null);
    const FoxgloveLanding = window.XGVE_FoxgloveLanding;

    React.useEffect(() => {
      const onKey = (e) => { if (e.key === "Escape") { if (openId) setOpenId(null); else onClose(); } };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [openId, onClose]);

    if (openId === "foxglove" && FoxgloveLanding) {
      return React.createElement(FoxgloveLanding, { onClose: () => setOpenId(null) });
    }

    return React.createElement(
      "section",
      { className: "work", "data-screen-label": "Selected work" },
      React.createElement(
        "div",
        { className: "work-head" },
        React.createElement("div", { className: "work-eyebrow" }, "Selected work ", React.createElement("b", null, "// " + PROJECTS.length)),
        React.createElement(
          "button",
          { className: "navlink work-eyebrow", onClick: onClose,
            style: { pointerEvents: "auto", cursor: "pointer", background: "none", border: 0, color: "var(--content-secondary)" } },
          "Close \u2715"
        )
      ),
      React.createElement(
        "div",
        { className: "work-list" },
        PROJECTS.map((p, i) =>
          React.createElement(
            "div",
            { className: "work-row", key: p.id, onClick: () => setOpenId(p.id),
              style: { cursor: "pointer" } },
            React.createElement("div", { className: "work-idx" }, String(i + 1).padStart(2, "0")),
            React.createElement(
              "div",
              { className: "work-name" },
              p.name,
              React.createElement("span", { className: "arrow" }, "\u2192")
            ),
            React.createElement("div", { className: "work-type" }, p.type),
            React.createElement("div", { className: "work-year" }, p.year)
          )
        )
      ),
      React.createElement("div", { className: "work-note" }, "Open a project to view it.")
    );
  }

  window.XGVE_WorkOverlay = WorkOverlay;
})();
