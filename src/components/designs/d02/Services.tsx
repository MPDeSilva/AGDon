'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D02Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#F3E9D7',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: '#9A6A3C',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 12,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {COPY.svcEyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontWeight: 600,
              fontSize: 'clamp(26px,3vw,36px)',
              lineHeight: 1.1,
              color: '#2E2620',
              marginBottom: 16,
              margin: '0 0 16px',
            }}
          >
            {COPY.svcH2}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: '#8C7460',
              maxWidth: 480,
              margin: '0 auto',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {COPY.svcSub}
          </p>
        </div>

        {/* 3-col card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 18,
          }}
        >
          {SVCS.map((svc, i) => (
            <motion.article
              key={svc.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: '#FDF6EC',
                borderRadius: 12,
                padding: '28px 24px',
                border: '1px solid #E4D6BD',
                cursor: 'default',
              }}
            >
              <p
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 600,
                  fontSize: 22,
                  color: '#9A6A3C',
                  marginBottom: 12,
                  margin: '0 0 12px',
                }}
              >
                {svc.n}
              </p>
              <h3
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 600,
                  fontSize: 20,
                  lineHeight: 1.25,
                  color: '#2E2620',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: '#5C4A3A',
                  marginBottom: 14,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  margin: '0 0 14px',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#9A6A3C',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                }}
              >
                {svc.tag}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
