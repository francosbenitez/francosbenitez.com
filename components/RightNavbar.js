import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from "next/link"

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #f3f3f3;
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
        
        }
    }
`;

const RightNavbar = ({ open }) => {
    const router = useRouter();
     return (
        <StyledUl open={open}>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">About</Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Projects</Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Blog</Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Contact</Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">Resume</Link>
        </li>
        </StyledUl>
  )
}

export default RightNavbar