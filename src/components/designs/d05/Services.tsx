'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D05Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#F6F3EC',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Masthead-style header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            borderTop: '1.5px solid #20201C',
            paddingTop: 20,
            marginBottom: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Newsreader', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(24px,3vw,32px)',
              lineHeight: 1.1,
              color: '#20201C',
              margin: 0,
            }}
          >
            {COPY.svcH2}
          </h2>
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 12,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#8A8276',
              paddingTop: 4,
            }}
          >
            {COPY.svcEyebrow}
          </span>
        </div>

        {/* 4-column row list — typographic table */}
        <div style={{ marginTop: 16 }}>
          {SVCS.map((svc, i) => (
            <motion.div
              key={svc.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 1fr 1.1fr 180px',
                gap: 20,
                alignItems: 'baseline',
                padding: '22px 0',
                borderTop: '1px solid #D9D2C4',
              }}
            >
              <span
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontWeight: 400,
                  fontSize: 34,
                  color: '#B5532F',
                  lineHeight: 1,
                }}
              >
                {svc.n}
              </span>
              <h3
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontWeight: 400,
                  fontSize: 20,
                  color: '#20201C',
                  margin: 0,
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#8A8276',
                  margin: 0,
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#8A8276',
                  textAlign: 'right',
                }}
              >
                {svc.tag}
              </span>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid #D9D2C4' }} />
        </div>
      </div>
    </section>
  )
}
