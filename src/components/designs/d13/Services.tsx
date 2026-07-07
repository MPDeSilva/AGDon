'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D13Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#fff',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Brutalist heading row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderBottom: '2.5px solid #141414',
            paddingBottom: 16,
            marginBottom: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px,3vw,34px)',
              lineHeight: 1.1,
              textTransform: 'uppercase',
              color: '#141414',
              margin: 0,
            }}
          >
            {COPY.svcH2}
          </h2>
          <span
            style={{
              fontFamily: 'ui-monospace, Menlo, monospace',
              fontSize: 11,
              letterSpacing: '0.08em',
              color: '#6B6B6B',
            }}
          >
            // {COPY.svcEyebrow}
          </span>
        </div>

        {/* 3-col pale yellow cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 18,
            marginTop: 24,
          }}
        >
          {SVCS.map((svc, i) => (
            <motion.article
              key={svc.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -8, rotate: -1.5, transition: { type: 'spring', stiffness: 400, damping: 14 } }}
              style={{
                backgroundColor: '#FFF3B0',
                borderRadius: 10,
                padding: '26px 24px',
                border: '2.5px solid #141414',
                cursor: 'default',
              }}
            >
              <p
                style={{
                  fontFamily: "'Archivo', 'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 28,
                  color: '#3A86FF',
                  marginBottom: 8,
                  margin: '0 0 8px',
                }}
              >
                {svc.n}
              </p>
              <h3
                style={{
                  fontFamily: "'Archivo', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  lineHeight: 1.25,
                  color: '#141414',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Archivo', 'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: 'rgba(20,20,20,.70)',
                  marginBottom: 14,
                  margin: '0 0 14px',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontSize: 11,
                  padding: '4px 10px',
                  borderRadius: 4,
                  border: '1.5px solid #141414',
                  backgroundColor: 'transparent',
                  color: '#141414',
                  fontFamily: "'Archivo', 'Inter', sans-serif",
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
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
