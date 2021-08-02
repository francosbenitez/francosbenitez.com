import React from 'react';
import { StyledHero } from './styles';
import content from "../../lib/content.json";
import Typical from 'react-typical'
import { StyledMouse } from "../../styles/Animations"
import HeroImage from '../../public/images/others/cover-image.svg';
import Link from "next/link"

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-container">
                <div className="hero-description">
                    <h1>
                        {content.hero.title}<br />
                        <span> {content.hero.name}</span>
                    </h1>
                    {/*<h2>{content.hero.subtitle}</h2>*/}
                    <Typical 
                        steps=
                        {[
                        "📈 Data", 
                        2000, 
                        '✍ Design', 
                        2000,
                        "👨🏻‍💻 Development", 
                        2000
                        ]}
                        loop={Infinity}
                        wrapper="h2"
                    />
                </div>
                <div className="hero-img">
                    <HeroImage />
                </div>
            </div>
            <StyledMouse>
                <Link href="/#about" passHref>
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