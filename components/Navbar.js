import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

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
    padding: 15px 0;
    color: #2079C7;
    font-weight: 900;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        FSB
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar