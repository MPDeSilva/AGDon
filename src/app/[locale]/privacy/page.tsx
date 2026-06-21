import { useTranslations } from 'next-intl'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { TopBar } from '@/components/layout/TopBar'
import { NAP } from '@/lib/content'

export default function PrivacyPage() {
  const t = useTranslations('privacy')

  return (
    <>
      <TopBar />
      <SiteHeader />
      <main id="main-content" className="max-w-3xl mx-auto px-4 py-16">
        <h1
          className="text-3xl font-bold mb-2"
          style={{ fontFamily: 'var(--vg-font-display)', color: 'var(--vg-ink)' }}
        >
          {t('title')}
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--vg-muted)' }}>
          {t('lastUpdated')}
        </p>

        <div className="prose max-w-none space-y-6 text-base leading-relaxed" style={{ color: 'var(--vg-ink-soft)' }}>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>1. Who we are</h2>
            <p>
              VG Don Services is the trading name of Danuka Geekiyanage Don, Chartered Accountant.
              Our contact email is <a href={`mailto:${NAP.email}`} className="underline" style={{ color: 'var(--vg-brand)' }}>{NAP.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>2. Data we collect</h2>
            <p>When you submit an enquiry, we collect: your name, email address, phone number (optional), business type, services of interest, annual turnover (optional), preferred contact method, and any message you provide.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>3. How we use your data</h2>
            <p>We use your information solely to respond to your enquiry and, if you become a client, to provide accounting services. We do not sell, share, or use your data for marketing without your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>4. Legal basis</h2>
            <p>We process your data on the basis of your consent (Article 6(1)(a) UK GDPR) given when you submit the enquiry form.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>5. Retention</h2>
            <p>Enquiry data is retained for 12 months. Client data is retained in accordance with HMRC requirements (typically 6 years).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>6. Your rights</h2>
            <p>Under UK GDPR you have the right to access, rectify, erase, restrict, or object to processing of your data. Contact us at <a href={`mailto:${NAP.email}`} className="underline" style={{ color: 'var(--vg-brand)' }}>{NAP.email}</a> to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>7. Cookies & tracking</h2>
            <p>This site uses no analytics cookies. The Cloudflare Turnstile widget on our contact form is privacy-preserving and does not set tracking cookies. We set a single locale cookie (<code>NEXT_LOCALE</code>) to remember your language preference; it contains no personal data.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>8. Security</h2>
            <p>Form submissions are transmitted over HTTPS. We use spam protection (Cloudflare Turnstile) and rate limiting on our enquiry endpoint.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
