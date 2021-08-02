import React from 'react';
import { StyledAbout } from "./styles"
import content from "../../lib/content.json";
import Avatar from "../../public/images/others/avatar.jpg"
import Image from "next/image"

const About = () => {
    return (
        <StyledAbout id="about">
            <h1>
                {content.about.title["1"]} <span>{content.about.title["2"]}</span>
            </h1>
            <div className="about-container">
                <div className="avatar-container">
                    <div className="avatar-wrapper">
                        <Image 
                        src={Avatar} 
                        alt="" 
                        />
                    </div>
                </div>
                <div className="description-container">
                    <p>{content.about.description}</p>
                </div>
            </div>
        </StyledAbout>
    );
};

export default About;