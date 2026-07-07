'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D07Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#EFEBE0',
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
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#8A8470',
              marginBottom: 12,
            }}
          >
            {COPY.svcEyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(28px,4vw,40px)',
              lineHeight: 1.1,
              color: '#133A2E',
              margin: 0,
            }}
          >
            {COPY.svcH2}
          </h2>
        </div>

        {/* 2-col row list */}
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
                gridTemplateColumns: '56px 1fr',
                gap: '0 56px',
                padding: '26px 0',
                borderTop: '1px solid #D8D0BE',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 400,
                  fontSize: 34,
                  color: '#C9A24B',
                  lineHeight: 1,
                  paddingTop: 4,
                }}
              >
                {svc.n}
              </span>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 10,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 500,
                      fontSize: 22,
                      color: '#133A2E',
                      margin: 0,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8A8470',
                    }}
                  >
                    {svc.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: '#5A6A60',
                    margin: 0,
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: '1px solid #D8D0BE' }} />
        </div>
      </div>
    </section>
  )
}
