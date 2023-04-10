import React from "react";
import styles from "./Home.module.scss";
import Disciplines from "../../components/Disciplines/Disciplines";
import Modal from "../../components/Modal/Modal";

const Home = () => {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Banco de Provas CEFET</h1>
      <Disciplines />
      <Modal/>
    </main>
  );
};

export default Home;
