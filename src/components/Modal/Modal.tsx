import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./modal.module.scss";

const Modal = () => {
  const modal = useContext(ModalContext);

  return (
    <>
      {modal.modalIsOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button onClick={() => modal.setModalIsOpen(false)}>
              <AiOutlineClose className={styles.close} />
            </button>
            <h3 className={styles.title}>Envie uma prova</h3>
            <form className={styles.form}>
              <select name="courses" id="courses">
                <option value="course1">
                  Gestão do Conhecimento da Informação
                </option>
                <option value="course2">Cálculo</option>
                <option value="course3">Programação para Clientes Web</option>
              </select>
              <label htmlFor="file" className={styles.input}>
                Enviar um arquivo
                <input id="file" type="file" />
              </label>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
