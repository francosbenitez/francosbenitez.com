import React from 'react';
import { StyledAbout } from "./style"
import content from "../../lib/content.json";

const About = () => {
    return (
        <StyledAbout id="about">
            
            <div className="avatar-container">
                <div className="avatar-wrapper">
                    <img src="images/avatar.jpg" alt="" />
                </div>
            </div>
            <div className="description-container">
                <h1>
                    {content.about.title["1"]} <span>{content.about.title["2"]}</span>
                </h1>
                <p>{content.about.description}</p>
            </div>
            
            
        </StyledAbout>
    );
};

export default About;