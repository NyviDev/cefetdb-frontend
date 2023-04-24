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
import { Discipline } from "../Model/Discipline";
import {
  DisciplinesContext,
  DisciplinesContextInterface,
} from "../contexts/DisciplinesContext";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);

  const valueContextDisciplines: DisciplinesContextInterface = {
    disciplines,
    setDisciplines,
  };
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
            <DisciplinesContext.Provider value={valueContextDisciplines}>
              <Sidebar />
              <Home />
            </DisciplinesContext.Provider>
          </SidebarContext.Provider>
        </div>
        <Footer />
      </ModalContext.Provider>
    </>
  );
}

export default App;
