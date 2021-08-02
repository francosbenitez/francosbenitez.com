import styled from 'styled-components';
import spaces from "../../styles/Spaces"

export const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 
    width: 90%;
    position: relative;
    max-width: 1152px;
    margin: 0 auto;
    min-height: calc(100vh - 6.5rem); 
    padding-top: 7.5rem;
    padding-bottom: 4.5rem;

    h1 {
        font-size: 4em;
        margin: 1rem 0 1rem 0;
        color: ${props => props.theme.colors.secondary};
        font-weight: 700;
        line-height: 1;
    }

    span {
        color: ${props => props.theme.colors.primary};
        line-height: 1;
    }

    h2 {
        font-size: 2em;
        color: ${(props) => props.theme.text};
        font-weight: 500;
    }
    
    .hero-img svg { 
        width: 100%;
        margin: 2rem 0 2rem 0;
    }

    @media ${props => props.theme.devices.tablet} {
        text-align: left;

        .hero-container {
            display: flex;
            flex-direction: row;
        }
        
        .hero-description {
            flex-basis: 50%; 
        }    

        .hero-img svg {
            width: 150%;
        }
    }
`;