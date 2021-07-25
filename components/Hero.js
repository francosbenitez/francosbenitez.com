import React from "react";
import styled from "styled-components";
import content from "../lib/content.json";
import Typical from 'react-typical'

const StyledHero = styled.section`
    padding-top: 8rem;
    height: 100vh;
    .hero-container {
        display: flex;
        .hero-description {
            flex-basis: 50%; 
            h1 {
                color: ${(props) => props.theme.primary};
                font-size: 5rem;
                font-weight: 900;
                text-transform: uppercase;
            }
            
            h2 {
                color: ${(props) => props.theme.secondary};
                font-size: 2.6rem;
                font-weight: 900;
                text-transform: uppercase;
                margin-top: 1rem;
            }

            h3 {
                margin-top: 1rem;
                font-weight: 700;
                font-size: 2rem;
            }
        }

        .hero-img {
            img {
                width: 200%;
            }
        }
    }

    .arrow {
        color: red;
        text-align: center;
    }

    
    
    @media screen and (max-width: 719px) {
        .hero-container {
            flex-direction: column;
            text-align: center;
            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 1.3rem;
            }

            .hero-img img {
                width: 100%;
            }
        }
    }
`;

const Hero = () => {
    return (
        <StyledHero>
            <div className="hero-container">
                <div className="hero-description">
                    <h1>{content.hero.name.en}</h1>
                    <h2>{content.hero.title.en}</h2>
                    <Typical 
                        steps=
                        {[
                        "Data 📈", 
                        2000, 
                        'Design ✍', 
                        2000,
                        "Development 👨🏻‍💻", 
                        2000
                        ]}
                        loop={Infinity}
                        wrapper="h3"
                        />
                </div>
                <div className="hero-img">
                    <img src="images/cover-image.svg" alt=""></img>
                </div>
            </div>
            <div className="arrow">ARROW</div>
        </StyledHero>
    );
};

export default Hero;