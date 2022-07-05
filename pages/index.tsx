import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import { getSortedProjectsData } from "../lib/projects";
import Date from "../components/Date";
import { Section } from "../styles/Commons";
import { StyledCard } from "../styles/Cards";
import Image from "next/image";
import Link from "next/link";

const Home = ({ allProjectsData }: { allProjectsData: any }) => {
  return (
    <>
      <Hero />
      <About />
      <Section id="projects">
        <div className="projects-container">
          <h1>
            Featured <span>Projects</span>
          </h1>
          <StyledCard>
            <ol className="projects__projects">
              {allProjectsData
                .filter(({ featured }: { featured: any }) => featured == true)
                .map(
                  ({
                    id,
                    date,
                    title,
                    description,
                    img,
                    img_alt,
                  }: {
                    id: any;
                    date: any;
                    title: any;
                    description: any;
                    img: any;
                    img_alt: any;
                  }) => (
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
          </StyledCard>
          <Link href="/projects" passHref>
            <a className="see-all">
              <span>See more projects →</span>
            </a>
          </Link>
        </div>
      </Section>
      <Contact />
    </>
  );
};

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default Home;
