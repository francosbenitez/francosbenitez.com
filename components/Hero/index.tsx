import React from "react";
import { HeroImage } from "./HeroImage";
import Link from "next/link";
import Arrow from "../../public/icons/arrow.svg";
import styles from "@/components/Hero/styles.module.css";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-container"]}>
        <div className={styles["hero-description"]}>
          <h1>
            <FormattedMessage id="home.title" />
            <br />
            <span> Franco Sebastián Benítez</span>
          </h1>
          <h2 style={{ marginBottom: "0.5rem" }}>
            <FormattedMessage id="home.job.1" />
          </h2>
          <h2>
            <FormattedMessage id="home.job.2" />
          </h2>
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
