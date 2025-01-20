import React from "react";
import Avatar from "@/public/images/others/avatar_3.jpeg";
import Image from "next/image";
import styles from "@/components/About/styles.module.css";
import { FormattedMessage } from "react-intl";

const About = () => {
  return (
    <section id="about" className={`section ${styles["about"]}`}>
      <h1>
        <FormattedMessage id="about.title.1" />
        <span>
          <FormattedMessage id="about.title.2" />
        </span>
      </h1>
      <div className={styles["about-container"]}>
        <div>
          <Image
            src={Avatar}
            alt=""
            width={350}
            height={350}
            className="object-cover object-center rounded-2xl shadow-2xl"
          />
        </div>
        <div className={styles["description-container"]}>
          <p>
            Hello! I'm Franco, a dedicated Backend Developer passionate about software development, data, and psychology. I enjoy creating solutions that work seamlessly, leverage data effectively, and are user-friendly for everyone.
          </p>
          {/*<p>
            Hi, nice to meet you! I&apos;m a (mostly) Backend Developer
            passionate about <span>data</span>, <span>development</span>, and{" "}
            <span>psychology</span>. I love making things which use data, work
            well, and are easy-to-use for everyone. <br></br>
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
            <li>Languages: Python, JavaScript</li>
            <li>Backend Frameworks: Django, DRF</li>
            <li>Database: PostgreSQL</li>
            <li>Frontend Frameworks: React, Redux, Next</li>
            <li>Mobile Frameworks: React Native, Expo</li>
            <li>CSS Frameworks: Tailwind, Material UI</li>
          </ul>
          <br></br>
          <p>
            When I&apos;m not staring at my computer, I like practising
            calisthenics or playing football!
          </p>*/}
        </div>
      </div>
    </section>
  );
};

export default About;
