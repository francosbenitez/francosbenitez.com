import React from "react";
import { StyledFooter } from "./style"
import { SocialIcon } from 'react-social-icons';
//import { ReactSVG } from 'react-svg';
//import svg_github from '../../public/icons/contact/github.svg';
//import svg_email from '../../public/icons/contact/email.svg';
//import svg_linkedin from '../../public/icons/contact/linkedin.svg';

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
                    <SocialIcon url="mailto:francosbenitez@gmail.com" />
                </li>
                <li className="icon-wrapper">
                    <SocialIcon url="https://linkedin.com/in/francosbenitez" />
                </li>
                <li className="icon-wrapper">
                    <SocialIcon url="https://github.com/francosbenitez" />
                </li>
                <li className="icon-wrapper">
                    <SocialIcon url="https://twitter.com/francosbenitez" />
                </li>
            </div>
        </StyledFooter>
    );
};

export default Footer;

{ /*
<div className="icons-container">
                <li className="icon-wrapper">
                    <ReactSVG
                    className='icon'
                    src={svg_github}
                    onClick={() => redirectTo('https://github.com/francosbenitez')}
                    />
                </li>
                <li className="icon-wrapper">
                     <ReactSVG
                    className='icon'
                    src={svg_linkedin}
                    onClick={() =>
                        redirectTo('https://linkedin.com/in/francosbenitez')
                    }
                    />
                </li>
                <li className="icon-wrapper">
                    <ReactSVG
                    className='icon'
                    src={svg_email}
                    onClick={() => redirectTo('mailto:francosbenitez@gmail.com')}
                    />
                </li>
                <li className="icon-wrapper">
                    <SocialIcon url="https://twitter.com/francosbenitez" />
                </li>
            </div>
*/ }