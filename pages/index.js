import Head from "next/head";
import Hero from "../components/Hero";
import { getSortedPostsData } from '../lib/posts'
import { getSortedProjectsData } from "../lib/projects"
import Link from "next/link"
import Date from "../components/Date"
import React from "react";
import content from "../lib/content.json";
import { StyledCard } from "../styles/Cards"
import { Section } from "../styles/Commons"
import Contact from "../components/Contact"
import About from "../components/About"
import Image from 'next/image'

export default function Home({ allPostsData, allProjectsData }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Franco Sebastián Benítez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Data, design, and development." />
        <meta name="keywords" content="francosbenitez data design development" /> 
        <meta name="Content-language" content="en" />
        <link rel="alternate" hrefLang="en" href="https://francosbenitez.vercel.app/" />
        <link rel="canonical" href="https://francosbenitez.vercel.app/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Franco Sebastián Benítez" />
        <meta name="twitter:site" content="@francosbenitez" />
        <meta name="twitter:creator" content="@francosbenitez" />
        <meta name="twitter:url" content="https://francosbenitez.vercel.app/" />
        <meta name="twitter:description" content="Data, design, and development." />
        <meta name="twitter:image" content="/images/others/social.png" />
        <meta name="application-name" content="francosbenitez" />
        {/* <meta property="og:title" content="francosbenitez" /> */}
        {/* <meta property="og:site_name" content="francosbenitez" /> */}
        <meta property="og:url" content="https://francosbenitez.vercel.app/" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:description" content="Data, design, and development." />
        <meta property="og:image" content="/images/others/social.png" />
        <meta property="og:image:width" content="1243" />
        <meta property="og:image:height" content="458" />
      </Head>
      <Hero />
      <About />
      <Section id="projects">
          <div className="projects-container">
          <h1>
          {content.projects.title[0]} <span>{content.projects.title[1]}</span>
          </h1>
          <StyledCard>
            <div className="card-wrapper">
              {allProjectsData.filter(({ featured }) => featured == true)
              .map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/projects/${id}`}>
                    <a>
                      <div className="card">
                          <div className="card-img">
                              <Image 
                              src={img} 
                              alt={img_alt} 
                              layout="responsive"
                              width={1328}
                              height={674}
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
                <a className="see-all">
                  <span>{content.projects.see_more}</span>
                </a>
          </Link>
          </div>
      </Section>
      <Section id="blog">
          <div className="blog-container">
          <h1>
            {content.blog.title[0]} <span>{content.blog.title[1]}</span>
          </h1>
          <StyledCard>
            <div className="card-wrapper">
              {allPostsData.filter(({ featured }) => featured == true)
              .map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <div className="card">
                          <div className="card-img">
                              <Image 
                              src={img} 
                              alt={img_alt} 
                              layout="responsive"
                              width={1328}
                              height={674}
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
                <a className="see-all">
                  <span>{content.blog.see_more}</span>
                </a>
          </Link>
          </div>
      </Section>
      <Contact />
    </>
  )
}

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