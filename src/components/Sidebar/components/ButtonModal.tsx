import React, { useContext } from "react";
import styles from "./buttonModal.module.scss";
import { ModalContext } from "../../../contexts/ModalContext";

const ButtonModal = () => {
  const modal = useContext(ModalContext);

  return (
    <div className={styles.modalWrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => modal.setModalIsOpen(true)}
      >
        ENVIE UMA PROVA
      </button>
    </div>
  );
};

export default ButtonModal;
