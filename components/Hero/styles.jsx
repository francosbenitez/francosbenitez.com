import styled from 'styled-components';

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

    .hero-container:before {
        background-image: radial-gradient(#5b8efc4b 15%,transparent 0),radial-gradient(#5b8efc4b 15%,transparent 0);
        background-size: .75rem .75rem;
        background-position: 0 0,.375rem .375rem;
        -webkit-clip-path: polygon(100% 15%,50% 25%,45% 35%,100% 45%,100% 100%,50% 100%,0 70%,0 100%,100% 100%);
        clip-path: polygon(100% 15%,50% 25%,45% 35%,100% 45%,100% 100%,50% 100%,0 70%,0 100%,100% 100%);
        content: "";
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        z-index: -1;
    }

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
        
        .buttons {
            display: flex;
            flex-direction: row;
            float: left;
        }

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