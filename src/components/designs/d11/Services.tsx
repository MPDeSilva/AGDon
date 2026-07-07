'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

const popIn = (delay: number) => ({
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay },
})

export function D11Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#FFF7ED',
        padding: 'clamp(48px,6vw,80px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p
            style={{
              fontSize: 12,
              color: '#4A463E',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 10,
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 700,
            }}
          >
            {COPY.svcEyebrow}
          </p>
          <h2
            style={{
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,3vw,36px)',
              lineHeight: 1.1,
              color: '#20201C',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            {COPY.svcH2}
          </h2>
        </div>

        {/* 3-col tilted cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '22px 20px',
          }}
        >
          {SVCS.map((svc, i) => (
            <motion.article
              key={svc.n}
              {...popIn(i * 0.06)}
              whileHover={{ rotate: 0, y: -6 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: '26px 24px',
                border: '2.5px solid #20201C',
                rotate: i % 2 === 0 ? '-1.4deg' : '1.4deg',
                cursor: 'default',
                transition: 'transform .2s ease, rotate .2s ease',
              }}
            >
              <p
                style={{
                  fontFamily: "'Archivo', 'Inter', sans-serif",
                  fontWeight: 800,
                  fontSize: 24,
                  color: '#20201C',
                  marginBottom: 4,
                  margin: '0 0 4px',
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
                  color: '#20201C',
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
                  color: '#4A463E',
                  marginBottom: 14,
                  fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                  margin: '0 0 14px',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  fontSize: 11,
                  padding: '4px 10px',
                  borderRadius: 999,
                  backgroundColor: '#FFCF56',
                  color: '#20201C',
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
