import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import { getSortedProjectsData } from "../lib/projects";
import Date from "../components/Date";
import { Section } from "../styles/Commons";
import { StyledCard } from "../styles/Cards";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Home = ({ allProjectsData }: { allProjectsData: any }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Franco Sebastián Benítez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Franco Sebastián Benítez is a web developer, designer, and psychologist based in Buenos Aires, Argentina."
        />
        <meta
          name="keywords"
          content="francosbenitez data design development"
        />
        <meta name="twitter:image:src" content="/images/others/social.png" />
        <meta property="og:image" content="/images/others/social.png" />
        <meta
          name="google-site-verification"
          content="Hac1WmsMXzw_dKke-_dS0vU7nnMj8s-4gLZAu7Nyu58"
        />
      </Head>
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
