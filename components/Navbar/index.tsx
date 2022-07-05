import React from "react";
import { Nav } from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import Burger from "./Burger";

const Navbar = ({ children }) => {
  const router = useRouter();
  return (
    <Nav>
      <div className="logo">
        <div className={router.pathname == "/" ? "active" : ""}>
          <Link href="/" passHref>
            <a>
              FSB
              <span className="dot"></span>
            </a>
          </Link>
        </div>
      </div>
      {children}
      <Burger />
    </Nav>
  );
};

export default Navbar;
