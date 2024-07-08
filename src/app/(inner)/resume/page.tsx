import { unstable_noStore as noStore } from 'next/cache'

import { Main, Markdown } from '@/components/ui'
import fetcher from '@/lib/fetcher'
import sanitize from '@/lib/sanitize'

type Content = {
  markdown: string
}

export default async function Resume() {
  noStore()
  const data: Content = await fetcher(process.env.RESUME_URL!)
  const content = sanitize(data.markdown)
  return (
    <Main className='flex flex-col'>
      <div className='container mx-auto p-4'>
        <Markdown content={content} />
      </div>
    </Main>
  )
}
