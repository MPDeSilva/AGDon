import { useTranslations } from 'next-intl'
import { HeroVisual } from '@/components/ui/HeroVisual'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      className="relative overflow-hidden py-20 px-4 sm:py-28"
      style={{ backgroundColor: 'var(--vg-hero-bg)', color: 'var(--vg-hero-ink)' }}
      aria-label="Hero"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1"
                style={{
                  backgroundColor: 'var(--vg-hero-eyebrow)',
                  color: 'var(--vg-on-brand)',
                  borderRadius: 'var(--vg-radius-btn)',
                }}
              >
                {t('eyebrow')}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-tight mb-6"
              style={{
                fontFamily: 'var(--vg-font-display)',
                fontWeight: 'var(--vg-h1-weight, 600)',
                letterSpacing: 'var(--vg-display-spacing)',
              }}
            >
              {t('headline1')}
              <br />
              <span style={{ color: 'var(--vg-hero-accent, var(--vg-accent))' }}>
                {t('headline2')}
              </span>
            </h1>

            {/* Lead */}
            <p className="text-lg sm:text-xl leading-relaxed mb-8 opacity-90 max-w-xl">
              {t('lead')}
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(['chip1', 'chip2', 'chip3'] as const).map((key) => (
                <span
                  key={key}
                  className="text-sm px-3 py-1 font-medium"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: 'var(--vg-radius-btn)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  {t(key)}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'var(--vg-cta-bg)',
                  color: 'var(--vg-cta-ink)',
                  borderRadius: 'var(--vg-radius-btn)',
                }}
              >
                {t('cta1')}
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 text-base font-semibold transition-all hover:opacity-80"
                style={{
                  color: 'var(--vg-hero-ink)',
                  border: '2px solid currentColor',
                  borderRadius: 'var(--vg-radius-btn)',
                  opacity: 0.85,
                }}
              >
                {t('cta2')}
              </a>
            </div>

            {/* Trust cards */}
            <div className="flex flex-wrap gap-3">
              {(['trust1', 'trust2'] as const).map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    borderRadius: 'var(--vg-radius)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {t(key)}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className="hidden lg:flex items-center justify-center relative py-4">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
