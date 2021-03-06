import React from "react";
import { StyledFooter } from "./styles"
import content from "../../lib/content.json";
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
            <ol className="icons-container" >
                {content.contact.social.map((icon, i) =>
                    <li className="icon-wrapper" key={i}>
                        <a target="_blank" href={icon.url} rel="noopener noreferrer">
                            {
                                (i == 0) ? <Email alt={icon.alt}/>
                                : (i == 1) ? <LinkedIn alt={icon.alt}/>
                                : (i == 2) ? <GitHub alt={icon.alt}/>
                                : <Twitter alt={icon.alt}/>
                            }
                        </a>
                    </li>
                )}
            </ol>
        </StyledFooter>
    );
};

export default Footer;
