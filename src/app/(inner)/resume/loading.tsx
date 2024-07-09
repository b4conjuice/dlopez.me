import { Main, Markdown } from '@/components/ui'

export default function Loading() {
  return (
    <Main className='flex flex-col p-4'>
      <div className='container mx-auto p-4'>
        <Markdown content='' />
      </div>
    </Main>
  )
}
