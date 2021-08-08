import React from 'react';
import { StyledAbout } from "./styles"
import content from "../../lib/content.json";
import Avatar from "../../public/images/others/avatar.jpg"
import Image from "next/image"
{/*import JavaScript from "../../public/icons/tech/javascript.svg"
import Python from "../../public/icons/tech/python.svg"
import CSS from"../../public/icons/tech/css.svg"
import Styled from "../../public/icons/tech/styled.svg"
import Git from "../../public/icons/tech/git.svg"*/}
//import styles from './SkillsSection.module.scss';
import { StyledSkillsCard } from "../../styles/Cards"

const About = () => {
    const techFunc = (content) => {
        return (
            content.map((tech, i) => {
                return (
                    <div key={i} className="item">
                        <Image
                        src={tech.url}
                        alt={tech.name}
                        width={30}
                        height={30}
                        />
                        <h3>{tech.name}</h3>
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
            <StyledSkillsCard>
                <h1>
                    <span>
                        {content.about.techStack.title[0]}
                    </span>
                    {" "}{content.about.techStack.title[1]}
                </h1>
                <div className="cardsGrid">
                    <div className="cardWrapper">
                        <h2>{content.about.techStack.front.title}</h2>
                        <div className="card">
                            <div className="row">
                                {techFunc(content.about.techStack.front.firstRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.front.secondRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.front.thirdRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.front.fourthRow)}
                            </div>
                        </div>
                    </div>
                    <div className="cardWrapper">
                        <h2>{content.about.techStack.back.title}</h2>
                        <div className="card">
                            <div className="row">
                                {techFunc(content.about.techStack.back.firstRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.back.secondRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.back.thirdRow)}
                            </div>
                        </div>
                    </div>
                    <div className="cardWrapper">
                        <h2>{content.about.techStack.misc.title}</h2>
                        <div className="card">
                            <div className="row">
                                {techFunc(content.about.techStack.misc.firstRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.misc.secondRow)}
                            </div>
                            <div className="row">
                                {techFunc(content.about.techStack.misc.thirdRow)}
                            </div>
                        </div>
                    </div>
                </div>
            </StyledSkillsCard>
        </StyledAbout>
    );
};

export default About;