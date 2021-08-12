import styled from "styled-components";

export const StyledProjectsButton = styled.div`
    margin: 1rem 0 1rem 0;

    .button {
        box-shadow:inset 0px 1px 0px 0px  ${props => props.theme.colors.secondary};
        background:linear-gradient(to bottom, ${props => props.theme.colors.secondary} 5%, ${props => props.theme.colors.primary} 100%);
        background-color:${props => props.theme.colors.secondary};
        border-radius:6px;
        border:1px solid ${props => props.theme.colors.primary};
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        text-shadow:0px 1px 0px ${props => props.theme.colors.primary};
    }

    .button:hover {
        background:linear-gradient(to bottom, ${props => props.theme.colors.primary} 5%, ${props => props.theme.colors.secondary} 100%);
        background-color:${props => props.theme.colors.primary};
    }

    .button:active {
        position:relative;
        top:1px;
    }
`;

export const StyledContactButton = styled(StyledProjectsButton)`
    .button {
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
        background-color:#f9f9f9;
        color:${props => props.theme.colors.primary};
        text-shadow:0px 1px 0px #ffffff;
    }

    .button:hover {
        background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
        background-color:#e9e9e9;
    }

    @media ${props => props.theme.devices.tablet} {
        margin-left: 1rem;
    }
`;