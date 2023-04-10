import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "./Home";
import { ModalContext, ModalContextInterface } from "../contexts/ModalContext";

import styles from "./app.module.scss";
import Footer from "../components/Footer/Footer";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const valueContext: ModalContextInterface = {
    modalIsOpen,
    setModalIsOpen,
  };

  return (
    <>
      <ModalContext.Provider value={valueContext}>
        <div className={styles.app}>
          <Sidebar />
          <Home />
        </div>
      <Footer />
      </ModalContext.Provider>
    </>
  );
}

export default App;
