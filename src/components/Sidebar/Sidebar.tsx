import React, { useRef, useContext } from "react";
import styles from "./sidebar.module.scss";
import SearchBar from "./components/SearchBar";
import Links from "./components/Links";
import ButtonModal from "./components/ButtonModal";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { SidebarContext } from "../../contexts/SidebarContext";

function Sidebar() {
  const sidebar = useContext(SidebarContext);
  const sidebarRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    wrapperRef.current?.classList.toggle(`${styles.wrapperSidebar}`);
    sidebarRef.current?.classList.toggle(`${styles.responsiveSidebar}`);
    sidebar.setSidebarIsOpen(!sidebar.sidebarIsOpen);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button className={styles.open} onClick={toggleSidebar}>
        <AiOutlineMenuUnfold />
      </button>
      <aside className={styles.sidebar} ref={sidebarRef}>
        <button className={styles.close} onClick={toggleSidebar}>
          <AiOutlineMenuFold />
        </button>
        <SearchBar />
        <Links />
        <ButtonModal click={toggleSidebar} />
      </aside>
    </div>
  );
}

export default Sidebar;
