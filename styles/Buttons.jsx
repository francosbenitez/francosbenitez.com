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
        color:#F4F7F5;
        font-size:15px;
        font-weight: 700;
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
        box-shadow:inset 0px 1px 0px 0px #F4F7F5;
        background:linear-gradient(to bottom, #F4F7F5 5%, #d0cfcffd 100%);
        background-color:#F4F7F5;
        color:${props => props.theme.colors.primary};
        text-shadow:0px 1px 0px #F4F7F5;
    }

    .button:hover {
        background:linear-gradient(to bottom, #d0cfcffd 5%, #F4F7F5 100%);
        background-color:#d0cfcffd;
    }

    @media ${props => props.theme.devices.tablet} {
        margin-left: 1rem;
    }
`;

/*export const ThemeSwitcher = styled.button`
    display: flex;
    position: absolute;
    left: 95%;
    top: 10px;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    fill: ${props => props.theme.colors.primary};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    
    @media (max-width: 768px) {
        left: 80%;
        top: 13px;
        transform: translate(50%, 0%);
    }
`;*/