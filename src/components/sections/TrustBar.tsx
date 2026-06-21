import { useTranslations } from 'next-intl'

const SOFTWARE = ['Xero', 'QuickBooks', 'FreeAgent', 'Sage', 'HMRC MTD']

const TRUST_ITEMS = [
  { icon: '🎓', key: 'aca' },
  { icon: '🏛️', key: 'icaew' },
  { icon: '📱', key: 'mtd' },
  { icon: '⏱️', key: 'years' },
] as const

export function TrustBar() {
  const t = useTranslations('trustBar')

  return (
    <section
      className="py-8 px-4 border-b"
      style={{
        backgroundColor: 'var(--vg-surface)',
        borderColor: 'var(--vg-line)',
      }}
      aria-label="Trust credentials"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-center mb-6" style={{ color: 'var(--vg-muted)' }}>
          {t('label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {TRUST_ITEMS.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-lg">{item.icon}</span>
              <span className="text-sm font-semibold" style={{ color: 'var(--vg-ink)' }}>
                {t(item.key)}
              </span>
            </div>
          ))}

          <div
            aria-hidden="true"
            className="hidden lg:block w-px h-6 self-center"
            style={{ backgroundColor: 'var(--vg-line)' }}
          />

          {SOFTWARE.map((sw) => (
            <span
              key={sw}
              className="text-sm font-medium px-3 py-1"
              style={{
                color: 'var(--vg-ink-soft)',
                backgroundColor: 'var(--vg-surface-2)',
                borderRadius: 'var(--vg-radius-sm)',
              }}
            >
              {sw}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
