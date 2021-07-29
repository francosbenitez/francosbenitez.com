import styled from "styled-components"
import spaces from "../../styles/spaces"

export const StyledContact = styled.section`
    height: ${spaces.sections.height};
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem; /* I can't reutilize it */

    h1 {
        font-size: ${spaces.sections.fontSize};
        margin: ${spaces.sections.h1};
        color: ${props => props.theme.colors.primary};
    }

    p {
        margin: ${spaces.sections.p};
    }

    /*.icon {
        margin: 2rem;
        fill: ${props => props.theme.colors.primary};

        &:hover {
            filter: brightness(10%);
            cursor: pointer;
        }
    }*/

    .form-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0.5rem auto;
    }

    .form-control {
        padding: 1rem 1rem 1rem 1rem;
    }

    input[type=text]:focus, 
    input[type=email]:focus, 
    textarea[name=message]:focus {
        outline: 2px solid ${props => props.theme.colors.primary};   
    }

    input[type=text], 
    input[type=email], 
    textarea[name=message] {
        outline: .1px solid ${props => props.theme.colors.primary};   
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
        flex-direction: row;
    }
`