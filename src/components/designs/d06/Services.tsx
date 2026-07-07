'use client'

import { motion } from 'motion/react'
import { COPY, SVCS } from '../shared/content'

export function D06Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#ECEAE3',
        color: '#20201C',
        padding: 'clamp(40px,6vw,72px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        {/* Brutalist heading row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderBottom: '2px solid #20201C',
            paddingBottom: 16,
            marginBottom: 0,
          }}
        >
          <h2
            style={{
              fontFamily: "'Archivo', 'Inter', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(26px,3vw,38px)',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#20201C',
              margin: 0,
            }}
          >
            Services
            <br />
            built for you
          </h2>
          <span
            style={{
              fontFamily: 'ui-monospace, Menlo, monospace',
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#8A8276',
            }}
          >
            // {COPY.svcEyebrow}
          </span>
        </div>

        {/* Brutalist bordered grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            borderLeft: '2px solid #20201C',
            borderBottom: '2px solid #20201C',
          }}
        >
          {SVCS.map((svc, i) => (
            <motion.article
              key={svc.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                padding: '28px 24px',
                borderRight: '2px solid #20201C',
                borderTop: '2px solid #20201C',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Archivo', 'Inter', sans-serif",
                    fontWeight: 800,
                    fontSize: 40,
                    color: '#F0531C',
                    lineHeight: 1,
                  }}
                >
                  {svc.n}
                </span>
                <span
                  style={{
                    fontFamily: 'ui-monospace, Menlo, monospace',
                    fontSize: 10,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#8A8276',
                  }}
                >
                  {svc.tag}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Archivo', 'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  lineHeight: 1.2,
                  color: '#20201C',
                  marginBottom: 10,
                  margin: '0 0 10px',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#4A463E',
                  margin: 0,
                }}
              >
                {svc.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
