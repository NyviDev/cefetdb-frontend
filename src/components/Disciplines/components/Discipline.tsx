import React, { useContext, useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styles from "./discipline.module.scss";
import useDisciplines from "../../../Hooks/useDisciplines";
import Files from "./Files";
import { ExamContext } from "../../../contexts/ExamContext";
interface iDiscipline {
  name: string;
  index: number;
  toggleAccordion(index: number): void;
  accordion: number;
}

const Discipline = ({
  name,
  index,
  toggleAccordion,
  accordion,
}: iDiscipline) => {
  const { getFilesFromDiscipline } = useDisciplines();
  const contextExam = useContext(ExamContext);

  return (
    <li className={styles.container}>
      <div
        className={styles.header}
        onClick={() => {
          toggleAccordion(index);
          if (index !== accordion) {
            getFilesFromDiscipline(name);
          }
        }}
      >
        <h3 className={styles.title}>{name}</h3>

        {accordion === index ? (
          <button className={styles.button}>
            <AiOutlineMinus />
          </button>
        ) : (
          <button className={styles.button}>
            <AiOutlinePlus />
          </button>
        )}
      </div>
      {accordion === index && (
        <Collapse isOpened={accordion === index}>
          <Files exams={contextExam.exam} />
        </Collapse>
      )}
    </li>
  );
};

export default Discipline;
