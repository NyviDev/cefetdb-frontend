import { useContext } from "react";
import DisciplineDao from "../Dao/DisciplineDao";
import { DisciplinesContext } from "../contexts/DisciplinesContext";
import { ExamContext } from "../contexts/ExamContext";

export default function useDisciplines() {
  const repo: DisciplineDao = new DisciplineDao();
  const arrayDisciplines = useContext(DisciplinesContext);
  const arrayExam = useContext(ExamContext);

  function getDisciplinesBySemesters(semester: number) {
    repo
      .getDisciplinesBySemesters(semester)
      .then((data) => {
        arrayDisciplines.setDisciplines(data);
      })
      .catch((err) => console.error(err));
  }

  function getFilesFromDiscipline(nameDiscipline: string) {
    arrayExam.setExam([]);
    repo
      .getFilesFromDiscipline(nameDiscipline)
      .then((data) => {
        arrayExam.setExam(data);
      })
      .catch((err) => console.log(err, "erro"));
  }

  function searchDisciplines(nameDiscipline: string) {
    repo.getAllDisciplines().then((data) => {
      const results = data.filter((item) => {
        return item && item.name && item.name.toLowerCase().includes(nameDiscipline);
      });
      console.log(results);
      arrayDisciplines.setDisciplines(results);

    });
  }

  return {
    getDisciplinesBySemesters,
    getFilesFromDiscipline,
    searchDisciplines,
  };
}
