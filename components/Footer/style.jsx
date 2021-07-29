import styled from "styled-components"

export const StyledFooter = styled.footer`
    padding: 2rem 0 2rem 0;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.2);
    opacity: 70%;
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

    @media ${(props) => props.theme.devices.tablet} {
        flex-direction: row;

        .copyright {
            margin: auto;
        }

        .icons-container {
            flex-basis: 50%;
            text-align: right;
        }
    }
`