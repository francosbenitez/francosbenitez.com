import React from 'react';
import { getSortedProjectsData } from '../../lib/projects'
import Link from "next/link"
import Date from "../../components/Date"
import content from "../../lib/content.json";
import { StyledCard } from "../../styles/Cards"
import { Section } from "../../styles/Commons"
import Image from 'next/image'
import Head from "next/head"

const Projects = ({ allProjectsData }) => {
    return (
        <>
        <Head>
          <title>Projects | Franco Sebastián Benítez</title>
          <meta name="description" content="Franco Sebastián Benítez's projects" />
        </Head>
        <Section id="projects">
          <div className="projects-container">
          <h1>
            All <span>{content.projects.title[1]}</span>
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
          <Link href="/" passHref>
                <a className="back-to-home">
                  <span>{content.projects.back}</span>
                </a>
          </Link>
          </div>
        </Section>
      </>
    );
};

export default Projects;

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
      props: {
        allProjectsData
      }
    }
  }