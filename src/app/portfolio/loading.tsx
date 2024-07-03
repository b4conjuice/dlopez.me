import { Main, Title } from '@/components/ui'

const portfolio = Array.from({ length: 10 }).map((_, index) => index)

export default function Loading() {
  return (
    <Main className='flex flex-grow flex-col space-y-4 py-4 md:w-full md:items-center'>
      <Title>portfolio</Title>
      <ul className='grid grid-cols-1 gap-4 px-4 lg:container lg:max-w-3xl lg:grid-cols-2'>
        {portfolio.map((_, index) => (
          <li
            key={index}
            className='relative h-20 rounded-lg bg-cobalt text-cb-white shadow md:hover:bg-cobalt/75'
          ></li>
        ))}
      </ul>
    </Main>
  )
}
