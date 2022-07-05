import type { NextPage } from "next";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
    </>
  );
};

export default Home;
