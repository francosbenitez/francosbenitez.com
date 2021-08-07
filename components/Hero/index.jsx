import React from 'react';
import { StyledHero } from './styles';
import content from "../../lib/content.json";
import Typical from 'react-typical'
import { StyledArrow } from "../../styles/Animations"
import HeroImage from '../../public/images/others/cover-image.svg';
import Link from "next/link"
import { StyledProjectsButton, 
    StyledContactButton } from "../../styles/Buttons"
import Arrow from "../../public/icons/arrow.svg"

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-container">
                <div className="hero-description">
                    <h1>
                        {content.hero.text[0]}<br />
                        <span> {content.hero.text[1]}</span>
                    </h1>
                    <Typical 
                        steps={content.hero.typical}
                        loop={Infinity}
                        wrapper="h2"
                    />
                    <div className="buttons">
                        <StyledProjectsButton>
                            <Link href="/#projects">
                                <a className="button">
                                    See my work
                                </a>
                            </Link>
                        </StyledProjectsButton>
                        <StyledContactButton>
                            <Link href="/#contact">
                                <a className="button">
                                    Contact me
                                </a>
                            </Link>
                        </StyledContactButton>
                    </div>
                </div>
                <div className="hero-img">
                    <HeroImage
                    alt={content.hero.img.alt}
                    />
                </div>
            </div>
            <StyledArrow>
                <Link href={content.nav.links[0].to} passHref>
                    <a>
                        <Arrow className="firstArrow" />
                        <Arrow className="secondArrow" />
                        <Arrow className="thirdArrow" />
                    </a>
                </Link>
            </StyledArrow>
        </StyledHero>
    );
};

export default Hero;