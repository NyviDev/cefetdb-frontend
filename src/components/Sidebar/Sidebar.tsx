import React from "react";
import styles from "./sidebar.module.scss";
import SearchBar from "./components/SearchBar";
import Links from "./components/Links";
import ButtonModal from "./components/ButtonModal";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <SearchBar />
      <Links />
      <ButtonModal />
    </aside>
  );
}

export default Sidebar;
