import Head from "next/head";
import Hero from "../components/Hero";
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from "../lib/projects"
import Link from "next/link"
import Date from "../components/Date.js"
import React from "react";
import content from "../lib/content.json";
import { StyledCard } from "../styles/card"
import { StyledBlog } from "../components/Blog/styles"
import { StyledProjects } from "../components/Projects/styles"
import Contact from "../components/Contact"
import About from "../components/about"
import Image from 'next/image'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allPostsData,
      allProjectsData
    }
  }
}

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <>
      <Head>
        <title>Franco Sebastián Benítez</title>
        <meta name="description" content="Data, design, and development." />
        <meta name="keywords" content="francosbenitez data design development" /> 
      </Head>
      <Hero />
      <About />
      <StyledProjects id="projects">
          <h1>
          {content.projects.title["1"]} <span>{content.projects.title["2"]}</span>
          </h1>
          <StyledCard>
            <div className="card-wrapper">
              {allProjectsData.map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/projects/${id}`}>
                    <a>
                      <div className="card">
                          <div className="card-img">
                              <Image 
                              src={img} 
                              alt={img_alt} 
                              width={100}
                              height={100}
                              />
                          </div>
                          <div className="card-text">
                              {title}
                          </div>
                          <div className="card-date">
                              <Date dateString={date} />
                          </div>
                          <div className="card-description">
                              {description} 
                          </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </StyledCard>
          <Link href="/projects" passHref>
             <span className="see-all">
                <a href="/projects">{content.projects.see_more}</a>
              </span>
          </Link>
      </StyledProjects>
      <StyledBlog id="blog">
          <h1>
            {content.blog.title["1"]} <span>{content.blog.title["2"]}</span>
          </h1>
          <StyledCard>
            <div className="card-wrapper">
              {allPostsData.map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <div className="card">
                          <div className="card-img">
                              <Image 
                              src={img} 
                              alt={img_alt} 
                              width={100}
                              height={100}
                              />
                          </div>
                          <div className="card-text">
                              {title}
                          </div>
                          <div className="card-date">
                              <Date dateString={date} />
                          </div>
                          <div className="card-description">
                              {description} 
                          </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </StyledCard>
          <Link href="/posts" passHref>
             <span className="see-all">
                <a href="/posts">{content.blog.see_more}</a>
              </span>
          </Link>
      </StyledBlog>
      <Contact />
    </>
  )
}