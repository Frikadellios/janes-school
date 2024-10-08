import type { SiteConfig, SocialObjects } from '@/types'

export const SITE = 'https://janes-school.pages.dev'
export const SITEMAP = 'https://www.janes-school.pages.dev/sitemap-0.xml'
export const HOST = 'janes-school.pages.dev'

export type SupportedLocale = 'en' | 'ru' | 'uk'


export const siteConfig: SiteConfig = {
  website: '',
  author: 'Admin',
  metaTitle: {
    en: 'Astro Theme OpenBlog',
    ru: 'Astro Theme OpenBlog',
    uk: 'Astro Theme OpenBlog'
  },
  metaDescription: {
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    uk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  title: {
    en: 'Astro Theme OpenBlog',
    ru: 'Astro Theme OpenBlog',
    uk: 'Astro Theme OpenBlog'
  },
  description: {
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    uk: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  shareMessage: {
    en: 'Share this post',
    ru: 'Share this post',
    uk: 'Share this post'
  },
  lang: '',
  ogLocale: '',
  paginationSize: 6,
  postPerPage: 0,
  scheduledPostMargin: 0
}



export const SOCIALS: SocialObjects = [
  {
    linkTitle: 'devopsick@pm.me',
    name: 'Mail',
    active: true,
    href: 'mailto:devopsick@pm.me'
  },
  {
    linkTitle: 'Github',
    name: 'Github',
    active: true,
    href: 'https://github.com/Frikadellios'
  },
  {
    linkTitle: 'Linkedin',
    name: 'LinkedIn',
    active: true,
    href: 'https://linkedin.com/Frikadellios'
  },
  {
    linkTitle: 'Twitter',
    name: 'Twitter',
    active: true,
    href: 'https://twitter.com/devopsick'
  }
]
