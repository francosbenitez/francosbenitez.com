import styled from "styled-components"
import spaces from "../../styles/Spaces"

export const StyledPost = styled.div`
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
