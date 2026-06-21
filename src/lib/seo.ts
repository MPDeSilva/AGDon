import type { Metadata } from 'next'
import { NAP } from './content'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vgdonservices.co.uk'

export function buildMetadata({
  locale,
  title,
  description,
  path = '',
}: {
  locale: string
  title?: string
  description?: string
  path?: string
}): Metadata {
  const defaultTitle = 'VG Don Services — Chartered Accountant London'
  const defaultDesc =
    'Fixed-fee bookkeeping, VAT, self-assessment & year-end accounts for freelancers, sole traders and small businesses across London.'

  const canonical = `${SITE_URL}/${locale}${path}`
  const locales = ['en-GB', 'fr', 'it', 'si']

  return {
    title: title ?? defaultTitle,
    description: description ?? defaultDesc,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical,
      languages: Object.fromEntries([
        ...locales.map((l) => [l, `${SITE_URL}/${l}${path}`]),
        ['x-default', `${SITE_URL}/en-GB${path}`],
      ]),
    },
    openGraph: {
      title: title ?? defaultTitle,
      description: description ?? defaultDesc,
      url: canonical,
      siteName: 'VG Don Services',
      locale: locale.replace('-', '_'),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title ?? defaultTitle,
      description: description ?? defaultDesc,
    },
    robots: { index: true, follow: true },
  }
}

export function accountingServiceSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: NAP.name,
    description:
      'Fixed-fee bookkeeping, VAT, self-assessment, year-end accounts, business startup advice and tax advice for freelancers, sole traders, landlords and small businesses. Chartered Accountant expertise at freelance rates.',
    url: `${SITE_URL}/en-GB/`,
    telephone: NAP.telephone,
    email: NAP.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: NAP.addressLocality,
      addressCountry: NAP.addressCountry,
    },
    areaServed: ['London', 'United Kingdom'],
    priceRange: '££',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Accounting Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bookkeeping & VAT' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Year-End Accounts' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Self-Assessment Returns' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Business Startup Advice' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Advice' } },
      ],
    },
  }
}

export function faqSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}
