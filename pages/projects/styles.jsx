import styled from "styled-components"
import spaces from "../../styles/Spaces"

export const StyledProjects = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 6rem auto 9rem;

    h1 {
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.primary};
        font-weight: 900;
    }

    h2 {
        font-size: 1.3rem;
        margin: ${spaces.sections.h1};
        color: ${(props) => props.theme.colors.secondary};
        font-weight: 500;
    }
  
    p {
        margin: ${spaces.sections.p};
    }
`

export const StyledProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    border: 1px solid blue;
    
    .tools {
        width: 100%;
        border-bottom: 1px solid blue;
        text-align: center;
    }

    .link {
        text-align: center;
        width: 100%;
    }

    @media ${props => props.theme.devices.tablet} {
        flex-direction: row;

        .tools {
            border-bottom: none;
            border-right: 1px solid blue;
        }
    }
`


