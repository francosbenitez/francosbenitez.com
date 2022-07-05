import type { NextPage } from "next";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
