import React, {useState} from "react";
import styles from "./links.module.scss";

const Links = () => {

  const [activePeriod, setActivePeriod] = useState(1);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={activePeriod === 1 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(1)}>1º Período</li>
        <li className={activePeriod === 2 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(2)}>2º Período</li>
        <li className={activePeriod === 3 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(3)}>3º Período</li>
        <li className={activePeriod === 4 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(4)}>4º Período</li>
        <li className={activePeriod === 5 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(5)}>5º Período</li>
        <li className={activePeriod === 6 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(6)}>6º Período</li>
        <li className={activePeriod === 7 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(7)}>7º Período</li>
        <li className={activePeriod === 8 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(8)}>8º Período</li>
        <li className={activePeriod === 0 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => setActivePeriod(0)}>Optativas</li>
      </ul>
    </nav>
  );
};

export default Links;