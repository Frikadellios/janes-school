import type { APIContext } from 'astro'

export type Context = Omit<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  APIContext<Record<string, any>, Record<string, string | undefined>>,
  'ResponseWithEncoding'
>
