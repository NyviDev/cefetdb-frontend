import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Disciplines from "./Disciplines";

import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Disciplines />
    </div>
  );
}

export default App;
