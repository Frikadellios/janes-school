import type { Locales } from '@/i18n/i18n-types'
import { baseLocale, detectLocale, isLocale } from '@/i18n/i18n-util'
import type { Context } from '@/lib/context'
import { initAcceptLanguageHeaderDetector, initRequestParametersDetector } from 'typesafe-i18n/detectors'
import { ui } from './ui'

export const DEFAULT_LOCALE = 'uk'
export type Locale = 'en' | 'ru' | 'uk' | string

export const LOCALES = {
  en: 'en-US',
  uk: 'uk-UA',
  ru: 'ru-UA'
}

export const LANGUAGES = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська'
}

export const Languages = {
  en: {
    route: '/en/',
    icon: 'en'
  },
  uk: {
    route: '/uk/',
    icon: 'uk'
  },
  ru: {
    route: '/ru/',
    icon: 'ru'
  }
}

export const defaultLang = 'uk'
export type UiType = keyof typeof ui
export type Lang = keyof typeof LANGUAGES

export function pathNameIsInLanguage(pathname: string, lang: UiType): boolean {
  return pathname.startsWith(`/${lang}`) || (lang === DEFAULT_LOCALE && !pathNameStartsWithLanguage(pathname))
}

function pathNameStartsWithLanguage(pathname: string): boolean {
  const languages = Object.keys(ui)
  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i]
    if (pathname.startsWith(`/${lang}`)) {
      return true
    }
  }
  return false
}

export function getLocalizedPathname(pathname: string, lang: string): string {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(ui).join('|')
    const regex = new RegExp(`^\/(${availableLanguages})`)
    return pathname.replace(regex, `/${lang}`)
  }
  return `/${lang}${pathname}`
}

interface Fallback {
  [key: string]: string
}

export const fallback: Fallback = {
  currentLocale: baseLocale
}

export const LANGUAGES_ARRAY = Object.keys(LANGUAGES)
export const currentLocale = Object.keys(LANGUAGES)[0]

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

export function getLangFromUrl(url: URL): UiType {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as UiType
  return DEFAULT_LOCALE as UiType
}

export function useTranslations(lang?: UiType) {
  return function t(key: keyof (typeof ui)[typeof DEFAULT_LOCALE], ...args: unknown[]) {
    let translation = ui[lang ?? DEFAULT_LOCALE][key] || ui[DEFAULT_LOCALE][key]
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, String(args[i]))
      }
    }
    return translation
  }
}

export function changeLangFromUrl(url: URL, lang: string) {
  const newLang = lang in ui ? lang : defaultLang
  const splitUrl = url.pathname.split('/')
  splitUrl[1] = newLang
  return splitUrl.join('/').substring(1)
}

export { ui }
