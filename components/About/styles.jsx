import styled from "styled-components"
import { Section } from "../../styles/Commons"

export const StyledAbout = styled(Section)`
    p {
        margin-left: 1rem;
    }

    .about-container {
        display: flex;
        flex-direction: column;
    }

    .description-container {
        flex-basis: 75%;
        margin-top: 2rem;
    }

    .avatar-container {
        float: right;
        text-align: center;
    }

    .avatar-wrapper img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        justify-content: center;
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
    }
 `