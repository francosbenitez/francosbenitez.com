import Head from "next/head";
import styled from "styled-components";
import Hero from "../components/Hero";
import { getSortedPostsData } from '../lib/posts'
import Link from "next/link"
import Date from "../components/Date"
import React from "react";
import content from "../lib/content.json";
import { StyledBlog, StyledCard } from "../components/Blog/style"
import Contact from "../components/Contact"
import About from "../components/about"

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

export default function Home({ allPostsData }) {
  return (
    <Container>
      <Head>
        <title>Franco Sebastián Benítez</title>
        <meta name="description" content="Data, design, and development." />
        <meta name="keywords" content="francosbenitez data design development" />
      </Head>
      <Hero />
      <About />
      <StyledBlog id="blog">
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
      <Contact />
    </Container>
  )
}