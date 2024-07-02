import { Main, Title } from '@/components/ui'

export default function Home() {
  return (
    <Main>
      <div className='bg-milky flex items-center justify-center py-32'>
        <Title>hi my name is daniel</Title>
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
