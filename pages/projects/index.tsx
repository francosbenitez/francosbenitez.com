import React from "react";
import { getSortedProjectsData } from "../../lib/projects";
import Link from "next/link";
import Date from "../../components/Date";
import { StyledCard } from "../../styles/Cards";
import { Section } from "../../styles/Commons";
import Image from "next/image";
import Head from "next/head";
import { AllProjectsData } from "../../types";

const Projects = ({
  allProjectsData,
}: {
  allProjectsData: AllProjectsData[];
}) => {
  return (
    <>
      <Head>
        <title>Projects | Franco Sebastián Benítez</title>
        <meta
          name="description"
          content="Franco Sebastián Benítez's projects"
        />
      </Head>
      <Section id="projects">
        <div className="projects-container">
          <h1>
            All <span>Projects</span>
          </h1>
          <StyledCard>
            <ol className="projects__projects">
              {allProjectsData.map(
                ({
                  id,
                  date,
                  title,
                  description,
                  img,
                  img_alt,
                }: AllProjectsData) => (
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
                          <a className="project-card__link">{title}</a>
                        </Link>
                      </h2>
                      <small className="project-card__date">
                        <Date dateString={date} />
                      </small>
                      <p className="project-card__description">{description}</p>
                    </div>
                  </li>
                )
              )}
            </ol>
          </StyledCard>
          <Link href="/" passHref>
            <a className="back-to-home">
              <span>← Back to home</span>
            </a>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
