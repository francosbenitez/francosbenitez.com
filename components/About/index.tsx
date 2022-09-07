import React from "react";
import Avatar from "@/public/images/others/avatar.jpg";
import Image from "next/image";
import styles from "@/components/About/styles.module.css";

const About = () => {
  return (
    <div id={styles["about"]} className="section">
      <h1>
        About <span>Me</span>
      </h1>
      <div className={styles["about-container"]}>
        <div className={styles["avatar-container"]}>
          <div className={styles["avatar-wrapper"]}>
            <Image src={Avatar} alt="" />
          </div>
        </div>
        <div className={styles["description-container"]}>
          <p>
            Hi, nice to meet you! I&apos;m a Frontend Developer passionate about{" "}
            <span>data</span>, <span>development</span>, and{" "}
            <span>psychology</span>. I love making things which use data, work
            well and are easy-to-use for everyone. <br></br>
            <br></br>Along my psychology career and due to my great interest in
            scientific psychology, I started programming and found{" "}
            <span>a world that I love</span>. Since then, I have loved creating
            software solutions which help people develop a product, an idea, or
            simply a passion. <br></br>
            <br></br>
            Although I&apos;ve had experience with different technologies (and
            I&apos;m always open to learn new ones!), currently{" "}
            <span>my favourite tech stack</span> revolves around:
          </p>{" "}
          <br></br>
          <ul>
            <li>Languages: TypeScript, Python</li>{" "}
            <li>Frontend Frameworks: React + Next, Vue</li>
            <li>Backend Frameworks: Express + Prisma, Django</li>{" "}
            <li>CSS Frameworks: Tailwind, Styled Components</li>
            <li> Databases: PostgreSQL, MySQL</li>
          </ul>
          <br></br>
          <p>
            When I&apos;m not staring at my computer, I like practising
            calisthenics or playing football!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
