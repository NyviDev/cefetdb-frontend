import React from "react";
import { AiFillFileText } from "react-icons/ai";

import styles from "./files.module.scss";

interface iFiles {
  fileArray: string[];
}
const Files: React.FC<iFiles> = ({ fileArray }) => {
  return fileArray.length === 0 ? (
    <div className={styles.notFoundContainer}>
      <p className={styles.fileNotFound}>Prova Não Encontrada</p>
    </div>
  ) : (
    <ul className={styles.files}>
      {fileArray.map((file) => {
        return (
          <li className={styles.fileContainer}>
            <AiFillFileText />
            <a className={styles.file} href="google.com">
              {file}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Files;
