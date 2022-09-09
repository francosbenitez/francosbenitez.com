import React from "react";
import { getSortedProjectsData } from "../../lib/projects";
import Link from "next/link";
import Date from "../../components/Date";
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
      <section id="projects" className="section">
        <div className="projects-container">
          <h1>
            All <span>Personal Projects</span>
          </h1>
          <div className="card">
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
          </div>
          <Link href="/" passHref>
            <a className="back-to-home">
              <span>← Back to home</span>
            </a>
          </Link>
        </div>
      </section>
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
