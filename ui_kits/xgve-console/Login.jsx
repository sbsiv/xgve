/* XGVE Console — access / login screen. */
(function () {
  const React = window.React;
  const NS = window.XGVEDesignSystem_c9ef21;
  const { Input, Button } = NS;

  function Login({ onEnter }) {
    const [key, setKey] = React.useState('xg_live_9f2a·b1180');
    const [busy, setBusy] = React.useState(false);

    const submit = (e) => {
      e.preventDefault();
      setBusy(true);
      setTimeout(() => { setBusy(false); onEnter(); }, 650);
    };

    return React.createElement('div', {
      style: {
        minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--surface-canvas)', padding: 'var(--space-10)', position: 'relative', overflow: 'hidden',
      },
    }, [
      // faint broken-ring motif, cropped top-right
      React.createElement('div', { key: 'ring', 'aria-hidden': true, style: {
        position: 'absolute', top: -140, right: -140, width: 420, height: 420, borderRadius: '50%',
        background: 'conic-gradient(var(--accent) 0deg 40deg, transparent 40deg 70deg, var(--border-subtle) 70deg 320deg, transparent 320deg 360deg)',
        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
        mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))',
        opacity: 0.5,
      }}),
      React.createElement('form', { key: 'form', onSubmit: submit, style: {
        position: 'relative', width: 380, maxWidth: '100%', display: 'flex', flexDirection: 'column',
        gap: 'var(--space-7)',
      }}, [
        React.createElement('img', { key: 'logo', src: '../../assets/wordmark/xgve-wordmark-transparent.png',
          alt: 'XGVE Studios', style: { width: 200, height: 'auto', display: 'block' } }),
        React.createElement('div', { key: 'head' }, [
          React.createElement('p', { key: 'e', style: {
            fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 8px',
          }}, 'Console access'),
          React.createElement('h1', { key: 'h', style: {
            fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600,
            letterSpacing: 'var(--tracking-tight)', margin: 0,
          }}, 'Authenticate to continue'),
          React.createElement('p', { key: 'p', style: {
            fontSize: 14, color: 'var(--content-secondary)', lineHeight: 1.5, margin: '8px 0 0',
          }}, 'Enter your studio access key. Sessions are scoped to the projects you were granted.'),
        ]),
        React.createElement(Input, { key: 'k', label: 'Access key', value: key,
          onChange: (e) => setKey(e.target.value), type: 'text' }),
        React.createElement(Button, { key: 'go', type: 'submit', variant: 'primary', fullWidth: true,
          loading: busy, iconRight: busy ? null : React.createElement(window.XG_Icons.ArrowRight) },
          busy ? 'Authenticating' : 'Access console'),
        React.createElement('div', { key: 'status', style: {
          display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)',
          fontSize: 11, letterSpacing: 'var(--tracking-wide)', color: 'var(--content-muted)',
        }}, [
          React.createElement('span', { key: 'd', style: { width: 7, height: 7, borderRadius: '50%',
            background: 'var(--xg-fn-positive)' } }),
          'STUDIO ONLINE · 3 GAMES // 12 CLIENT APPS',
        ]),
      ]),
    ]);
  }
  window.XG_Login = Login;
})();
