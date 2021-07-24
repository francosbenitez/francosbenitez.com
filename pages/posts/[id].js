import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from "next/head"
import Date from '../../components/Date'
import styled from "styled-components"
import Link from "next/link"

const StyledPost = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
`

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
                  <h1>{postData.title}</h1>
                  <div>
                      <Date dateString={postData.date} />
                  </div>
                  <p>{postData.description}</p>
                  <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
              </article>
              <br />
              <div>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </StyledPost>
        </>
    )
}