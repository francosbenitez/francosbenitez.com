import styled from "styled-components"

export const StyledBlog = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 

    h1 {
        font-size: 4em;
        margin: 1rem 0 1rem 0;
        color: ${props => props.theme.colors.secondary};
        line-height: 1;
    }

    h1 span {
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

export const StyledPost = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 6rem auto 9rem;
    min-height: calc(100vh - 6.5rem); 

    h1 {
        font-size: 3em;
        margin: 1rem 0 1rem 0;
        color: ${props => props.theme.colors.text};
        font-weight: 900;
        line-height: 1;
    }

    h2 {
        font-size: 1em;
        margin: 1rem 0 1rem 0;
        color: ${(props) => props.theme.colors.text};
        font-weight: 500;
    }
  
    p {
        margin: 1rem 0 1rem 0;
    }

    .back-and-go {
        display: inline-block;
        width: 100%;
    }

    .go-to-all {
        float: right;
    }

    .back-to-home {
        float: left;
    }
`


