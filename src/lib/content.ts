export type ServiceId =
  | 'bookkeeping-vat'
  | 'year-end-accounts'
  | 'self-assessment'
  | 'startup-advice'
  | 'tax-advice'
  | 'not-sure'

export type BusinessType =
  | 'freelancer-sole-trader'
  | 'limited-company'
  | 'landlord'
  | 'partnership'
  | 'startup'
  | 'other'

export type TurnoverBand =
  | 'under-30k'
  | '30k-90k'
  | '90k-250k'
  | '250k-plus'
  | 'prefer-not-to-say'

export type ContactMethod = 'email' | 'phone' | 'whatsapp'
export type PreferredTime = 'morning' | 'afternoon' | 'evening'

export interface Service {
  id: ServiceId
  icon: string
  audience: string
}

export const services: Service[] = [
  { id: 'bookkeeping-vat', icon: '📒', audience: 'sole-traders-smes' },
  { id: 'year-end-accounts', icon: '📋', audience: 'all-businesses' },
  { id: 'self-assessment', icon: '🧾', audience: 'freelancers-landlords' },
  { id: 'startup-advice', icon: '🚀', audience: 'new-founders' },
  { id: 'tax-advice', icon: '💡', audience: 'anyone' },
  { id: 'not-sure', icon: '🤝', audience: 'free-guidance' },
]

export const serviceIds: ServiceId[] = services.map((s) => s.id)
export const businessTypeIds: BusinessType[] = [
  'freelancer-sole-trader',
  'limited-company',
  'landlord',
  'partnership',
  'startup',
  'other',
]

export const faqIds = [
  'self-assessment-cost',
  'outside-london',
  'qualified-accountant',
  'making-tax-digital',
  'vat-registration',
  'fixed-fees',
  'accounting-software',
  'response-time',
] as const

export type FaqId = (typeof faqIds)[number]

export const NAP = {
  name: 'VG Don Services',
  founder: 'Danuka Geekiyanage Don',
  credentials: 'ACA, BFP',
  telephone: '+447460855128',
  email: 'vgdonservices@gmail.com',
  addressLocality: 'London',
  addressCountry: 'GB',
  url: 'https://vgdonservices.co.uk',
} as const

export const softwareLogos = ['Xero', 'QuickBooks', 'FreeAgent', 'Sage', 'HMRC MTD'] as const
