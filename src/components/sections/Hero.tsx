'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { HeroVisual } from '@/components/ui/HeroVisual'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section
      className="relative overflow-hidden py-20 px-4 sm:py-28"
      style={{ backgroundColor: 'var(--vg-hero-bg)', color: 'var(--vg-hero-ink)' }}
      aria-label="Hero"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow */}
            <motion.div className="mb-6 inline-flex items-center gap-2" {...fadeUp(0)}>
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1"
                style={{
                  backgroundColor: 'var(--vg-hero-eyebrow)',
                  color: 'var(--vg-on-brand)',
                  borderRadius: 'var(--vg-radius-btn)',
                }}
              >
                {t('eyebrow')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-tight mb-6"
              style={{
                fontFamily: 'var(--vg-font-display)',
                fontWeight: 'var(--vg-h1-weight, 600)',
                letterSpacing: 'var(--vg-display-spacing)',
              }}
              {...fadeUp(0.08)}
            >
              {t('headline1')}
              <br />
              <span style={{ color: 'var(--vg-hero-accent, var(--vg-accent))' }}>
                {t('headline2')}
              </span>
            </motion.h1>

            {/* Lead */}
            <motion.p
              className="text-lg sm:text-xl leading-relaxed mb-8 opacity-90 max-w-xl"
              {...fadeUp(0.16)}
            >
              {t('lead')}
            </motion.p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(['chip1', 'chip2', 'chip3'] as const).map((key) => (
                <span
                  key={key}
                  className="text-sm px-3 py-1 font-medium"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    borderRadius: 'var(--vg-radius-btn)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  {t(key)}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4 mb-10" {...fadeUp(0.24)}>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 text-base font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: 'var(--vg-cta-bg)',
                  color: 'var(--vg-cta-ink)',
                  borderRadius: 'var(--vg-radius-btn)',
                }}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                {t('cta1')}
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center px-6 py-3 text-base font-semibold transition-all hover:opacity-80"
                style={{
                  color: 'var(--vg-hero-ink)',
                  border: '2px solid currentColor',
                  borderRadius: 'var(--vg-radius-btn)',
                  opacity: 0.85,
                }}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
              >
                {t('cta2')}
              </motion.a>
            </motion.div>

            {/* Trust cards */}
            <div className="flex flex-wrap gap-3">
              {(['trust1', 'trust2'] as const).map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.12)',
                    borderRadius: 'var(--vg-radius)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {t(key)}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: visual ── */}
          <div className="hidden lg:flex items-center justify-center relative py-4">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  )
}
