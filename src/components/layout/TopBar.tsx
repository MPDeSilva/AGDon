import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function TopBar() {
  const t = useTranslations('topbar')

  return (
    <div
      style={{ backgroundColor: 'var(--vg-bar-bg)', color: 'var(--vg-bar-ink)' }}
      className="py-2 px-4 text-sm text-center"
    >
      <span>{t('text')}</span>
      <Link
        href="#contact"
        className="ml-3 font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {t('cta')} →
      </Link>
    </div>
  )
}
