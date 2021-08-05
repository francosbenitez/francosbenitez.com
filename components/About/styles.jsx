import styled from "styled-components"
import { Section } from "../../styles/Common"

export const StyledAbout = styled(Section)`
    p {
        margin-left: 1rem;
        font-size: 1.4em;
    }

    .about-container {
        margin-top: 2rem;
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