import React from 'react';
import { StyledUl } from './styles';
import { useRouter } from "next/router";
import Link from "next/link"
import content from "../../lib/content.json";

const RightNavbar = ({ open }) => {
    const router = useRouter();
    return (
        <StyledUl open={open}>
        {content.nav.links.map((link, i) => (
            (link.text != "Resume") ?
            <li key={i} className={router.asPath == link.to ? "active" : ""}>
                <Link href={link.to}>{link.text}</Link>
            </li>
            : 
            <li key={i}>
                <a target="_blank" 
                href={link.to}
                rel="noopener noreferrer">
                    {link.text}
                </a>
            </li>
        ))}
        </StyledUl>
    )
}

export default RightNavbar