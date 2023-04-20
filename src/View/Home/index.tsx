import React, { useContext } from "react";
import styles from "./Home.module.scss";
import Disciplines from "../../components/Disciplines/Disciplines";
import Modal from "../../components/Modal/Modal";
import { SidebarContext } from "../../contexts/SidebarContext";

const Home = () => {
  const sidebar = useContext(SidebarContext);

  return (
    <main
      className={
        sidebar.sidebarIsOpen
          ? `${styles.main} ${styles.noScrool}`
          : `${styles.main}`
      }
    >
      <h1 className={styles.title}>Banco de Provas CEFET</h1>
      <Disciplines />
      <Modal />
    </main>
  );
};

export default Home;
