import React from "react";
import { StyledFooter } from "./styles";
import GitHub from "../../public/icons/contact/github.svg";
import Email from "../../public/icons/contact/email.svg";
import LinkedIn from "../../public/icons/contact/linkedin.svg";
import Twitter from "../../public/icons/contact/twitter.svg";

const Footer = () => {
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
    <StyledFooter>
      <div className="footer-wrapper">
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} | Built with ☕️ and{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Next
            </a>{" "}
            by{" "}
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
              See the source code
            </a>
          </p>
        </div>
        <ol className="icons-container">
          {social.map((icon, i) => (
            <li className="icon-wrapper" key={i}>
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
    </StyledFooter>
  );
};

export default Footer;
