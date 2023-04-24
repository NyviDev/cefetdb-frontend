import { Discipline } from "../Model/Discipline";
import DisciplineRepositorio from "../Model/DisciplineRepositorio";

export default class DisciplineDao implements DisciplineRepositorio {
  async getDisciplinesBySemesters(semester: number): Promise<Discipline[]> {
    const response = await fetch(
      `http://localhost:3500/api/semesters/${semester}/disciplines`
    );
    const data = await response.json();
    return data;
  }
  //   async getAllDisciplines() {}
}
