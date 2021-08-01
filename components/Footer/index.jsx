import React from "react";
import { StyledFooter } from "./styles"
import GitHub from '../../public/icons/contact/github.svg';
import Email from '../../public/icons/contact/email.svg';
import LinkedIn from '../../public/icons/contact/linkedin.svg';
import Twitter from '../../public/icons/contact/twitter.svg';

const Footer = () => {
    return (
        <StyledFooter>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} | Built with ☕️ and{" "}
                    <a 
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        >Next
                    </a>{" "}by{" "}
                    <a 
                        href="https://twitter.com/francosbenitez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        >Franco Sebastián Benítez
                    </a>{" "}|{" "}
                    <a
                        href="https://github.com/francosbenitez/francosbenitez.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                        >See the source code</a
                    > 
                </p>
            </div>
            <div className="icons-container">
                <li className="icon-wrapper">
                    <a href="mailto:francosbenitez@gmail.com">
                        <Email />
                    </a>
                </li>
                <li className="icon-wrapper">
                    <a href="https://linkedin.com/in/francosbenitez">
                        <LinkedIn />
                    </a>
                </li>
                <li className="icon-wrapper">
                    <a href="https://github.com/francosbenitez">
                        <GitHub />
                    </a>
                </li>
                <li className="icon-wrapper">
                    <a href="https://twitter.com/francosbenitez">
                        <Twitter />
                    </a>
                </li>
            </div>
        </StyledFooter>
    );
};

export default Footer;
