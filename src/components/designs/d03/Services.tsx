'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D03Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#FAF9F6',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#6B6B6B',
              marginBottom: 12,
            }}
          >
            {COPY.svcEyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Crimson Pro', Georgia, serif",
              fontWeight: 300,
              fontSize: 'clamp(26px,3vw,38px)',
              lineHeight: 1.12,
              color: '#1A1A1A',
              margin: 0,
            }}
          >
            {COPY.svcH2}
          </h2>
        </div>

        {/* Numbered row list */}
        <div>
          {SVCS.map((svc, i) => (
            <motion.div
              key={svc.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr 200px',
                gap: 28,
                alignItems: 'baseline',
                padding: '26px 8px',
                borderTop: '1px solid #E0DDD6',
              }}
            >
              <span
                style={{
                  fontFamily: "'Crimson Pro', Georgia, serif",
                  fontWeight: 300,
                  fontSize: 30,
                  color: '#B7942F',
                  lineHeight: 1,
                }}
              >
                {svc.n}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "'Crimson Pro', Georgia, serif",
                    fontWeight: 500,
                    fontSize: 22,
                    color: '#1A1A1A',
                    marginBottom: 8,
                    margin: '0 0 8px',
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: '#6B6B6B',
                    margin: 0,
                  }}
                >
                  {svc.desc}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 11,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6B6B6B',
                  textAlign: 'right',
                }}
              >
                {svc.tag}
              </span>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid #E0DDD6' }} />
        </div>
      </div>
    </section>
  )
}
