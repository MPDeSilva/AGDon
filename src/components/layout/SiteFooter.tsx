import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import { NAP } from '@/lib/content'

export function SiteFooter() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-4"
      style={{ backgroundColor: 'var(--vg-bar-bg)', color: 'var(--vg-bar-ink)' }}
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p
              className="text-xl font-bold mb-1"
              style={{ fontFamily: 'var(--vg-font-display)' }}
            >
              VG Don Services
            </p>
            <p className="text-sm opacity-80 mb-1">{t('tagline')}</p>
            <p className="text-sm opacity-70 mb-4">{t('credentials')}</p>
            <p className="text-sm opacity-70">{t('disclaimer')}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-60">
              Contact
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a
                  href={`mailto:${NAP.email}`}
                  className="hover:opacity-70 transition-opacity underline"
                >
                  {t('email')}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${NAP.telephone}`}
                  className="hover:opacity-70 transition-opacity"
                >
                  {t('phone')}
                </a>
              </li>
              <li>{t('address')}</li>
              <li className="opacity-70">{t('hours')}</li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-60">
              Legal
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="hover:opacity-70 transition-opacity underline"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="hover:opacity-70 transition-opacity underline"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 text-sm opacity-60 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
        >
          {t('copyright').replace('{year}', String(year))}
        </div>
      </div>
    </footer>
  )
}
