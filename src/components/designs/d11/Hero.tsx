'use client'

import { motion } from 'motion/react'
import { COPY } from '../shared/content'

const MARQUEE_ITEMS = [
  'Bookkeeping & VAT',
  'Year-End Accounts',
  'Self-Assessment Returns',
  'Business Startup Advice',
  'Tax Advice',
  'Free Guidance',
]

export function D11Hero() {
  const marqueeText = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
    .map((item) => `${item} ✦`)
    .join('  ')

  return (
    <section
      style={{
        background: 'linear-gradient(120deg, #FF7A6B 0%, #FFCF56 45%, #5FA8FF 100%)',
        color: '#20201C',
        paddingBottom: 0,
        overflow: 'hidden',
      }}
    >
      {/* Hero copy */}
      <div
        style={{
          padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,60px) 40px',
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Tilted eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 28, display: 'inline-block' }}
        >
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#20201C',
              color: '#fff',
              fontSize: 12,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
              borderRadius: 999,
              padding: '7px 16px',
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 700,
            }}
          >
            {COPY.eyebrow}
          </span>
        </motion.div>

        {/* Headline with sticker second line */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          style={{
            fontFamily: "'Archivo', 'Inter', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(40px,7vw,74px)',
            lineHeight: 0.98,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase' as const,
            marginBottom: 28,
            margin: '0 0 28px',
          }}
        >
          Chartered expertise.{' '}
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#20201C',
              padding: '0 14px',
              borderRadius: 8,
              transform: 'rotate(-1deg)',
              boxShadow: '4px 4px 0 #20201C',
              whiteSpace: 'nowrap',
            }}
          >
            Freelance rates.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          style={{
            fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            fontSize: 18,
            lineHeight: 1.6,
            color: 'rgba(32,32,28,.80)',
            maxWidth: 600,
            margin: '0 auto 36px',
          }}
        >
          {COPY.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' as const }}
        >
          <motion.a
            href="#contact"
            whileHover={{ x: 2, y: 2, boxShadow: '0 0 0 transparent' }}
            style={{
              backgroundColor: '#20201C',
              color: '#fff',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.04em',
              display: 'inline-block',
              cursor: 'pointer',
              border: '2px solid #20201C',
              boxShadow: '4px 4px 0 #20201C',
              transition: 'box-shadow .15s ease, transform .15s ease',
            }}
          >
            {COPY.cta1}
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ x: 2, y: 2, rotate: -2 }}
            style={{
              color: '#20201C',
              padding: '14px 28px',
              borderRadius: 999,
              textDecoration: 'none',
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.04em',
              display: 'inline-block',
              border: '2px solid #20201C',
              cursor: 'pointer',
              transition: 'transform .15s ease',
            }}
          >
            {COPY.cta2}
          </motion.a>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <div
        style={{
          backgroundColor: '#FFCF56',
          borderTop: '2.5px solid #20201C',
          overflow: 'hidden',
          paddingTop: 12,
          paddingBottom: 12,
          marginTop: 40,
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            gap: '0',
          }}
        >
          {[0, 1].map((n) => (
            <span
              key={n}
              style={{
                fontFamily: "'Archivo', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: '#20201C',
                paddingRight: 48,
                flexShrink: 0,
              }}
            >
              {marqueeText}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
