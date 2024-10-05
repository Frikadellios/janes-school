import { defineCollection, z } from 'astro:content'

const postCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: z.string().optional(),
      image: z
        .object({
          src: image(),
          alt: z.string()
        })
        .optional(),
      category: z.string().optional(),
      pubDate: z
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

export const collections = {
  post: postCollection
}
