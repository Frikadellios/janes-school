import type { LOGO_TITLE, Links, PageSEO, Site, Socials } from '@/types'

export type SupportedLocale = 'en' | 'ru' | 'uk'

export const POST_METADATA = {
  defaultLayout: 'column', // Default layout for blog posts, options: simple and column
  showFullWidthCover: false, // Show full width cover image in blog post
  showCover: true, // Show cover image in blog post
  showTags: true, // Show tags in blog post, TODO: Add support for hiding tags
  showDate: true, // Show date in blog post, TODO: Add support for hiding date
  showSummary: true, // Show summary in blog post
  showAuthors: true, // Show authors in blog post, TODO: Add support for hiding authors
  showRelatedPosts: true, // Show related posts in blog post, TODO: Add support for hiding related posts
  showTableOfContents: true, // Show table of contents in blog post
  showShareButtons: 'both' // Show share buttons in blog post, options: top, bottom, both, none
}

export const LogoTitle: LOGO_TITLE = {
  content: {
    uk: 'Jane School',
    en: 'Jane School',
    ru: 'Jane School'
  }
}

// Global
export const SITE: Site = {
  TITLE: {
    uk: 'DevOpSick',
    en: 'DevOpSick',
    ru: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    pl: 'Blog'
  },
  DESCRIPTION: {
    uk: 'Dream Project Product',
    en: 'Dream Project Product',
    ru: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    pl: 'Blog'
  },
  AUTHOR: 'Hrihorii Ilin'
}

// Work Page
export const WORK: PageSEO = {
  TITLE: {
    uk: 'Work',
    en: 'Work',
    ru: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    pl: 'Blog'
  },
  DESCRIPTION: {
    uk: 'Places I have worked.',
    en: 'Places I have worked.',
    ru: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    pl: 'Blog'
  }
}

// Blog Page
export const BLOG: PageSEO = {
  TITLE: {
    uk: 'Blog',
    en: 'Blog',
    ru: 'Blog',
    de: 'Blog',
    es: 'Blog',
    fr: 'Blog',
    pl: 'Blog'
  },
  DESCRIPTION: {
    uk: 'Writing on topics I am passionate about.',
    en: 'Writing on topics I am passionate about.',
    ru: 'Writing on topics I am passionate about.',
    de: 'Writing on topics I am passionate about.',
    es: 'Writing on topics I am passionate about.',
    fr: 'Writing on topics I am passionate about.',
    pl: 'Writing on topics I am passionate about.'
  }
}

// Projects Page
export const PROJECTS: PageSEO = {
  TITLE: {
    uk: 'Projects',
    en: 'Projects',
    ru: 'Projects',
    de: 'Projects',
    es: 'Projects',
    fr: 'Projects',
    pl: 'Projects'
  },
  DESCRIPTION: {
    uk: 'Recent projects I have worked on.',
    en: 'Recent projects I have worked on.',
    ru: 'Recent projects I have worked on.',
    de: 'Recent projects I have worked on.',
    es: 'Recent projects I have worked on.',
    fr: 'Recent projects I have worked on.',
    pl: 'Recent projects I have worked on.'
  }
}

// Search Page
export const SEARCH: PageSEO = {
  TITLE: {
    uk: 'Search',
    en: 'Search',
    ru: 'Search',
    de: 'Search',
    es: 'Search',
    fr: 'Search',
    pl: 'Search'
  },
  DESCRIPTION: {
    uk: 'Search all posts and projects by keyword.',
    en: 'Search all posts and projects by keyword.',
    ru: 'Search all posts and projects by keyword.',
    de: 'Search all posts and projects by keyword.',
    es: 'Search all posts and projects by keyword.',
    fr: 'Search all posts and projects by keyword.',
    pl: 'Search all posts and projects by keyword.'
  }
}

export const LINKS: Links = [
  {
    title: {
      uk: 'Home',
      en: 'Home',
      ru: 'Home'
    },
    path: '/'
  },
  {
    title: {
      uk: 'Work',
      en: 'Work',
      ru: 'Work'
    },
    path: '/work'
  },
  {
    title: {
      uk: 'Blog',
      en: 'Blog',
      ru: 'Blog'
    },
    path: '/blog'
  },
  {
    title: {
      uk: 'Projects',
      en: 'Projects',
      ru: 'Projects'
    },
    path: '/projects'
  }
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'devopsick@pm.me',
    HREF: 'mailto:devopsick@pm.me'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'DevOpSick',
    HREF: 'https://github.com/Frikadellios'
  },
  {
    NAME: 'Linkedin',
    ICON: 'linkedin',
    TEXT: 'DevOpSick',
    HREF: 'https://linkedin.com/Frikadellios'
  },
  {
    NAME: 'LinkedIn',
    ICON: 'linkedin',
    TEXT: 'markhorn-dev',
    HREF: 'https://www.linkedin.com/in/markhorn-dev/'
  },
  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: 'DevOpSick',
    HREF: 'https://twitter.com/devopsick'
  }
]
