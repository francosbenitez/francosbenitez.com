import React from "react";
import GitHub from "@/public/icons/contact/github.svg";
import Email from "@/public/icons/contact/email.svg";
import LinkedIn from "@/public/icons/contact/linkedin.svg";
import Twitter from "@/public/icons/contact/twitter.svg";
import styles from "@/components/Footer/styles.module.css";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  const social = [
    {
      url: "mailto:me@francosbenitez.com",
      alt: "Mail icon",
      description: "Email me for a chat",
    },
    {
      url: "https://linkedin.com/in/francosbenitez",
      alt: "LinkedIn icon",
      description: "Connect with me",
    },
    {
      url: "https://github.com/francosbenitez",
      alt: "GitHub icon",
      description: "Check out my code",
    },
    {
      url: "https://twitter.com/francosbenitez",
      alt: "Twitter icon",
      description: "Follow me on Twitter",
    },
  ];

  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["copyright"]}>
          <p>
            &copy; {new Date().getFullYear()} |{" "}
            <FormattedMessage id="footer.built.with" /> ☕️{" "}
            <FormattedMessage id="footer.and" />{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Next
            </a>{" "}
            <FormattedMessage id="footer.by" />{" "}
            <a
              href="https://twitter.com/francosbenitez"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Franco Sebastián Benítez
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/francosbenitez/francosbenitez.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FormattedMessage id="footer.see.source" />
            </a>
          </p>
        </div>
        <ol className={styles["icons-container"]}>
          {social.map((icon, i) => (
            <li className={styles["icon-wrapper"]} key={i}>
              <a target="_blank" href={icon.url} rel="noopener noreferrer">
                {i == 0 ? (
                  <Email alt={icon.alt} />
                ) : i == 1 ? (
                  <LinkedIn alt={icon.alt} />
                ) : i == 2 ? (
                  <GitHub alt={icon.alt} />
                ) : (
                  <Twitter alt={icon.alt} />
                )}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Footer;
