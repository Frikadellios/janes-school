import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

// Define a type for the language keys
type Language = 'uk' | 'en' | 'ru';

// Ensure `lang` is of type `Language`
const lang: Language = 'en'; // or however you determine the current language

const navigation = [
  {
    name: {
      uk: 'blog',
      en: 'blog',
      ru: 'blog'
    },
    href: '/blog'
  },
  {
    name: {
      uk: 'Services',
      en: 'Services',
      ru: 'Services'
    },
    href: '/services'
  },
  {
    name: {
      uk: 'Cources',
      en: 'Cources',
      ru: 'Cources'
    },
    href: '/cources'
  },
  {
    name: {
      uk: 'About',
      en: 'About',
      ru: 'About'
    },
    href: '/about'
  }
]

const actions = [{ name: 'Login', href: '/login' }]

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon }
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav className="mx-2 sticky flex w-auto items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Jane School</span>
            <img
              width={300}
              height={300}
              src="/public/favicon.svg"
              alt="logo"
              className="w-auto h-8 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-primary focus:outline-none"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:text-primary group-hover:text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 border-trancperent hover:text-primary group-hover:text-primary"
              aria-hidden="true"
            />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12  ">
          <Popover className="relative hover:text-primary group-hover:text-primary">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-neon-pink/30 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:text-primary group-hover:text-primary hover:bg-muted-background/10"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-background  group-hover:text-primary hover:bg-muted-background/10">
                      <item.icon
                        className="h-6 w-6 text-foreground hover:text-primary group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-foreground group-hover:text-primary">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-muted-foreground hover:text-foreground group-hover:text-foreground hover:bg-muted-background/10">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-neon-pink/30 bg-background">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center text-primary gap-x-2.5 p-3 text-sm font-semibold leading-6  hover:bg-muted-foreground/10 "
                  >
                    <item.icon className="h-5 w-5 flex-none " aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name[lang]}
                href={item.href}
                className="text-sm font-bold leading-6 duration-200 text-foreground hover:text-primary group-hover:text-primary"
              >
                {item.name[lang]}
              </a>
            ))}
          </div>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-sm font-bold leading-6 hover:font-bold duration-200 text-foreground hover:text-primary group-hover:text-primary"
          >
            Log in
          </a>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 my-auto mx-auto w-full z-50 overflow-y-auto text-foreground group-hover:text-primary hover:text-primary bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 text-sm font-bold leading-6 duration-200">
              <span className="sr-only">Menu</span>
              <img width={100} height={40} src="/public/favicon.svg" alt="logo" className="h-7 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground hover:text-primary group-hover:text-primary "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6  hover:text-primary group-hover:text-primary" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex mx-auto w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-foreground hover:bg-muted-foreground/10 hover:text-primary group-hover:text-primary ">
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none hover:text-primary group-hover:text-primary'
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-foreground hover:bg-muted-foreground/10 hover:text-primary group-hover:text-primary"
                          >
                            <item.icon
                              className="h-5 w-5 flex-none text-foreground hover:font-bold hover:text-primary group-hover:text-primary"
                              aria-hidden="true"
                            />
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name[lang]}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:font-black leading-7 text-foreground hover:bg-muted-foreground/10 hover:text-primary group-hover:text-primary"
                    >
                      {item.name[lang]}
                    </a>
                  ))}
                </div>
              </div>
              <div className="py-6">
                {actions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold hover:font-bold leading-7 text-foreground hover:bg-muted-foreground/10 hover:text-primary group-hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
