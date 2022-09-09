import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/components/Navbar/styles.module.css";

const RightNavbar = ({ open }: { open: boolean }) => {
  const router = useRouter();

  const links = [
    {
      text: "About",
      to: "/#about",
    },
    {
      text: "Projects",
      to: "/#projects",
    },
    {
      text: "Blog",
      to: "/#blog",
    },
    {
      text: "Contact",
      to: "/#contact",
    },
    {
      text: "Resume",
      to: "https://drive.google.com/file/d/17cqpawOOlaE3yNN_fp_sYwY_ZV8YU3Ig/view?usp=sharing",
    },
  ];

  return (
    <ul
      className={`${styles["nav-ul"]} ${
        open ? styles["transform-0"] : styles["transform-100"]
      }`}
    >
      {links.map((link, i) =>
        link.text != "Resume" ? (
          <li
            key={i}
            className={router.asPath == link.to ? styles["active"] : ""}
          >
            <Link href={link.to}>{link.text}</Link>
          </li>
        ) : (
          <li key={i}>
            <a target="_blank" href={link.to} rel="noopener noreferrer">
              {link.text}
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default RightNavbar;
