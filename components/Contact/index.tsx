import React from "react";
import GitHub from "@/public/icons/contact/github.svg";
import Email from "@/public/icons/contact/email.svg";
import LinkedIn from "@/public/icons/contact/linkedin.svg";
import Twitter from "@/public/icons/contact/twitter.svg";
import styles from "@/components/Contact/styles.module.css";

const Contact = () => {
  const social = [
    {
      url: "mailto:francosbenitez@gmail.com",
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
    <section id="contact" className={`${styles["contact"]} section`}>
      <h1>
        Contact <span>Me</span>
      </h1>
      <div className={styles["contact-container"]}>
        <div className={styles["description-container"]}>
          <p>
            If you would like us to talk, feel free to reach out via my contact
            form or social media!
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
            <input
              type="text"
              name="name"
              className={styles["form-control"]}
              id="inputName"
              placeholder="Name"
              required
            />
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
            <textarea
              name="message"
              className={styles["form-control"]}
              id="inputMessage"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles["submit-btn"]}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
