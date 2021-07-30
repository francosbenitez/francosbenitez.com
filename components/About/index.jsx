import React from 'react';
import { StyledAbout } from "./style"
import content from "../../lib/content.json";

const About = () => {
    return (
        <StyledAbout id="about">
            
            
            <div className="description-container">
                <h1>{content.about.title}</h1>
                <p>{content.about.description}</p>
            </div>
            <div className="avatar-container">
                <div className="avatar-wrapper">
                    <img src="images/avatar.jpg" alt="" />
                </div>
            </div>
            
        </StyledAbout>
    );
};

export default About;