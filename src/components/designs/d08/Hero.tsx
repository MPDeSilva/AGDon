'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D08Hero() {
  return (
    <section
      style={{
        backgroundColor: '#FBF7F0',
        color: '#3A2E26',
      }}
    >
      {/* Peach hero band */}
      <div
        style={{
          backgroundColor: '#FFE7D6',
          padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,60px)',
        }}
      >
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr .9fr',
              gap: 'clamp(32px,4vw,50px)',
              alignItems: 'center',
            }}
          >
            {/* Left copy */}
            <div>
              <motion.div style={{ marginBottom: 24 }} {...fadeUp(0)}>
                <span
                  style={{
                    backgroundColor: '#FFD3B8',
                    color: '#E07856',
                    fontSize: 14,
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontWeight: 600,
                    borderRadius: 999,
                    padding: '8px 16px',
                    display: 'inline-block',
                  }}
                >
                  👋 {COPY.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(36px,5vw,52px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  marginBottom: 20,
                  margin: '0 0 20px',
                }}
                {...fadeUp(0.08)}
              >
                {COPY.h1comma}
                <br />
                <span style={{ color: '#E07856' }}>{COPY.h1b}</span>
              </motion.h1>

              <motion.p
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: '#6A5849',
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
                    backgroundColor: '#E07856',
                    color: '#fff',
                    padding: '13px 22px',
                    borderRadius: 999,
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
                    color: '#E07856',
                    padding: '13px 22px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    display: 'inline-block',
                    border: '2px solid #E07856',
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
                      color: '#6A5849',
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right visual — circular portrait with floating card */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: 300 }}>
                {/* Circular portrait */}
                <div
                  style={{
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '6px solid #fff',
                    boxShadow: '0 8px 32px rgba(58,46,38,.12)',
                  }}
                >
                  <DesignPlaceholder caption="headshot.jpg" fill="#8A7565" bg="#FFD3B8" />
                </div>

                {/* Floating card overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: -16,
                    left: -24,
                    backgroundColor: '#fff',
                    borderRadius: 14,
                    padding: '12px 16px',
                    boxShadow: '0 8px 24px rgba(58,46,38,.14)',
                    minWidth: 160,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#3A2E26',
                      marginBottom: 4,
                      margin: '0 0 4px',
                    }}
                  >
                    Hi, I&#39;m Danuka 👋
                  </p>
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                      fontSize: 12,
                      color: '#2E8B8B',
                      margin: 0,
                    }}
                  >
                    ACA · ICAEW Chartered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
