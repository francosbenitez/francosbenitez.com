import React, { useState } from "react";
import RightNavbar from "./RightNavbar";
import styles from "@/components/Navbar/styles.module.css";

const Burger = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles["burger"]} onClick={() => setOpen(!open)}>
        <div style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }} />
        <div
          style={{
            transform: open ? "translateX(100%)" : "translateX(0)",
            opacity: open ? 0 : 1,
          }}
        />
        <div style={{ transform: open ? "rotate(-45deg)" : "rotate(0)" }} />
      </div>
      <div className={styles["custom-div"]}>
        <RightNavbar open={open} />
        {children}
      </div>
    </>
  );
};

export default Burger;
