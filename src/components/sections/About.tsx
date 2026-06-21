import { useTranslations } from 'next-intl'

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
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative z-10 w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] flex items-center justify-center"
              style={{
                backgroundColor: 'var(--vg-surface-2)',
                borderRadius: 'var(--vg-frame-radius)',
              }}
            >
              {/* Placeholder initials avatar */}
              <div className="text-center">
                <div
                  className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-3"
                  style={{
                    backgroundColor: 'var(--vg-frame-back)',
                    color: 'var(--vg-on-brand)',
                    fontFamily: 'var(--vg-font-display)',
                  }}
                >
                  DG
                </div>
                <p className="text-sm" style={{ color: 'var(--vg-muted)' }}>
                  {t('imageAlt')}
                </p>
              </div>
            </div>
            {/* Decorative block behind image */}
            <div
              aria-hidden="true"
              className="absolute top-6 -left-6 w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] -z-0"
              style={{
                backgroundColor: 'var(--vg-surface-2)',
                borderRadius: 'var(--vg-frame-radius)',
              }}
            />
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
