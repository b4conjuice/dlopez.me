import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

import Page from '@/components/page'
import db from '@/lib/db'

const Resume = ({ markdown }) => (
  <Page>
    <div className='container mx-auto p-4'>
      <article
        className='prose mx-auto w-full flex-grow rounded-lg bg-white p-4 shadow prose-h1:text-center prose-a:text-cb-pink prose-strong:text-cb-pink dark:prose-invert dark:bg-cb-dark-blue lg:prose-xl'
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </div>
  </Page>
)

export const getStaticProps = async () => {
  const id = process.env.RESUME_ID
  const doc = await db.collection('notes').doc(id).get()
  const { markdown } = { id: doc.id, ...doc.data() }
  const { window } = new JSDOM('')
  const DOMPurify = createDOMPurify(window)
  return {
    props: {
      markdown: DOMPurify.sanitize(markdown),
    },
    revalidate: 1,
  }
}

export default Resume
