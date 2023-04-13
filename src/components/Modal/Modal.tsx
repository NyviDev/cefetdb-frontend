import React, { useContext, useRef, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./modal.module.scss";

const Modal = () => {
  const modal = useContext(ModalContext);
  const ref = useRef<HTMLInputElement>(null);
  const [haveFile, setHaveFile] = useState(false);
  const [nameFile, setNameFile] = useState("");

  useEffect(() => {
    if (ref.current) {
      setHaveFile(false);
      ref.current.addEventListener("change", () => {
        let directoryFile = ref.current?.value;
        let nameFileArray = directoryFile?.split("C:\\fakepath\\");
        if (nameFileArray) {
          setNameFile(nameFileArray[1]);
        }
        setHaveFile(true);
      });
    }
  }, [modal.modalIsOpen]);

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
              <div className={styles.formWrapper}>
                <select name="courses" id="courses">
                  <option value="course1">
                    Gestão do Conhecimento da Informação
                  </option>
                  <option value="course2">Cálculo</option>
                  <option value="course3">Programação para Clientes Web</option>
                </select>
                <label htmlFor="file" className={styles.input}>
                  Selecionar um arquivo
                  <input ref={ref} id="file" type="file" />
                </label>
              </div>
              {haveFile ? (
                <p className={styles.fileFound}>{nameFile}</p>
              ) : (
                <p className={styles.notFound}>Nenhum Arquivo Encontrado</p>
              )}
              <button className={styles.send}>Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
