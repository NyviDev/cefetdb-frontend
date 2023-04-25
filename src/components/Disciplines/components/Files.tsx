import React, { useContext, useState } from "react";
import { AiFillFileText } from "react-icons/ai";

import styles from "./files.module.scss";

import { Exam } from "../../../Model/Exam";

interface FilesInterface {
  exams: Exam[];
}

const Files = ({ exams }: FilesInterface) => {
  return exams === null ? (
    <div className={styles.notFoundContainer}>
      <p className={styles.fileNotFound}>Prova Não Encontrada</p>
    </div>
  ) : (
    <ul className={styles.files}>
      {exams.map((file, i) => {
        return (
          <li className={styles.fileContainer}>
            <AiFillFileText />
            <a
              className={styles.file}
              href={`https://drive.google.com/file/d/${file.id}/view?usp=share_link`}
              target="_blank"
              rel="noreferrer"
            >
              {file.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Files;
