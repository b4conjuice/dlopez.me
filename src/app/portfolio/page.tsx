import { unstable_noStore as noStore } from 'next/cache'
import Link from 'next/link'

import { Main, Title } from '@/components/ui'
import fetcher from '@/lib/fetcher'

type Content = {
  list: string[]
}

export default async function Resume() {
  noStore()
  const data: Content = await fetcher(process.env.PORTFOLIO_URL!)
  const portfolio = data.list.map(item => {
    const [text, url, description] = item.split('\t')
    return {
      url,
      text,
      description,
    }
  })
  return (
    <Main className='flex flex-grow flex-col space-y-4 md:w-full md:items-center'>
      <Title>portfolio</Title>
      <ul className='grid grid-cols-1 gap-4 px-4 lg:container lg:max-w-3xl lg:grid-cols-2'>
        {portfolio.map(({ url, text, description }) => (
          <li
            key={url}
            className='relative rounded-lg bg-cobalt text-cb-white shadow md:hover:bg-cobalt/75'
          >
            <a
              className='block h-full p-4 md:text-2xl'
              href={url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='flex items-center space-x-2 font-semibold leading-tight'>
                <span className='flex-grow'>{text}</span>
              </span>
              <p>{description}</p>
            </a>
            <Link href={`/resume#${text}`} className='absolute right-4 top-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-6 w-6 text-cb-pink hover:text-cb-pink/75'
              >
                <path
                  fillRule='evenodd'
                  d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </Main>
  )
}
