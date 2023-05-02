import { useContext, useState } from "react";
import DisciplineDao from "../Dao/DisciplineDao";
import { DisciplinesContext } from "../contexts/DisciplinesContext";
import { ExamContext } from "../contexts/ExamContext";
import { Exam } from "../Model/Exam";

export default function useDisciplines() {
  const repo: DisciplineDao = new DisciplineDao();
  const arrayDisciplines = useContext(DisciplinesContext);
  const arrayExam = useContext(ExamContext);
  const [exams, setExams] = useState<Exam[]>([]);

  function getDisciplinesBySemesters(semester: number) {
    repo
      .getDisciplinesBySemesters(semester)
      .then((data) => {
        arrayDisciplines.setDisciplines(data);
      })
      .catch((err) => console.error(err));
  }

  async function getFilesFromDiscipline(nameDiscipline: string) {
    arrayExam.setExam([]);
    await repo
      .getFilesFromDiscipline(nameDiscipline)
      .then((data) => {
        arrayExam.setExam(data);
      })
      .catch((err) => console.log(err, "erro"));
  }

  function searchDisciplines(nameDiscipline: string) {
    repo.getAllDisciplines().then((data) => {
      const results = data.filter((item) => {
        const nameWithoutAccent = item.name
          .normalize("NFD")
          .replace(/[\u0300-\u0302\u0308](?!\u00E7)|\u0303/g, "");

        return (
          item &&
          (nameWithoutAccent || item.name) &&
          (nameWithoutAccent.toLowerCase().includes(nameDiscipline) ||
            item.name.toLowerCase().includes(nameDiscipline))
        );
      });
      console.log(results);
      arrayDisciplines.setDisciplines(results);
    });
  }

  return {
    getDisciplinesBySemesters,
    getFilesFromDiscipline,
    searchDisciplines,
    exams,
  };
}
