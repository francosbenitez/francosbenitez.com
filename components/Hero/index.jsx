import React from 'react';
import { StyledHero } from './style';
import content from "../../lib/content.json";
import Typical from 'react-typical'

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-container">
                <div className="hero-description">
                    <h1>Hi! I'm Franco!</h1>
                    <h2>{content.hero.title}</h2>
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
            <div className="mouse_scroll">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;