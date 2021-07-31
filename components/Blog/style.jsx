import styled from "styled-components"
import spaces from "../../styles/spaces"

export const StyledBlog = styled.section`
    height: 200vh;

    //height: ${spaces.sections.height};
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; /* I can't reutilize it */

    h1 {
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.primary};
    }

    .see-all {
        flex: 1; 
        text-align: right; 
        white-space: nowrap;
    }

    @media ${props => props.theme.devices.tablet} {
        height: 100vh;


        padding-left: 5rem; /* make it reproducible */
        padding-right: 5rem;

    }
`;

