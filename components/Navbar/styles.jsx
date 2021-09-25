import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    /* background-color: hsla(0,0%,100%,.9); */
    background-color: ${props => props.theme.colors.background};
    /* -webkit-backdrop-filter: blur(.5rem);
    backdrop-filter: blur(.5rem); */
    box-shadow: ${props => props.theme.colors.boxShadow};
    z-index: 1000;
    top: 0;
  
    button {
        position: fixed;
        top: 18px;
        right: 70px;
        fill: ${props => props.theme.colors.primary};
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .logo {
        padding: 15px 0;
        font-size: 1.4rem;
        font-weight: 700;
    }

    .logo a {
        color: ${props => props.theme.colors.primary};
    } 

    .logo a:hover {
        border-bottom: none;
    }

    .dot {
        display: inline-block;
        background: ${props => props.theme.colors.secondary};
        border-radius: 50%;
        width: .35rem;
        height: .35rem;
        aspect-ratio: 1/1;
        margin-left: .15rem;
    }
    
    @media ${props => props.theme.devices.tablet} {
        padding: 0 6rem 0 6rem;

        button {
            right: 60px;
        }
    }
`

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        font-weight: 700;
        padding: 18px 10px;
        text-transform: uppercase;
    }

    li a {
        color: ${props => props.theme.colors.primary};
    }

    li.active a {
        border-bottom: 1.5px ${props => props.theme.colors.primary} solid;
    }

    @media (max-width: 800px) {
        flex-flow: column nowrap;
        background-color: ${props => props.theme.colors.background};
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
    
        li {
            color: #fff;
            text-align: center;
        }
    }
`;

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    cursor: pointer;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${props => props.theme.colors.primary};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (max-width: 800px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
`;