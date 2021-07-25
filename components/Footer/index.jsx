import React from "react";
import { StyledFooter } from "./style"

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
            <div className="media-icons">
                Social network icons
            </div>
        </StyledFooter>
    );
};

export default Footer;