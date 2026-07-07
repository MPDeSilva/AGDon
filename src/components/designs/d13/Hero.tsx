'use client'

import { motion } from 'motion/react'
import { COPY } from '../shared/content'

export function D13Hero() {
  return (
    <section
      style={{
        backgroundColor: '#FFE156',
        color: '#141414',
        padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,60px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Halftone dot circle — spinning continuously */}
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: -20,
          right: 40,
          width: 140,
          height: 140,
          borderRadius: '50%',
          background: 'repeating-radial-gradient(circle, #141414 0 3px, transparent 3px 14px)',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative' }}>
        {/* Tilted eyebrow pill */}
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#FF5D8F',
              color: '#fff',
              fontSize: 12,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              borderRadius: 999,
              padding: '7px 16px',
              border: '2.5px solid #141414',
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 700,
              transform: 'rotate(-2deg)',
            }}
          >
            {COPY.eyebrow}
          </span>
        </div>

        {/* 3-line uppercase headline with sticker block */}
        <h1
          style={{
            fontFamily: "'Archivo', 'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(44px,7vw,78px)',
            lineHeight: 0.96,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase' as const,
            marginBottom: 40,
            margin: '0 0 40px',
          }}
        >
          Chartered
          <br />
          expertise.
          <br />
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#3A86FF',
              color: '#fff',
              padding: '0 14px',
              borderRadius: 4,
              border: '2.5px solid #141414',
              transform: 'rotate(-1deg)',
            }}
          >
            Freelance rates.
          </span>
        </h1>

        {/* Body + CTA on same row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(24px,4vw,48px)',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 1.55,
              color: 'rgba(20,20,20,.75)',
              maxWidth: 500,
              margin: 0,
            }}
          >
            {COPY.sub}
          </p>

          <motion.a
            href="#contact"
            whileHover={{ x: 4, y: 4, boxShadow: '0 0 0 transparent' }}
            whileTap={{ x: 4, y: 4, boxShadow: '0 0 0 transparent' }}
            style={{
              display: 'inline-block',
              backgroundColor: '#3A86FF',
              color: '#fff',
              padding: '16px 28px',
              textDecoration: 'none',
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 15,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.04em',
              cursor: 'pointer',
              border: '2.5px solid #141414',
              borderRadius: 4,
              boxShadow: '4px 4px 0 #141414',
              transition: 'transform .15s ease, box-shadow .15s ease',
              flexShrink: 0,
            }}
          >
            {COPY.cta1}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
