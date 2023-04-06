import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "./Home";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
