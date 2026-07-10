/* XGVE Studios — redline emblem component (the real mark, layered for motion).
 * Phase "intro" → revving (hot rev + flutter + shudder); "idle" → settled + idle loop.
 * idle: "pulse" (signal pulse, locked default) | "stream" (pixel stream).
 */
(function () {
  const React = window.React;

  function RedlineEmblem({ phase, idle }) {
    const cls = "rl-emblem " + (phase === "intro" ? "is-revving" : "is-settled");
    return React.createElement(
      "div",
      { className: cls, "data-idle": idle || "pulse", role: "img", "aria-label": "XGVE" },
      React.createElement("div", { className: "rl-layer rl-structure" }),
      React.createElement("div", { className: "rl-sheen", "aria-hidden": true }),
      React.createElement(
        "div",
        { className: "rl-rev" },
        React.createElement(
          "div",
          { className: "rl-layer rl-needle" },
          React.createElement("div", { className: "rl-heat" })
        )
      ),
      React.createElement("span", { className: "rl-px p1" }),
      React.createElement("span", { className: "rl-px p2" }),
      React.createElement("span", { className: "rl-px p3" }),
      React.createElement("span", { className: "rl-px p4" })
    );
  }

  window.XGVE_RedlineEmblem = RedlineEmblem;
})();
