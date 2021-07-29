import React from 'react';
import { Nav } from './style';
import { useRouter } from "next/router";
import Link from "next/link"
import Burger from './Burger';

const Navbar = () => {
    const router = useRouter();
  return (
    <Nav>
      <div className="logo">
        <div className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">FSB</Link>
        </div>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar