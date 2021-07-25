import styled from "styled-components"

export const StyledAbout = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: row;

    .avatar-container {
        align-items: center;
        float: right;
        flex-basis: 50%
    }

    .avatar-wrapper img {
        width: 80%;
        max-width: 344px;
        height: auto;
        border-radius: 50%;
    }

`