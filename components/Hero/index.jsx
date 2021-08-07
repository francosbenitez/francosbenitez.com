import React from 'react';
import { StyledHero } from './styles';
import content from "../../lib/content.json";
import Typical from 'react-typical'
import { StyledMouse } from "../../styles/Animations"
import HeroImage from '../../public/images/others/cover-image.svg';
import Link from "next/link"
import { StyledProjectsButton, 
    StyledContactButton } from "../../styles/Buttons"

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
            <StyledMouse>
                <Link href={content.nav.links[0].to} passHref>
                    <a>
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div>
                            <span className="m_scroll_arrows unu"></span>
                            <span className="m_scroll_arrows doi"></span>
                            <span className="m_scroll_arrows trei"></span>
                        </div>
                    </a>
                </Link>
            </StyledMouse>
        </StyledHero>
    );
};

export default Hero;