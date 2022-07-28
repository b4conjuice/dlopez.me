import Page from '@/components/page'
import Title from '@/components/title'

const Home = () => (
  <Page>
    <main className='flex-grow'>
      <div className='flex items-center justify-center bg-milky py-32'>
        <Title className='text-gray-100'>hi my name is daniel</Title>
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
    </main>
  </Page>
)

export default Home
