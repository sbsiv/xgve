/* XGVE Console — root state machine: access screen → console. */
(function () {
  const React = window.React;
  function App() {
    const [screen, setScreen] = React.useState('login');
    if (screen === 'login') {
      return React.createElement(window.XG_Login, { onEnter: () => setScreen('console') });
    }
    return React.createElement(window.XG_Console, { onSignOut: () => setScreen('login') });
  }
  window.XG_App = App;
})();
