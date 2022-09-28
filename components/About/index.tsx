import React from "react";
import Avatar from "@/public/images/others/avatar.jpg";
import Image from "next/image";
import styles from "@/components/About/styles.module.css";

const About = () => {
  return (
    <section id="about" className={`section ${styles["about"]}`}>
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
          <ul className="list-disc">
            <li>Languages: TypeScript, Python</li>
            <li>Frontend Frameworks: React + Next</li>
            <li>Backend Frameworks: Express + Prisma, Django + DRF</li>
            <li>CSS Framework: Tailwind</li>
            <li>Database: PostgreSQL</li>
          </ul>
          <br></br>
          <p>
            When I&apos;m not staring at my computer, I like practising
            calisthenics or playing football!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
