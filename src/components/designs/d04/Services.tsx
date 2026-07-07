'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D04Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#fff',
        padding: 'clamp(56px,7vw,88px) clamp(20px,5vw,60px) clamp(48px,6vw,72px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: '#5C7A72',
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
              fontSize: 'clamp(26px,3vw,38px)',
              lineHeight: 1.1,
              color: '#0F2A24',
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
              color: '#5C7A72',
              maxWidth: 480,
              margin: '0 auto',
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            {COPY.svcSub}
          </p>
        </div>

        {/* 3-col cards with icon badge */}
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
                backgroundColor: '#F7FBF9',
                borderRadius: 16,
                padding: '26px 24px',
                border: '1px solid #E2EFEA',
                cursor: 'default',
              }}
            >
              {/* Icon badge */}
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 12,
                  backgroundColor: '#DBF0E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: '#14A07A',
                    borderRadius: 4,
                  }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.25,
                  color: '#0F2A24',
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
                  color: '#5C7A72',
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
                  borderRadius: 999,
                  backgroundColor: '#DBF0E8',
                  color: '#0F6B52',
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
