'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D04Hero() {
  return (
    <section
      style={{
        backgroundColor: '#F2F7F5',
        color: '#0F2A24',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Status pill eyebrow */}
        <motion.div style={{ marginBottom: 28 }} {...fadeUp(0)}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              backgroundColor: '#DBF0E8',
              color: '#0F6B52',
              fontSize: 13,
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 500,
              borderRadius: 999,
              padding: '7px 16px',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#14A07A',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            {COPY.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(36px,5vw,56px)',
            lineHeight: 1.06,
            letterSpacing: '-0.03em',
            marginBottom: 24,
            margin: '0 0 24px',
          }}
          {...fadeUp(0.08)}
        >
          {COPY.h1comma}
          <br />
          <span style={{ color: '#14A07A' }}>{COPY.h1b}</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 19,
            lineHeight: 1.6,
            color: '#3C5750',
            maxWidth: 560,
            margin: '0 auto 36px',
          }}
          {...fadeUp(0.16)}
        >
          {COPY.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' as const, marginBottom: 56 }}
          {...fadeUp(0.24)}
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            style={{
              backgroundColor: '#14A07A',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              display: 'inline-block',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(20,160,122,.28)',
            }}
          >
            {COPY.cta1}
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            style={{
              color: '#14A07A',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              display: 'inline-block',
              border: '2px solid #14A07A',
              cursor: 'pointer',
            }}
          >
            {COPY.cta2}
          </motion.a>
        </motion.div>

        {/* App preview panel */}
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto -40px',
            aspectRatio: '16/7',
            borderRadius: '18px 18px 0 0',
            overflow: 'hidden',
          }}
        >
          <DesignPlaceholder caption="app-preview.png — dashboard / cloud-accounting screenshot" fill="#14A07A" bg="#DBF0E8" />
        </div>
      </div>
    </section>
  )
}
