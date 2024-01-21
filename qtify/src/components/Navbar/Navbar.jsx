import React from "react";
import styles from "../Navbar/Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

import Search from "../Search/Search";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/">
        <Logo />
      </a>
      <Search placeholder="Search a album of your choice" />
      <Button>Give Feedback</Button>
    </nav>
  );
}
export default Navbar;
