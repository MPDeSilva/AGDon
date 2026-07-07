import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import {
  Inter,
  Lora,
  Crimson_Pro,
  Libre_Baskerville,
  Noto_Sans_Sinhala,
  Space_Grotesk,
  Archivo,
  Plus_Jakarta_Sans,
  Bricolage_Grotesque,
  Cormorant_Garamond,
  Newsreader,
} from 'next/font/google'
import { locales } from '@/i18n/config'
import { themes, activeTheme } from '@/lib/themes'
import { buildMetadata, accountingServiceSchema } from '@/lib/seo'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import Script from 'next/script'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
  display: 'swap',
})

const notoSansSinhala = Noto_Sans_Sinhala({
  subsets: ['sinhala'],
  variable: '--font-sinhala',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale })
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  const fontVars = [
    inter.variable,
    lora.variable,
    crimsonPro.variable,
    libreBaskerville.variable,
    notoSansSinhala.variable,
    spaceGrotesk.variable,
    archivo.variable,
    plusJakartaSans.variable,
    bricolageGrotesque.variable,
    cormorantGaramond.variable,
    newsreader.variable,
  ].join(' ')

  // CSS for all themes: default tokens on :root, each other theme via [data-theme] selector.
  // This lets the tiny public/theme-init.js set data-theme= on <html> without any inline script.
  const defaultTokensCss = Object.entries(themes[activeTheme].tokens)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')

  const allThemesCss = Object.entries(themes)
    .filter(([key]) => key !== activeTheme)
    .map(
      ([key, { tokens }]) =>
        `[data-theme="${key}"]{${Object.entries(tokens)
          .map(([k, v]) => `${k}:${v}`)
          .join(';')}}`
    )
    .join('')

  const themeCss = `:root{${defaultTokensCss}}${allThemesCss}`

  const jsonLd = accountingServiceSchema(locale)

  return (
    <html lang={locale} className={fontVars} suppressHydrationWarning>
      <head>
        {/* All theme tokens — default on :root, others via [data-theme="key"] selector */}
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
        {/* Reads localStorage and sets data-theme on <html> before first paint — no inline script */}
        <Script id="vg-theme-init" strategy="beforeInteractive" src="/theme-init.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
