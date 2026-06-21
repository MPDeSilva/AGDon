import { useTranslations } from 'next-intl'

const STEPS = [
  { key: 'step1', icon: '📞', num: '1' },
  { key: 'step2', icon: '📄', num: '2' },
  { key: 'step3', icon: '😌', num: '3' },
] as const

export function Process() {
  const t = useTranslations('process')

  return (
    <section
      id="how-it-works"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--vg-surface)' }}
      aria-labelledby="process-heading"
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
            id="process-heading"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-10">
          {STEPS.map((step, i) => (
            <div key={step.key} className="relative text-center px-4">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px"
                  style={{ backgroundColor: 'var(--vg-line)' }}
                />
              )}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                style={{
                  backgroundColor: 'var(--vg-brand)',
                  color: 'var(--vg-on-brand)',
                }}
                aria-hidden="true"
              >
                {step.icon}
              </div>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                style={{
                  backgroundColor: 'var(--vg-accent)',
                  color: 'var(--vg-on-accent)',
                }}
                aria-hidden="true"
              >
                {step.num}
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--vg-ink)', fontFamily: 'var(--vg-font-display)' }}
              >
                {t(`${step.key}Title`)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--vg-ink-soft)' }}>
                {t(`${step.key}Body`)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--vg-cta-bg)',
              color: 'var(--vg-cta-ink)',
              borderRadius: 'var(--vg-radius-btn)',
            }}
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
