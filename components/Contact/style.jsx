import styled from "styled-components"

export const StyledContact = styled.section`
    height: 100vh;
    color: black;
    display: flex;

    .description-container {
        flex-basis: 50%
    }


    .form-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0.5rem auto;
    }

    .form-control {
        padding: 1rem 1rem 1rem 1rem;
    }

    input[type=text]:focus, 
    input[type=email]:focus, 
    textarea[name=message]:focus {
        outline: 2px solid black;   
    }

    .submit-btn {   
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 1rem;
        transition: color 0.15s;
        width: 100px;
        padding: .5rem .5rem .5rem .5rem;
        box-shadow: 3px 3px 0 0 black;
        color: black;
        border-color: black;
        background-color: white;
    }

    .submit-btn:hover {
        padding: .5rem .5rem .5rem .5rem;
        box-shadow: 3px 3px 0 0 black;
        color: white;
        border-color: white;
        background-color: black;
    }   

`