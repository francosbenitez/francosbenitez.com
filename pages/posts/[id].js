import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from "next/head"
import Date from '../../components/Date'
import styled from "styled-components"
import Link from "next/link"

const StyledPost = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 6rem auto 9rem;

    h1 {
      margin: 1rem 0 1rem 0;
      font-size: 2.5rem;
      font-weight: 700;
    }

    h2 {
      margin: 1rem 0 1rem 0;
      font-size: 1.5rem;
      font-weight: 500;
    }

    p {
      margin: 1rem 0 1rem 0;
      font-size: 1rem;
      font-weight: 300;
    }

    hr {
      margin: 1rem 0 1rem 0;
    }
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
                  <p>
                      <Date dateString={postData.date} />
                  </p>
                  <h2>{postData.description}</h2>
                  <hr />
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                  </p>
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