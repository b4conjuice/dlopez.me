import { Main, Title } from '@/components/ui'
import { DEFAULT_TITLE } from '@/app/layout'

export default function Home() {
  return (
    <Main>
      <div className='flex items-center justify-center bg-milky py-32'>
        <Title>{DEFAULT_TITLE}</Title>
      </div>
      <div className='flex -translate-y-16 transform items-center justify-center'>
        <a
          className='mx-auto'
          href='https://www.linkedin.com/in/daniel-lopez-a7483871'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='rounded-full' src='/img/me.jpg' alt='daniel' />
        </a>
      </div>
    </Main>
  )
}
