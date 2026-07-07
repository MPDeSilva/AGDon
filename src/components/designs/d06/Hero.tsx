'use client'

import { motion } from 'motion/react'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
})

export function D06Hero() {
  return (
    <section
      style={{
        backgroundColor: '#141414',
        color: '#F4F1EA',
        padding: 'clamp(48px,6vw,70px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Eyebrow */}
        <motion.div style={{ marginBottom: 28 }} {...fadeUp(0)}>
          <span
            style={{
              fontFamily: 'ui-monospace, Menlo, monospace',
              fontSize: 11,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              color: '#F0531C',
            }}
          >
            {COPY.eyebrow}
          </span>
        </motion.div>

        {/* Giant uppercase headline */}
        <motion.h1
          style={{
            fontFamily: "'Archivo', 'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(48px,8vw,86px)',
            lineHeight: 0.94,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase' as const,
            marginBottom: 40,
            margin: '0 0 40px',
          }}
          {...fadeUp(0.08)}
        >
          Chartered
          <br />
          expertise.
          <br />
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#F0531C',
              color: '#141414',
              padding: '0 14px',
              lineHeight: 1.05,
            }}
          >
            Freelance rates.
          </span>
        </motion.h1>

        {/* Body + CTA row in 1fr auto grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(24px,4vw,48px)',
            alignItems: 'center',
          }}
          {...fadeUp(0.16)}
        >
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(244,241,234,.75)',
              maxWidth: 560,
            }}
          >
            {COPY.sub}
          </p>
          <div style={{ display: 'flex', gap: 12, flexShrink: 0, flexWrap: 'wrap' as const }}>
            <motion.a
              href="#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                backgroundColor: '#F0531C',
                color: '#141414',
                padding: '15px 24px',
                borderRadius: 0,
                textDecoration: 'none',
                fontFamily: "'Archivo', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                display: 'inline-block',
                cursor: 'pointer',
              }}
            >
              {COPY.cta1}
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ y: -3 }}
              style={{
                color: '#F4F1EA',
                padding: '15px 24px',
                borderRadius: 0,
                textDecoration: 'none',
                fontFamily: "'Archivo', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.04em',
                textTransform: 'uppercase' as const,
                display: 'inline-block',
                border: '2px solid rgba(244,241,234,.35)',
                cursor: 'pointer',
              }}
            >
              {COPY.cta2}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
