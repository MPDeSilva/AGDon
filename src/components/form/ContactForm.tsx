'use client'

import { useState, useRef, useId } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { serviceIds, businessTypeIds } from '@/lib/content'
import type { ContactFormErrors } from '@/lib/schema'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1" style={{ color: 'var(--vg-ink)' }}>
        {label}
        {required && <span aria-hidden="true" className="ml-1" style={{ color: 'var(--color-error, #dc2626)' }}>*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs font-medium" style={{ color: 'var(--color-error, #dc2626)' }} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const INPUT_BASE =
  'w-full px-3 py-2 text-sm border transition-colors focus:outline-none focus:ring-2'

function inputStyle(error?: string) {
  return {
    borderColor: error ? 'var(--color-error, #dc2626)' : 'var(--vg-line)',
    borderRadius: 'var(--vg-radius-sm)',
    backgroundColor: 'var(--vg-surface)',
    color: 'var(--vg-ink)',
  }
}

export function ContactForm() {
  const t = useTranslations('contact')
  const locale = useLocale()
  const formRef = useRef<HTMLFormElement>(null)
  const errorSummaryRef = useRef<HTMLDivElement>(null)
  const liveRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number>(Date.now())

  const [state, setState] = useState<FormState>('idle')
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const uid = useId()
  const id = (name: string) => `${uid}-${name}`

  function toggleService(serviceId: string) {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((s) => s !== serviceId) : [...prev, serviceId],
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (state === 'submitting') return

    const form = formRef.current!
    const data = new FormData(form)

    const payload = {
      name: (data.get('name') as string) ?? '',
      email: (data.get('email') as string) ?? '',
      phone: (data.get('phone') as string) || undefined,
      businessType: (data.get('businessType') as string) ?? '',
      services: selectedServices,
      turnover: (data.get('turnover') as string) || undefined,
      contactMethod: (data.get('contactMethod') as string) ?? '',
      preferredTime: (data.get('preferredTime') as string) || undefined,
      message: (data.get('message') as string) || undefined,
      consent: data.get('consent') === 'on',
      honeypot: (data.get('honeypot') as string) ?? '',
      turnstileToken: (data.get('cf-turnstile-response') as string) ?? 'dev-bypass',
      locale,
      submittedAt: Date.now(),
    }

    setState('submitting')
    setErrors({})

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json() as { success?: boolean; errors?: ContactFormErrors; message?: string }

      if (res.ok && json.success) {
        setState('success')
        form.reset()
        setSelectedServices([])
        if (liveRef.current) liveRef.current.textContent = t('form.successTitle')
      } else if (res.status === 400 && json.errors) {
        setState('idle')
        setErrors(json.errors)
        setTimeout(() => errorSummaryRef.current?.focus(), 50)
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div
        className="p-8 text-center"
        style={{
          backgroundColor: 'var(--vg-surface)',
          borderRadius: 'var(--vg-radius)',
          border: '2px solid var(--color-success, #16a34a)',
        }}
        role="status"
      >
        <div className="text-5xl mb-4" aria-hidden="true">✅</div>
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--vg-ink)', fontFamily: 'var(--vg-font-display)' }}>
          {t('form.successTitle')}
        </h3>
        <p style={{ color: 'var(--vg-ink-soft)' }}>{t('form.successBody')}</p>
      </div>
    )
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact enquiry form"
      className="space-y-5"
      style={{
        backgroundColor: 'var(--vg-bg)',
        borderRadius: 'var(--vg-radius)',
        padding: '1.5rem',
        border: '1px solid var(--vg-line)',
      }}
    >
      {/* Live region for screen reader announcements */}
      <div ref={liveRef} aria-live="polite" aria-atomic="true" className="sr-only" />

      {/* Error summary */}
      {hasErrors && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          aria-live="assertive"
          className="p-4 text-sm"
          style={{
            backgroundColor: '#fef2f2',
            borderRadius: 'var(--vg-radius-sm)',
            border: '1px solid var(--color-error, #dc2626)',
            color: 'var(--color-error, #dc2626)',
          }}
        >
          <p className="font-semibold mb-2">{t('form.errorSummaryTitle')}</p>
          <ul className="list-disc ml-4 space-y-1">
            {Object.entries(errors).map(([field, msg]) => msg && (
              <li key={field}><a href={`#${id(field)}`}>{msg}</a></li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot — must stay empty */}
      <div aria-hidden="true" className="absolute -left-[9999px] opacity-0 pointer-events-none" tabIndex={-1}>
        <label htmlFor={id('honeypot')}>Leave this empty</label>
        <input type="text" id={id('honeypot')} name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id={id('name')} label={t('form.name')} error={errors.name} required>
          <input
            type="text"
            id={id('name')}
            name="name"
            className={INPUT_BASE}
            style={inputStyle(errors.name)}
            placeholder={t('form.namePlaceholder')}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? `${id('name')}-error` : undefined}
            required
          />
        </Field>

        <Field id={id('email')} label={t('form.email')} error={errors.email} required>
          <input
            type="email"
            id={id('email')}
            name="email"
            className={INPUT_BASE}
            style={inputStyle(errors.email)}
            placeholder={t('form.emailPlaceholder')}
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${id('email')}-error` : undefined}
            required
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id={id('phone')} label={t('form.phone')} error={errors.phone}>
          <input
            type="tel"
            id={id('phone')}
            name="phone"
            className={INPUT_BASE}
            style={inputStyle(errors.phone)}
            placeholder={t('form.phonePlaceholder')}
            autoComplete="tel"
          />
        </Field>

        <Field id={id('businessType')} label={t('form.businessType')} error={errors.businessType} required>
          <select
            id={id('businessType')}
            name="businessType"
            className={INPUT_BASE}
            style={inputStyle(errors.businessType)}
            aria-invalid={!!errors.businessType}
            aria-describedby={errors.businessType ? `${id('businessType')}-error` : undefined}
            required
          >
            <option value="">{t('form.businessTypePlaceholder')}</option>
            {businessTypeIds.map((bt) => (
              <option key={bt} value={bt}>{t(`businessTypes.${bt}`)}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Services checkboxes */}
      <fieldset>
        <legend className="block text-sm font-medium mb-2" style={{ color: 'var(--vg-ink)' }}>
          {t('form.services')} <span aria-hidden="true" style={{ color: 'var(--color-error, #dc2626)' }}>*</span>
        </legend>
        {errors.services && (
          <p id={`${id('services')}-error`} className="text-xs font-medium mb-2" style={{ color: 'var(--color-error, #dc2626)' }} role="alert">
            {errors.services}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {serviceIds.map((sid) => (
            <label
              key={sid}
              className="flex items-start gap-2 text-sm cursor-pointer p-2 rounded transition-colors hover:bg-[var(--vg-surface)]"
            >
              <input
                type="checkbox"
                value={sid}
                checked={selectedServices.includes(sid)}
                onChange={() => toggleService(sid)}
                className="mt-0.5 accent-[var(--vg-brand)]"
              />
              <span style={{ color: 'var(--vg-ink-soft)' }}>{t(`services.${sid}`)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id={id('turnover')} label={t('form.turnover')} error={errors.turnover}>
          <select
            id={id('turnover')}
            name="turnover"
            className={INPUT_BASE}
            style={inputStyle(errors.turnover)}
          >
            <option value="">{t('form.turnoverPlaceholder')}</option>
            {(['under-30k', '30k-90k', '90k-250k', '250k-plus', 'prefer-not-to-say'] as const).map((v) => (
              <option key={v} value={v}>{t(`turnoverBands.${v}`)}</option>
            ))}
          </select>
        </Field>

        <Field id={id('contactMethod')} label={t('form.contactMethod')} error={errors.contactMethod} required>
          <select
            id={id('contactMethod')}
            name="contactMethod"
            className={INPUT_BASE}
            style={inputStyle(errors.contactMethod)}
            aria-invalid={!!errors.contactMethod}
            aria-describedby={errors.contactMethod ? `${id('contactMethod')}-error` : undefined}
            required
          >
            <option value=""></option>
            {(['email', 'phone', 'whatsapp'] as const).map((v) => (
              <option key={v} value={v}>{t(`contactMethods.${v}`)}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field id={id('preferredTime')} label={t('form.preferredTime')} error={errors.preferredTime}>
        <select
          id={id('preferredTime')}
          name="preferredTime"
          className={INPUT_BASE}
          style={inputStyle(errors.preferredTime)}
        >
          <option value="">{t('form.preferredTimePlaceholder')}</option>
          {(['morning', 'afternoon', 'evening'] as const).map((v) => (
            <option key={v} value={v}>{t(`preferredTimes.${v}`)}</option>
          ))}
        </select>
      </Field>

      <Field id={id('message')} label={t('form.message')} error={errors.message}>
        <textarea
          id={id('message')}
          name="message"
          rows={4}
          maxLength={2000}
          className={INPUT_BASE}
          style={inputStyle(errors.message)}
          placeholder={t('form.messagePlaceholder')}
        />
      </Field>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer text-sm" style={{ color: 'var(--vg-ink-soft)' }}>
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 accent-[var(--vg-brand)]"
            required
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? `${id('consent')}-error` : undefined}
          />
          <span>{t('form.consent')}</span>
        </label>
        {errors.consent && (
          <p id={`${id('consent')}-error`} className="mt-1 text-xs font-medium" style={{ color: 'var(--color-error, #dc2626)' }} role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Turnstile placeholder — in production: import Turnstile from 'react-turnstile' */}
      <div
        className="p-3 text-xs text-center rounded"
        style={{ backgroundColor: 'var(--vg-surface-2)', color: 'var(--vg-muted)', borderRadius: 'var(--vg-radius-sm)' }}
      >
        🔒 {t('form.turnstileLabel')} (Cloudflare Turnstile)
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'submitting'}
        aria-busy={state === 'submitting'}
        className="w-full py-3 font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{
          backgroundColor: 'var(--vg-cta-bg)',
          color: 'var(--vg-cta-ink)',
          borderRadius: 'var(--vg-radius-btn)',
        }}
      >
        {state === 'submitting' ? t('form.submitting') : t('form.submit')}
      </button>

      {state === 'error' && (
        <p className="text-sm text-center" style={{ color: 'var(--color-error, #dc2626)' }} role="alert">
          {t('form.errorBody')}
        </p>
      )}
    </form>
  )
}
