import styled from "styled-components"

export const StyledFooter = styled.footer`
    text-align: center;
    padding: 2rem 0 2rem 0;
    background-color: white;
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.2);
    opacity: 70%;
    display: flex;

    .copyright {
        padding-left: 2rem;
    }

    .media-icons {
        background-color: red;
        flex-basis: 50%;
        text-align: right;
        padding-right: 2rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        .copyright {
            padding-right: 0;
        }

        .media-icons {
            text-align: center;
            padding-right: 0;
        }
    }
   
`