import React from "react";
import styles from "../Search/Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

function Search() {
  function handleClick(e) {
    e.preventDefault();
  }
  return (
    <form className={styles.wrapper}>
      <input
        type="text"
        required
        className={styles.search}
        placeholder="Search a album of your choice"
      />
      <button
        type="submit"
        className={styles.searchButton}
        onClick={handleClick}
      >
        <SearchIcon />
      </button>
    </form>
  );
}
export default Search;
