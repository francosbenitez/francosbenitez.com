import Head from "next/head";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
// import Blog from "../components/Blog";
import { getSortedPostsData } from '../lib/posts'
import Link from "next/link"
import Date from "../components/Date"
import React from "react";
import content from "../lib/content.json";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

const Container = styled.div`
  margin: 0 5rem;
`;

const StyledBlog = styled.section`
    h1 {
        color: ${(props) => props.theme.primary};
    }
`;

const StyledCard = styled.div`
    .blog-card-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: left;
      margin: 0 auto;
      max-width: 75vw;
  }

    .blog-card {
      width: 250px;
      height: auto;
      box-shadow:
        -webkit-transition: box-shadow 0.6s linear;
      transition: box-shadow 0.2s linear;
      margin: 0.5em;
      border: 1px solid rgba(0,0,0,0.125);
      border-radius: 20px;
      border-style: solid;
      border-color: #000000;
      overflow: hidden;
      padding: 3rem 2rem;
      cursor: pointer;
    }

    .blog-card:hover {
      box-shadow: 6px 6px 2px 0px #2079c7;
    }

    .blog-card-img {
      margin-bottom: 1rem;
      overflow: hidden;
    }

    .blog-card-img img {
      width: 250px;
      height: auto;
      object-position: cover;
      overflow: hidden;
    }

    .blog-card-text {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .blog-card-date {
        font-size: 1rem;
        font-weight: 300;
    }

    .blog-card-description {
        margin-top: 1rem;
        font-size: .8rem;
        font-weight: 500;
    }

    @media screen and (max-width: 719px) {
        
    }
`

export default function Home({ allPostsData }) {
  return (
    <Container>
      <Head>
        <title>Franco Sebastián Benítez</title>
        <meta name="description" content="Data, design, and development." />
        <meta name="keywords" content="francosbenitez data design development" />
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Hero />
      <StyledBlog>
            <h1>{content.blog.title.en} 📝</h1>
            <hr />
            <StyledCard>
              <div className="blog-card-wrapper">
                  {allPostsData.map(({ id, date, title, description, img, img_alt }) => (
                    <Link href={`/posts/${id}`}>
                      <div className="blog-card">
                          <div className="blog-card-img">
                              <img src={img} alt={img_alt}></img>
                          </div>
                          <div className="blog-card-text" key={id}>
                              <a>{title}</a>
                          </div>
                          <div className="blog-card-date">
                              <Date dateString={date} />
                          </div>
                          <div className="blog-card-description">
                              {description} 
                          </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </StyledCard>
        </StyledBlog>
      <Footer />
    </Container>
  )
}
