export function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" aria-hidden="true">
      {/* Card stack — credential and service cards */}
      <svg
        viewBox="0 0 420 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm"
        style={{ filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))' }}
      >
        <defs>
          <linearGradient id="card1-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--vg-brand)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--vg-accent)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="card2-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--vg-surface)" stopOpacity="0.97" />
            <stop offset="100%" stopColor="var(--vg-surface-2)" stopOpacity="0.97" />
          </linearGradient>
          <linearGradient id="card3-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--vg-accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--vg-brand)" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        {/* ── Back card (tilt -8°) ── */}
        <g transform="rotate(-8, 210, 280) translate(30, 60)">
          <rect width="320" height="190" rx="16" fill="url(#card3-grad)" />
          <rect x="24" y="24" width="80" height="12" rx="6" fill="white" opacity="0.25" />
          <rect x="24" y="44" width="140" height="8" rx="4" fill="white" opacity="0.18" />
          <rect x="24" y="140" width="60" height="28" rx="8" fill="white" opacity="0.2" />
          <rect x="96" y="140" width="80" height="28" rx="8" fill="white" opacity="0.2" />
          <circle cx="272" cy="40" r="28" fill="white" opacity="0.12" />
          <circle cx="272" cy="40" r="18" fill="white" opacity="0.12" />
        </g>

        {/* ── Middle card (tilt +5°) ── */}
        <g transform="rotate(5, 210, 280) translate(20, 100)">
          <rect width="340" height="200" rx="16" fill="url(#card2-grad)" />
          {/* Header stripe */}
          <rect width="340" height="52" rx="16" fill="var(--vg-brand)" opacity="0.12" />
          <rect x="0" y="36" width="340" height="16" fill="var(--vg-brand)" opacity="0.08" />
          {/* Logo area */}
          <rect x="20" y="14" width="24" height="24" rx="6" fill="var(--vg-brand)" opacity="0.7" />
          <text x="20" y="12" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="var(--vg-ink)" opacity="0.6">VG DON SERVICES</text>
          {/* Content lines */}
          <rect x="20" y="68" width="180" height="10" rx="5" fill="var(--vg-ink)" opacity="0.12" />
          <rect x="20" y="86" width="240" height="8" rx="4" fill="var(--vg-ink)" opacity="0.08" />
          <rect x="20" y="100" width="200" height="8" rx="4" fill="var(--vg-ink)" opacity="0.08" />
          {/* Stats row */}
          <rect x="20" y="126" width="88" height="44" rx="10" fill="var(--vg-brand)" opacity="0.08" />
          <rect x="118" y="126" width="88" height="44" rx="10" fill="var(--vg-accent)" opacity="0.1" />
          <rect x="216" y="126" width="88" height="44" rx="10" fill="var(--vg-brand)" opacity="0.06" />
          <text x="36" y="146" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="var(--vg-brand)" opacity="0.8">10+</text>
          <text x="28" y="161" fontFamily="system-ui" fontSize="8" fill="var(--vg-muted)" opacity="0.9">Years exp.</text>
          <text x="136" y="146" fontFamily="system-ui" fontSize="16" fontWeight="700" fill="var(--vg-accent)" opacity="0.8">ACA</text>
          <text x="124" y="161" fontFamily="system-ui" fontSize="8" fill="var(--vg-muted)" opacity="0.9">Qualified</text>
          <text x="228" y="146" fontFamily="system-ui" fontSize="13" fontWeight="700" fill="var(--vg-brand)" opacity="0.7">Fixed</text>
          <text x="222" y="161" fontFamily="system-ui" fontSize="8" fill="var(--vg-muted)" opacity="0.9">Fee pricing</text>
        </g>

        {/* ── Front card (no tilt) — main credential card ── */}
        <g transform="translate(40, 190)">
          <rect width="340" height="220" rx="18" fill="url(--vg-hero-bg, #fff)" />
          <rect width="340" height="220" rx="18" fill="url(#card1-grad)" />

          {/* Shine overlay */}
          <rect width="340" height="80" rx="18" fill="white" opacity="0.06" />

          {/* ICAEW-style badge circle */}
          <circle cx="52" cy="52" r="32" fill="white" opacity="0.15" />
          <circle cx="52" cy="52" r="22" fill="white" opacity="0.15" />
          <text x="52" y="57" textAnchor="middle" fontFamily="system-ui" fontSize="12" fontWeight="900" fill="white" opacity="0.9">ACA</text>

          {/* Name and title */}
          <text x="100" y="38" fontFamily="Georgia, serif" fontSize="15" fontWeight="700" fill="white" opacity="0.95">Danuka Geekiyanage Don</text>
          <text x="100" y="56" fontFamily="system-ui" fontSize="11" fill="white" opacity="0.75">ACA · BFP · ICAEW Member</text>
          <text x="100" y="72" fontFamily="system-ui" fontSize="11" fill="white" opacity="0.65">Chartered Accountant · London</text>

          {/* Divider */}
          <rect x="22" y="96" width="296" height="1" fill="white" opacity="0.15" />

          {/* Service chips */}
          <rect x="22" y="112" width="130" height="26" rx="13" fill="white" opacity="0.15" />
          <text x="87" y="130" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="white" opacity="0.9">Bookkeeping &amp; VAT</text>

          <rect x="162" y="112" width="110" height="26" rx="13" fill="white" opacity="0.15" />
          <text x="217" y="130" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="white" opacity="0.9">Self-Assessment</text>

          <rect x="22" y="148" width="118" height="26" rx="13" fill="white" opacity="0.15" />
          <text x="81" y="166" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="white" opacity="0.9">Year-End Accounts</text>

          <rect x="150" y="148" width="80" height="26" rx="13" fill="white" opacity="0.15" />
          <text x="190" y="166" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="white" opacity="0.9">Tax Advice</text>

          <rect x="240" y="148" width="80" height="26" rx="13" fill="white" opacity="0.12" />
          <text x="280" y="166" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="white" opacity="0.8">Startups</text>

          {/* Bottom CTA area */}
          <rect x="22" y="186" width="144" height="20" rx="5" fill="white" opacity="0.12" />
          <text x="94" y="200" textAnchor="middle" fontFamily="system-ui" fontSize="10" fill="white" opacity="0.7">Fixed fee · No surprises</text>

          <rect x="176" y="186" width="144" height="20" rx="5" fill="white" opacity="0.2" />
          <text x="248" y="200" textAnchor="middle" fontFamily="system-ui" fontSize="10" fontWeight="600" fill="white" opacity="0.95">Get a free quote →</text>
        </g>

        {/* ── Floating trust badges ── */}
        {/* Top right floating badge */}
        <g transform="translate(298, 30)">
          <rect width="110" height="50" rx="12" fill="var(--vg-surface)" opacity="0.95" />
          <rect width="110" height="50" rx="12" stroke="var(--vg-line)" strokeWidth="1" fill="none" />
          <text x="55" y="20" textAnchor="middle" fontFamily="system-ui" fontSize="18">✅</text>
          <text x="55" y="38" textAnchor="middle" fontFamily="system-ui" fontSize="9" fontWeight="600" fill="var(--vg-ink)" opacity="0.8">MTD Ready</text>
        </g>

        {/* Bottom left floating badge */}
        <g transform="translate(10, 430)">
          <rect width="130" height="52" rx="12" fill="var(--vg-surface)" opacity="0.95" />
          <rect width="130" height="52" rx="12" stroke="var(--vg-line)" strokeWidth="1" fill="none" />
          <text x="16" y="24" fontFamily="system-ui" fontSize="9" fontWeight="700" fill="var(--vg-brand)" opacity="0.9">⭐ 5.0 · Trustpilot</text>
          <text x="16" y="40" fontFamily="system-ui" fontSize="9" fill="var(--vg-muted)" opacity="0.9">Rated excellent</text>
        </g>
      </svg>
    </div>
  )
}
