import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import { Posts } from "../../styles/Commons";
import Link from "next/link";
import { AllPostsData } from "../../types";

interface PostData extends AllPostsData {
  contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <>
      <Head>
        <title>{postData.title} | Franco Sebastián Benítez</title>
        <meta name="description" content={postData.description} />
      </Head>
      <br />
      <Posts>
        <article>
          <h1>{postData.title}</h1>
          <p className="article-date">
            <Date dateString={postData.date} />
          </p>
          <h2>{postData.description}</h2>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        <hr />
        <div className="back-and-go">
          <span className="back-to-home">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </span>
          <span className="go-to-all">
            <Link href="/posts">
              <a>Read more blog posts →</a>
            </Link>
          </span>
        </div>
      </Posts>
    </>
  );
}

export async function getStaticProps({ params }: { params: PostData }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
