import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <p>&copy; {new Date().getFullYear()} | Built with ☕️,{" "}
            <a 
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                > Next
            </a>, and{" "}
            <a
                href="https://github.com/francosbenitez/francosbenitez.com"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                >GitHub</a
            > by
            <a 
                href="https://twitter.com/francosbenitez"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                >{" "}Franco Sebastián Benítez
            </a>
            </p>
        </StyledFooter>
    );
};

export default Footer;