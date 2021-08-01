import React from 'react';
import { StyledUl } from './styles';
import { useRouter } from "next/router";
import Link from "next/link"

const RightNavbar = ({ open }) => {
    const router = useRouter();
     return (
        <StyledUl open={open}>
        <li className={router.asPath == "/#about" ? "active" : ""}>
            <Link href="/#about">About</Link>
        </li>
        <li className={router.asPath == "/#projects" ? "active" : ""}>
            <Link href="/#projects"><a>Projects</a></Link>
        </li>
        <li className={router.asPath == "/#blog" ? "active" : ""}>
            <Link href="/#blog"><a>Blog</a></Link>
        </li>
        <li className={router.asPath == "/#contact" ? "active" : ""}>
            <Link href="/#contact"><a>Contact</a></Link>
        </li>
        <li>
            <a target="_blank" 
            href="https://docs.google.com/document/d/1NBn2pLCS70uMpsd78gWLnW3uXfdTgKzoa1HVA_yN55A/edit" 
            rel="noopener noreferrer">
                Resume
                </a>
        </li>
        </StyledUl>
  )
}

export default RightNavbar