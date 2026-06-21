import { useTranslations } from 'next-intl'

const PILLARS = [
  { key: 'pillar1', icon: '🏆', num: '01' },
  { key: 'pillar2', icon: '💰', num: '02' },
  { key: 'pillar3', icon: '🤝', num: '03' },
  { key: 'pillar4', icon: '⚡', num: '04' },
] as const

export function WhyMe() {
  const t = useTranslations('whyMe')

  return (
    <section
      id="why-me"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--vg-bg)' }}
      aria-labelledby="why-me-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--vg-brand)' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            id="why-me-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: 'var(--vg-font-display)',
              color: 'var(--vg-ink)',
              letterSpacing: 'var(--vg-display-spacing)',
              fontWeight: 'var(--vg-h1-weight)',
            }}
          >
            {t('headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p) => (
            <div
              key={p.key}
              className="p-6"
              style={{
                backgroundColor: 'var(--vg-surface)',
                borderRadius: 'var(--vg-radius)',
                border: '1px solid var(--vg-line)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl" aria-hidden="true">{p.icon}</span>
                <span
                  className="text-3xl font-bold opacity-15"
                  style={{ color: 'var(--vg-brand)', fontFamily: 'var(--vg-font-display)' }}
                >
                  {p.num}
                </span>
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: 'var(--vg-ink)', fontFamily: 'var(--vg-font-display)' }}
              >
                {t(`${p.key}Title`)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--vg-ink-soft)' }}>
                {t(`${p.key}Body`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
