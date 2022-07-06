import React from "react";
import { StyledAbout } from "./styles";
import Avatar from "../../public/images/others/avatar.jpg";
import Image from "next/image";
import { StyledSkillsCard } from "../../styles/Cards";

const About = () => {
  const techFunc = (content: any) => {
    return content.map((tech: any, i: any) => {
      return (
        <div key={i} className="item">
          <Image src={tech.url} alt={tech.name} width={30} height={30} />
          <h4>{tech.name}</h4>
        </div>
      );
    });
  };

  return (
    <StyledAbout id="about">
      <h1>
        About <span>Me</span>
      </h1>
      <div className="about-container">
        <div className="avatar-container">
          <div className="avatar-wrapper">
            <Image src={Avatar} alt="" />
          </div>
        </div>
        <div className="description-container">
          <p>
            Hi, nice to meet you! I&apos;m a Frontend Developer passionate about{" "}
            <span>development</span>, <span>design</span>, and{" "}
            <span>psychology</span>. I love making things which work well, look
            good and are easy-to-use for everyone. <br></br>
            <br></br>Along my psychology career and due to my great interest in
            scientific psychology, I started programming and found{" "}
            <span>a world that I love</span>. Since then, I have loved creating
            software solutions which help people develop a product, an idea, or
            simply a passion. <br></br>
            <br></br>The following are some <span>technologies</span> that I
            currently feel acquainted with:
          </p>
        </div>
      </div>
      <StyledSkillsCard>
        <div className="cardsGrid">
          <div className="cardWrapper">
            <h3>Front-end</h3>
            <div className="card">
              <div className="row">
                {techFunc([
                  {
                    name: "JavaScript",
                    url: "/icons/tech/javascript.svg",
                  },
                  {
                    name: "CSS",
                    url: "/icons/tech/css.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "TypeScript",
                    url: "/icons/tech/typescript.svg",
                  },
                  {
                    name: "React",
                    url: "/icons/tech/react.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "Next",
                    url: "/icons/tech/next.svg",
                  },
                  {
                    name: "HTML",
                    url: "/icons/tech/html.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "Styled Components",
                    url: "/icons/tech/styled.svg",
                  },
                ])}
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <h3>Back-end</h3>
            <div className="card">
              <div className="row">
                {techFunc([
                  {
                    name: "Python",
                    url: "/icons/tech/python.svg",
                  },
                  {
                    name: "TypeScript",
                    url: "/icons/tech/typescript.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "JavaScript",
                    url: "/icons/tech/javascript.svg",
                  },
                  {
                    name: "MongoDB",
                    url: "/icons/tech/mongo.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "MySQL",
                    url: "/icons/tech/mysql.svg",
                  },
                  {
                    name: "Express",
                    url: "/icons/tech/express.svg",
                  },
                ])}
              </div>
            </div>
          </div>
          <div className="cardWrapper">
            <h3>Miscellaneous</h3>
            <div className="card">
              <div className="row">
                {techFunc([
                  {
                    name: "Git",
                    url: "/icons/tech/git.svg",
                  },
                  {
                    name: "R",
                    url: "/icons/tech/r.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "Figma",
                    url: "/icons/tech/figma.svg",
                  },
                  {
                    name: "D3",
                    url: "/icons/tech/d3.svg",
                  },
                ])}
              </div>
              <div className="row">
                {techFunc([
                  {
                    name: "Adobe Illustrator",
                    url: "/icons/tech/illustrator.svg",
                  },
                ])}
              </div>
            </div>
          </div>
        </div>
      </StyledSkillsCard>
      <div className="about-container">
        <div className="avatar-container">
          <div className="avatar-wrapper"></div>
        </div>
        <div
          className="description-container"
          style={{ padding: "0 0 0 0", margin: "0 0 0 0" }}
        >
          <p>
            When I&apos;m not staring at my computer, I like practising
            calisthenics or playing football!
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
