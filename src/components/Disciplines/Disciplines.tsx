import React, { useContext, useState } from "react";

import styles from "./disciplines.module.scss";
import Discipline from "./components/Discipline";
import { DisciplinesContext } from "../../contexts/DisciplinesContext";

const Disciplines = () => {
  const arrayDisciplines = useContext(DisciplinesContext);
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(i: number) {
    if (accordion === i) {
      return setAccordion(-1);
    }
    setAccordion(i);
  }

  return (
    <ul className={styles.disciplines}>
      {arrayDisciplines.disciplines.map((discipline, i) => {
        return (
          <Discipline
            name={discipline.name}
            index={i}
            toggleAccordion={toggleAccordion}
            accordion={accordion}
          />
        );
      })}
    </ul>
  );
};

export default Disciplines;
