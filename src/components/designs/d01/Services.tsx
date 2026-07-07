'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D01Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#F4F1EA',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 40,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 13,
                color: '#5A7394',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: 8,
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              {COPY.svcEyebrow}
            </p>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(28px,3vw,38px)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: '#16263D',
                margin: 0,
              }}
            >
              {COPY.svcH2}
            </h2>
          </div>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: '#5A7394',
              maxWidth: 340,
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
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: '26px 24px',
                borderTop: '3px solid #5C8268',
                boxShadow: '0 2px 8px rgba(22,38,61,.06)',
                cursor: 'default',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#5A7394',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.n}
              </p>
              <h3
                style={{
                  fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  lineHeight: 1.25,
                  color: '#16263D',
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
                  color: '#5A7394',
                  marginBottom: 16,
                  fontFamily: "'Inter', system-ui, sans-serif",
                  margin: '0 0 16px',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontSize: 12,
                  padding: '4px 10px',
                  borderRadius: 6,
                  backgroundColor: '#E8E3D8',
                  color: '#16263D',
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
