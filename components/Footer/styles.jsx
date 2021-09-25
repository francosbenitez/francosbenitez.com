import styled from "styled-components"

export const StyledFooter = styled.footer`
    padding: 2rem 2rem 2rem 2rem;
    box-shadow: ${props => props.theme.colors.boxShadow};
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 0;
    position: relative;

    p {
        font-size: 1em;
    }

    .copyright {
        text-align: center;
        opacity: 75%;
    }

    .copyright:hover {
        opacity: 100%;
    }

    .icons-container {
        margin-top: 1rem;
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
        fill: ${props => props.theme.colors.link};
        opacity: 50%;
    }

    .icon-wrapper a svg:hover {
        opacity: 100%;
    }

    @media ${props => props.theme.devices.tablet} {
        padding: 2rem 5rem 2rem 5rem;
        flex-direction: row;

        .copyright {
            margin: auto;
        }

        .icons-container {
            flex-basis: 50%;
            text-align: right;
            margin-top: 0;
        }
    }
`