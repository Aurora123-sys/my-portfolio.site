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
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="fc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4b8c6" />
          <stop offset="1" stopColor="#c9b6e8" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#fc-bg)" />
      <g transform="translate(80,80)">
        <rect width="640" height="440" rx="24" fill="#faf6f1" />
        <rect x="32" y="32" width="180" height="14" rx="7" fill="#14141c" />
        <rect x="32" y="56" width="100" height="8" rx="4" fill="#14141c" opacity="0.4" />
        <g transform="translate(32,100)">
          <rect width="180" height="100" rx="16" fill="#ff6b8a" />
          <text x="20" y="50" fontFamily="serif" fontSize="34" fill="#fff">12,438</text>
          <text x="20" y="76" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">MAU · MAR</text>
        </g>
        <g transform="translate(228,100)">
          <rect width="180" height="100" rx="16" fill="#7c5cff" />
          <text x="20" y="50" fontFamily="serif" fontSize="34" fill="#fff">$1.4M</text>
          <text x="20" y="76" fontFamily="monospace" fontSize="11" fill="#fff" opacity="0.85">ARR</text>
        </g>
        <g transform="translate(424,100)">
          <rect width="184" height="100" rx="16" fill="#14141c" />
          <text x="20" y="50" fontFamily="serif" fontSize="34" fill="#faf6f1">99.94%</text>
          <text x="20" y="76" fontFamily="monospace" fontSize="11" fill="#faf6f1" opacity="0.7">UPTIME · 30D</text>
        </g>
        <g transform="translate(32,220)">
          <rect width="576" height="184" rx="16" fill="#14141c" opacity="0.04" />
          <polyline
            points="20,140 80,120 140,128 200,98 260,110 320,80 380,90 440,64 500,72 560,50"
            fill="none"
            stroke="#14141c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="20,140 80,120 140,128 200,98 260,110 320,80 380,90 440,64 500,72 560,50 560,160 20,160"
            fill="#14141c"
            opacity="0.06"
          />
          <circle cx="560" cy="50" r="6" fill="#ff6b8a" />
          <text x="20" y="30" fontFamily="monospace" fontSize="11" fill="#14141c" opacity="0.6">
            PATIENT VOLUME · 12 MO
          </text>
        </g>
      </g>
    </svg>
  );
}

function CerasHealth({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="ce-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a8d2e0" />
          <stop offset="1" stopColor="#c9b6e8" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#ce-bg)" />
      <g transform="translate(180,60)">
        <rect width="440" height="480" rx="36" fill="#0b0d1a" />
        <rect x="20" y="20" width="80" height="10" rx="5" fill="#fff" opacity="0.6" />
        <rect x="20" y="40" width="180" height="8" rx="4" fill="#fff" opacity="0.3" />
        <g transform="translate(20,80)">
          <rect width="260" height="60" rx="18" fill="#fff" opacity="0.08" />
          <rect x="14" y="14" width="180" height="6" rx="3" fill="#fff" opacity="0.7" />
          <rect x="14" y="26" width="220" height="6" rx="3" fill="#fff" opacity="0.5" />
          <rect x="14" y="38" width="140" height="6" rx="3" fill="#fff" opacity="0.4" />
        </g>
        <g transform="translate(160,160)">
          <rect width="240" height="56" rx="18" fill="#ff6b8a" />
          <rect x="14" y="14" width="180" height="6" rx="3" fill="#fff" />
          <rect x="14" y="26" width="120" height="6" rx="3" fill="#fff" opacity="0.85" />
        </g>
        <g transform="translate(20,234)">
          <rect width="280" height="72" rx="18" fill="#fff" opacity="0.08" />
          <rect x="14" y="14" width="220" height="6" rx="3" fill="#fff" opacity="0.7" />
          <rect x="14" y="26" width="180" height="6" rx="3" fill="#fff" opacity="0.55" />
          <rect x="14" y="38" width="240" height="6" rx="3" fill="#fff" opacity="0.5" />
          <rect x="14" y="50" width="140" height="6" rx="3" fill="#fff" opacity="0.4" />
        </g>
        <g transform="translate(20,326)">
          <rect width="400" height="58" rx="14" fill="#7c5cff" />
          <circle cx="32" cy="29" r="10" fill="#fff" />
          <circle cx="32" cy="29" r="5" fill="#7c5cff" />
          <rect x="56" y="16" width="200" height="8" rx="4" fill="#fff" />
          <rect x="56" y="32" width="280" height="6" rx="3" fill="#fff" opacity="0.7" />
        </g>
        <g transform="translate(20,400)">
          <rect width="400" height="44" rx="22" fill="#fff" opacity="0.12" />
          <rect x="16" y="18" width="120" height="8" rx="4" fill="#fff" opacity="0.4" />
          <circle cx="380" cy="22" r="14" fill="#ff6b8a" />
        </g>
      </g>
    </svg>
  );
}

