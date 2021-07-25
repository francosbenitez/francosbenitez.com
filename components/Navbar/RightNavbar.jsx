import React from 'react';
import { StyledUl } from './style';
import { useRouter } from "next/router";
import Link from "next/link"

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