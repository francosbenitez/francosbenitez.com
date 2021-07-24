import React from "react";
import styled from "styled-components";
import content from "../lib/content.json";

const StyledHero = styled.section`
    padding-top: 5rem;
    .hero-container {
        display: flex;
        .hero-description {
            flex-basis: 50%; 
            h1 {
                color: ${(props) => props.theme.primary};
                font-size: 5rem;
                font-weight: 900;
                text-transform: uppercase;
                margin-bottom: 0;
            }
            
            h2 {
                color: ${(props) => props.theme.secondary};
                font-size: 2.6rem;
                font-weight: 900;
                text-transform: uppercase;
                margin: 0;
            }
        }

        .hero-img {
            img {
                width: 200%;
            }
        }
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
                </div>
                <div className="hero-img">
                    <img src="images/cover-image.svg" alt=""></img>
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;