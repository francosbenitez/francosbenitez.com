import React from 'react';
import { StyledHero } from './style';
import content from "../../lib/content.json";
import Typical from 'react-typical'
import { StyledMouse } from "../../styles/animations"

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-container">
                <div className="hero-description">
                    <h1>{content.hero.title}</h1>
                    <h2>{content.hero.subtitle}</h2>
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
                        wrapper="h3"
                    />
                </div>
                <div className="hero-img">
                    <img src="images/cover-image-2.svg" alt=""></img>
                </div>
            </div>
            <StyledMouse>
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                    <div>
                        <span className="m_scroll_arrows unu"></span>
                        <span className="m_scroll_arrows doi"></span>
                        <span className="m_scroll_arrows trei"></span>
                    </div>
            </StyledMouse>
        </StyledHero>
    );
};

export default Hero;