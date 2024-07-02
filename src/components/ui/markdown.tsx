export default function Markdown({ content }: { content: string }) {
  return (
    <article
      className='prose mx-auto w-full flex-grow rounded bg-cb-blue p-4 text-cb-white shadow lg:prose-xl prose-headings:text-cb-white prose-h1:text-center prose-a:text-cb-pink hover:prose-a:text-cb-pink/75 prose-strong:text-inherit prose-code:text-cb-mint'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
