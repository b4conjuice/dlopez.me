'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BriefcaseIcon,
  DocumentTextIcon,
  HomeIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

import Footer, { FooterListItem } from '@/components/ui/footer'
import CommandPalette from '@/components/commandPalette'
import { socials, nav } from '@/lib/common'

const navIcons: Record<string, React.ReactNode> = {
  home: <HomeIcon className='h-6 w-6' />,
  resume: <DocumentTextIcon className='h-6 w-6' />,
  portfolio: <BriefcaseIcon className='h-6 w-6' />,
}

export default function FooterComponent() {
  const router = useRouter()
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)

  const navCommands = nav.map(navItem => ({
    ...navItem,
    id: navItem.url,
    title: navItem.text,
    subtitle: navItem.url,
    action: () => {
      router.push(navItem.url)
    },
  }))
  const socialCommands = socials.map(social => ({
    id: social.url,
    title: social.name,
    subtitle: social.url,
    action: () => {
      window.open(social.url, '_blank')
    },
  }))

  const commands = [...navCommands, ...socialCommands]
  return (
    <>
      <Footer className='md:hidden'>
        {nav.map(({ url, text }) => (
          <FooterListItem key={url}>
            <Link
              className='flex w-full justify-center py-2 hover:text-cb-yellow/75'
              href={url}
            >
              {navIcons[text]}
            </Link>
          </FooterListItem>
        ))}
        <FooterListItem
          onClick={() => {
            setIsCommandPaletteOpen(!isCommandPaletteOpen)
          }}
        >
          <RocketLaunchIcon className='h-6 w-6 hover:text-cb-yellow/75' />
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
