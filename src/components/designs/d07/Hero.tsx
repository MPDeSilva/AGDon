'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D07Hero() {
  return (
    <section
      style={{
        backgroundColor: '#133A2E',
        color: '#EFEBE0',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr .85fr',
            gap: 'clamp(32px,4vw,56px)',
            alignItems: 'center',
          }}
        >
          {/* Left copy */}
          <div>
            {/* Small rule + eyebrow row */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}
              {...fadeUp(0)}
            >
              <div style={{ width: 38, height: 1, backgroundColor: '#C9A24B' }} />
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase' as const,
                  color: '#C9A24B',
                }}
              >
                {COPY.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontSize: 'clamp(42px,5.5vw,70px)',
                lineHeight: 1.02,
                letterSpacing: '-0.01em',
                marginBottom: 24,
                margin: '0 0 24px',
              }}
              {...fadeUp(0.08)}
            >
              {COPY.h1a}
              <br />
              <em style={{ color: '#C9A24B', fontStyle: 'italic' }}>{COPY.h1b}</em>
            </motion.h1>

            <motion.p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 18,
                lineHeight: 1.62,
                color: 'rgba(239,235,224,.78)',
                marginBottom: 36,
                maxWidth: 480,
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
                  backgroundColor: '#C9A24B',
                  color: '#133A2E',
                  padding: '14px 26px',
                  borderRadius: 2,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
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
                  color: '#C9A24B',
                  padding: '14px 26px',
                  borderRadius: 2,
                  textDecoration: 'none',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  display: 'inline-block',
                  border: '1.5px solid #C9A24B',
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
                    color: 'rgba(239,235,224,.65)',
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual — brass-framed portrait */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                padding: 14,
                border: '1px solid #C9A24B',
                borderRadius: 2,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 'clamp(220px,25vw,320px)',
                  aspectRatio: '4/5',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <DesignPlaceholder caption="headshot.jpg" fill="#5A6A60" bg="#133A2E" />
              </div>
              {/* Small ACA caption */}
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A24B',
                  textAlign: 'center',
                  marginTop: 10,
                  marginBottom: 0,
                }}
              >
                ACA · ICAEW Chartered
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
