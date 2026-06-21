'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { faqIds } from '@/lib/content'

export function Faq() {
  const t = useTranslations('faq')
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section
      id="faq"
      className="py-20 px-4"
      style={{ backgroundColor: 'var(--vg-bg)' }}
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--vg-brand)' }}
          >
            {t('eyebrow')}
          </p>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: 'var(--vg-font-display)',
              color: 'var(--vg-ink)',
              letterSpacing: 'var(--vg-display-spacing)',
              fontWeight: 'var(--vg-h1-weight)',
            }}
          >
            {t('headline')}
          </h2>
        </div>

        <dl className="space-y-3">
          {faqIds.map((id) => {
            const isOpen = open === id
            return (
              <div
                key={id}
                className="overflow-hidden"
                style={{
                  backgroundColor: 'var(--vg-surface)',
                  borderRadius: 'var(--vg-radius)',
                  border: `1px solid ${isOpen ? 'var(--vg-brand)' : 'var(--vg-line)'}`,
                }}
              >
                <dt>
                  <button
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-medium transition-colors"
                    style={{ color: 'var(--vg-ink)' }}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${id}`}
                    id={`faq-question-${id}`}
                    onClick={() => setOpen(isOpen ? null : id)}
                  >
                    <span>{t(`${id}.question`)}</span>
                    <svg
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: 'var(--vg-brand)',
                      }}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${id}`}
                  role="region"
                  aria-labelledby={`faq-question-${id}`}
                  hidden={!isOpen}
                >
                  <p
                    className="px-6 pb-5 text-sm leading-relaxed"
                    style={{ color: 'var(--vg-ink-soft)' }}
                  >
                    {t(`${id}.answer`)}
                  </p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
