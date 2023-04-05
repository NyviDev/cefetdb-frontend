import React from "react";
import styles from "./sidebar.module.scss";
import SearchBar from "./components/SearchBar";
import Links from "./components/Links";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SearchBar />
      <Links />
    </aside>
  );
}

export default Sidebar;
