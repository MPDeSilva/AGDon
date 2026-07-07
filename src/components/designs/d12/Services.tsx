'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D12Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#F7FBF9',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: '#7C9D91',
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
              fontSize: 'clamp(26px,3vw,34px)',
              lineHeight: 1.15,
              color: '#22423A',
              marginBottom: 14,
              margin: '0 0 14px',
            }}
          >
            {COPY.svcH2}
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: '#7C9D91',
              maxWidth: 480,
              margin: '0 auto',
              fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
            }}
          >
            {COPY.svcSub}
          </p>
        </div>

        {/* 3-col cards */}
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
              transition={{ duration: 0.7, delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: '0 16px 28px rgba(34,66,58,.10)' }}
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: '26px 24px',
                boxShadow: '0 2px 10px rgba(34,66,58,.05)',
                cursor: 'default',
                transition: 'box-shadow .2s ease',
              }}
            >
              {/* Rounded-square icon badge */}
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 11,
                  backgroundColor: '#DCF2E9',
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
                    fontSize: 13,
                    color: '#6FC7A8',
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
                  color: '#22423A',
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
                  color: '#5A7A70',
                  marginBottom: 14,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  margin: '0 0 14px',
                }}
              >
                {svc.desc}
              </p>
              {/* Blush-pink audience tag */}
              <span
                style={{
                  fontSize: 12,
                  padding: '4px 10px',
                  borderRadius: 999,
                  backgroundColor: '#F8E3EA',
                  color: '#B5507A',
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
