import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Disciplines from "./Disciplines";

import styles from "./app.module.scss";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
    <div className={styles.app}>
      <Sidebar />
      <Disciplines />
    </div>
    <Footer/>
    </>
  );
}

export default App;
