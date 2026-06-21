import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schema'
import { verifyTurnstile } from '@/lib/turnstile'
import { checkRateLimit } from '@/lib/rate-limit'
import { sendInquiry } from '@/lib/mailer'

export const maxDuration = 15

export async function POST(req: NextRequest) {
  // Reject non-JSON
  const contentType = req.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ message: 'Invalid content type' }, { status: 415 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
  }

  // Parse & validate
  const result = contactSchema.safeParse(body)
  if (!result.success) {
    const errors = Object.fromEntries(
      Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0]]),
    )
    return NextResponse.json({ errors }, { status: 400 })
  }

  const data = result.data

  // Honeypot
  if (data.honeypot && data.honeypot.length > 0) {
    return NextResponse.json({ success: true }) // silently drop
  }

  // Time-to-submit check (< 2s = likely bot)
  const submittedAt = data.submittedAt ?? Date.now()
  if (Date.now() - submittedAt < 2000) {
    return NextResponse.json({ success: true }) // silently drop
  }

  // Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  const { allowed } = await checkRateLimit(ip)
  if (!allowed) {
    return NextResponse.json({ message: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  // Turnstile verification
  const turnstileOk = await verifyTurnstile(data.turnstileToken, ip)
  if (!turnstileOk) {
    return NextResponse.json({ message: 'Security check failed. Please try again.' }, { status: 403 })
  }

  // Send email
  try {
    await sendInquiry(data)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] sendMail error:', err)
    return NextResponse.json(
      { message: 'Failed to send your enquiry. Please try again or email us directly.' },
      { status: 500 },
    )
  }
}
