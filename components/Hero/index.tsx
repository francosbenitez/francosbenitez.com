import React from "react";
import { HeroImage } from "./HeroImage";
import Link from "next/link";
import Arrow from "../../public/icons/arrow.svg";
import styles from "@/components/Hero/styles.module.css";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-description"]}>
          <h1>
            Hi, I&apos;m
            <br />
            <span> Franco Sebastián Benítez</span>
          </h1>
          <h2>👨🏻‍💻 Developer, 🧠 Psychologist</h2>
          <div className={styles["buttons"]}>
            <div className={styles["projects-button"]}>
              <Link href="/#projects">
                <a className={styles["button"]}>See my work</a>
              </Link>
            </div>
            <div
              className={`${styles["contact-button"]} ${styles["projects-button"]}`}
            >
              <Link href="/#contact">
                <a className={styles["button"]}>Contact me</a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles["hero-img"]}>
          <HeroImage />
        </div>
      </div>
      <div className={styles["arrow"]}>
        <Link href="/#about" passHref>
          <a>
            <Arrow className={styles["firstArrow"]} />
            <Arrow className={styles["secondArrow"]} />
            <Arrow className={styles["thirdArrow"]} />
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
