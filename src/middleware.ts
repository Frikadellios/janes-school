import { getLocale, getLocaleFromCookie, getLocaleFromUrl, getPreferredLocale } from '@/i18n/utils'
import { CookieKeys, clearCookies, setCookies, setLocaleCookie } from '@/utils/cookies'
import { Routes } from '@/utils/routes'
import { defineMiddleware, sequence } from 'astro/middleware'

const staticRedirects = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname

  switch (pathname) {
    case '/instagram':
      return context.redirect(Routes.INSTAGRAM)

    default:
      return next()
  }
})

const logout = defineMiddleware(async (context, next) => {
  const locale = getLocale(context)

  const hasLogoutKey = context.url.searchParams.has(Routes.LOGOUT_KEY)
  if (!hasLogoutKey) {
    return next()
  }

  clearCookies(context, CookieKeys.ACC)
  clearCookies(context, CookieKeys.JID)

  return context.redirect(`/${locale}${Routes.HOME}`)
})

const i18nDetectLocale = defineMiddleware(async (context, next) => {
  const pathname = context.url.pathname

  const isApiRoute = pathname.includes('/api/')
  if (isApiRoute) {
    return next()
  }

  let possibleLocale = getLocaleFromUrl(pathname)
  if (possibleLocale) {
    setLocaleCookie(context, possibleLocale)
    return next()
  }

  possibleLocale = getLocaleFromCookie(context)
  if (possibleLocale) {
    setLocaleCookie(context, possibleLocale)
    return context.redirect(`/${possibleLocale}${context.url.pathname}${context.url.search}`)
  }

  possibleLocale = getPreferredLocale(context)
  setLocaleCookie(context, possibleLocale)

  return context.redirect(`/${possibleLocale}${context.url.pathname}${context.url.search}`)
})

// https://docs.astro.build/en/guides/middleware/
// https://github.com/withastro/astro/tree/main/examples/middleware/src
export const onRequest = sequence(staticRedirects, logout, i18nDetectLocale)
