import type { SupportedLocale } from '@/consts'

export const supportedLanguages = ['uk', 'en', 'ru']

export const languageNames: Record<string, string> = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська'
}


export function getCurrentLocale(pathname: string): SupportedLocale {
  const segments = pathname.split('/').filter(Boolean)
  const locale = segments[0] as SupportedLocale
  const supportedLocales: SupportedLocale[] = ['en', 'uk', 'ru']
  return supportedLocales.includes(locale) ? locale : 'en'
}

export function getBrandName(lang: SupportedLocale): string {
  const brandNames: Record<SupportedLocale, string> = {
    en: 'Jane School',
    uk: 'Jane School',
    ru: 'Jane School'
  }
  return brandNames[lang]
}

export function getSupportedLanguages(): string[] {
  return supportedLanguages
}

export function getLanguageNames(): Record<string, string> {
  return languageNames
}
