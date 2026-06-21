export function PersonPlaceholder({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 480"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
    >
      {/* Background */}
      <rect width="360" height="480" fill="var(--vg-surface-2)" />

      {/* Subtle gradient overlay */}
      <defs>
        <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--vg-surface)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--vg-surface-2)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="body-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--vg-brand)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--vg-brand)" stopOpacity="0.35" />
        </linearGradient>
        <clipPath id="frame-clip">
          <rect width="360" height="480" />
        </clipPath>
      </defs>
      <rect width="360" height="480" fill="url(#bg-grad)" />

      {/* Decorative background circles */}
      <circle cx="300" cy="60" r="120" fill="var(--vg-brand)" opacity="0.06" />
      <circle cx="60" cy="420" r="100" fill="var(--vg-accent)" opacity="0.06" />

      {/* Suit/jacket body */}
      <ellipse cx="180" cy="460" rx="160" ry="110" fill="url(#body-grad)" />
      <path
        d="M 80 380 Q 100 340 130 320 L 160 350 L 180 330 L 200 350 L 230 320 Q 260 340 280 380 Q 290 420 290 480 L 70 480 Q 70 420 80 380Z"
        fill="var(--vg-brand)"
        opacity="0.28"
      />

      {/* Tie */}
      <path
        d="M 172 322 L 180 310 L 188 322 L 183 380 L 180 390 L 177 380Z"
        fill="var(--vg-accent)"
        opacity="0.55"
      />

      {/* Collar */}
      <path
        d="M 160 320 L 180 338 L 200 320 L 196 314 L 180 328 L 164 314Z"
        fill="var(--vg-surface)"
        opacity="0.6"
      />

      {/* Head */}
      <ellipse cx="180" cy="198" rx="72" ry="80" fill="var(--vg-surface)" opacity="0.85" />

      {/* Face shadow/depth */}
      <ellipse cx="180" cy="198" rx="72" ry="80" fill="var(--vg-brand)" opacity="0.05" />

      {/* Hair */}
      <ellipse cx="180" cy="132" rx="72" ry="38" fill="var(--vg-ink)" opacity="0.75" />
      <path
        d="M 108 150 Q 108 118 180 118 Q 252 118 252 150 L 252 135 Q 252 105 180 105 Q 108 105 108 135Z"
        fill="var(--vg-ink)"
        opacity="0.75"
      />

      {/* Face features - eyes */}
      <ellipse cx="158" cy="195" rx="10" ry="6" fill="var(--vg-ink)" opacity="0.6" />
      <ellipse cx="202" cy="195" rx="10" ry="6" fill="var(--vg-ink)" opacity="0.6" />

      {/* Eye shine */}
      <circle cx="162" cy="192" r="3" fill="white" opacity="0.5" />
      <circle cx="206" cy="192" r="3" fill="white" opacity="0.5" />

      {/* Nose */}
      <path
        d="M 178 208 Q 174 220 170 225 Q 176 228 180 226 Q 184 228 190 225 Q 186 220 182 208Z"
        fill="var(--vg-ink)"
        opacity="0.15"
      />

      {/* Smile */}
      <path
        d="M 163 238 Q 180 252 197 238"
        stroke="var(--vg-ink)"
        strokeWidth="3"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Shoulders / shirt */}
      <path
        d="M 108 278 Q 108 290 120 296 L 240 296 Q 252 290 252 278 L 248 268 Q 216 258 180 256 Q 144 258 112 268Z"
        fill="var(--vg-surface)"
        opacity="0.5"
      />

      {/* Credential badge overlay at bottom */}
      <rect x="20" y="400" width="320" height="64" rx="8" fill="var(--vg-surface)" opacity="0.88" />
      <rect x="20" y="400" width="4" height="64" rx="2" fill="var(--vg-brand)" opacity="0.9" />
      <text
        x="36"
        y="422"
        fontFamily="system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="var(--vg-ink)"
        opacity="0.9"
      >
        Danuka Geekiyanage Don
      </text>
      <text
        x="36"
        y="440"
        fontFamily="system-ui, sans-serif"
        fontSize="10"
        fill="var(--vg-brand)"
        opacity="0.9"
        fontWeight="600"
      >
        ACA · BFP · ICAEW Member
      </text>
      <text
        x="36"
        y="456"
        fontFamily="system-ui, sans-serif"
        fontSize="10"
        fill="var(--vg-muted)"
        opacity="0.9"
      >
        Chartered Accountant · London
      </text>
    </svg>
  )
}
