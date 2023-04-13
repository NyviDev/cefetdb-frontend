import React, {useState} from "react";
import styles from "./links.module.scss";
import useDisciplines from "../../../Hooks/useDisciplines";

const Links = () => {
  const { getDisciplinesBySemesters } = useDisciplines();

  const [activePeriod, setActivePeriod] = useState(1);

  async function handleClick(semester: number) {
    setActivePeriod(semester);
    
    getDisciplinesBySemesters(semester);
  }

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={activePeriod === 1 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(1)}>1º Período</li>
        <li className={activePeriod === 2 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(2)}>2º Período</li>
        <li className={activePeriod === 3 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(3)}>3º Período</li>
        <li className={activePeriod === 4 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(4)}>4º Período</li>
        <li className={activePeriod === 5 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(5)}>5º Período</li>
        <li className={activePeriod === 6 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(6)}>6º Período</li>
        <li className={activePeriod === 7 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(7)}>7º Período</li>
        <li className={activePeriod === 8 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(8)}>8º Período</li>
        <li className={activePeriod === 0 ? `${styles.item} ${styles.active}` : `${styles.item}`} onClick={() => handleClick(0)}>Optativas</li>
      </ul>
    </nav>
  );
};

export default Links;
