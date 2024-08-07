import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Head from "next/head";
import Date from "../../components/Date";
import Link from "next/link";
import Forbidden from "../../public/icons/forbidden.svg";
import { AllProjectsData } from "../../types";
import { FormattedMessage } from "react-intl";

interface ProjectData extends AllProjectsData {
  contentHtml: string;
}

export default function Project({ projectData }: { projectData: ProjectData }) {
  const projectDataFormatted =
    projectData.title + " | Franco Sebastián Benítez";
  return (
    <>
      <Head>
        <title>{projectDataFormatted}</title>
        <meta name="description" content={projectData.description} />
      </Head>
      <br />
      <div className="post">
        <article>
          <div className="projects-card">
            <div className="columns">
              <div className="column">
                <article className="card" style={{ opacity: 1 }}>
                  <div className="card-content">
                    <div className="content">
                      <div className="text-centered">
                        <p className="title">TOOLS USED</p>
                        <p>{projectData.tools_used}</p>
                      </div>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <span className="card-footer-item">
                      <a
                        href={`${projectData.github_url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub repository
                      </a>
                    </span>
                  </footer>
                </article>
              </div>
              <div className="column">
                <article className="card" style={{ opacity: 1 }}>
                  <div className="card-content">
                    <div className="content">
                      <div className="text-centered">
                        <p className="title">PUBLISHED</p>
                        <p>
                          <Date dateString={projectData.date} />
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer className="card-footer">
                    <span className="card-footer-item">
                      {!projectData.live_url ? (
                        <Forbidden />
                      ) : (
                        <a
                          href={`${projectData.live_url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live URL
                        </a>
                      )}
                    </span>
                  </footer>
                </article>
              </div>
            </div>
          </div>
          <h1 style={{ overflowWrap: "break-word" }}>{projectData.title}</h1>
          <h2>{projectData.description}</h2>
          <hr />
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </article>
        <hr />
        <div className="back-and-go">
          <span className="back-to-home">
            <Link href="/">
              <a>
                ← <FormattedMessage id="back.to.home" />
              </a>
            </Link>
          </span>
          <span className="go-to-all">
            <Link href="/projects">
              <a>
                <FormattedMessage id="projects.see.more" /> →
              </a>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: { params: ProjectData }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}
