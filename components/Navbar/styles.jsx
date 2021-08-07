import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;
    height: 55px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: hsla(0,0%,100%,.9);
    -webkit-backdrop-filter: blur(.5rem);
    backdrop-filter: blur(.5rem);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    top: 0;
  
    .logo {
        padding: 15px 0;
        font-size: 1.5rem;
        font-weight: 900;
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
        width: .5rem;
        height: .5rem;
        aspect-ratio: 1/1;
        margin-left: .15rem;
    }
    
    @media ${props => props.theme.devices.tablet} {
        padding: 0 6rem 0 6rem;
    }
`

export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        font-weight: 700;
        padding: 18px 10px;
    }

    li a {
        color: ${props => props.theme.colors.primary};
    }

    li.active a {
        border-bottom: 1.5px ${props => props.theme.colors.link} solid;
    }

    @media (max-width: 768px) {
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
        background-color: ${props => props.theme.colors.text};
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

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
`;