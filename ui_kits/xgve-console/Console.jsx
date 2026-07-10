/* XGVE Console — dashboard surface. Composed entirely from XGVE DS components.
   Loaded via <script type="text/babel">. Exposes window.XG_Console. */
(function () {
  const React = window.React;
  const NS = window.XGVEDesignSystem_c9ef21;
  const { Button, IconButton, Input, Select, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, ProgressRing } = NS;
  const I = window.XG_Icons;

  const mono = { fontFamily: 'var(--font-mono)' };
  const eyebrow = {
    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 'var(--tracking-widest)',
    textTransform: 'uppercase', color: 'var(--content-muted)',
  };

  const NAV = [
    { id: 'overview', label: 'Overview', icon: 'Grid' },
    { id: 'nodes', label: 'Projects', icon: 'Box' },
    { id: 'builds', label: 'Ships', icon: 'Hammer' },
    { id: 'ventures', label: 'Clients', icon: 'Rocket' },
    { id: 'logs', label: 'Logs', icon: 'Terminal' },
  ];

  const NODES = [
    { name: 'aether', region: 'game', latency: 88, status: 'live', tags: ['unity', 'steam'] },
    { name: 'drift-crm', region: 'client app', latency: 95, status: 'live', tags: ['saas'] },
    { name: 'palette', region: 'client app', latency: 100, status: 'live', tags: ['web'] },
    { name: 'vesper', region: 'game', latency: 60, status: 'degraded', tags: ['prototype'] },
    { name: 'cinder', region: 'client app', latency: 0, status: 'offline', tags: ['paused'] },
  ];

  const BUILDS = [
    { id: 1180, venture: 'Aether', status: 'live', when: '2m ago' },
    { id: 1179, venture: 'Drift CRM', status: 'live', when: '18m ago' },
    { id: 1178, venture: 'Aether', status: 'failed', when: '1h ago' },
    { id: 1177, venture: 'Palette', status: 'live', when: '3h ago' },
  ];

  const statusBadge = (s) => {
    if (s === 'live') return React.createElement(Badge, { variant: 'signal', dot: true, pulse: true }, 'Live');
    if (s === 'degraded') return React.createElement(Badge, { variant: 'warning', dot: true }, 'Degraded');
    if (s === 'failed') return React.createElement(Badge, { variant: 'signal-soft' }, 'Failed');
    return React.createElement(Badge, { variant: 'neutral', dot: true }, 'Offline');
  };

  function Icon({ name, style }) {
    const C = I[name];
    return React.createElement('span', { style: Object.assign({ display: 'inline-flex' }, style), 'aria-hidden': true }, C ? React.createElement(C) : null);
  }

  /* ---- Sidebar ---- */
  function Sidebar({ active, setActive }) {
    return (
      <aside style={{ width: 232, flex: 'none', background: 'var(--surface-inset)',
        borderRight: 'var(--border-thin) solid var(--border-subtle)', display: 'flex',
        flexDirection: 'column', padding: '20px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 8px 20px' }}>
          <img src="../../assets/icon/xgve-icon-transparent.png" alt="XGVE" style={{ width: 30, height: 30 }} />
          <span style={{ ...eyebrow, fontSize: 11, color: 'var(--content-primary)' }}>Console</span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {NAV.map((n) => {
            const on = active === n.id;
            return (
              <button key={n.id} onClick={() => setActive(n.id)} style={{
                display: 'flex', alignItems: 'center', gap: 11, padding: '9px 10px', width: '100%',
                cursor: 'pointer', border: 'none', textAlign: 'left', fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)', fontWeight: on ? 600 : 500, letterSpacing: '0.01em',
                background: on ? 'var(--accent-surface)' : 'transparent',
                color: on ? 'var(--accent)' : 'var(--content-secondary)',
                borderLeft: on ? '2px solid var(--accent)' : '2px solid transparent',
                transition: 'var(--transition-colors)',
              }}>
                <span style={{ fontSize: 18, display: 'inline-flex' }}><Icon name={n.icon} /></span>
                {n.label}
              </button>
            );
          })}
        </nav>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: '12px 8px',
          borderTop: 'var(--border-thin) solid var(--border-subtle)' }}>
          <div style={{ width: 30, height: 30, background: 'var(--surface-overlay)',
            border: 'var(--border-thin) solid var(--border-default)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', ...mono, fontSize: 12,
            color: 'var(--content-secondary)' }}>KV</div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>K. Vega</div>
            <div style={{ ...eyebrow, fontSize: 9 }}>Operator</div>
          </div>
          <IconButton label="Sign out" size="sm"><Icon name="LogOut" /></IconButton>
        </div>
      </aside>
    );
  }

  /* ---- Topbar ---- */
  function Topbar({ title, onNew }) {
    return (
      <header style={{ height: 62, flex: 'none', display: 'flex', alignItems: 'center', gap: 16,
        padding: '0 24px', borderBottom: 'var(--border-thin) solid var(--border-subtle)',
        background: 'var(--surface-canvas)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={eyebrow}>XGVE // Studio</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600,
            letterSpacing: 'var(--tracking-tight)', textTransform: 'capitalize' }}>{title}</div>
        </div>
        <div style={{ width: 240 }}>
          <Input placeholder="Search projects, ships…" leading={<Icon name="Search" />} size="sm" />
        </div>
        <div style={{ position: 'relative' }}>
          <IconButton label="Notifications" variant="outline"><Icon name="Bell" /></IconButton>
          <span style={{ position: 'absolute', top: 6, right: 6, width: 7, height: 7, borderRadius: '50%',
            background: 'var(--accent)', border: '1.5px solid var(--surface-canvas)' }} />
        </div>
        <IconButton label="Settings" variant="outline"><Icon name="Settings" /></IconButton>
        <Button variant="primary" iconLeft={<Icon name="Plus" />} onClick={onNew}>New ship</Button>
      </header>
    );
  }

  /* ---- Stat cards ---- */
  function StatRing({ value, label, metric, sub }) {
    return (
      <Card accent padding="md" style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <ProgressRing value={value} size={72} thickness={8} showValue />
          <div style={{ minWidth: 0 }}>
            <div style={eyebrow}>{label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600,
              letterSpacing: 'var(--tracking-tight)', margin: '4px 0 2px' }}>{metric}</div>
            <div style={{ ...mono, fontSize: 11, color: 'var(--content-muted)' }}>{sub}</div>
          </div>
        </div>
      </Card>
    );
  }

  /* ---- Nodes table ---- */
  function NodesTable() {
    const [filter, setFilter] = React.useState('all');
    const rows = NODES.filter((n) => filter === 'all' || n.status === filter);
    return (
      <Card variant="flat" padding="sm" style={{ flex: 2, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 12, padding: '4px 4px 0' }}>
          <div style={eyebrow}>Projects // {rows.length}</div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['all', 'live', 'degraded'].map((f) => (
              <Tag key={f} onClick={() => setFilter(f)} selected={filter === f}>{f}</Tag>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.8fr auto', gap: 0 }}>
          {['Project', 'Type', 'Progress', 'Status'].map((h, i) => (
            <div key={h} style={{ ...eyebrow, fontSize: 9, padding: '8px 8px',
              borderBottom: 'var(--border-thin) solid var(--border-default)',
              textAlign: i === 3 ? 'right' : 'left' }}>{h}</div>
          ))}
          {rows.map((n) => (
            <React.Fragment key={n.name}>
              <div style={{ padding: '12px 8px', borderBottom: 'var(--border-thin) solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ ...mono, fontSize: 13, color: 'var(--content-primary)' }}>{n.name}</span>
                <span style={{ display: 'flex', gap: 4 }}>{n.tags.map((t) => (
                  <span key={t} style={{ ...mono, fontSize: 9, color: 'var(--content-muted)',
                    border: 'var(--border-thin) solid var(--border-subtle)', padding: '1px 4px' }}>{t}</span>
                ))}</span>
              </div>
              <div style={{ padding: '12px 8px', borderBottom: 'var(--border-thin) solid var(--border-subtle)',
                ...mono, fontSize: 12, color: 'var(--content-secondary)' }}>{n.region}</div>
              <div style={{ padding: '12px 8px', borderBottom: 'var(--border-thin) solid var(--border-subtle)',
                ...mono, fontSize: 12, color: n.status === 'degraded' ? 'var(--xg-fn-warning)' : 'var(--content-secondary)' }}>
                {n.status === 'offline' ? '—' : n.latency + '%'}</div>
              <div style={{ padding: '12px 8px', borderBottom: 'var(--border-thin) solid var(--border-subtle)',
                display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>{statusBadge(n.status)}</div>
            </React.Fragment>
          ))}
        </div>
      </Card>
    );
  }

  /* ---- Recent builds ---- */
  function BuildsList({ extra }) {
    const rows = extra ? [extra, ...BUILDS] : BUILDS;
    return (
      <Card variant="flat" padding="sm" style={{ flex: 1, minWidth: 0 }}>
        <div style={{ ...eyebrow, padding: '4px 4px 12px' }}>Recent ships</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {rows.map((b, i) => (
            <div key={b.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 6px',
              borderTop: i === 0 ? 'none' : 'var(--border-thin) solid var(--border-subtle)' }}>
              <span style={{ ...mono, fontSize: 12, color: 'var(--accent)', width: 44 }}>#{b.id}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden',
                  textOverflow: 'ellipsis' }}>{b.venture}</div>
                <div style={{ ...mono, fontSize: 10, color: 'var(--content-muted)' }}>{b.when}</div>
              </div>
              {statusBadge(b.status)}
            </div>
          ))}
        </div>
      </Card>
    );
  }

  /* ---- New-build dialog ---- */
  function NewBuildDialog({ open, onClose, onCreate }) {
    return (
      <Dialog open={open} onClose={onClose} eyebrow="New ship" title="Queue a ship"
        description="Compile and deploy a project to its live target."
        width={500}
        footer={<React.Fragment>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="primary" iconRight={<Icon name="ArrowRight" />} onClick={onCreate}>Queue ship</Button>
        </React.Fragment>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Select label="Project" options={['Aether', 'Drift CRM', 'Palette']} defaultValue="Aether" />
          <Input label="Build tag" defaultValue="release-candidate" />
          <Select label="Target" options={['Production', 'Staging', 'Preview']} defaultValue="Production" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 2 }}>
            <Switch label="Deploy automatically on green" defaultChecked />
            <Switch label="Notify on failure" defaultChecked />
          </div>
        </div>
      </Dialog>
    );
  }

  /* ---- Main ---- */
  function Console({ onSignOut }) {
    const [active, setActive] = React.useState('overview');
    const [dialog, setDialog] = React.useState(false);
    const [toasts, setToasts] = React.useState([]);
    const [lastBuild, setLastBuild] = React.useState(null);
    const nextId = React.useRef(1181);

    const create = () => {
      const id = nextId.current++;
      setDialog(false);
      setLastBuild({ id, venture: 'Aether', status: 'live', when: 'just now' });
      const tid = Date.now();
      setToasts((t) => [{ tid, id }, ...t].slice(0, 3));
      setTimeout(() => setToasts((t) => t.filter((x) => x.tid !== tid)), 4200);
    };

    const tabItems = [
      { value: 'overview', label: 'Overview' },
      { value: 'nodes', label: 'Projects', count: NODES.length },
      { value: 'builds', label: 'Ships', count: BUILDS.length },
    ];
    const view = ['overview', 'nodes', 'builds'].includes(active) ? active : 'overview';
    const [tab, setTab] = React.useState('overview');
    const shown = active === 'overview' ? tab : view;

    return (
      <div style={{ display: 'flex', height: '100%', minHeight: 0, background: 'var(--surface-canvas)',
        color: 'var(--content-primary)', fontFamily: 'var(--font-body)' }}>
        <Sidebar active={active} setActive={(id) => { setActive(id); if (id === 'overview') setTab('overview'); }} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <Topbar title={NAV.find((n) => n.id === active)?.label || 'Overview'} onNew={() => setDialog(true)} />
          <main style={{ flex: 1, overflow: 'auto', padding: 24 }}>
            {active === 'overview' && (
              <div style={{ marginBottom: 18 }}>
                <Tabs items={tabItems} value={tab} onChange={setTab} />
              </div>
            )}

            {(shown === 'overview') && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', gap: 14 }}>
                  <StatRing value={82} label="Ship speed" metric="5 days" sub="avg client app" />
                  <StatRing value={48} label="In play" metric="3" sub="games in dev" />
                  <StatRing value={90} label="Delivered" metric="12" sub="client apps" />
                </div>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <NodesTable />
                  <BuildsList extra={lastBuild} />
                </div>
              </div>
            )}
            {shown === 'nodes' && <NodesTable />}
            {shown === 'builds' && <div style={{ maxWidth: 520 }}><BuildsList extra={lastBuild} /></div>}

            {['ventures', 'logs'].includes(active) && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 14, padding: '80px 0', textAlign: 'center' }}>
                <ProgressRing indeterminate size={72} label={active} />
                <div style={{ ...eyebrow }}>{active} // coming online</div>
                <div style={{ color: 'var(--content-muted)', fontSize: 14, maxWidth: 360 }}>
                  This surface is part of the console shell but has no sample data in this kit.</div>
              </div>
            )}
          </main>
        </div>

        <NewBuildDialog open={dialog} onClose={() => setDialog(false)} onCreate={create} />

        <div style={{ position: 'fixed', right: 24, bottom: 24, display: 'flex', flexDirection: 'column',
          gap: 12, zIndex: 'var(--z-toast)' }}>
          {toasts.map((t) => (
            <Toast key={t.tid} variant="signal" title={`Ship #${t.id} queued`}
              message="Aether · production"
              onClose={() => setToasts((x) => x.filter((y) => y.tid !== t.tid))} />
          ))}
        </div>
      </div>
    );
  }

  window.XG_Console = Console;
})();
