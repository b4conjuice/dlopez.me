import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

import Page from '@/components/page'
import db from '@/lib/db'

const Resume = ({ markdown }) => (
  <Page>
    <article
      className="p-4 mx-4 my-4 prose bg-white rounded-lg shadow lg:mx-auto lg:px-8 lg:py-4 lg:prose-xl"
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  </Page>
)

export async function getStaticProps() {
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
