import React from 'react';
import styled from 'styled-components';
import { useRouter } from "next/router";
import Link from "next/link"

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        font-weight: 700;
        padding: 18px 10px;
    }

    li a {
        color: #2079c7;
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
            <Link href="/"><a>About</a></Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/"><a>Projects</a></Link>
        </li>
        <li className={router.pathname == "/#blog" ? "active" : ""}>
            <Link href="/#blog"><a>Blog</a></Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/"><a>Contact</a></Link>
        </li>
        <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/"><a>Resume</a></Link>
        </li>
        </StyledUl>
  )
}

export default RightNavbar