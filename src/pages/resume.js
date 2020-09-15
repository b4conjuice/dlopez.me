import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

import Page from '@/components/page'
import db from '@/lib/db'

const Resume = ({ markdown }) => (
  <Page>
    <article
      className="flex-grow p-4 m-4 prose bg-white rounded-lg shadow lg:mx-auto lg:px-8 lg:py-4 lg:prose-xl lg:container lg:max-w-3xl dark:bg-cb-dark-blue"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
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
