import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import Search from "../Search/Search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="">
        <Logo />
      </a>
      <Search />
      <Button>Give feedback</Button>
    </nav>
  );
}
export default Navbar;
