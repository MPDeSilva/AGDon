export const locales = ['en-GB', 'fr', 'it', 'si'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en-GB'
