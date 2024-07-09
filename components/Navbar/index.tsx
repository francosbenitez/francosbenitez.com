import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Burger from "./Burger";
import styles from "@/components/Navbar/styles.module.css";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["nav-wrapper"]}>
        <div className={styles["logo"]}>
          <div className={router.pathname == "/" ? styles["active"] : ""}>
            <Link href="/" passHref legacyBehavior>
              <a>
                FSB
                <span className={styles["dot"]}></span>
              </a>
            </Link>
          </div>
        </div>
        <Burger>{children}</Burger>
      </div>
    </nav>
  );
};

export default Navbar;
