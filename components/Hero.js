import React from "react";
import styled from "styled-components";
import content from "../lib/content.json";

const StyledHero = styled.section`
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
    
    @media screen and (max-width: 719px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.3rem;
        }
    }
`;

const Hero = () => {
    return (
        <StyledHero>
            <h1>{content.hero.name.en}</h1>
            <h2>{content.hero.title.en}</h2>
        </StyledHero>
    );
};

export default Hero;