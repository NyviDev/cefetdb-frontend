import DisciplineDao from "../Dao/DisciplineDao";

export default function useDisciplines() {
  const repo: DisciplineDao = new DisciplineDao();

  function getDisciplinesBySemesters(semester: number) {
    repo
      .getDisciplinesBySemesters(semester)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }

  return {
    getDisciplinesBySemesters,
  };
}
