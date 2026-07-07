'use client'

import { motion } from 'motion/react'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D03Hero() {
  return (
    <section
      style={{
        backgroundColor: '#1A1A1A',
        color: '#FAF9F6',
        padding: 'clamp(60px,8vw,84px) clamp(20px,5vw,60px)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        {/* Eyebrow */}
        <motion.p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 12,
            letterSpacing: '0.28em',
            textTransform: 'uppercase' as const,
            color: '#B7942F',
            marginBottom: 32,
          }}
          {...fadeUp(0)}
        >
          {COPY.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          style={{
            fontFamily: "'Crimson Pro', Georgia, serif",
            fontWeight: 300,
            fontSize: 'clamp(42px,6vw,66px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginBottom: 24,
            margin: '0 0 24px',
          }}
          {...fadeUp(0.08)}
        >
          {COPY.h1a}
          <br />
          <em style={{ color: '#B7942F', fontStyle: 'italic' }}>{COPY.h1b}</em>
        </motion.h1>

        {/* Body */}
        <motion.p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(250,249,246,.72)',
            maxWidth: 520,
            margin: '0 auto 40px',
          }}
          {...fadeUp(0.16)}
        >
          {COPY.sub}
        </motion.p>

        {/* Gold divider */}
        <motion.div
          style={{
            width: 40,
            height: 1,
            backgroundColor: '#B7942F',
            margin: '0 auto 32px',
          }}
          {...fadeUp(0.2)}
        />

        {/* CTAs */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' as const }}
          {...fadeUp(0.24)}
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            style={{
              backgroundColor: '#B7942F',
              color: '#1A1A1A',
              padding: '14px 28px',
              borderRadius: 4,
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.06em',
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
            whileTap={{ y: 0 }}
            style={{
              color: '#FAF9F6',
              padding: '14px 28px',
              borderRadius: 4,
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.06em',
              textTransform: 'uppercase' as const,
              display: 'inline-block',
              border: '1px solid rgba(250,249,246,.35)',
              cursor: 'pointer',
            }}
          >
            {COPY.cta2}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
