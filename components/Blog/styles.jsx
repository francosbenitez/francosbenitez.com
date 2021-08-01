import styled from "styled-components"
import spaces from "../../styles/Spaces"

export const StyledBlog = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 

    h1 {
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.secondary};
    }

    span {
        color: ${props => props.theme.colors.primary};
    }

    .see-all {
        flex: 1; 
        text-align: right; 
        white-space: nowrap;
        margin-top: 1rem;
    }

    @media ${props => props.theme.devices.tablet} {
        width: 90%;
        position: relative;
        max-width: 1152px;
        margin: 0 auto;
        min-height: calc(100vh - 6.5rem); 
        padding-top: 7.5rem;
        padding-bottom: 4.5rem;
    }
`;

