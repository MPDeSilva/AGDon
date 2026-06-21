import { useTranslations } from 'next-intl'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { TopBar } from '@/components/layout/TopBar'
import { NAP } from '@/lib/content'

export default function TermsPage() {
  const t = useTranslations('terms')

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

        <div className="space-y-6 text-base leading-relaxed" style={{ color: 'var(--vg-ink-soft)' }}>
          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>1. Engagement</h2>
            <p>These terms apply to all services provided by VG Don Services (Danuka Geekiyanage Don, Chartered Accountant). A formal letter of engagement will be issued before any chargeable work commences.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>2. Fees</h2>
            <p>All fees are agreed in writing prior to commencement of work. We operate on a fixed-fee basis; the agreed fee will not change unless the scope of work changes materially. Invoices are payable within 14 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>3. Client responsibilities</h2>
            <p>You agree to provide accurate, complete, and timely information required for us to perform our services. We are not liable for errors or penalties arising from incomplete or incorrect information provided by you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>4. Confidentiality</h2>
            <p>We treat all client information as strictly confidential and will not disclose it to third parties except as required by law or professional regulations.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>5. Professional standards</h2>
            <p>We are bound by the ethical and professional standards of the Institute of Chartered Accountants in England and Wales (ICAEW). Our work is carried out in accordance with applicable UK law and HMRC requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>6. Limitation of liability</h2>
            <p>Our liability is limited to the fee paid for the relevant service. We are not liable for any indirect or consequential loss. We maintain professional indemnity insurance as required by ICAEW.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--vg-ink)' }}>7. Governing law</h2>
            <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
          </section>

          <p className="text-sm mt-8" style={{ color: 'var(--vg-muted)' }}>
            Questions? Contact us at{' '}
            <a href={`mailto:${NAP.email}`} className="underline" style={{ color: 'var(--vg-brand)' }}>
              {NAP.email}
            </a>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
