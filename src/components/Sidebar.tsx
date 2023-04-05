import React from "react";
import styles from "./sidebar.module.scss";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
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
    </aside>
  );
}

export default Sidebar;
