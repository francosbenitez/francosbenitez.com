import React from 'react';
import { getSortedPostsData } from '../../lib/posts'
import Link from "next/link"
import Date from "../../components/Date"
import content from "../../lib/content.json";
import { StyledCard } from "../../styles/Cards"
import { Section } from "../../styles/Commons"
import Image from 'next/image'
import Head from "next/head"

const Blog = ({ allPostsData }) => {
    return (
        <>
        <Head>
          <title>Blog | Franco Sebastián Benítez</title>
          <meta name="description" content="Franco Sebastián Benítez's blog" />
        </Head>
        <Section id="blog">
          <div className="blog-container">
          <h1>
            All <span>{content.blog.title[1]}</span>
          </h1>
          <StyledCard>
              {allPostsData.map(({ id, date, title, description, img, img_alt }) => (
                <ol className="blog_posts" key={id}>
                  <li className="post-card">
                    {/*<div className="card-img">
                        <Image 
                        src={img} 
                        alt={img_alt} 
                        layout="responsive"
                        width={1328}
                        height={674}
                        />
                    </div>*/}
                    <div className="post-card__content">
                      <h2 className="post-card__title">
                        <Link href={`/posts/${id}`}>
                          <a className="post-card__link">
                            {title}
                          </a>
                        </Link>
                      </h2>
                      <small className="post-card__details">
                          <Date dateString={date} />
                      </small>
                      <p className="post-card__description">
                          {description} 
                      </p>
                    </div>
                  </li>
                </ol>
              ))}
          </StyledCard>
          <Link href="/" passHref>
                <a className="back-to-home">
                  <span>{content.blog.back}</span>
                </a>
          </Link>
          </div>
      </Section>
      </>
    );
};

export default Blog;

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }