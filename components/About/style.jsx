import styled from "styled-components"
import spaces from "../../styles/spaces"

export const StyledAbout = styled.section`
    //height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; /* I can't reutilize it */
    
    h1 {
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.primary};
    }

    .avatar-container {
        float: right;
        flex-basis: 50%;
        text-align: center;
    }

    .avatar-wrapper img {
        width: 100%;
        max-width: 200px;
        height: auto;
        border-radius: 50%;
        justify-content: center;
    }

    @media ${props => props.theme.devices.tablet} {
        flex-direction: row;
    }
`