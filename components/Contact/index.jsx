import React from 'react';
import { StyledContact } from "./style"

const Contact = () => {
    return (
        <StyledContact id="contact">
            <div className="description-container">
                <h1>Contact </h1>
                <p>If you like what you’ve seen on my site, I’d love for you to get in touch via my contact form or social media!</p>
                <div className="email">
                    Email me for a chat
                </div>
                <div className="linkedin">
                    Connect with me
                </div>
                <div className="github">
                    Check out my code
                </div>
                <div>
                    Follow me on Twitter
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