import { useTranslations } from 'next-intl'
import { PersonPlaceholder } from '@/components/ui/PersonPlaceholder'

export function About() {
  const t = useTranslations('about')

  return (
    <section
      id="about"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--vg-bg)' }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo area */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative block behind */}
            <div
              aria-hidden="true"
              className="absolute top-6 -left-4 lg:-left-8 w-full max-w-sm aspect-[3/4] z-0"
              style={{
                backgroundColor: 'var(--vg-frame-back)',
                opacity: 0.18,
                borderRadius: 'var(--vg-frame-radius)',
              }}
            />
            {/* Accent line */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 w-24 h-24 z-0"
              style={{
                background: 'var(--vg-accent)',
                opacity: 0.15,
                borderRadius: '50%',
              }}
            />
            {/* Main image frame */}
            <div
              className="relative z-10 w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] overflow-hidden"
              style={{ borderRadius: 'var(--vg-frame-radius)' }}
              role="img"
              aria-label={t('imageAlt')}
            >
              <PersonPlaceholder />
            </div>

            {/* Floating credentials badge */}
            <div
              className="absolute -bottom-5 -right-2 lg:-right-8 z-20 px-4 py-3 flex items-center gap-3"
              style={{
                backgroundColor: 'var(--vg-surface)',
                borderRadius: 'var(--vg-radius)',
                boxShadow: 'var(--vg-shadow)',
                border: '1px solid var(--vg-line)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  backgroundColor: 'var(--vg-brand)',
                  color: 'var(--vg-on-brand)',
                  fontFamily: 'var(--vg-font-display)',
                }}
              >
                ACA
              </div>
              <div>
                <p className="text-xs font-semibold leading-tight" style={{ color: 'var(--vg-ink)' }}>
                  ICAEW Member
                </p>
                <p className="text-xs leading-tight" style={{ color: 'var(--vg-muted)' }}>
                  Chartered Accountant
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--vg-brand)' }}
            >
              {t('eyebrow')}
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
              style={{
                fontFamily: 'var(--vg-font-display)',
                color: 'var(--vg-ink)',
                letterSpacing: 'var(--vg-display-spacing)',
                fontWeight: 'var(--vg-h1-weight)',
              }}
            >
              {t('headline')}
            </h2>

            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--vg-ink-soft)' }}>
              <p>{t('body1')}</p>
              <p>{t('body2')}</p>
              <p>{t('body3')}</p>
            </div>

            <div className="mt-8 space-y-1">
              <p className="font-semibold text-sm" style={{ color: 'var(--vg-brand)' }}>
                {t('credentials')}
              </p>
              <p className="text-sm" style={{ color: 'var(--vg-muted)' }}>
                {t('location')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
