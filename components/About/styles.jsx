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

    .about-container:before {
        background-image: radial-gradient(#5b8efc4b 15%,transparent 0),radial-gradient(#5b8efc4b 15%,transparent 0);
        background-size: .75rem .75rem;
        background-position: 0 0,.375rem .375rem;
        -webkit-clip-path: polygon(0 25%,30% 35%,30% 55%,0 65%,0 75%,30% 65%,40% 75%,30% 200%,0 100%,90% 100%,100% 90%,100% 100%,0 100%);
        clip-path: polygon(0 25%,30% 35%,30% 55%,0 65%,0 75%,30% 65%,40% 75%,30% 200%,0 100%,90% 100%,100% 90%,100% 100%,0 100%);
        content: "";
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        z-index: -1;
    }

    .description-container {
        flex-basis: 75%;
        margin-top: 2rem;
        background-image: url("/marks.png/");
        padding-top: 40px;
        background-position: 0px 0px;
        background-repeat: no-repeat;
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