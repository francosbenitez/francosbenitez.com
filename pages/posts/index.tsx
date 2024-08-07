import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/Date";
import Head from "next/head";
import { AllPostsData } from "../../types";
import { FormattedMessage } from "react-intl";

const Blog = ({ allPostsData }: { allPostsData: AllPostsData[] }) => {
  return (
    <>
      <Head>
        <title>Blog | Franco Sebastián Benítez</title>
        <meta name="description" content="Franco Sebastián Benítez's blog" />
      </Head>
      <section id="blog" className="section">
        <div className="blog-container">
          <h1>
            <FormattedMessage id="blog.all.1" />{" "}
            <span>
              <FormattedMessage id="blog.all.2" />
            </span>
          </h1>
          <div className="card">
            {allPostsData.map(
              ({ id, date, title, description }: AllPostsData) => (
                <ol className="blog_posts" key={id}>
                  <li className="post-card">
                    <div className="post-card__content">
                      <h2 className="post-card__title">
                        <Link href={`/posts/${id}`}>
                          <a className="post-card__link">{title}</a>
                        </Link>
                      </h2>
                      <small className="post-card__details">
                        <Date dateString={date} />
                      </small>
                      <p className="post-card__description">{description}</p>
                    </div>
                  </li>
                </ol>
              )
            )}
          </div>
          <Link href="/" passHref>
            <a className="back-to-home">
              <span>
                ← <FormattedMessage id="back.to.home" />
              </span>
            </a>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
