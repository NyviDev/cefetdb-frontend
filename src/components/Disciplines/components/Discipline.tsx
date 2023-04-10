import React from "react";
import { Collapse } from "react-collapse";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "./discipline.module.scss";
import Files from "./Files";

interface iDiscipline {
  period: string;
  disciplines: string[];
  index: number;
  toggleAccordion(index: number): void;
  accordion: number;
}

const Discipline = ({
  period,
  disciplines,
  index,
  toggleAccordion,
  accordion,
}: iDiscipline) => {
  return (
    <li className={styles.container}>
      <div className={styles.header} onClick={() => toggleAccordion(index)}>
        <h3 className={styles.title}>{period}</h3>
        <button className={styles.button}>
          {accordion === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <Collapse isOpened={accordion === index}>
        <Files fileArray={disciplines} />
      </Collapse>
    </li>
  );
};

export default Discipline;
