import React, { useContext } from "react";
import styles from "./buttonModal.module.scss";
import { ModalContext } from "../../../contexts/ModalContext";

interface ButtonModalInterface {
  click: () => void;
}

const ButtonModal = ({ click }: ButtonModalInterface) => {
  const modal = useContext(ModalContext);

  return (
    <div className={styles.modalWrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          modal.setModalIsOpen(true);
          click();
        }}
      >
        ENVIE UMA PROVA
      </button>
    </div>
  );
};

export default ButtonModal;
