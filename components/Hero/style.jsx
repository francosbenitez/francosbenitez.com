import styled from 'styled-components';

export const StyledHero = styled.section`
    padding-top: 6rem;
    height: 100vh;
    .hero-container {
        display: flex;
        .hero-description {
            flex-basis: 50%; 
            h1 {
                color: ${(props) => props.theme.primary};
                font-size: 4rem;
                font-weight: 900;
            }
            
            h2 {
                color: ${(props) => props.theme.secondary};
                font-size: 2rem;
                font-weight: 900;
                margin-top: 1rem;
            }

            h3 {
              color: ${(props) => props.theme.text};
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
`;