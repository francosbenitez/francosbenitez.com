import styled from "styled-components"

export const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; 
    width: 90%;
    position: relative;
    max-width: 1152px;
    margin: 0 auto;
    min-height: calc(100vh - 6.5rem); 
    padding-top: 7.5rem;
    padding-bottom: 4.5rem;

    h1 {
        font-size: 4em;
        /*margin: 1rem 0 1rem 0;*/
        color: ${props => props.theme.colors.secondary};
        line-height: 1;
    }

    h1 span {
        color: ${props => props.theme.colors.primary};
        line-height: 1;
    }

    p {
        /*margin: 1rem 0 1rem 0;*/
        font-size: 1.4em;
    }

    .form-container {
        /*margin-top: 2rem;*/
    }

    .contact-container {
        margin: 2rem 0 2rem 0;
    }

    .icons-container {
        display: inline-block;
        margin-top: 2rem;
    }

    .icon-wrapper {
        list-style: none;
        padding-bottom: 1rem;
    }

    .icon-wrapper svg,
    .icon-wrapper span {
        vertical-align: middle;
        font-size: 1.25em;
    }

    .icon-wrapper span {
        padding-left: 2rem;
        color: ${props => props.theme.colors.link};
    }

    .icon-wrapper a:hover {
        border-bottom: none;
        fill: ${props => props.theme.colors.primary};
    }
    
    .form-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0.5rem auto;
    }

    .form-control {
        padding: 1rem 1rem 1rem 1rem;
    }

    input[type=text], 
    input[type=email], 
    textarea[name=message] {
        font-size: 1em;   
        border-radius: .3em;
        border: 1px solid ${props => props.theme.colors.primary};
    }

    input[type=text]:focus, 
    input[type=email]:focus, 
    textarea[name=message]:focus {
        border: 2px solid ${props => props.theme.colors.primary};
        outline: none;
    }

    .submit-btn {   
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        background-color: transparent;
        border: 1px solid transparent;
        font-size: 1em;
        transition: color 0.15s;
        width: 100px;
        padding: .5rem .5rem .5rem .5rem;
        box-shadow: 3px 3px 0 0 ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        border-color: ${props => props.theme.colors.primary};
        background-color: white;
    }

    .submit-btn:hover {
        color: white;
        border-color: white;
        background-color: ${props => props.theme.colors.primary};
    }   

    @media ${props => props.theme.devices.tablet} {
        .contact-container {
            display: flex;
            flex-direction: row;
        }

        .form-container {
            flex-basis: 50%;
            text-align: right;
            margin-top: 0;
        }
    }
`