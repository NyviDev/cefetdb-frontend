import React, {useEffect, useState} from "react";
import styles from "./links.module.scss";
import useDisciplines from "../../../Hooks/useDisciplines";

const Links = () => {
  const { getDisciplinesBySemesters } = useDisciplines();
  const [activePeriod, setActivePeriod] = useState(1);
  
    const active = `${styles.item} ${styles.active}`;
    const inactive = `${styles.item}`;

  async function handleClick(semester: number) {
    getDisciplinesBySemesters(semester);
  }

  useEffect(() => {
    getDisciplinesBySemesters(activePeriod);
    console.log(activePeriod);
  }, [window.onload])
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={activePeriod === 1 ? active : inactive} 
        onClick={() => {setActivePeriod(1); handleClick(1)}}>
          1º Período
          </li>
        <li className={activePeriod === 2 ? active : inactive} 
        onClick={() => {setActivePeriod(2); handleClick(2)}}>
          2º Período
          </li>
        <li className={activePeriod === 3 ? active : inactive} 
        onClick={() => {setActivePeriod(3); handleClick(3)}}>
          3º Período
          </li>
        <li className={activePeriod === 4 ? active : inactive} 
        onClick={() => {setActivePeriod(4); handleClick(4)}}>
          4º Período
          </li>
        <li className={activePeriod === 5 ? active : inactive} 
        onClick={() => {setActivePeriod(5); handleClick(5)}}>
          5º Período
          </li>
        <li className={activePeriod === 6 ? active : inactive} 
        onClick={() => {setActivePeriod(6); handleClick(6)}}>
          6º Período
          </li>
        <li className={activePeriod === 7 ? active : inactive} 
        onClick={() => {setActivePeriod(7); handleClick(7)}}>
          7º Período
          </li>
        <li className={activePeriod === 8 ? active : inactive} 
        onClick={() => {setActivePeriod(8); handleClick(8)}}>
          8º Período
          </li>
        <li className={activePeriod === 0 ? active : inactive} 
        onClick={() => {setActivePeriod(0); handleClick(0)}}>
          Optativas
          </li>
      </ul>
    </nav>
  );
};

export default Links;
