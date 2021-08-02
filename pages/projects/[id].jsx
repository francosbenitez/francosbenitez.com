import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from "next/head"
import Date from '../../components/Date'
import { StyledProjectsPosts, StyledProjectsCard } from "../../components/Projects/styles"
import Link from "next/link"

export async function getStaticProps({ params }) {
    const projectData = await getProjectData(params.id)
    return {
      props: {
        projectData
      }
    }
  }

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export default function Project({ projectData }) {
  return (
      <>
          <Head>
              <title>{projectData.title}</title>
              <meta name="description" content={projectData.description} />
          </Head>
          <br />
          <StyledProjectsPosts>
            <article>
                <StyledProjectsCard>
                  <div className="tools">
                    <p className="tools-used">TOOLS USED</p>
                    <p>{projectData.tools_used}</p>
                    <hr />
                    <p>
                      <a href={`${projectData.github_url}`}>
                        GitHub repository
                      </a>
                    </p>
                  </div>
                  <div className="link">
                    <p className="published">PUBLISHED</p>
                    <p>{projectData.published}</p>
                    <hr />
                    <p>
                      <a href={`${projectData.live_url}`}>
                        Live URL
                      </a>
                    </p>
                  </div>
                </StyledProjectsCard>
                <p className="date">
                  <Date dateString={projectData.date} />
                </p>
                <h1>{projectData.title}</h1>
                <h2>{projectData.description}</h2>
                <hr />
                <p>
                  <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                </p>
            </article>
            <div>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </StyledProjectsPosts>
      </>
  )
}