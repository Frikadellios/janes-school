import type socialIcons from '@/assets/socialIcons'

export type SiteConfig = {
  website: string
  author: string
  title?: {
    [key: string]: string
  }
  description?: {
    [key: string]: string
  }
  lang?: string
  ogLocale?: string
  metaTitle: {
    [key: string]: string
  }
  metaDescription: {
    [key: string]: string
  }
  ogImage?: string
  lightAndDarkMode?: boolean
  shareMessage?: {
    [key: string]: string
  }
  paginationSize?: number
  postPerPage: number
  scheduledPostMargin: number
}


export interface Category {
  metaTitle: {
    [key: string]: string
  }
  metaDescription: {
    [key: string]: string
  }
  title: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
  icon: string
  lang: string
}

export type SocialObjects = {
  name: keyof typeof socialIcons
  href: string
  active: boolean
  linkTitle: string
}[]

export type PageSEO = {
  TITLE: {
    [key: string]: string
  }
  DESCRIPTION: {
    [key: string]: string
  }
}

export type LOGO_TITLE = {
  content: {
    [key: string]: string
  }
}

export type PROJECTS = {
  name: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
  image: string
  url: string
}

export type CATEGORIES = {
  TITLE: {
    [key: string]: string
  }
  DESCRIPTION: {
    [key: string]: string
  }
}

export type Links = {
  title: {
    [key: string]: string
  }
  path: string
}[]

export type TECHNOLOGIES = {
  title: {
    [key: string]: string
  }
  description: {
    [key: string]: string
  }
  link: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]
