'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  BriefcaseIcon,
  DocumentTextIcon,
  HomeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

import Footer, { FooterListItem } from '@/components/ui/footer'
import CommandPalette from '@/components/commandPalette'
import { socials, nav } from '@/lib/common'
import copyToClipboard from '@/lib/copyToClipboard'

const navIcons: Record<string, React.ReactNode> = {
  home: <HomeIcon className='h-6 w-6' />,
  resume: <DocumentTextIcon className='h-6 w-6' />,
  portfolio: <BriefcaseIcon className='h-6 w-6' />,
}

export default function FooterComponent() {
  const router = useRouter()
  const pathname = usePathname()
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)

  const navCommands = nav.map(navItem => ({
    ...navItem,
    id: navItem.url,
    title: `Go to ${navItem.text} page`,
    subtitle: navItem.url,
    action: () => {
      router.push(navItem.url)
    },
  }))
  const socialCommands = socials.map(social => ({
    id: social.url,
    title: `Open ${social.name} in a new tab`,
    subtitle: social.url,
    action: () => {
      window.open(social.url, '_blank')
    },
  }))
  const copySocialCommands = socials.map(social => ({
    id: `copy-${social.url}`,
    title: `Copy ${social.name} url`,
    subtitle: social.url,
    action: () => {
      copyToClipboard(social.url)
    },
  }))

  const commands = [...navCommands, ...socialCommands, ...copySocialCommands]
  return (
    <>
      <Footer className='md:hidden' colorClassName='text-cb-pink'>
        {nav.map(({ url, text }) => (
          <FooterListItem key={url}>
            {pathname === url ? (
              <span className='flex w-full justify-center py-2 text-cb-white'>
                {navIcons[text]}
              </span>
            ) : (
              <Link
                className='flex w-full justify-center py-2 hover:text-cb-pink/75'
                href={url}
              >
                {navIcons[text]}
              </Link>
            )}
          </FooterListItem>
        ))}
        <FooterListItem
          onClick={() => {
            setIsCommandPaletteOpen(!isCommandPaletteOpen)
          }}
        >
          <RocketLaunchIcon className='h-6 w-6 text-cb-yellow hover:text-cb-yellow/75' />
        </FooterListItem>
      </Footer>
      <CommandPalette
        commands={commands}
        isOpen={isCommandPaletteOpen}
        setIsOpen={setIsCommandPaletteOpen}
      />
    </>
  )
}
