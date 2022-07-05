import React, { useState } from "react";
import { StyledBurger } from "./styles";
import RightNavbar from "./RightNavbar";

const Burger = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavbar open={open} />
    </>
  );
};

export default Burger;
