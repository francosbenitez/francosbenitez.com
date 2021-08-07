import styled from "styled-components";

export const StyledProjectsButton = styled.div`
    margin: 1rem 0 1rem 0;

    .button {
        box-shadow:inset 0px 1px 0px 0px #97c4fe;
        background:linear-gradient(to bottom, #6AADFF 5%, #2079c7 100%);
        background-color:#6AADFF;
        border-radius:6px;
        border:1px solid #337fed;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        text-shadow:0px 1px 0px #1570cd;
    }

    .button:hover {
        background:linear-gradient(to bottom, #2079c7 5%, #6AADFF 100%);
        background-color:#2079c7;
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
        color:#2079c7;
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