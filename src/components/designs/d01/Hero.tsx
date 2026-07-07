'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D01Hero() {
  return (
    <section
      style={{
        backgroundColor: '#16263D',
        color: '#fff',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(1fr,1.1fr,1.1fr) clamp(1fr,.9fr,.9fr)',
            gap: 'clamp(32px,4vw,56px)',
            alignItems: 'center',
          }}
        >
          {/* Left copy */}
          <div>
            <motion.div style={{ marginBottom: 24 }} {...fadeUp(0)}>
              <span
                style={{
                  backgroundColor: '#5C8268',
                  color: '#fff',
                  fontSize: 12,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  borderRadius: 10,
                  padding: '7px 13px',
                  display: 'inline-block',
                }}
              >
                {COPY.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(40px,5vw,60px)',
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                marginBottom: 24,
                margin: '0 0 24px',
              }}
              {...fadeUp(0.08)}
            >
              {COPY.h1a}
              <br />
              <span style={{ color: '#5C8268' }}>{COPY.h1b}</span>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 19,
                lineHeight: 1.55,
                color: 'rgba(255,255,255,.82)',
                marginBottom: 32,
                maxWidth: 520,
              }}
              {...fadeUp(0.16)}
            >
              {COPY.sub}
            </motion.p>

            <motion.div
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const, marginBottom: 24 }}
              {...fadeUp(0.24)}
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                style={{
                  backgroundColor: '#5C8268',
                  color: '#fff',
                  padding: '15px 24px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                {COPY.cta1}
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                style={{
                  color: '#fff',
                  padding: '15px 24px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  display: 'inline-block',
                  border: '1.5px solid rgba(255,255,255,0.5)',
                  cursor: 'pointer',
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
                    backgroundColor: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.15)',
                    color: 'rgba(255,255,255,.85)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 380 }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '14px -14px -14px 14px',
                  backgroundColor: '#5C8268',
                  borderRadius: 20,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  borderRadius: 20,
                  overflow: 'hidden',
                }}
              >
                <DesignPlaceholder caption="headshot.jpg" fill="#2D4A6E" bg="#16263D" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
