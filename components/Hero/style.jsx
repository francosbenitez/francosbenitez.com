import styled from 'styled-components';
import spaces from "../../styles/spaces"

export const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; /* I can't reutilize it */
    padding-top: 5rem; /* because of the navbar */
    text-align: center;

    h1 {
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.primary};
        font-weight: 900;
    }

    /*h2 {
        font-size: 1.3rem;
        margin: ${spaces.sections.h1};
        color: ${(props) => props.theme.colors.secondary};
        font-weight: 900;
    }*/

    h3 {
        font-size: 1.3rem;
        color: ${(props) => props.theme.text};
        font-weight: 700;
    }
    
    .hero-img img { /* see this */
        width: 100%;
        margin: 2rem 0 2rem 0;
    }

    @media ${props => props.theme.devices.tablet} {

        padding-left: 5rem; /* make it reproducible */
        padding-right: 5rem;

        text-align: left;
        .hero-container {
            display: flex;
            flex-direction: row;
          
            .hero-description {
                flex-basis: 50%; 
                
                h1 {
                    font-size: 4rem;
                }
                
                h2 {
                    font-size: 2rem;
                }

                h3 {
                    font-size: 2rem;
                }
            }
        }

        .hero-img img {
            width: 200%;
        }
    }
`;