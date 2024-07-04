import React from "react";
import GitHub from "@/public/icons/contact/github.svg";
import Email from "@/public/icons/contact/email.svg";
import LinkedIn from "@/public/icons/contact/linkedin.svg";
import Twitter from "@/public/icons/contact/twitter.svg";
import styles from "@/components/Contact/styles.module.css";
import { FormattedMessage } from "react-intl";

const Contact = () => {
  const social = [
    {
      url: "mailto:me@francosbenitez.com",
      alt: "Mail icon",
      description: <FormattedMessage id="contact.email" />,
    },
    {
      url: "https://linkedin.com/in/francosbenitez",
      alt: "LinkedIn icon",
      description: <FormattedMessage id="contact.linkedin" />,
    },
    {
      url: "https://github.com/francosbenitez",
      alt: "GitHub icon",
      description: <FormattedMessage id="contact.github" />,
    },
    {
      url: "https://twitter.com/francosbenitez",
      alt: "Twitter icon",
      description: <FormattedMessage id="contact.twitter" />,
    },
  ];
  return (
    <section id="contact" className={`${styles["contact"]} section`}>
      <h1>
        <FormattedMessage id="contact.title.1" />{" "}
        <span>
          <FormattedMessage id="contact.title.2" />
        </span>
      </h1>
      <div className={styles["contact-container"]}>
        <div className={styles["description-container"]}>
          <p>
            <FormattedMessage id="contact.description" />
          </p>
          <ol className={styles["icons-container"]}>
            {social.map((icon, i) => (
              <li className={styles["icon-wrapper"]} key={i}>
                <a target="_blank" href={icon.url} rel="noopener noreferrer">
                  {i == 0 ? (
                    <Email alt={icon.alt} className="inline" />
                  ) : i == 1 ? (
                    <LinkedIn alt={icon.alt} className="inline" />
                  ) : i == 2 ? (
                    <GitHub alt={icon.alt} className="inline" />
                  ) : (
                    <Twitter alt={icon.alt} className="inline" />
                  )}
                  <span>{icon.description}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
        <form
          className={styles["form-container"]}
          name="contact"
          method="POST"
          action="https://formspree.io/f/xjvjaenn"
        >
          <div className={styles["form-wrapper"]}>
            <FormattedMessage id="contact.name">
              {(placeholder) => (
                <input
                  type="text"
                  name="name"
                  className={styles["form-control"]}
                  id="inputName"
                  placeholder={placeholder.toString()}
                  required
                />
              )}
            </FormattedMessage>
          </div>
          <div className={styles["form-wrapper"]}>
            <input
              type="email"
              name="email"
              className={styles["form-control"]}
              id="inputEmail"
              placeholder="Email"
              required
            />
          </div>
          <div className={styles["form-wrapper"]}>
            <FormattedMessage id="contact.message">
              {(placeholder) => (
                <textarea
                  name="message"
                  className={styles["form-control"]}
                  id="inputMessage"
                  placeholder={placeholder.toString()}
                  required
                ></textarea>
              )}
            </FormattedMessage>
          </div>
          <button type="submit" className={styles["submit-btn"]}>
            <FormattedMessage id="contact.send" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
