import DisciplineDao from "../Dao/DisciplineDao";

export default function useDisciplines() {
  const repo: DisciplineDao = new DisciplineDao();

  function getDisciplinesBySemesters(semester: number) {
    repo
      .getDisciplinesBySemesters(semester)
      .then((data) => console.log(data, "ASDASD"))
      .catch((err) => console.error(err, "passou aq"));
  }

  return {
    getDisciplinesBySemesters,
  };
}
