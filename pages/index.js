import Head from "next/head";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
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

    a {
      color: #000000;
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
      </Head>
      <Hero />
      <StyledBlog>
        <h1>{content.blog.title.en} 📝</h1>
        <hr />
          <StyledCard>
            <div className="blog-card-wrapper">
              {allPostsData.map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <div className="blog-card">
                          <div className="blog-card-img">
                              <img src={img} alt={img_alt}></img>
                          </div>
                          <div className="blog-card-text">
                              <a>{title}</a>
                          </div>
                          <div className="blog-card-date">
                              <Date dateString={date} />
                          </div>
                          <div className="blog-card-description">
                              {description} 
                          </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </StyledCard>
      </StyledBlog>
    </Container>
  )
}