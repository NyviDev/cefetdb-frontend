import React from "react";
import styles from "./Home.module.scss";
import Disciplines from "../../components/Disciplines/Disciplines";

const Home = () => {
  

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Banco de Provas CEFET</h1>
      <Disciplines />
    </main>
  );
};

export default Home;
