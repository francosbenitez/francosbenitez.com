import React from 'react';
import { StyledAbout } from "./styles"
import content from "../../lib/content.json";
import Avatar from "../../public/images/others/avatar.jpg"
import Image from "next/image"
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
                        <h4>{tech.name}</h4>
                    </div>
                )
            })
        )
    }

    const giveColor = (array) => {
        let newArr = []
        array.map((text, i) => {
                <div key={i}>
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
                </div>
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
                {/*<h2>
                    <span>
                        {content.about.techStack.title[0]}
                        {" "}{content.about.techStack.title[1]}
                    </span>
                </h2>*/}
                <div className="cardsGrid">
                    <div className="cardWrapper">
                        <h3>{content.about.techStack.front.title}</h3>
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
                        <h3>{content.about.techStack.back.title}</h3>
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
                        <h3>{content.about.techStack.misc.title}</h3>
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