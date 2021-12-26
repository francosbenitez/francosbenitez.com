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
        <meta name="description" content="Franco Sebastián Benítez is a web developer, designer, and psychologist based in Buenos Aires, Argentina." />
        <meta name="keywords" content="francosbenitez data design development" /> 
        <meta name="twitter:image:src" content="/images/others/social.png" />
        <meta property="og:image" content="/images/others/social.png" />
        <meta name="google-site-verification" content="Hac1WmsMXzw_dKke-_dS0vU7nnMj8s-4gLZAu7Nyu58" />
      </Head>
      <Hero />
      <About />
      <Section id="projects">
          <div className="projects-container">
          <h1>
          {content.projects.title[0]} <span>{content.projects.title[1]}</span>
          </h1>
          <StyledCard>
            <ol className="projects__projects">
              {allProjectsData.filter(({ featured }) => featured == true)
              .map(({ id, date, title, description, img, img_alt }) => (
                <li className="project-card" key={id}>
                  <div className="project-card__image">
                    <div className="lazy">
                      <picture>
                        <Image 
                        src={img} 
                        alt={img_alt} 
                        className="lazy__image lazy__image--loaded"
                        layout="responsive"
                        width={1400}
                        height={700}
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="project-card__content">
                    <h2 className="project-card__title">
                      <Link href={`/projects/${id}`}>
                        <a className="project-card__link">
                      {title}
                        </a>
                      </Link>
                    </h2>
                    <small className="project-card__date">
                      <Date dateString={date} />
                    </small>
                    <p className="project-card__description">
                        {description} 
                    </p>
                  </div>
                </li>
              ))}
            </ol>
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
            {/*<div className="card-wrapper">*/}
              {allPostsData.filter(({ featured }) => featured == true)
              .map(({ id, date, title, description, img, img_alt }) => (
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
            {/*</div>*/}
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
