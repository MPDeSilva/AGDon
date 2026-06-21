import { useTranslations } from 'next-intl'
import { services } from '@/lib/content'

export function Services() {
  const t = useTranslations('services')

  return (
    <section
      id="services"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--vg-surface)' }}
      aria-labelledby="services-heading"
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
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              fontFamily: 'var(--vg-font-display)',
              color: 'var(--vg-ink)',
              letterSpacing: 'var(--vg-display-spacing)',
              fontWeight: 'var(--vg-h1-weight)',
            }}
          >
            {t('headline')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--vg-ink-soft)' }}>
            {t('lead')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const isLast = i === services.length - 1
            return (
              <article
                key={service.id}
                className="relative p-6 flex flex-col gap-4 transition-shadow hover:shadow-lg"
                style={{
                  backgroundColor: isLast ? 'var(--vg-surface-2)' : 'var(--vg-bg)',
                  borderRadius: 'var(--vg-radius)',
                  border: `1px solid var(--vg-line)`,
                  boxShadow: 'var(--vg-shadow-sm)',
                }}
              >
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                <div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{
                      color: 'var(--vg-ink)',
                      fontFamily: 'var(--vg-font-display)',
                    }}
                  >
                    {t(`${service.id}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--vg-ink-soft)' }}>
                    {t(`${service.id}.description`)}
                  </p>
                </div>
                <div className="mt-auto">
                  <span
                    className="text-xs font-semibold px-3 py-1"
                    style={{
                      backgroundColor: 'var(--vg-surface)',
                      color: 'var(--vg-brand)',
                      borderRadius: 'var(--vg-radius-sm)',
                      border: '1px solid var(--vg-line)',
                    }}
                  >
                    {t(`${service.id}.audience`)}
                  </span>
                </div>
                {isLast && (
                  <a
                    href="#contact"
                    className="mt-2 text-sm font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
                    style={{ color: 'var(--vg-brand)' }}
                  >
                    Get free guidance →
                  </a>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
