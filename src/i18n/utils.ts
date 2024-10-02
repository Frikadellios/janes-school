import type { Locales } from '@/i18n/i18n-types'
import { baseLocale, detectLocale, isLocale } from '@/i18n/i18n-util'
import type { Context } from '@/lib/context'
import { initAcceptLanguageHeaderDetector, initRequestParametersDetector } from 'typesafe-i18n/detectors'

import { Languages, defaultLang, ui } from './ui'

export const languages = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська'
}

interface Fallback {
  [key: string]: string
}

export const fallback: Fallback = {
  currentLocale: baseLocale
}

export type Locale = 'en' | 'de' | 'es' | 'fr' | 'ru' | 'uk' | 'pl' | string

export const LANGUAGES_ARRAY = Object.keys(languages)
export const currentLocale = Object.keys(languages)[0]

export const getLocaleFromUrl = (pathname: string): Locales | undefined => {
  const [, locale] = pathname.split('/')
  const _locale = locale.toLowerCase()
  if (isLocale(_locale)) return _locale.toLowerCase() as Locales
  return undefined
}

export const getLocaleFromCookie = (context: Context): Locales | undefined => {
  const _locale = context.cookies.get('locale')?.value
  if (!_locale) return undefined
  const locale = _locale.toLowerCase()
  if (isLocale(locale)) return locale.toLowerCase() as Locales
  return undefined
}

export const getLocale = (context: Context): Locales => {
  let locale = getLocaleFromUrl(context.url.pathname)
  if (locale) return locale

  locale = getLocaleFromCookie(context)
  if (locale) return locale

  return getPreferredLocale(context)
}

export const getPreferredLocale = (context: Context): Locales => {
  const resuest = context.request
  const params = context.params as Record<string, string>

  const requestParametersDetector = initRequestParametersDetector({ ...resuest, params }, 'locale')

  const headers = { get: (key: string) => resuest.headers.get(key) }
  const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers })

  return detectLocale(requestParametersDetector, acceptLanguageDetector)
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in Languages) return lang as keyof typeof Languages
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function changeLangFromUrl(url: URL, lang: string) {
  const newLang = lang in ui ? lang : defaultLang
  const splitUrl = url.pathname.split('/')
  splitUrl[1] = newLang
  return splitUrl.join('/').substring(1)
}

export { ui }
