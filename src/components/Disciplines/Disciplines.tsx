import React, { useContext, useEffect, useState } from "react";

import styles from "./disciplines.module.scss";
import Discipline from "./components/Discipline";
import { DisciplinesContext } from "../../contexts/DisciplinesContext";
import { SidebarContext } from "../../contexts/SidebarContext";

const Disciplines = () => {
  const arrayDisciplines = useContext(DisciplinesContext);
  const sidebar = useContext(SidebarContext);
  const [accordion, setAccordion] = useState(-1);

  function toggleAccordion(i: number) {
    if (accordion === i) {
      return setAccordion(-1);
    }

    setAccordion(i);
  }

  useEffect(() => {
    setAccordion(-1);
  }, [sidebar.sidebarIsOpen]);

  return (
    <ul className={styles.disciplines}>
      {arrayDisciplines.disciplines.map((discipline, i) => {
        return (
          <Discipline
            key={discipline.name}
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
