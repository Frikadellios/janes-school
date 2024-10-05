import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function PopoverLang({ lang, url }: { lang: 'uk' | 'en' | 'ru'; url: URL }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="link" aria-label="Language toggle">
          {lang === 'en' ? 'English' : 'Español'}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <ul>
          <li>
            <a title="Sitio Web en Español" href="/es/">
              Español
            </a>
          </li>
          <hr className="w-full h-[2px] bg-neon-pink my-2" />
          <li>
            <a title="Web Site in English" href="/en/">
              English
            </a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
