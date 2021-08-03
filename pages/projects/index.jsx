import React from 'react';
import { getSortedProjectsData } from '../../lib/projects'
import Link from "next/link"
import Date from "../../components/Date"
import content from "../../lib/content.json";
import { StyledCard } from "../../styles/Card"
import { StyledProjects } from "../../components/Projects/styles"
import Image from 'next/image'
import Arrow from "../../public/icons/others/arrow.svg"

const Projects = ({ allProjectsData }) => {
    return (
        <StyledProjects id="projects">
          <h1>
            All <span>{content.projects.title["2"]}</span>
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
                <a>
                  <Arrow />
                  Back to home
                </a>
              </span>
          </Link>
      </StyledProjects>
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