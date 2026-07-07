'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D08Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#FBF7F0',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: '#8A7565',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 10,
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            }}
          >
            {COPY.svcEyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px,3vw,36px)',
              lineHeight: 1.12,
              color: '#3A2E26',
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
              color: '#8A7565',
              maxWidth: 480,
              margin: '0 auto',
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            }}
          >
            {COPY.svcSub}
          </p>
        </div>

        {/* 3-col cards with circular number badge */}
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
                backgroundColor: '#fff',
                borderRadius: 20,
                padding: '26px 24px',
                boxShadow: '0 4px 16px rgba(58,46,38,.06)',
                cursor: 'default',
              }}
            >
              {/* Circular number badge */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: '#FFD3B8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: '#E07856',
                  }}
                >
                  {svc.n}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.25,
                  color: '#3A2E26',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#6A5849',
                  marginBottom: 14,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  margin: '0 0 14px',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontSize: 12,
                  padding: '4px 10px',
                  borderRadius: 999,
                  backgroundColor: '#E0F5F5',
                  color: '#2E8B8B',
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
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
