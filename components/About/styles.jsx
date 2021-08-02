import styled from "styled-components"

export const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 
    justify-content: center;
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
        line-height: 1;
    }

    span {
        color: ${props => props.theme.colors.primary};
        line-height: 1;
    }

    p {
        font-size: 1.5em;
    }

    .about-container {
        display: flex;
        flex-direction: column;
    }

    .description-container {
        flex-basis: 75%;
        margin-top: 3rem;
    }

    .avatar-container {
        float: right;
        margin-top: 3rem;
        text-align: center;
    }

    .avatar-wrapper img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        justify-content: center;
        margin-bottom: 2rem;
    }

    @media ${props => props.theme.devices.tablet} {
        .about-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .description-container {
            margin-top: 0;
        }

        .avatar-container {
            margin-top: 0;
        }
    }
 `