import Link from 'next/link'

import Page from '@/components/page'
import Title from '@/components/title'
import db from '@/lib/db'

const Portfolio = ({ portfolio }) => (
  <Page>
    <main className="flex flex-col flex-grow space-y-4 md:w-full md:items-center">
      <Title className="text-cobalt">portfolio</Title>
      <ul className="px-4 space-y-4 md:flex md:space-y-0 md:space-x-4">
        {portfolio.map(({ url, text, description }) => (
          <li
            key={url}
            className="bg-white rounded-lg shadow md:hover:bg-blue-100 md:w-1/2 text-cobalt"
          >
            <a
              className="block p-4 md:text-2xl"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center space-x-2 font-semibold leading-tight">
                <span className="flex-grow">{text}</span>
                <Link href={`/resume#${text}`}>
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-6 h-6 fill-current hover:text-cb-pink"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </Link>
              </span>
              <p>{description}</p>
            </a>
          </li>
        ))}
      </ul>
    </main>
  </Page>
)

export async function getStaticProps() {
  const id = process.env.PORTFOLIO_ID
  const doc = await db.collection('notes').doc(id).get()
  const note = { id: doc.id, ...doc.data() }
  return {
    props: {
      portfolio: note.list.map(item => {
        const [text, url, description] = item.split('\t')
        return {
          url,
          text,
          description,
        }
      }),
    },
    revalidate: 1,
  }
}

export default Portfolio
