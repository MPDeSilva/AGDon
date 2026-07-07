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
  const theme = themes[activeTheme]

  const fontVars = [
    inter.variable,
    lora.variable,
    crimsonPro.variable,
    libreBaskerville.variable,
    notoSansSinhala.variable,
    spaceGrotesk.variable,
    archivo.variable,
    plusJakartaSans.variable,
  ].join(' ')

  // Inline theme tokens as a CSS custom properties block (server default)
  const tokensCss = Object.entries(theme.tokens)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')

  // All theme tokens serialised for the FOUC-prevention script
  const allTokensJson = JSON.stringify(
    Object.fromEntries(
      Object.entries(themes).map(([k, v]) => [k, v.tokens])
    )
  )

  const jsonLd = accountingServiceSchema(locale)

  return (
    <html lang={locale} className={fontVars} suppressHydrationWarning>
      <head>
        {/* Server-side default theme — overridden by ThemeProvider on hydration */}
        <style dangerouslySetInnerHTML={{ __html: `:root{${tokensCss}}` }} />
        {/* Apply saved theme before first paint to prevent flash */}
        <Script
          id="vg-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `(function(){try{var k=localStorage.getItem('vg-theme');var t=${allTokensJson};if(k&&t[k]){var r=document.documentElement;Object.entries(t[k]).forEach(function(e){r.style.setProperty(e[0],e[1])})}}catch(e){}})()` }}
        />
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
