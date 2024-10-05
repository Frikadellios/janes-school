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

export interface Site extends PageSEO {
  AUTHOR: string
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
