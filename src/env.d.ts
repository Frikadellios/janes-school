/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/astro-jsx" />
/// <reference types="astro/client" />

/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

type Runtime = import('@astrojs/cloudflare').Runtime<Env>

declare namespace App {
  interface Locals extends Runtime {}
}

interface ImportMetaEnv {
  readonly SKIP_DEPENDENCY_INSTALL: string
  readonly UNSTABLE_PRE_BUILD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.astro' {
  const Component: React.ComponentType // or use `unknown` if more appropriate
  export default Component
}
