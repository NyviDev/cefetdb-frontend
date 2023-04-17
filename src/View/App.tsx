import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "./Home";
import { ModalContext, ModalContextInterface } from "../contexts/ModalContext";

import styles from "./app.module.scss";
import Footer from "../components/Footer/Footer";
import {
  SidebarContext,
  SidebarContextInterface,
} from "../contexts/SidebarContext";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const valueContextModal: ModalContextInterface = {
    modalIsOpen,
    setModalIsOpen,
  };
  const valueContextSidebar: SidebarContextInterface = {
    sidebarIsOpen,
    setSidebarIsOpen,
  };

  return (
    <>
      <ModalContext.Provider value={valueContextModal}>
        <div className={styles.app}>
          <SidebarContext.Provider value={valueContextSidebar}>
            <Sidebar />
            <Home />
          </SidebarContext.Provider>
        </div>
        <Footer />
      </ModalContext.Provider>
    </>
  );
}

export default App;
