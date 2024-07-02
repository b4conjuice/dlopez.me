'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
    </header>
  )
}
