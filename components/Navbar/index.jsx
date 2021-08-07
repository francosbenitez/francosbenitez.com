import React from 'react';
import { Nav } from './styles';
import { useRouter } from "next/router";
import Link from "next/link"
import Burger from './Burger';
import content from "../../lib/content.json";

const Navbar = () => {
    const router = useRouter();
    return (
      <Nav>
        <div className="logo">
          <div className={router.pathname == "/" ? "active" : ""}>
              <Link href="/" passHref>
                <a>
                  {content.nav.logo}
                  <span className="dot"></span>
                </a>
              </Link>
          </div>
        </div>
        <Burger />
      </Nav>
    )
}

export default Navbar