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
            <div className="projects__projects">
              {allProjectsData.map(({ id, date, title, description, img, img_alt }) => (
                <div key={id}>
                  <Link href={`/projects/${id}`}>
                    <a>
                      <div className="project-card">
                          <div className="project-card__image">
                            <div className="lazy">
                                <picture>
                                  <Image 
                                  src={img} 
                                  alt={img_alt} 
                                  layout="responsive"
                                  width={1328}
                                  height={674}
                                  />
                                </picture>
                            </div>
                          </div>
                          <div className="project-card__content">
                            <h2 className="project-card__title">
                              {title}
                            </h2>
                            <small className="project-card__date">
                              {" "}— <Date dateString={date} />
                            </small>
                            <p className="project-card__description">
                                {description} 
                            </p>
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