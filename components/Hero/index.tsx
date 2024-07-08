import React from "react";
import Link from "next/link";
import Arrow from "../../public/icons/arrow.svg";
import styles from "@/components/Hero/styles.module.css";
import { FormattedMessage } from "react-intl";
import Avatar from "@/public/images/others/avatar_2.jpeg";
import Image from "next/image";

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
                <a className={styles["button"]}>
                  <FormattedMessage id="home.see.my.work" />
                </a>
              </Link>
            </div>
            <div
              className={`${styles["contact-button"]} ${styles["projects-button"]}`}
            >
              <Link href="/contact">
                <a className={styles["button"]}>
                  <FormattedMessage id="home.contact" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full justify-center basis-1/2">
          <div className="flex flex-col justify-content items-center gap-4 relative">
            <Image
              src={Avatar}
              alt=""
              width={350}
              height={350}
              className="object-cover object-center rounded-[50%]"
            />
            <p className="text-3xl absolute left-0">☕</p>
          </div>
        </div>
      </div>
      <div className={styles["arrow"]}>
        <Link href="/#projects" passHref>
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
