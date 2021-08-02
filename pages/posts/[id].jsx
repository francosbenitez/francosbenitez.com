import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from "next/head"
import Date from '../../components/Date'
import { StyledPost } from "../../components/Blog/styles"
import Link from "next/link"

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.description} />
            </Head>
            <br />
            <StyledPost>
              <article>
                  <p>
                      <Date dateString={postData.date} />
                  </p>
                  <h1>{postData.title}</h1>
                  <h2>{postData.description}</h2>
                  <hr />
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                  </p>
              </article>
              <div className="back-to-home">
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </StyledPost>
        </>
    )
}