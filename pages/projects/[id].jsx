import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Head from "next/head"
import Date from '../../components/Date'
import { StyledProjects } from "./style"
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
            <br />
            <div>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </StyledProjects>
      </>
  )
}