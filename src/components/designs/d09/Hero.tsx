'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
})

export function D09Hero() {
  return (
    <section
      style={{
        backgroundColor: '#EAF3FC',
        color: '#123B7A',
        padding: 'clamp(32px,5vw,76px) clamp(20px,5vw,60px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative floating radial circle */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: -80,
          right: -60,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #BFE0FF 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr .9fr',
            gap: 'clamp(32px,4vw,56px)',
            alignItems: 'center',
          }}
        >
          {/* Left copy */}
          <div>
            <motion.div style={{ marginBottom: 24 }} {...fadeUp(0)}>
              <span
                style={{
                  backgroundColor: '#D8EAFF',
                  color: '#1957BF',
                  fontSize: 12,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  borderRadius: 10,
                  padding: '7px 13px',
                  display: 'inline-block',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                }}
              >
                {COPY.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(38px,5vw,58px)',
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                marginBottom: 22,
                margin: '0 0 22px',
              }}
              {...fadeUp(0.08)}
            >
              {COPY.h1a}
              <br />
              <span style={{ color: '#2F6FED' }}>{COPY.h1b}</span>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 18,
                lineHeight: 1.6,
                color: '#4A648C',
                marginBottom: 32,
                maxWidth: 520,
              }}
              {...fadeUp(0.16)}
            >
              {COPY.sub}
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' as const, marginBottom: 24 }}
              {...fadeUp(0.24)}
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(47,111,237,.32)' }}
                whileTap={{ y: 0 }}
                style={{
                  backgroundColor: '#2F6FED',
                  color: '#fff',
                  padding: '14px 26px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  display: 'inline-block',
                  cursor: 'pointer',
                  boxShadow: '0 6px 16px rgba(47,111,237,.20)',
                  transition: 'box-shadow .2s ease',
                }}
              >
                {COPY.cta1}
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ backgroundColor: '#F0F7FF', y: -2 }}
                whileTap={{ y: 0 }}
                style={{
                  color: '#123B7A',
                  padding: '14px 26px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  display: 'inline-block',
                  border: '1.5px solid rgba(18,59,122,.25)',
                  cursor: 'pointer',
                  transition: 'background .15s ease',
                }}
              >
                {COPY.cta2}
              </motion.a>
            </motion.div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
              {[COPY.trust1, COPY.trust2].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 13,
                    padding: '7px 14px',
                    borderRadius: 10,
                    backgroundColor: 'rgba(18,59,122,.06)',
                    border: '1px solid rgba(18,59,122,.12)',
                    color: '#5E7BA3',
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual — floating image with backing card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 360 }}>
              {/* Floating backing card */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                style={{
                  position: 'absolute',
                  inset: '16px -16px -16px 16px',
                  backgroundColor: '#BFE0FF',
                  borderRadius: 22,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  borderRadius: 22,
                  overflow: 'hidden',
                }}
              >
                <DesignPlaceholder caption="headshot.jpg" fill="#5E7BA3" bg="#D8EAFF" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
