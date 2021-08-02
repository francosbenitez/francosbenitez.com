import styled from "styled-components"
import spaces from "../../styles/Spaces"

export const StyledProjects = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 
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
        line-height: 1;
    }

    span {
        color: ${props => props.theme.colors.primary};
        line-height: 1;
    }

    .see-all {
        flex: 1; 
        text-align: right; 
        white-space: nowrap;
        margin-top: 1rem;
        font-size: 1em;
        display: inline-block;
    }

    .see-all svg {
        fill: ${props => props.theme.colors.link};
        margin-right: 0.50rem;
    }

    .see-all a, 
    .see-all svg {
        vertical-align: middle;
    }
`;

export const StyledProjectsPosts = styled.div`
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



