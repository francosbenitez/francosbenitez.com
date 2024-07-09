import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";
import Link from "next/link";
import { AllPostsData } from "../../types";
import { FormattedMessage } from "react-intl";

interface PostData extends AllPostsData {
  contentHtml: string;
}

export default function Post({ postData }: { postData: PostData }) {
  const postDataFormatted = postData.title + " | Franco Sebastián Benítez";
  return (
    <>
      <Head>
        <title>{postDataFormatted}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <br />
      <div className="post">
        <article>
          <h1 style={{ overflowWrap: "break-word" }}>{postData.title}</h1>
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
              <a>
                ← <FormattedMessage id="back.to.home" />
              </a>
            </Link>
          </span>
          <span className="go-to-all">
            <Link href="/posts">
              <a>
                <FormattedMessage id="blog.see.more" /> →
              </a>
            </Link>
          </span>
        </div>
      </div>
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
