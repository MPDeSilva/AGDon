'use client'

import { motion } from 'motion/react'
import { DesignPlaceholder } from '../shared/DesignPlaceholder'
import { COPY } from '../shared/content'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export function D05Hero() {
  return (
    <section
      style={{
        backgroundColor: '#F6F3EC',
        color: '#20201C',
        padding: '0 clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Meta row above headline */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 'clamp(32px,4vw,48px)',
            paddingBottom: 16,
            borderBottom: '1px solid #D9D2C4',
            marginBottom: 40,
          }}
        >
          <motion.span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: '#B5532F',
            }}
            {...fadeUp(0)}
          >
            {COPY.eyebrow}
          </motion.span>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 12,
              letterSpacing: '0.08em',
              color: '#8A8276',
            }}
          >
            Est. · ACA · ICAEW
          </span>
        </div>

        {/* Asymmetric headline grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.45fr .9fr',
            gap: 'clamp(24px,4vw,48px)',
            alignItems: 'flex-end',
            paddingBottom: 'clamp(32px,4vw,56px)',
          }}
        >
          {/* Big display H1 */}
          <motion.h1
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(44px,7vw,76px)',
              lineHeight: 0.98,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
            {...fadeUp(0.08)}
          >
            {COPY.h1a}{' '}
            <em style={{ color: '#B5532F', fontStyle: 'italic' }}>{COPY.h1b}</em>
          </motion.h1>

          {/* Right: body + CTAs */}
          <div>
            <motion.p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: 17,
                lineHeight: 1.65,
                color: '#4A463E',
                marginBottom: 28,
              }}
              {...fadeUp(0.16)}
            >
              {COPY.sub}
            </motion.p>
            <motion.div
              style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' as const }}
              {...fadeUp(0.24)}
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                style={{
                  backgroundColor: '#20201C',
                  color: '#F6F3EC',
                  padding: '13px 24px',
                  borderRadius: 4,
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
                whileHover={{ color: '#20201C' }}
                style={{
                  color: '#B5532F',
                  textDecoration: 'underline',
                  textDecorationColor: '#B5532F',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                {COPY.cta2}
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Full-width image strip */}
        <div
          style={{
            width: '100%',
            aspectRatio: '21/6',
            borderRadius: 4,
            overflow: 'hidden',
            marginBottom: 0,
          }}
        >
          <DesignPlaceholder
            caption="wide-banner.jpg — office / workspace editorial photo"
            fill="#4A463E"
            bg="#D9D2C4"
          />
        </div>
      </div>
    </section>
  )
}
