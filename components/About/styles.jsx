import styled from "styled-components"
import spaces from "../../styles/Spaces"

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
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.secondary};
    }

    span {
        color: ${props => props.theme.colors.primary};
    }

    .about-container {
        display: flex;
        flex-direction: column;
    }

    .description-container {
        flex-basis: 75%;
    }

    .avatar-container {
        float: right;
        text-align: center;
    }

    .avatar-wrapper img {
        width: 100%;
        height: auto;
        border-radius: 25%;
        justify-content: center;
        margin-bottom: 2rem;
    }

    @media ${props => props.theme.devices.tablet} {
        .about-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
 `