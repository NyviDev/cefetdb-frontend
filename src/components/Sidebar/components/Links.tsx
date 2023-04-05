import React from "react";
import styles from "./links.module.scss";

const Links = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.item}>1º Período</li>
        <li className={styles.item}>2º Período</li>
        <li className={`${styles.item} ${styles.active}`}>3º Período</li>
        <li className={styles.item}>4º Período</li>
        <li className={styles.item}>5º Período</li>
        <li className={styles.item}>6º Período</li>
        <li className={styles.item}>7º Período</li>
        <li className={styles.item}>8º Período</li>
        <li className={styles.item}>Optativas</li>
      </ul>
    </nav>
  );
};

export default Links;
