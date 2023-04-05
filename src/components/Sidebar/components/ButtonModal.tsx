import React from "react";
import styles from "./buttonModal.module.scss";

const ButtonModal = () => {
  return (
    <div className={styles.modalWrapper}>
      <button type="button" className={styles.button}>ENVIE UMA PROVA</button>
    </div>
  );
};

export default ButtonModal;
