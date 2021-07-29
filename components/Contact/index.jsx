import React from 'react';
import { StyledContact } from "./style"
import content from "../../lib/content.json";

const Contact = () => {
    return (
        <StyledContact id="contact">
            <div className="description-container">
                <h1>{content.contact.title}</h1>
                <p>{content.contact.description}</p>
                <div className="email">
                    <p>{content.contact.email}</p>
                </div>
                <div className="linkedin">
                    <p>{content.contact.linkedin}</p>
                </div>
                <div className="github">
                    <p>{content.contact.github}</p>
                </div>
                <div className="twitter">
                    <p>{content.contact.twitter}</p>
                </div>
            </div>
            <form className="form-container" name="contact" method="POST" action="https://formspree.io/f/mleadzdo">
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
        </StyledContact>
    );
};

export default Contact;