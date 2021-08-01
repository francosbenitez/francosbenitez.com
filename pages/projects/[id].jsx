import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from "next/head"
import Date from '../../components/Date.js'
import { StyledProjects, StyledProjectsCard } from "./styles"
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
          <StyledProjects>
            <article>
                <StyledProjectsCard>
                  <div className="tools">
                    <p>TOOLS USED</p>
                    <p>Next, React, styled-components</p>
                    <hr />
                    <p><a>GitHub repository</a></p>
                  </div>
                  <div className="link">
                    <p>PUBLISHED</p>
                    <p>29/07/2021</p>
                    <hr />
                    <p><a>Live URL</a></p>
                  </div>
                </StyledProjectsCard>
                <p>
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
          </StyledProjects>
      </>
  )
}