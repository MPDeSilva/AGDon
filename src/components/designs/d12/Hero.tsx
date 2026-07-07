'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

export function D12Hero() {
  return (
    <section
      style={{
        backgroundColor: '#F7FBF9',
        color: '#22423A',
        padding: 'clamp(32px,5vw,70px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr .95fr',
            gap: 'clamp(32px,4vw,56px)',
            alignItems: 'center',
          }}
        >
          {/* Left copy */}
          <div>
            <motion.div style={{ marginBottom: 22 }} {...fadeUp(0)}>
              <span
                style={{
                  backgroundColor: '#DCF2E9',
                  color: '#22423A',
                  fontSize: 12,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  borderRadius: 14,
                  padding: '7px 14px',
                  display: 'inline-block',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                {COPY.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(36px,5vw,54px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                marginBottom: 22,
                margin: '0 0 22px',
              }}
              {...fadeUp(0.08)}
            >
              {COPY.h1a}
              <br />
              <span style={{ color: '#6FC7A8' }}>{COPY.h1b}</span>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontSize: 17,
                lineHeight: 1.65,
                color: '#5A7A70',
                marginBottom: 28,
                maxWidth: 500,
              }}
              {...fadeUp(0.16)}
            >
              {COPY.sub}
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 20 }}
              {...fadeUp(0.24)}
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                style={{
                  backgroundColor: '#6FC7A8',
                  color: '#fff',
                  padding: '14px 24px',
                  borderRadius: 14,
                  textDecoration: 'none',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
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
                  color: '#22423A',
                  padding: '14px 24px',
                  borderRadius: 14,
                  textDecoration: 'none',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'inline-block',
                  border: '1.5px solid rgba(34,66,58,.2)',
                  cursor: 'pointer',
                }}
              >
                {COPY.cta2}
              </motion.a>
            </motion.div>

            {/* Two-tone trust chips */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
              <span
                style={{
                  fontSize: 13,
                  padding: '6px 14px',
                  borderRadius: 999,
                  backgroundColor: '#F3C6D2',
                  color: '#22423A',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                {COPY.trust1}
              </span>
              <span
                style={{
                  fontSize: 13,
                  padding: '6px 14px',
                  borderRadius: 999,
                  backgroundColor: '#DCF2E9',
                  color: '#22423A',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 500,
                }}
              >
                {COPY.trust2}
              </span>
            </div>
          </div>

          {/* Right visual — blush floating backing card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  inset: '16px -16px -16px 16px',
                  backgroundColor: '#F3C6D2',
                  borderRadius: 24,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  borderRadius: 24,
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                }}
              >
                <DesignPlaceholder caption="headshot.jpg" fill="#7C9D91" bg="#F7FBF9" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
