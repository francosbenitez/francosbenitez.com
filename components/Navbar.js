import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import { useRouter } from "next/router";
import Link from "next/link"

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background-color: #f3f3f3;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  
  .logo {
    padding: 10px 0;
    font-size: 2rem;
    font-weight: 900;
  }

    .logo a {
        color: #2079C7;
    } 
  }
`

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