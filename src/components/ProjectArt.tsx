type Props = { slug: string; className?: string };

export default function ProjectArt({ slug, className }: Props) {
  switch (slug) {
    case "flowclinic":
      return <FlowClinic className={className} />;
    case "ceras-health":
      return <CerasHealth className={className} />;
    case "timeleft":
      return <Timeleft className={className} />;
    case "her-lip-to":
      return <HerLipTo className={className} />;
    default:
      return null;
  }
}

function FlowClinic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="fc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1a24" />
          <stop offset="1" stopColor="#0b0b10" />
        </linearGradient>
        <linearGradient id="fc-spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c8ff00" stopOpacity="0" />
          <stop offset="0.5" stopColor="#c8ff00" />
          <stop offset="1" stopColor="#c8ff00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#fc-bg)" />
      {/* grid */}
      <g opacity="0.06">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 45 + 40} y1="20" x2={i * 45 + 40} y2="480" stroke="#fff" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={i * 45 + 40} x2="780" y2={i * 45 + 40} stroke="#fff" />
        ))}
      </g>
      <g transform="translate(60,60)">
        {/* dashboard card */}
        <rect width="680" height="380" rx="22" fill="#13131b" stroke="#ffffff14" />
        <rect x="30" y="28" width="180" height="12" rx="6" fill="#f5f5f7" />
        <rect x="30" y="48" width="100" height="8" rx="4" fill="#ffffff66" />
        {/* KPI cards */}
        <g transform="translate(30,90)">
          <rect width="200" height="110" rx="16" fill="#c8ff00" />
          <text x="20" y="56" fontFamily="serif" fontSize="38" fill="#0b0b10">12,438</text>
          <text x="20" y="84" fontFamily="monospace" fontSize="11" fill="#0b0b10" opacity="0.7">MAU · MAR</text>
        </g>
        <g transform="translate(246,90)">
          <rect width="200" height="110" rx="16" fill="#9d6cff" />
          <text x="20" y="56" fontFamily="serif" fontSize="38" fill="#ffffff">$1.4M</text>
          <text x="20" y="84" fontFamily="monospace" fontSize="11" fill="#ffffff" opacity="0.85">ARR</text>
        </g>
        <g transform="translate(462,90)">
          <rect width="188" height="110" rx="16" fill="#21212d" stroke="#ffffff14" />
          <text x="20" y="56" fontFamily="serif" fontSize="38" fill="#f5f5f7">99.94%</text>
          <text x="20" y="84" fontFamily="monospace" fontSize="11" fill="#f5f5f7" opacity="0.55">UPTIME · 30D</text>
        </g>
        {/* line chart */}
        <g transform="translate(30,220)">
          <rect width="620" height="140" rx="16" fill="#0b0b10" stroke="#ffffff10" />
          <text x="20" y="28" fontFamily="monospace" fontSize="11" fill="#ffffff80">PATIENT VOLUME · 12 MO</text>
          <polyline
            points="20,108 84,88 148,96 212,68 276,80 340,52 404,60 468,32 532,42 596,18"
            fill="none"
            stroke="url(#fc-spark)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="20,108 84,88 148,96 212,68 276,80 340,52 404,60 468,32 532,42 596,18 596,128 20,128"
            fill="#c8ff00"
            opacity="0.06"
          />
          <circle cx="596" cy="18" r="5" fill="#c8ff00" />
        </g>
      </g>
    </svg>
  );
}

function CerasHealth({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <radialGradient id="ce-glow" cx="0.5" cy="0.5" r="0.65">
          <stop offset="0" stopColor="#9d6cff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0b0b10" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#0b0b10" />
      <circle cx="400" cy="250" r="320" fill="url(#ce-glow)" />
      <g transform="translate(220,40)">
        {/* phone */}
        <rect width="360" height="420" rx="38" fill="#0b0b10" stroke="#ffffff1f" strokeWidth="1.5" />
        <rect x="16" y="16" width="328" height="388" rx="28" fill="#13131b" />
        {/* status bar */}
        <rect x="36" y="36" width="80" height="8" rx="4" fill="#ffffff66" />
        <rect x="36" y="52" width="140" height="6" rx="3" fill="#ffffff33" />
        {/* incoming message bubble */}
        <g transform="translate(36,80)">
          <rect width="220" height="62" rx="16" fill="#21212d" />
          <rect x="14" y="14" width="160" height="6" rx="3" fill="#ffffff99" />
          <rect x="14" y="26" width="190" height="6" rx="3" fill="#ffffff66" />
          <rect x="14" y="38" width="120" height="6" rx="3" fill="#ffffff4d" />
        </g>
        {/* user reply bubble */}
        <g transform="translate(120,158)">
          <rect width="208" height="56" rx="16" fill="#c8ff00" />
          <rect x="14" y="14" width="150" height="6" rx="3" fill="#0b0b10" />
          <rect x="14" y="26" width="120" height="6" rx="3" fill="#0b0b10cc" />
        </g>
        {/* bot detailed reply */}
        <g transform="translate(36,228)">
          <rect width="252" height="78" rx="16" fill="#21212d" />
          <rect x="14" y="14" width="200" height="6" rx="3" fill="#ffffff99" />
          <rect x="14" y="26" width="180" height="6" rx="3" fill="#ffffff80" />
          <rect x="14" y="38" width="220" height="6" rx="3" fill="#ffffff66" />
          <rect x="14" y="50" width="140" height="6" rx="3" fill="#ffffff4d" />
        </g>
        {/* triage handoff card */}
        <g transform="translate(36,322)">
          <rect width="288" height="56" rx="14" fill="#9d6cff" />
          <circle cx="36" cy="28" r="11" fill="#ffffff" />
          <circle cx="36" cy="28" r="5" fill="#9d6cff" />
          <rect x="58" y="16" width="160" height="8" rx="4" fill="#ffffff" />
          <rect x="58" y="32" width="200" height="6" rx="3" fill="#ffffff" opacity="0.7" />
        </g>
      </g>
      {/* floating sparkle dots */}
      <circle cx="100" cy="120" r="3" fill="#c8ff00" />
      <circle cx="700" cy="160" r="2" fill="#3df0d1" />
      <circle cx="120" cy="380" r="2" fill="#ff5d7c" />
      <circle cx="680" cy="380" r="3" fill="#c8ff00" />
    </svg>
  );
}

function Timeleft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <radialGradient id="tl-glow" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#ff5d7c" stopOpacity="0.45" />
          <stop offset="1" stopColor="#0b0b10" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#0b0b10" />
      <circle cx="400" cy="250" r="340" fill="url(#tl-glow)" />
      <g transform="translate(260,30)">
        <rect width="280" height="440" rx="44" fill="#0b0b10" stroke="#ffffff1f" strokeWidth="1.5" />
        <rect x="16" y="16" width="248" height="408" rx="34" fill="#13131b" />
        <rect x="36" y="42" width="120" height="14" rx="7" fill="#f5f5f7" />
        <rect x="36" y="64" width="80" height="8" rx="4" fill="#ffffff66" />
        {/* match cards */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(36,${100 + i * 92})`}>
            <rect width="208" height="80" rx="18" fill="#21212d" />
            <circle cx="40" cy="40" r="22" fill={["#ff5d7c", "#9d6cff", "#3df0d1"][i]} />
            <rect x="74" y="22" width="86" height="10" rx="5" fill="#f5f5f7" />
            <rect x="74" y="40" width="58" height="6" rx="3" fill="#ffffff80" />
            <rect x="74" y="52" width="74" height="6" rx="3" fill="#ffffff55" />
            <circle cx="190" cy="40" r="9" fill="#c8ff00" />
            <text x="190" y="44" fontFamily="monospace" fontSize="9" fill="#0b0b10" textAnchor="middle">{["96", "92", "88"][i]}</text>
          </g>
        ))}
        <rect x="36" y="380" width="208" height="44" rx="22" fill="#c8ff00" />
        <text x="140" y="408" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="#0b0b10">Match</text>
      </g>
      {/* floating dots */}
      <circle cx="120" cy="120" r="14" fill="#9d6cff" opacity="0.55" />
      <circle cx="80" cy="240" r="8" fill="#ff5d7c" opacity="0.6" />
      <circle cx="160" cy="380" r="14" fill="#3df0d1" opacity="0.5" />
      <circle cx="680" cy="160" r="12" fill="#ffb547" opacity="0.55" />
      <circle cx="720" cy="380" r="18" fill="#c8ff00" opacity="0.4" />
    </svg>
  );
}

function HerLipTo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <radialGradient id="hl-glow" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0" stopColor="#3df0d1" stopOpacity="0.32" />
          <stop offset="1" stopColor="#0b0b10" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#0b0b10" />
      <circle cx="400" cy="250" r="340" fill="url(#hl-glow)" />
      <g transform="translate(60,60)">
        <rect width="680" height="380" rx="22" fill="#13131b" stroke="#ffffff14" />
        <rect x="30" y="30" width="180" height="180" rx="16" fill="#ff5d7c" />
        <rect x="230" y="30" width="180" height="180" rx="16" fill="#9d6cff" />
        <rect x="430" y="30" width="220" height="180" rx="16" fill="#3df0d1" />
        {/* product info */}
        <rect x="30" y="232" width="240" height="16" rx="8" fill="#f5f5f7" />
        <rect x="30" y="258" width="160" height="10" rx="5" fill="#ffffff80" />
        <rect x="30" y="296" width="160" height="42" rx="21" fill="#c8ff00" />
        <text x="110" y="323" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fontWeight="600" fill="#0b0b10">Buy with  Pay</text>
        {/* sidebar */}
        <g transform="translate(310,250)">
          <rect width="340" height="100" rx="14" fill="#21212d" />
          <rect x="16" y="18" width="120" height="10" rx="5" fill="#f5f5f7" />
          <rect x="16" y="34" width="80" height="8" rx="4" fill="#ffffff66" />
          <rect x="16" y="62" width="180" height="6" rx="3" fill="#ffffff55" />
          <rect x="16" y="74" width="100" height="6" rx="3" fill="#ffffff44" />
          {/* restock badge */}
          <rect x="240" y="20" width="86" height="22" rx="11" fill="#c8ff00" />
          <text x="283" y="35" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#0b0b10">RESTOCK</text>
        </g>
      </g>
    </svg>
  );
}
