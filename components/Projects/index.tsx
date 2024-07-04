import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import FadeIn from "@/components/FadeIn";
import { AllProjectsData } from "@/types";
import Date from "@/components/Date";
import Link from "next/link";

const ProjectsComponent = ({
  allProjectsData,
}: {
  allProjectsData: AllProjectsData[];
}) => {
  return (
    <FadeIn>
      <section id="projects" className="section">
        <div className="projects-container">
          <h1>
            <FormattedMessage id="projects.title.1" />
            <span>
              <FormattedMessage id="projects.title.2" />
            </span>
          </h1>
          <div className="card">
            <ol className="projects__projects">
              {allProjectsData
                .filter(
                  ({ featured }: { featured: boolean }) => featured == true
                )
                .map(
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
                        <p className="project-card__description">
                          {description}
                        </p>
                      </div>
                    </li>
                  )
                )}
            </ol>
          </div>
          <Link href="/projects" passHref>
            <a className="see-all">
              <span>
                <FormattedMessage id="projects.see.more" /> →
              </span>
            </a>
          </Link>
        </div>
      </section>
    </FadeIn>
  );
};

export default ProjectsComponent;
