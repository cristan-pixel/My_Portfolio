export default function CircuitBackground() {
  return (
    <div className="circuit-bg" aria-hidden="true">
      <div className="glow g1"></div>
      <div className="glow g2"></div>
      <div className="glow g3"></div>
      <svg viewBox="0 0 1600 1400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
            <path d="M46 0H0V46" fill="none" stroke="rgba(56,189,248,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        <path className="trace-line slow" d="M-10,180 H320 V60 H900 V260 H1620" />
        <path className="trace-line" d="M-10,420 H220 V520 H640 V400 H1200 V620 H1620" />
        <path className="trace-line fast" d="M-10,760 H420 V860 H980 V700 H1620" />
        <path className="trace-line slow" d="M-10,1020 H300 V1140 H860 V980 H1400 V1120 H1620" />
        <path className="trace-line" d="M-10,1260 H540 V1340 H1100 V1220 H1620" />

        <circle className="trace-node" cx="320" cy="180" r="3.5" />
        <circle className="trace-node" cx="900" cy="60" r="3.5" />
        <circle className="trace-node" cx="640" cy="520" r="3.5" />
        <circle className="trace-node" cx="1200" cy="400" r="3.5" />
        <circle className="trace-node" cx="420" cy="760" r="3.5" />
        <circle className="trace-node" cx="980" cy="700" r="3.5" />
        <circle className="trace-node" cx="860" cy="1140" r="3.5" />
        <circle className="trace-node" cx="1400" cy="980" r="3.5" />
        <circle className="trace-node" cx="540" cy="1260" r="3.5" />
        <circle className="trace-node" cx="1100" cy="1220" r="3.5" />
      </svg>
    </div>
  )
}
