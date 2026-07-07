'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { LangSwitcher } from './LangSwitcher'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'

const NAV_ITEMS = [
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'whyMe', href: '#why-me' },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'faq', href: '#faq' },
] as const

export function SiteHeader() {
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const el = drawerRef.current
    if (!el) return
    // Focus trap
    const focusable = el.querySelectorAll<HTMLElement>(
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )
    focusable[0]?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
      if (e.key === 'Tab') {
        const arr = Array.from(focusable)
        const first = arr[0], last = arr[arr.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first?.focus()
        }
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className="sticky top-0 z-40 transition-shadow duration-200"
      style={{
        backgroundColor: 'var(--vg-surface)',
        boxShadow: scrolled ? 'var(--vg-shadow)' : 'none',
        borderBottom: scrolled ? 'none' : '1px solid var(--vg-line)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="#"
          className="flex flex-col leading-none focus:outline-none focus:ring-2 focus:ring-[var(--vg-brand)] rounded"
          aria-label="VG Don Services — home"
        >
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: 'var(--vg-font-display)', color: 'var(--vg-ink)' }}
          >
            VG Don Services
          </span>
          <span className="text-xs" style={{ color: 'var(--vg-muted)' }}>
            Chartered Accountant · London
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-[var(--vg-brand)]"
              style={{ color: 'var(--vg-ink-soft)' }}
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <LangSwitcher />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--vg-cta-bg)',
              color: 'var(--vg-cta-ink)',
              borderRadius: 'var(--vg-radius-btn)',
            }}
          >
            {t('getQuote')}
          </a>

          {/* Mobile hamburger */}
          <button
            ref={toggleRef}
            className="lg:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--vg-brand)]"
            aria-label={open ? t('close') : t('menu')}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(!open)}
            style={{ color: 'var(--vg-ink)' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('menu')}
          className="lg:hidden fixed inset-0 top-[calc(var(--topbar-h,2.25rem)+4rem)] z-50 flex flex-col p-6 gap-4"
          style={{ backgroundColor: 'var(--vg-surface)' }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-lg font-medium py-2 border-b transition-colors hover:text-[var(--vg-brand)]"
              style={{ color: 'var(--vg-ink)', borderColor: 'var(--vg-line)' }}
              onClick={() => setOpen(false)}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 text-center py-3 font-semibold transition-opacity hover:opacity-90"
            style={{
              backgroundColor: 'var(--vg-cta-bg)',
              color: 'var(--vg-cta-ink)',
              borderRadius: 'var(--vg-radius-btn)',
            }}
            onClick={() => setOpen(false)}
          >
            {t('getQuote')}
          </a>
          <div className="mt-2">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
