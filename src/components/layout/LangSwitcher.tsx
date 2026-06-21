'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

const LANG_OPTIONS = [
  { code: 'en-GB', label: '🇬🇧 English' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'it', label: '🇮🇹 Italiano' },
  { code: 'si', label: '🇱🇰 සිංහල' },
] as const

export function LangSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.target.value
    // Replace current locale segment in path
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPath = segments.join('/')
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`
    router.push(newPath)
  }

  return (
    <select
      value={locale}
      onChange={handleChange}
      aria-label="Select language"
      className="bg-transparent text-sm border border-[var(--vg-line)] rounded-[var(--vg-radius-sm)] px-2 py-1 cursor-pointer hover:border-[var(--vg-brand)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--vg-brand)]"
      style={{ color: 'var(--vg-ink)' }}
    >
      {LANG_OPTIONS.map((opt) => (
        <option key={opt.code} value={opt.code}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
