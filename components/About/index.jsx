import React from 'react';
import { StyledAbout } from "./styles"
import content from "../../lib/content.json";
import Avatar from "../../public/images/others/avatar.jpg"
import Image from "next/image"
import JavaScript from "../../public/icons/tech/javascript.svg"
import Python from "../../public/icons/tech/python.svg"
import CSS from"../../public/icons/tech/css.svg"
import Styled from "../../public/icons/tech/styled.svg"
import Git from "../../public/icons/tech/git.svg"


const About = () => {
    const techFunc = (content) => {
        return (
            content.map((tech, i) => {
                return (
                    <div key={i}>
                        {
                            (tech.name == "JavaScript") ? <JavaScript alt={tech.alt}/>
                            : (tech.name == "Python") ? <Python alt={tech.alt}/>
                            : (tech.name == "CSS") ? <CSS alt={tech.alt}/>
                            : (tech.name == "styled-components") ? <Styled alt={tech.alt} />
                            : <Git alt={tech.alt} />
                        }
                        <h4>
                            {tech.name}
                        </h4>
                    </div>
                )
            })
        )
    }

    const giveColor = (array) => {
        let newArr = []
        array.map((text) => {
                {
                    (text == "Franco Sebastián Benítez"
                    || text == "web development"
                    || text == "data science"
                    || text == "design"
                    || text == "Full Stack Developer") 
                    ? newArr.push(<span dangerouslySetInnerHTML={{__html: text}}></span>)
                    : (text == "") ? newArr.push(<div dangerouslySetInnerHTML={{__html: '<br/>'}} />)
                    : newArr.push(text)
                }
            }
        )
        return newArr
    }

    return (
        <StyledAbout id="about">
            <h1>
                {content.about.title[0]} <span>{content.about.title[1]}</span>
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
                    {giveColor(content.about.description)}
                </p>
                </div>
            </div>
            <div className="tech-stack">
                <h2>
                    <span>
                        {content.about.techStack.title[0]}
                    </span>
                    {" "}{content.about.techStack.title[1]}
                </h2>
                <div className="icons-container">
                    <div className="back">
                        <h3>{content.about.techStack.subtitles[0]}</h3>
                        {techFunc(content.about.techStack.back)}
                    </div> 
                    <div className="front">
                        <h3>{content.about.techStack.subtitles[1]}</h3>
                        {techFunc(content.about.techStack.front)}
                    </div>
                    <div className="misc">
                        <h3>{content.about.techStack.subtitles[2]}</h3>
                        {techFunc(content.about.techStack.misc)}
                    </div>
                </div>
            </div>
        </StyledAbout>
    );
};

export default About;