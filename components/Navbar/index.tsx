import React from "react";
import { Nav } from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import Burger from "./Burger";

const Navbar = ({ children }: { children: any }) => {
  const router = useRouter();
  return (
    <Nav>
      <div className="nav-wrapper">
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
        <Burger>{children}</Burger>
      </div>
    </Nav>
  );
};

export default Navbar;
