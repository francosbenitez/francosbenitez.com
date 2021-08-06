import React from 'react';
import { StyledAbout } from "./styles"
import content from "../../lib/content.json";
import Avatar from "../../public/images/others/avatar.jpg"
import Image from "next/image"

const About = () => {
    const techFunc = (content) => {
        return (
            content.map((tech, i) => {
                return (
                    <div key={i}>
                        <Image 
                            src={tech.img}
                            alt={tech.name}
                            width={40}
                            height={40}
                        />
                        <h4>
                            {tech.name}
                        </h4>
                    </div>
                )
            })
        )
    }

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
                    <p>
                        {content.about.description[0]}
                        <span>{content.about.description[1]}</span>
                        {content.about.description[2]}
                        <br />
                        <br />
                        {content.about.description[3]}
                        <br />
                        <br />
                        {content.about.description[4]}
                        <span>{content.about.description[5]}</span>
                        {content.about.description[6]}
                        <span>{content.about.description[7]}</span>
                        {content.about.description[8]}
                        <span>{content.about.description[9]}</span>
                        {content.about.description[10]}
                        <span>{content.about.description[11]}</span>
                        {content.about.description[12]}
                        <br />
                        <br />
                    </p>
                </div>
            </div>
            <div className="tech-stack">
                <h2><span>My Tech</span> Stack</h2>
                <div className="icons-container">
                    <div className="back">
                        <h3>Backend</h3>
                        {techFunc(content.about.techStack.back)}
                    </div> 
                    <div className="front">
                        <h3>Frontend</h3>
                        {techFunc(content.about.techStack.front)}
                    </div>
                    <div className="misc">
                        <h3>Miscellaneous</h3>
                        {techFunc(content.about.techStack.misc)}
                    </div>
                </div>
            </div>
        </StyledAbout>
    );
};

export default About;