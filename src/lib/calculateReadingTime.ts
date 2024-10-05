export function calculateReadingTime(text: string): string {
  const strippedContent = text
    .replace(/<.*?>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/import .*?;/g, '')
    .replace(/#/g, '')
    .replace(/[*_`~[\]]/g, '')

  const wordCount = strippedContent.split(/\s+/).filter(Boolean).length
  const wordsPerMinute = 200 // Average case.
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  const readingTime = `${minutes} min read`
  return readingTime
}
