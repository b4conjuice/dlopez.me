'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import CommandPalette from '@/components/commandPalette'

const nav = [
  {
    url: '/',
    text: 'home',
  },
  {
    url: '/resume',
    text: 'resume',
  },
  {
    url: '/portfolio',
    text: 'portfolio',
  },
]

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <header>
      <nav className='px-2 py-1 text-lg'>
        <ul className='flex justify-center space-x-3'>
          {nav.map(({ url, text }) => (
            <li
              key={url}
              className={
                pathname === url || pathname.includes(`${url}/`)
                  ? 'border-b-2 border-cobalt dark:border-gray-100'
                  : 'hover:border-b-2 hover:border-cobalt dark:hover:border-gray-100'
              }
            >
              {pathname === url ? (
                <span>{text}</span>
              ) : (
                <Link href={url}>{text}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <CommandPalette
        commands={nav.map(navItem => ({
          ...navItem,
          id: navItem.url,
          title: navItem.text,
          subtitle: navItem.url,
          action: () => {
            router.push(navItem.url)
          },
        }))}
      />
    </header>
  )
}
