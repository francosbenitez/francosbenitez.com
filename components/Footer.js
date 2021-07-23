import React from "react";

const Footer = () => {
    return (
        <footer className="site-footer">
            <p>&copy; {new Date().getFullYear()} | Built with ☕️,{" "}
            <a 
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                class="link"
                > Next,
            </a> and{" "}
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
        </footer>
    );
};

export default Footer;