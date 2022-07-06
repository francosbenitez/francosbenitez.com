import React, { useState } from "react";
import { StyledBurger } from "./styles";
import RightNavbar from "./RightNavbar";

const Burger = ({ children }: { children: any }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <div className="custom-div">
        <RightNavbar open={open} />
        {children}
      </div>
    </>
  );
};

export default Burger;
