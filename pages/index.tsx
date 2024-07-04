import Hero from "../components/Hero";
import { getSortedProjectsData } from "../lib/projects";
import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import { AllProjectsData, AllPostsData } from "../types";
import ProjectsComponent from "@/components/Projects";
import BlogComponent from "@/components/Blog";

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
      <ProjectsComponent allProjectsData={allProjectsData} />
      <BlogComponent allPostsData={allPostsData} />
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