function Timeleft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="tl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd9c2" />
          <stop offset="1" stopColor="#f4b8c6" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#tl-bg)" />
      <g transform="translate(280,60)">
        <rect width="240" height="480" rx="44" fill="#0b0d1a" />
        <rect x="16" y="16" width="208" height="448" rx="34" fill="#faf6f1" />
        <rect x="32" y="50" width="120" height="14" rx="7" fill="#14141c" />
        <rect x="32" y="74" width="80" height="8" rx="4" fill="#14141c" opacity="0.4" />
        <g transform="translate(32,110)">
          <rect width="176" height="80" rx="18" fill="#14141c" opacity="0.06" />
          <circle cx="40" cy="40" r="22" fill="#ff6b8a" />
          <rect x="74" y="22" width="86" height="10" rx="5" fill="#14141c" />
          <rect x="74" y="40" width="58" height="6" rx="3" fill="#14141c" opacity="0.55" />
          <rect x="74" y="52" width="74" height="6" rx="3" fill="#14141c" opacity="0.35" />
        </g>
        <g transform="translate(32,204)">
          <rect width="176" height="80" rx="18" fill="#14141c" opacity="0.06" />
          <circle cx="40" cy="40" r="22" fill="#7c5cff" />
          <rect x="74" y="22" width="86" height="10" rx="5" fill="#14141c" />
          <rect x="74" y="40" width="58" height="6" rx="3" fill="#14141c" opacity="0.55" />
          <rect x="74" y="52" width="74" height="6" rx="3" fill="#14141c" opacity="0.35" />
        </g>
        <g transform="translate(32,298)">
          <rect width="176" height="80" rx="18" fill="#14141c" opacity="0.06" />
          <circle cx="40" cy="40" r="22" fill="#a8d2e0" />
          <rect x="74" y="22" width="86" height="10" rx="5" fill="#14141c" />
          <rect x="74" y="40" width="58" height="6" rx="3" fill="#14141c" opacity="0.55" />
          <rect x="74" y="52" width="74" height="6" rx="3" fill="#14141c" opacity="0.35" />
        </g>
        <rect x="32" y="400" width="176" height="44" rx="22" fill="#14141c" />
        <rect x="92" y="414" width="56" height="16" rx="8" fill="#faf6f1" />
      </g>
      <circle cx="120" cy="120" r="20" fill="#7c5cff" opacity="0.6" />
      <circle cx="80" cy="220" r="12" fill="#ff6b8a" opacity="0.6" />
      <circle cx="160" cy="400" r="18" fill="#b9e3c7" opacity="0.6" />
      <circle cx="680" cy="160" r="16" fill="#f5c992" opacity="0.6" />
      <circle cx="720" cy="380" r="22" fill="#c9b6e8" opacity="0.6" />
    </svg>
  );
}

function HerLipTo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="hl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9b6e8" />
          <stop offset="1" stopColor="#a8d2e0" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#hl-bg)" />
      <g transform="translate(80,80)">
        <rect width="640" height="440" rx="24" fill="#faf6f1" />
        <rect x="32" y="32" width="200" height="200" rx="18" fill="#ff6b8a" />
        <rect x="248" y="32" width="200" height="200" rx="18" fill="#7c5cff" />
        <rect x="464" y="32" width="144" height="200" rx="18" fill="#f5c992" />
        <rect x="32" y="252" width="328" height="14" rx="7" fill="#14141c" />
        <rect x="32" y="276" width="240" height="10" rx="5" fill="#14141c" opacity="0.5" />
        <rect x="32" y="312" width="120" height="36" rx="18" fill="#14141c" />
        <rect x="60" y="324" width="64" height="12" rx="6" fill="#faf6f1" />
        <g transform="translate(380,280)">
          <rect width="228" height="100" rx="16" fill="#14141c" opacity="0.05" />
          <rect x="16" y="16" width="100" height="8" rx="4" fill="#14141c" />
          <rect x="16" y="32" width="60" height="6" rx="3" fill="#14141c" opacity="0.5" />
          <rect x="16" y="60" width="140" height="6" rx="3" fill="#14141c" opacity="0.4" />
          <rect x="16" y="72" width="80" height="6" rx="3" fill="#14141c" opacity="0.3" />
        </g>
      </g>
    </svg>
  );
}
