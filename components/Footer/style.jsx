import styled from "styled-components"

export const StyledFooter = styled.footer`
    padding: 2rem 0 2rem 0;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;

    .copyright {
        text-align: center;;
    }

    .icons-container {
        text-align: center;
    }

    .icon-wrapper {
        list-style: none;
        display: inline-flex;
        height: 25px; 
        width: 25px;
        margin: 0 .5rem 0 .5rem;
    }

    .icon-wrapper a:hover {
        border-bottom: none;
    }

    .icon-wrapper a svg {
        fill: ${props => props.theme.colors.primary};
        opacity: 50%;
    }

    .icon-wrapper a svg:hover {
        opacity: 100%;
    }

    @media ${props => props.theme.devices.tablet} {
        flex-direction: row;

        padding-left: 5rem; /* make it reproducible */
        padding-right: 5rem;

        .copyright {
            margin: auto;
        }

        .icons-container {
            flex-basis: 50%;
            text-align: right;
        }
    }
`