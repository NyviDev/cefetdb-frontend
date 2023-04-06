import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "./Home";

import styles from "./app.module.scss";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <>
    <div className={styles.app}>
      <Sidebar />
      <Home />
    </div>
    <Footer/>
    </>
  );
}

export default App;
