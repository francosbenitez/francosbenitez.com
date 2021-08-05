import React from 'react';
import { StyledContact } from "./styles"
import content from "../../lib/content.json";
import GitHub from '../../public/icons/contact/github.svg';
import Email from '../../public/icons/contact/email.svg';
import LinkedIn from '../../public/icons/contact/linkedin.svg';
import Twitter from '../../public/icons/contact/twitter.svg';

const Contact = () => {
    return (
        <StyledContact id="contact">
            <h1>
                {content.contact.title["1"]} <span>{content.contact.title["2"]}</span>
            </h1>
            <div className="contact-container">
                <div className="description-container">
                    <p>{content.contact.description}</p>
                    <ol className="icons-container">
                        <li className="icon-wrapper">
                            <a target="_blank" href="mailto:francosbenitez@gmail.com" rel="noopener noreferrer">
                                <Email />
                                <span>{content.contact.email}</span>
                            </a>
                        </li>
                        <li className="icon-wrapper">
                            <a target="_blank" href="https://linkedin.com/in/francosbenitez" rel="noopener noreferrer">
                                <LinkedIn />
                                <span>{content.contact.linkedin}</span>
                            </a>
                        </li>
                        <li className="icon-wrapper">
                            <a target="_blank" href="https://github.com/francosbenitez" rel="noopener noreferrer">
                                <GitHub />
                                <span>{content.contact.github}</span>
                            </a>
                        </li>
                        <li className="icon-wrapper">
                            <a target="_blank" href="https://twitter.com/francosbenitez" rel="noopener noreferrer">
                                <Twitter />
                                <span>{content.contact.twitter}</span>
                            </a>
                        </li>
                    </ol>
                </div>
                <form className="form-container" name="contact" method="POST" action="https://formspree.io/f/xjvjaenn">
                    <div className="form-wrapper">
                        <input type="text" name="name" className="form-control" id="inputName" placeholder="Name" required="" />
                    </div>
                    <div className="form-wrapper">
                        <input type="email" name="email" className="form-control" id="inputEmail" placeholder="Email" required="" />
                    </div>
                    <div className="form-wrapper">
                        <textarea name="message" className="form-control" id="inputMessage" rows="5" placeholder="Message" required=""></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send</button>
                </form>
            </div>
        </StyledContact>
    );
};

export default Contact;