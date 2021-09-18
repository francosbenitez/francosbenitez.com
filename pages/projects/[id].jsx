import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from "next/head"
import Date from '../../components/Date'
import { Posts } from "../../styles/Commons"
import { StyledProjectsCard } from "../../styles/Cards"
import Link from "next/link"

export default function Project({ projectData }) {
  return (
      <>
          <Head>
              <title>{projectData.title}</title>
              <meta name="description" content={projectData.description} />
          </Head>
          <br />
          <Posts>
            <article>
                <StyledProjectsCard>
                  <div className="tools">
                    <p className="tools-used">TOOLS USED</p>
                    <p>{projectData.tools_used}</p>
                    <hr />
                    <p>
                      <a href={`${projectData.github_url}`} target="_blank" rel="noopener noreferrer">
                        GitHub repository
                      </a>
                    </p>
                  </div>
                  <div className="link">
                    <p className="published">PUBLISHED</p>
                    <p><Date dateString={projectData.date} /></p>
                    <hr />
                    <p>
                      {
                        (projectData.live_url == false) ?
                          <p>Live not available</p> :
                          <a href={`${projectData.live_url}`} target="_blank" rel="noopener noreferrer">
                            Live URL
                          </a>
                      }
                    </p>
                  </div>
                </StyledProjectsCard>
                {/*<p className="date">
                  <Date dateString={projectData.date} />
                </p>*/}
                <h1>{projectData.title}</h1>
                <h2>{projectData.description}</h2>
                <hr />
                <p>
                  <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
                </p>
            </article>
            <div className="back-and-go">
              <span className="back-to-home">
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </span>
              <span className="go-to-all">
                <Link href="/projects">
                  <a>See more projects →</a>
                </Link>
              </span>
            </div>
          </Posts>
      </>
  )
}

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
