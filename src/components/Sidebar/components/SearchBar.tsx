import React from "react";
import { BiSearchAlt } from "react-icons/bi";

import styles from "./searchBar.module.scss";

const SearchBar = () => {
  return (
    <form className={styles.searchBar}>
      <input className={styles.input} type="text" placeholder="Pesquisar..." />
      <button type="submit" className={styles.buttonSearch}>
          <BiSearchAlt className={styles.searchIcon}/>
      </button>
    </form>
  );
};

export default SearchBar;
