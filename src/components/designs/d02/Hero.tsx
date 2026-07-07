'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D02Hero() {
  return (
    <section
      style={{
        backgroundColor: '#F3E9D7',
        color: '#2E2620',
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
            <motion.div style={{ marginBottom: 24 }} {...fadeUp(0)}>
              <span
                style={{
                  backgroundColor: '#9A6A3C',
                  color: '#fff',
                  fontSize: 12,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                  borderRadius: 13,
                  padding: '7px 13px',
                  display: 'inline-block',
                }}
              >
                {COPY.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "'Lora', Georgia, serif",
                fontWeight: 600,
                fontSize: 'clamp(38px,5vw,58px)',
                lineHeight: 1.06,
                letterSpacing: '-0.02em',
                marginBottom: 24,
                margin: '0 0 24px',
              }}
              {...fadeUp(0.08)}
            >
              {COPY.h1a}
              <br />
              <span style={{ color: '#9A6A3C' }}>{COPY.h1b}</span>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 19,
                lineHeight: 1.6,
                color: '#5C4A3A',
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
                  backgroundColor: '#9A6A3C',
                  color: '#fff',
                  padding: '15px 24px',
                  borderRadius: 13,
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
                  color: '#9A6A3C',
                  padding: '15px 24px',
                  borderRadius: 13,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  display: 'inline-block',
                  border: '1.5px solid #C9B596',
                  cursor: 'pointer',
                }}
              >
                {COPY.cta2}
              </motion.a>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              {[COPY.trust1, COPY.trust2].map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 14,
                    color: '#5C4A3A',
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual — square with offset bronze backing */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 380 }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '-16px -16px 16px 16px',
                  backgroundColor: '#B8854F',
                  borderRadius: 24,
                }}
              />
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '1/1',
                  borderRadius: 24,
                  overflow: 'hidden',
                }}
              >
                <DesignPlaceholder caption="headshot.jpg" fill="#5C4A3A" bg="#E8D4B4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
