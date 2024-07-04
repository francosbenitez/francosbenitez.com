import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { getSortedProjectsData } from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { AllProjectsData, AllPostsData } from "../types";
import { FormattedMessage } from "react-intl";

const Home = ({
  allProjectsData,
  allPostsData,
}: {
  allProjectsData: AllProjectsData[];
  allPostsData: AllPostsData[];
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Franco Sebastián Benítez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Franco Sebastián Benítez is a developer and psychologist based in Buenos Aires, Argentina."
        />
        <meta name="keywords" content="francosbenitez development psychology" />
        <meta name="twitter:image:src" content="/images/others/social.png" />
        <meta property="og:image" content="/images/others/social.png" />
        <meta
          name="google-site-verification"
          content="Hac1WmsMXzw_dKke-_dS0vU7nnMj8s-4gLZAu7Nyu58"
        />
      </Head>
      <Hero />
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
      <section id="blog" className="section">
        <div className="blog-container">
          <h1>
            <FormattedMessage id="blog.title.1" />
            <span>
              <FormattedMessage id="blog.title.2" />
            </span>
          </h1>
          <div className="card">
            {allPostsData
              .filter(({ featured }: { featured: boolean }) => featured == true)
              .map(({ id, date, title, description }: AllPostsData) => (
                <ol className="blog_posts" key={id}>
                  <li className="post-card">
                    <div className="post-card__content">
                      <h2 className="post-card__title">
                        <Link href={`/posts/${id}`}>
                          <a className="post-card__link">{title}</a>
                        </Link>
                      </h2>
                      <small className="post-card__details">
                        <Date dateString={date} />
                      </small>
                      <p className="post-card__description">{description}</p>
                    </div>
                  </li>
                </ol>
              ))}
            {/*</div>*/}
          </div>
          <Link href="/posts" passHref>
            <a className="see-all">
              <span>
                <FormattedMessage id="blog.see.more" /> →
              </span>
            </a>
          </Link>
        </div>
      </section>
      <Contact />
    </>
  );
};

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allProjectsData,
      allPostsData,
    },
  };
}

export default Home;
