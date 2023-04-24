import { useContext, useState } from "react";
import DisciplineDao from "../Dao/DisciplineDao";
import { DisciplinesContext } from "../contexts/DisciplinesContext";

export default function useDisciplines() {
  const repo: DisciplineDao = new DisciplineDao();
  const arrayDisciplines = useContext(DisciplinesContext);

  function getDisciplinesBySemesters(semester: number) {
    repo
      .getDisciplinesBySemesters(semester)
      .then((data) => {
        // console.log(data);
        arrayDisciplines.setDisciplines(data);
        // console.log(arrayDisciplines.disciplines, "passou");
      })
      .catch((err) => console.error(err));
  }

  return {
    getDisciplinesBySemesters
  };
}
