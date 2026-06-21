import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'
import type { ContactFormData } from './schema'

export const maxDuration = 15

const smtpOptions: SMTPTransport.Options = {
  host: process.env.SMTP_HOST ?? '',
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: (process.env.SMTP_PORT ?? '465') === '465',
  auth: {
    user: process.env.SMTP_USER ?? '',
    pass: process.env.SMTP_PASS ?? '',
  },
  // CRITICAL: pooled connections break in Vercel serverless
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
  socketTimeout: 20_000,
}

const transporter = nodemailer.createTransport(smtpOptions)

const serviceLabels: Record<string, string> = {
  'bookkeeping-vat': 'Bookkeeping & VAT',
  'year-end-accounts': 'Year-End Accounts',
  'self-assessment': 'Self-Assessment Returns',
  'startup-advice': 'Business Startup Advice',
  'tax-advice': 'Tax Advice',
  'not-sure': 'Not sure (guidance needed)',
}

const businessLabels: Record<string, string> = {
  'freelancer-sole-trader': 'Freelancer / Sole Trader',
  'limited-company': 'Limited Company',
  landlord: 'Landlord',
  partnership: 'Partnership',
  startup: 'Startup',
  other: 'Other',
}

const localeNames: Record<string, string> = {
  'en-GB': 'English',
  fr: 'Français',
  it: 'Italiano',
  si: 'සිංහල',
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/[\r\n]+/g, ' ') // prevent header injection
}

export async function sendInquiry(data: ContactFormData) {
  const servicesText = data.services.map((s) => serviceLabels[s] ?? s).join(', ')
  const businessText = businessLabels[data.businessType] ?? data.businessType
  const localeName = localeNames[data.locale] ?? data.locale

  const subject = `New enquiry: ${servicesText} — ${escapeHtml(data.name)}`

  const htmlBody = `
<h2>New Enquiry — VG Don Services</h2>
${data.locale !== 'en-GB' ? `<p><em>[Submitted in: ${localeName}]</em></p>` : ''}
<table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse">
  <tr><td><strong>Name:</strong></td><td>${escapeHtml(data.name)}</td></tr>
  <tr><td><strong>Email:</strong></td><td>${escapeHtml(data.email)}</td></tr>
  ${data.phone ? `<tr><td><strong>Phone:</strong></td><td>${escapeHtml(data.phone)}</td></tr>` : ''}
  <tr><td><strong>Business type:</strong></td><td>${businessText}</td></tr>
  <tr><td><strong>Services needed:</strong></td><td>${servicesText}</td></tr>
  ${data.turnover ? `<tr><td><strong>Annual turnover:</strong></td><td>${data.turnover}</td></tr>` : ''}
  <tr><td><strong>Preferred contact:</strong></td><td>${data.contactMethod}</td></tr>
  ${data.preferredTime ? `<tr><td><strong>Preferred time:</strong></td><td>${data.preferredTime}</td></tr>` : ''}
  ${data.message ? `<tr><td valign="top"><strong>Message:</strong></td><td>${escapeHtml(data.message)}</td></tr>` : ''}
</table>
<hr/>
<p style="color:#666;font-size:12px">Sent via vgdonservices.co.uk</p>
`

  await transporter.sendMail({
    from: `"VG Don Services Website" <${process.env.MAIL_FROM ?? 'noreply@vgdonservices.co.uk'}>`,
    to: process.env.MAIL_TO ?? 'vgdonservices@gmail.com',
    replyTo: data.email,
    subject,
    html: htmlBody,
  })
}
