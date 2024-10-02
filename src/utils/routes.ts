enum BasicRoutes {
  HOME = '/',
  ERROR = '/404', // redirect to HOME
  LOGIN = '/login',
  BLOG = '/blog'
}

enum ApiRoutes {
  API_AUTH_GOOGLE = '/api/auth/google',
  HTMX_SUBMIT_FORM = '/api/htmx/submit-form'
}

enum ExternalRoutes {
  INSTAGRAM = 'https://www.instagram.com',
  EMAIL = 'mailto:devopsick@pm.me',
  TWITTER = 'https://twitter.com/devopsick',
  GITHUB = 'https://github.com/Frikadellios',
  LINKEDIN = 'https://www.linkedin.com/in/markhorn-dev/',
  WATSSAP = '',
  TELEGRAM = '',
  VIBER = ''
}

enum HashKeys {
  FORM_INDICATOR_KEY = 'form-indicator'
}

enum SearchKeys {
  LOGOUT_KEY = 'logout',
  GOOGLE_CODE_KEY = 'google-code'
}

export type RoutesType = BasicRoutes | ExternalRoutes | ApiRoutes | HashKeys | SearchKeys

export const Routes = {
  ...BasicRoutes,
  ...ExternalRoutes,
  ...ApiRoutes,
  ...HashKeys,
  ...SearchKeys
}
