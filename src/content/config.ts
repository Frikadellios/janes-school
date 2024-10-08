import { defineCollection, reference, z } from 'astro:content'
import { astroZodCollectionsToJsonSchemas } from 'astro-zod-to-json-schema'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      metaTitle: z.string().max(60, 'For optimized SEO, please provide a title with 60 characters or less').optional(),
      metaDescription: z
        .string()
        .max(160, 'For optimized SEO, please provide an excerpt/description with 160 characters or less')
        .optional(),
      title: z.string(),
      description: z.string().optional(),
      image: z
        .object({
          src: image(),
          alt: z.string()
        })
        .optional(),
      ogImage: image()
        .refine((img) => img.width >= 1200 && img.height >= 630, {
          message: 'OpenGraph image must be at least 1200 X 630 pixels!'
        })
        .or(z.string())
        .optional(),
      draft: z.boolean().optional(),
      canonicalURL: z.string().optional(),
      category: z.array(reference('category')),
      author: z.array(reference('authors')),
      tags: z.array(reference('tags')).default(['education']),
      relatedPosts: z.array(reference('post')),
      modDatetime: z.date().optional().nullable().optional(),
      pubDatetime: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val))
        .optional(),
      dateFormatted: z.string().transform((str) => {
        const [day, month, year] = str.split('/')
        return new Date(`${year}-${month}-${day}`).toLocaleDateString()
      }),
      lang: z.enum(['en', 'uk', 'ru'])
    })
})

const authorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    firstname: z.string(),
    lastname: z.string(),
    nikname: z.string().optional(),
    apdi: z.string().optional(),
    photo: z.object({
      url: z.string(),
      thumbnail: z.string().optional(),
      alt: z.string().default('photo of APDI member')
    }),
    email: z.string().email(),
    linkedin: z.string().url().optional(),
    twitter: z.string().url().optional(),
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
    lang: z.enum(['en', 'uk', 'ru'])
  })
})

const courcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().min(1).max(1000),
    name: z.string(),
    metaTitle: z.string().max(60, 'For optimized SEO, please provide a title with 60 characters or less').optional(),
    metaDescription: z
      .string()
      .max(160, 'For optimized SEO, please provide an excerpt/description with 160 characters or less')
      .optional(),
    tags: z.array(reference('tags')).default(['education']),
    lvl: z.array(reference('lvl')),
    lessons: z.array(reference('lesson')).optional(),
    lang: z.enum(['en', 'uk', 'ru'])
  })
})

const lessonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string().min(1).max(1000),
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60, 'For optimized SEO, please provide a title with 60 characters or less').optional(),
    metaDescription: z
      .string()
      .max(160, 'For optimized SEO, please provide an excerpt/description with 160 characters or less')
      .optional(),
    category: z.array(reference('category')),
    tags: z.array(z.string()).default(['education']),
    cource: reference('cource').optional(),
    lvl: reference('lvl'),
    lang: z.enum(['en', 'uk', 'ru'])
  })
})

const categoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60, 'For optimized SEO, please provide a title with 60 characters or less').optional(),
    metaDescription: z
      .string()
      .max(160, 'For optimized SEO, please provide an excerpt/description with 160 characters or less')
      .optional(),
    icon: z.string().optional(),
    lang: z.enum(['en', 'uk', 'ru'])
  })
})

const tagsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().max(60, 'For optimized SEO, please provide a title with 60 characters or less').optional(),
    metaDescription: z
      .string()
      .max(160, 'For optimized SEO, please provide an excerpt/description with 160 characters or less')
      .optional(),
    icon: z.string().optional(),
    lang: z.enum(['en', 'uk', 'ru'])
  })
})

const lvlCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    lang: z.enum(['en', 'uk', 'ru'])
  })
})

const clientsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    country: z.string().min(1, 'Country is required'),
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    state: z.string().min(1, 'State is required'),
    zip: z.string().min(1, 'Zip is required'),
    lvl: reference('lvl').optional(),
    lang: z.enum(['en', 'uk', 'ru']).optional()
  })
})

export const collections = {
  post: postCollection,
  author: authorsCollection,
  cource: courcesCollection,
  lesson: lessonsCollection,
  lvl: lvlCollection,
  category: categoriesCollection,
  clients: clientsCollection,
  tags: tagsCollection
}

await astroZodCollectionsToJsonSchemas(collections)
