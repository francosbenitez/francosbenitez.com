import styled from "styled-components";

export const StyledProjectsButton = styled.div`
    margin-bottom: 1rem;

    .button {
        //box-shadow:${props => props.theme.colors.boxShadow};
        background:${props => props.theme.colors.primary};
        background:linear-gradient(180deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
        border-radius:6px;
        border:1px solid ${props => props.theme.colors.primary};
        display:inline-block;
        cursor:pointer;
        color: ${props => props.theme.colors.background};
        font-size:120%;
        font-weight: 700;
        padding:.5rem 1rem;
        text-decoration:none;
        position: relative;
        letter-spacing: calc(.05em - .05rem);
    }

    .button:hover {
        opacity: .9;
    }

    .button:active {
        position:relative;
        top:1px;
    }

    .button:hover:before {
        box-shadow: 0 .5rem 1rem -.5rem ${props => props.theme.colors.text};
    }
    
    .button:before {
        opacity: 1;
    }

    .button:before {
        box-shadow: 0 .25rem .5rem -.25rem ${props => props.theme.colors.text};
        opacity: .5;
        transition: box-shadow .15s cubic-bezier(.445,.05,.55,.95);
        z-index: -1;
    }

    .button:after, .button:before {
        content: "";
        border-radius: .3rem;
        height: calc(100% + 2px);
        left: -1px;
        position: absolute;
        top: -1px;
        width: calc(100% + 2px);
    }

    .button:after {
        opacity: .2;
    }

    @media ${props => props.theme.devices.tablet} {
        margin-bottom: 0;
    }
`;

export const StyledContactButton = styled(StyledProjectsButton)`
    .button {
        //box-shadow: ${props => props.theme.colors.boxShadow};
        background:${props => props.theme.colors.background};
        background:linear-gradient(5deg, ${props => props.theme.colors.background} 0%, ${props => props.theme.colors.tertiary} 100%);
        color:${props => props.theme.colors.primary};
    }

    @media ${props => props.theme.devices.tablet} {
        margin-left: 1rem;
    }
`;