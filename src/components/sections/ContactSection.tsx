import { useTranslations } from 'next-intl'
import { ContactForm } from '@/components/form/ContactForm'
import { NAP } from '@/lib/content'

export function ContactSection() {
  const t = useTranslations('contact')

  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--vg-surface)' }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-2">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--vg-brand)' }}
            >
              {t('eyebrow')}
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: 'var(--vg-font-display)',
                color: 'var(--vg-ink)',
                letterSpacing: 'var(--vg-display-spacing)',
                fontWeight: 'var(--vg-h1-weight)',
              }}
            >
              {t('headline')}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--vg-ink-soft)' }}>
              {t('lead')}
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">📧</span>
                <a
                  href={`mailto:${NAP.email}`}
                  className="text-sm font-medium underline underline-offset-2 transition-opacity hover:opacity-70"
                  style={{ color: 'var(--vg-brand)' }}
                >
                  {NAP.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">📞</span>
                <a
                  href={`tel:${NAP.telephone}`}
                  className="text-sm font-medium transition-opacity hover:opacity-70"
                  style={{ color: 'var(--vg-ink-soft)' }}
                >
                  {NAP.telephone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl" aria-hidden="true">📍</span>
                <span className="text-sm" style={{ color: 'var(--vg-ink-soft)' }}>
                  {NAP.addressLocality}, {NAP.addressCountry}
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
