'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay },
})

export function D10Hero() {
  return (
    <section
      style={{
        backgroundColor: '#F5F1FF',
        color: '#2A1854',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background gradient blobs */}
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, 26, -18, 0],
          y: [0, -18, 16, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: -60,
          left: -40,
          width: 340,
          height: 340,
          borderRadius: '50%',
          backgroundColor: '#C9B6FF',
          filter: 'blur(52px)',
          opacity: 0.55,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{
          x: [0, -18, 26, 0],
          y: [0, 16, -18, 0],
          scale: [1, 0.95, 1.08, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: 80,
          right: -40,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: '#FFB3DA',
          filter: 'blur(55px)',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
        {/* Glassmorphic eyebrow pill */}
        <motion.div style={{ marginBottom: 28 }} {...fadeUp(0)}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              color: '#7C5CFC',
              fontSize: 12,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              borderRadius: 999,
              padding: '7px 16px',
              border: '1px solid rgba(124,92,252,.18)',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            {COPY.eyebrow}
          </span>
        </motion.div>

        {/* Headline with gradient second line */}
        <motion.h1
          style={{
            fontFamily: "'Space Grotesk', 'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(36px,5vw,58px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 24,
            margin: '0 0 24px',
          }}
          {...fadeUp(0.08)}
        >
          {COPY.h1a}
          <br />
          <span
            style={{
              background: 'linear-gradient(90deg,#7C5CFC,#FF5FA2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {COPY.h1b}
          </span>
        </motion.h1>

        <motion.p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 18,
            lineHeight: 1.6,
            color: '#5C4A85',
            maxWidth: 540,
            margin: '0 auto 36px',
          }}
          {...fadeUp(0.16)}
        >
          {COPY.sub}
        </motion.p>

        <motion.div
          style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' as const, marginBottom: 60 }}
          {...fadeUp(0.24)}
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ y: 0 }}
            style={{
              background: 'linear-gradient(90deg,#7C5CFC,#FF5FA2,#7C5CFC)',
              backgroundSize: '200% auto',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              display: 'inline-block',
              cursor: 'pointer',
              animation: 'gradientShift 4s linear infinite',
            }}
          >
            {COPY.cta1}
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            style={{
              color: '#7C5CFC',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 16,
              display: 'inline-block',
              border: '2px solid #7C5CFC',
              cursor: 'pointer',
            }}
          >
            {COPY.cta2}
          </motion.a>
        </motion.div>

        {/* Glass dashboard panel */}
        <div
          style={{
            background: 'rgba(255,255,255,.55)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(124,92,252,.2)',
            borderRadius: 20,
            aspectRatio: '16/6.5',
            overflow: 'hidden',
          }}
        >
          <DesignPlaceholder caption="app-preview.png — dashboard screenshot" fill="#7C5CFC" bg="#EAE0FF" />
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
