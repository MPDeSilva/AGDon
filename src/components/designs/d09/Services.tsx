'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D09Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#fff',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: '#5E7BA3',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 10,
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {COPY.svcEyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px,3vw,36px)',
              lineHeight: 1.1,
              color: '#123B7A',
              marginBottom: 14,
              margin: '0 0 14px',
            }}
          >
            {COPY.svcH2}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: '#5E7BA3',
              maxWidth: 480,
              margin: '0 auto',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {COPY.svcSub}
          </p>
        </div>

        {/* 3-col cards — pale blue */}
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
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, boxShadow: '0 16px 30px rgba(47,111,237,.16)' }}
              style={{
                backgroundColor: '#EAF3FC',
                borderRadius: 14,
                padding: '26px 24px',
                boxShadow: '0 2px 8px rgba(47,111,237,.06)',
                cursor: 'default',
                transition: 'box-shadow .2s ease',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#2F6FED',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.n}
              </p>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.25,
                  color: '#123B7A',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: '#5E7BA3',
                  marginBottom: 14,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  margin: '0 0 14px',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontSize: 12,
                  padding: '4px 10px',
                  borderRadius: 8,
                  backgroundColor: 'rgba(47,111,237,.1)',
                  color: '#1957BF',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
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
