import { getCollection } from 'astro:content'

export const getCategories = async () => {
  const posts = await getCollection('blog')
  const categories = new Set(posts.map((post) => post.data.category))
  return Array.from(categories)
}

export const getPosts = async (lang: string, max?: number) => {
  return (
    await getCollection('blog', ({ id }) => {
      return id.startsWith(lang)
    })
  )
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .slice(0, max)
}

export const getTags = async (lang: string) => {
  const posts = await getCollection('blog', ({ id }) => {
    return id.startsWith(lang)
  })
  // biome-ignore lint/complexity/useFlatMap: <explanation>
  const tags = new Set(posts.map((post) => post.data.tags).flat())
  return Array.from(tags)
}

export const getPostByTag = async (lang: string, tag: string) => {
  const posts = await getCollection('blog', ({ id }) => {
    return id.startsWith(lang)
  })
  return posts.filter((post) => post.data.tags.includes(tag))
}

export const filterPostsByCategory = async (lang: string, category: string) => {
  const posts = await getPosts(lang)
  return posts.filter((post) => post.data.category.toLowerCase() === category)
}
