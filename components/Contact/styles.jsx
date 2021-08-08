import styled from "styled-components"
import { Section } from "../../styles/Commons"

export const StyledContact = styled(Section)`
    .contact-container:before {
        background-image: radial-gradient(#5b8efc4b 15%,transparent 0),radial-gradient(#5b8efc4b 15%,transparent 0);
        background-size: .75rem .75rem;
        background-position: 0 0,.375rem .375rem;
        -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
        content: "";
        height: 100%;
        left: 50%;
        position: absolute;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        z-index: -1;
    }

    .icons-container {
        display: inline-block;
        margin-top: 2rem;
    }

    .form-container {
        margin-top: 2rem;
    }

    .icon-wrapper {
        list-style: none;
        margin-bottom: 1rem;
    }

    .icon-wrapper svg,
    .icon-wrapper span {
        vertical-align: middle;
        font-size: 1.25em;
    }

    .icon-wrapper span {
        margin-left: 2rem;
        color: ${props => props.theme.colors.link};
    }

    .icon-wrapper a:hover {
        border-bottom: none;
        fill: ${props => props.theme.colors.primary};

        span {
            border-bottom: 1.5px ${props => props.theme.colors.link} dotted;
        }
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
        /*border: 2px solid ${props => props.theme.colors.primary};*/
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
            margin-left: 1rem;
        }

        .form-wrapper {
            margin: 0 auto 1rem;
        }
    }
`