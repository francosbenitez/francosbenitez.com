import React from 'react';
import { StyledAbout } from "./styles"
import content from "../../lib/content.json";
import Avatar from "../../public/images/others/avatar.jpg"
import Image from "next/image"
import Python from "../../public/icons/tech/python.svg"
import JavaScript from "../../public/icons/tech/js.svg"
import CSS from "../../public/icons/tech/css3.svg"
import Git from "../../public/icons/tech/git.svg"

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
                        <Python />
                        <JavaScript />
                    </div> 
                    <div className="front">
                        <h3>Frontend</h3>
                        <JavaScript />
                        <CSS />
                    </div>
                    <div className="misc">
                        <h3>Miscellaneous</h3>
                        <Git />
                    </div>
                </div>
            </div>
        </StyledAbout>
    );
};

export default About;