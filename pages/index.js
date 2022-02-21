import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import NewsletterForm from '@/components/NewsletterForm'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hey! I’m Chris Yin
            </h1>
            <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
              {`Welcome to my site! I'm an investor, entrepreneur & degen. I love startups, investing, books, films, and food. You can check out some of my `}
              <Link href="/blog">writing</Link>
              {' here. Ping me anytime on '}
              <Link href="mailto:christopher.e.yin@gmail.com">email</Link>
              {' or '}
              <Link href="twitter.com/chriseyin">twitter</Link>
              {'. See you around!'}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
